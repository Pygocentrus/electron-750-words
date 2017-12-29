const url = require('url');
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

  // Use dev server or static built assets
  const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '../dist/index.html'),
    protocol: 'file:',
    slashes: true
  });
  mainWindow.loadURL(startUrl);

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