import React, { useEffect, useState } from 'react';
import { socket } from '../../socket';

export const OnlineDot = ({ userId }) => {
    const [isOnline, setIsOnline] = useState(false);
    console.log(isOnline, userId)

    useEffect(() => {
        // Émettre un événement pour vérifier le statut de l'utilisateur
        socket.emit('getUserStatus', userId);

        // Gérer la réponse de l'état de l'utilisateur
        const handleStatus = (data) => {
            if (data.userId === userId) {
                setIsOnline(data.status === 'online');
            }
        };

        // Écouter les mises à jour du statut de l'utilisateur
        socket.on('userStatus', handleStatus);

        // Nettoyer les écouteurs lors de la sortie du composant
        return () => socket.off('userStatus', handleStatus);
    }, [userId]);

    // Afficher un point vert si l'utilisateur est en ligne, sinon rien
    return isOnline ? (
        <span
           // className={"bg-primary"}

            style={{
                height: '9px',
                width: '9px',
                backgroundColor: 'green',
                borderRadius: '50%',
                display: 'inline-block',
            }}
        ></span>
    ) : null;
};
