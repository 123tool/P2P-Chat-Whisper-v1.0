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
    console.clear();
    console.log(`
    \x1b[31m
    ██╗      █████╗ ███╗   ██╗    ██╗    ██╗██╗  ██╗██╗███████╗██████╗ ███████╗██████╗ 
    ██║     ██╔══██╗████╗  ██║    ██║    ██║██║  ██║██║██╔════╝██╔══██╗██╔════╝██╔══██╗
    ██║     ███████║██╔██╗ ██║    ██║ █╗ ██║███████║██║███████╗██████╔╝█████╗  ██████╔╝
    ██║     ██╔══██║██║╚██╗██║    ██║███╗██║██╔══██║██║╚════██║██╔═══╝ ██╔══╝  ██╔══██╗
    ███████╗██║  ██║██║ ╚████║    ╚███╔███╔╝██║  ██║██║███████║██║     ███████╗██║  ██║
    ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝     ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝╚══════╝╚═╝     ╚══════╝╚═╝  ╚═╝
    \x1b[0m
    \x1b[41m\x1b[37m  STATUS: SYSTEM ACTIVE  \x1b[0m \x1b[32m[!] Zero-Logging Enabled\x1b[0m
    
    \x1b[1m[*] PROJECT NAME :\x1b[0m P2P CHAT WHISPER v1.0
    \x1b[1m[*] AUTHOR       :\x1b[0m 123Tool (SPY-E)
    \x1b[1m[*] LOCAL LINK   :\x1b[0m \x1b[36mhttp://${IP_ADDR}:${PORT}\x1b[0m
    \x1b[1m[*] NETWORK      :\x1b[0m WiFi Local (Peer-to-Peer)
    
    \x1b[33m[!] Pastikan teman kamu terhubung ke WiFi yang sama.\x1b[0m
    \x1b[90m------------------------------------------------------------\x1b[0m
    `);
});
