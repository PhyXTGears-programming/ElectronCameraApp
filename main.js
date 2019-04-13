const { app, BrowserWindow } = require('electron')
const isReachable = require('is-reachable');

function createWindow () {
    // Create the browser window.
    let win = new BrowserWindow({width: 1220, height: 840, x: 0, y: 0, frame: false})
  
    // and load the index.html of the app.
    win.loadFile('index.html')

    let ipc = require("electron").ipcMain;
    ipc.on("win.close", (e) => {
        win.close();
    });
}
  
app.on('ready', createWindow)