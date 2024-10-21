import { io } from 'socket.io-client';

// Assurez-vous d'utiliser l'URL de votre serveur
const socket = io(process.env.REACT_APP_SOCKET_URL, {
    auth: {
        token: localStorage.getItem('token'), // ou tout autre mécanisme d'authentification
    },

    transports: ['websocket'], // Utiliser uniquement le transport WebSocket
});

export { socket };
