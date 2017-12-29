const path = require('path');
const electron = require('electron');

const isProd = process.env.NODE_ENV === 'production';
const BrowserWindow = electron.BrowserWindow;
const app = electron.app;
let mainWindow = null;


function createWindow() {
  const windowOptions = {
    width: 1200,
    minWidth: 680,
    height: 600,
    title: app.getName(),
  };

  mainWindow = new BrowserWindow(windowOptions);
  mainWindow.loadURL(path.join('file://', __dirname, '/app.html'));

  if (!isProd) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}


app.on('ready', () => {
  createWindow();
});

app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit()
//   }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});