import React, { useEffect, useState } from 'react';
import { socket } from '../socket';

export const OnlineStatus = ({ userId }) => {
    const [status, setStatus] = useState('offline');
    const [lastSeen, setLastSeen] = useState(null);

    const formatLastSeen = (timestamp) => {
        if (!timestamp) return '';

        const diff = Date.now() - timestamp;
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (minutes < 1) return 'à l\'instant';
        if (minutes < 60) return `il y a ${minutes} min`;
        if (hours < 24) return `il y a ${hours}h`;
        return `il y a ${days}j`;
    };

    useEffect(() => {
        socket.emit('getUserStatus', userId);

        const handleStatus = (data) => {
            if (data.userId === userId) {
                setStatus(data.status);
                setLastSeen(data.lastSeen);
            }
        };

        socket.on('userStatus', handleStatus);
        return () => socket.off('userStatus', handleStatus);
    }, [userId]);

    return (
        <div className="online-status">
            {status === 'online' && (
                <span className="status-online">En ligne</span>
            )}
            {status === 'away' && (
                <span className="status-away">Absent</span>
            )}
            {status === 'offline' && (
                <span className="status-offline">
          Vu {formatLastSeen(lastSeen)}
        </span>
            )}
        </div>
    );
};
