const { app, BrowserWindow } = require('electron')
const isReachable = require('is-reachable');

function createWindow () {
    // Create the browser window.
    let win = new BrowserWindow({width: 1200, height: 840, x: 0, y: 0, frame: false})
    win.on('closed', () => app.quit())

    // and load the index.html of the app.
    win.loadFile('index.html')

    let ipc = require("electron").ipcMain;
    ipc.on("win.close", (e) => {
        win.close();
    });
}
  
app.on('ready', createWindow)
