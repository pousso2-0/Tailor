import React, { useEffect, useState } from 'react';
import { socket } from '../socket';

export const usePresence = () => {
    const [currentStatus, setCurrentStatus] = useState('online');

    useEffect(() => {
        // Fonction pour mettre à jour le statut
        const updatePresence = (status) => {
            if (status !== currentStatus) {
                console.log(`Updating presence status to: ${status}`);
                socket.emit('updatePresence', { status });
                setCurrentStatus(status);
            }
        };

        // Gestion de la visibilité de la page
        const handleVisibilityChange = () => {
            const isVisible = document.visibilityState === 'visible';
            console.log(`Page visibility changed: ${isVisible ? 'visible' : 'hidden'}`);
            updatePresence(isVisible ? 'online' : 'away');
        };

        // Gestion de la fermeture de la page/onglet
        const handleBeforeUnload = () => {
            console.log('Page is about to be closed');
            updatePresence('offline');
        };

        // Gestion de la mise en veille de l'appareil
       let activityTimeout;
        const handleActivity = () => {
            console.log('User activity detected, setting status to online');
            clearTimeout(activityTimeout);
            updatePresence('online');

            activityTimeout = setTimeout(() => {
                console.log('No user activity detected for 1 minute, setting status to away');
                updatePresence('away');
            }, 60000); // Considéré comme inactif après 1 minute sans activité
        };

        // Ajout des écouteurs d'événements
        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('beforeunload', handleBeforeUnload);

        // Événements d'activité
        ['mousedown', 'mousemove', 'keypress', 'touchstart', 'scroll'].forEach(event => {
            document.addEventListener(event, handleActivity);
        });

        // Initialisation du statut
        updatePresence('online');


        // Nettoyage
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            window.removeEventListener('beforeunload', handleBeforeUnload);

            ['mousedown', 'mousemove', 'keypress', 'touchstart', 'scroll'].forEach(event => {
                document.removeEventListener(event, handleActivity);
            });

            clearTimeout(activityTimeout);
        };
    }, [currentStatus]);
};
