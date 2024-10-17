// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain, shell, protocol } = require('electron')
const path = require('path')

const CONFIG_FILE_PATH = './config.json'

// Include fs module
const fs = require('fs')

let doConfigExists = false
let config = null

if(fs.existsSync(CONFIG_FILE_PATH)) {
  doConfigExists = true

  config = JSON.parse(
      fs.readFileSync(CONFIG_FILE_PATH, { encoding: 'utf8', flag: 'r' })
  )
}

// Calling the readFileSync() method
// to read 'input.txt' file


console.log('config: ', {doConfigExists, config})

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      // contextIsolation: false,
      preload: path.join(__dirname, 'src/preload.cjs'),
      webviewTag:true
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile( path.join(__dirname, 'public/index.html') )
    .then(() => { mainWindow.webContents.send('sendConfig', {doConfigExists, config}); })
    .then(() => {
      mainWindow.webContents.setWindowOpenHandler(({ url }) => {
        // config.fileProtocol is my custom file protocol
        console.log('Opening url: ', url)

        if (url.startsWith('file://')) {
          console.log('Is file url: ', url)

          return { action: 'allow' };
        }

        // if(url.startsWith('custom://')) {
        //   const urlData = new URL(url);

        //   console.log('Is custom url: ', url, urlData)

        //   return { action: 'deny' };
        // }

        // open url in a browser and prevent default
        shell.openExternal(url);
        return { action: 'deny' };
      });
    })
    .then(() => { mainWindow.removeMenu(); })
    .then(() => { mainWindow.show(); });

  mainWindow.setIcon(path.join(__dirname, 'logo.jpg'));

  // Open the DevTools.
  mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  // protocol.handle('custom', ({ url }) => {
  //   // console.log('custom request: ', request)
  //   const urlData = new URL(url)

  //   console.log('custom url: ', urlData)

  // })

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// ipcMain.handle('login', async (event, data) => {
//   console.log('Writing login data: ', {CONFIG_FILE_PATH, data});

//   fs.writeFileSync(CONFIG_FILE_PATH, JSON.stringify(data, null, "\t"))

//   return {
//     success: true,
//     message: 'Login Data Saved Successfull',
//   };
// });
