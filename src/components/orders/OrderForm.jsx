import React, { useState } from 'react';
import { orderService } from '../../services/OrderService';

const OrderForm = ({ article, storeId, vendorId, onOrderComplete, userType }) => {
    const [quantity, setQuantity] = useState(1);
    const [paymentType, setPaymentType] = useState('CASH_ON_DELIVERY');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const totalAmount = article.price * quantity;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const orderData = {
                articleId: article.id,
                storeId: storeId,
                vendorId: vendorId,
                quantity: quantity,
                paymentType: paymentType
            };

            const response = await orderService.createOrder(orderData);

            // La commande est enregistrée sans paiement si le bouton flottant n'est pas utilisé
            onOrderComplete?.(response);
        } catch (err) {
            setError(err.message || 'Une erreur est survenue lors de la commande');
        } finally {
            setIsLoading(false);
        }
    };

    const handlePayment = async () => {
        setIsLoading(true);
        setError('');

        try {
            const orderData = {
                articleId: article.id,
                storeId: storeId,
                vendorId: vendorId,
                quantity: quantity,
                paymentType: paymentType
            };

            const response = await orderService.createOrder(orderData);

            // Traiter le paiement uniquement lorsque le bouton flottant est utilisé
            if (paymentType !== 'CASH_ON_DELIVERY') {
                await orderService.processPayment({ orderId: response.id });
            }

            onOrderComplete?.(response);
        } catch (err) {
            setError(err.message || 'Une erreur est survenue lors du paiement');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-full"> {/* Modification ici */}
            <h2 className="text-2xl font-bold mb-6">Commander l'article</h2>


            {/* Article Info */}
            <div className="mb-6 flex justify-content-between">
                <div className="flex items-center gap-4 mb-4">
                    <img
                        src={article.image || "/api/placeholder/100/100"}
                        alt={article.name}
                        className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                        <h3 className="font-semibold">{article.name}</h3>
                        <p className="text-gray-600">{article.price}Cfa par unité</p>
                        <p className="text-sm text-gray-500">
                            Stock disponible: {article.stockCount}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-4 mb-4">
                    <button
                        className="bottom-8 right-8 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full shadow-lg"
                        onClick={handlePayment}
                        disabled={isLoading}
                    >
                        Payer maintenant
                    </button>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="flex-grow space-y-6">
                {/* Quantity Selection */}
                <div>
                    <label className="block text-sm font-medium mb-2">
                        Quantité
                    </label>
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => setQuantity(q => Math.max(1, q - 1))}
                            className="px-3 py-1 border rounded-lg hover:bg-gray-100"
                            disabled={quantity <= 1}
                        >
                            -
                        </button>
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(Math.min(article.stockCount, Math.max(1, parseInt(e.target.value) || 1)))}
                            className="w-20 text-center border rounded-lg py-1"
                            min="1"
                            max={article.stockCount}
                        />
                        <button
                            type="button"
                            onClick={() => setQuantity(q => Math.min(article.stockCount, q + 1))}
                            className="px-3 py-1 border rounded-lg hover:bg-gray-100"
                            disabled={quantity >= article.stockCount}
                        >
                            +
                        </button>
                    </div>
                </div>

                {/* Payment Type Selection */}
                <div>
                    <label className="block text-sm font-medium mb-2">
                        Mode de paiement
                    </label>
                    <select
                        value={paymentType}
                        onChange={(e) => setPaymentType(e.target.value)}
                        className="w-full border rounded-lg p-2"
                    >
                        <option value="CASH_ON_DELIVERY">Paiement à la livraison</option>
                        <option value="CREDIT_CARD">Carte bancaire</option>
                    </select>
                </div>

                {/* Order Summary */}
                <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                        <span>Sous-total:</span>
                        <span>{article.price}Cfa × {quantity}</span>
                    </div>
                    <div className="flex justify-between font-bold">
                        <span>Total:</span>
                        <span>{totalAmount}Cfa</span>
                    </div>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                        {error}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isLoading || quantity > article.stockCount}
                    className={`w-full py-2 px-4 rounded-lg text-white font-medium
                    ${isLoading ? 'bg-gray-400' : 'bg-primary'}
                `}
                >
                    {isLoading ? (
                        <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Traitement...
                    </span>
                    ) : (
                        'Commander maintenant'
                    )}
                </button>
            </form>
        </div>
    );

};

export default OrderForm;
