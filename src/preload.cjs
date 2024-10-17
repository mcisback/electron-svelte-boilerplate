// preload.js

// Import the necessary Electron modules
const { contextBridge, ipcRenderer, Notification } = require('electron');

// Exposed protected methods in the render process
contextBridge.exposeInMainWorld(
    // Allowed 'ipcRenderer' methods
    'bridge', {
        // From main to render
        sendConfig: (message) => {
            ipcRenderer.on('sendConfig', message);
        },
        showNotification: async ({ title = 'Svelte App', body }) => {
            const notification = new Notification({ title, body })

            notification.show()
        }
    }
);
