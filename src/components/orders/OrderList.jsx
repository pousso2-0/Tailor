import React, { useEffect, useState } from 'react';
import { orderService } from '../../services/OrderService';
import { useUser } from "../../context/UserContext";
import { Check, Ban, CreditCard, Loader2} from "lucide-react";
import {ConfirmationModal, NotificationModal} from "../ui/ModalAlert";

const OrderList = () => {
    const { currentUser } = useUser();
    const userType = currentUser?.type;
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const [confirmModal, setConfirmModal] = useState({
        isOpen: false,
        title: '',
        message: '',
        onConfirm: () => {},
        type: 'info'
    });

    const [notificationModal, setNotificationModal] = useState({
        isOpen: false,
        title: '',
        message: '',
        type: 'success'
    });

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await orderService.getOrders();
            setOrders(response.data);
        } catch (err) {
            showNotification('Erreur', 'Erreur lors de la récupération des commandes', 'error');
        } finally {
            setLoading(false);
        }
    };

    const showNotification = (title, message, type = 'success') => {
        setNotificationModal({
            isOpen: true,
            title,
            message,
            type
        });
    };

    const showConfirmation = (title, message, onConfirm, type = 'info') => {
        setConfirmModal({
            isOpen: true,
            title,
            message,
            onConfirm,
            type
        });
    };

    const handleCompleteOrder = async (orderId) => {
        showConfirmation(
            'Confirmer la finalisation',
            'Êtes-vous sûr de vouloir finaliser cette commande ?',
            async () => {
                try {
                    await orderService.markOrderAsCompleted(orderId);
                    setOrders(orders.map(order => (
                        order.id === orderId ? { ...order, status: 'COMPLETED' } : order
                    )));
                    showNotification('Succès', 'La commande a été finalisée avec succès');
                } catch (err) {
                    showNotification('Erreur', 'Erreur lors de la finalisation de la commande', 'error');
                }
            }
        );
    };

    const handleCancelOrder = async (orderId) => {
        const orderToCancel = orders.find(order => order.id === orderId);

        if (orderToCancel.status === 'SUCCESS') {
            showNotification(
                'Action impossible',
                'Commande déjà effectuée et livrée, impossible de l\'annuler.',
                'error'
            );
            return;
        }

        showConfirmation(
            'Confirmer l\'annulation',
            'Êtes-vous sûr de vouloir annuler cette commande ?',
            async () => {
                try {
                    await orderService.updateOrderStatus(orderId, { status: 'CANCELLED' });
                    setOrders(orders.filter(order => order.id !== orderId));
                    showNotification('Succès', 'La commande a été annulée avec succès');
                } catch (err) {
                    showNotification('Erreur', 'Erreur lors de l\'annulation de la commande', 'error');
                }
            },
            'destructive'
        );
    };

    const handleOpenPaymentModal = (orderId) => {
        showConfirmation(
            'Confirmer le paiement',
            'Voulez-vous procéder au paiement de cette commande ?',
            async () => {
                try {
                    await orderService.processPayment({ orderId });
                    showNotification('Succès', 'Paiement effectué avec succès');
                } catch (err) {
                    showNotification('Erreur', 'Erreur lors du paiement de la commande', 'error');
                }
            }
        );
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'COMPLETED':
                return 'bg-green-100 text-green-800';
            case 'CANCELLED':
                return 'bg-red-100 text-red-800';
            case 'SUCCESS':
                return 'bg-blue-100 text-blue-800';
            default:
                return 'bg-yellow-100 text-yellow-800';
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
                <span className="ml-2 text-gray-600">Chargement des commandes...</span>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Liste des Commandes</h2>

            {orders.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <p className="text-gray-600">Aucune commande trouvée.</p>
                </div>
            ) : (
                <div className="overflow-x-auto rounded-lg shadow">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Montant</th>
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {orders.map(order => (
                            <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    #{order.id}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                    {order.totalAmount.toLocaleString()} CFA
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                            {order.status}
                                        </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                                    {userType === 'VENDEUR' && order.status !== 'COMPLETED' && (
                                        <button
                                            onClick={() => handleCompleteOrder(order.id)}
                                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                                        >
                                            <Check className="w-4 h-4 mr-1" />
                                            Finaliser
                                        </button>
                                    )}
                                    {userType === 'TAILLEUR' && order.status !== 'COMPLETED' && (
                                        <>
                                            <button
                                                onClick={() => handleOpenPaymentModal(order.id)}
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                                            >
                                                <CreditCard className="w-4 h-4 mr-1" />
                                                Payer
                                            </button>
                                            <button
                                                onClick={() => handleCancelOrder(order.id)}
                                                className={`inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors ${order.status === 'SUCCESS' ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                disabled={order.status === 'SUCCESS'}
                                            >
                                                <Ban className="w-4 h-4 mr-1" />
                                                Annuler
                                            </button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
            <ConfirmationModal
                isOpen={confirmModal.isOpen}
                onClose={() => setConfirmModal(prev => ({ ...prev, isOpen: false }))}
                title={confirmModal.title}
                message={confirmModal.message}
                onConfirm={confirmModal.onConfirm}
                type={confirmModal.type}
            />

            <NotificationModal
                isOpen={notificationModal.isOpen}
                onClose={() => setNotificationModal(prev => ({ ...prev, isOpen: false }))}
                title={notificationModal.title}
                message={notificationModal.message}
                type={notificationModal.type}
            />
        </div>
    );
};

export default OrderList;