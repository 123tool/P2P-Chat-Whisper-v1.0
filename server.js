const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const os = require('os');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    maxHttpBufferSize: 1e8 // Limit file 100MB
});

app.use(express.static('public'));

// Mendapatkan IP Lokal otomatis
function getLocalIp() {
    const interfaces = os.networkInterfaces();
    for (let devName in interfaces) {
        let iface = interfaces[devName];
        for (let i = 0; i < iface.length; i++) {
            let {family, address, internal} = iface[i];
            if (family === 'IPv4' && !internal) return address;
        }
    }
    return 'localhost';
}

io.on('connection', (socket) => {
    console.log('User joined the shadow...');

    socket.on('chat message', (data) => {
        // Broadcast ke semua (termasuk pengirim)
        io.emit('chat message', data);
    });

    socket.on('disconnect', () => {
        console.log('User vanished.');
    });
});

const PORT = 8080;
const IP_ADDR = getLocalIp();

server.listen(PORT, '0.0.0.0', () => {
    console.log(`
    ██╗      █████╗ ███╗   ██╗     ██╗    ██╗██╗  ██╗██╗███████╗██████╗ ███████╗██████╗ 
    ██║     ██╔══██╗████╗  ██║     ██║    ██║██║  ██║██║██╔════╝██╔══██╗██╔════╝██╔══██╗
    ██║     ███████║██╔██╗ ██║     ██║ █╗ ██║███████║██║███████╗██████╔╝█████╗  ██████╔╝
    ██║     ██╔══██║██║╚██╗██║     ██║███╗██║██╔══██║██║╚════██║██╔═══╝ ██╔══╝  ██╔══██╗
    ███████╗██║  ██║██║ ╚████║     ╚███╔███╔╝██║  ██║██║███████║██║     ███████╗██║  ██║
    ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝      ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝╚══════╝╚═╝     ╚══════╝╚═╝  ╚═╝
    
    [*] Mode: Sangat Privat (Local Network Only)
    [*] Link Akses: http://${IP_ADDR}:${PORT}
    [*] Status: Listening...
    `);
});
