const TEAM_NUMBER = "1720";

const { app, BrowserWindow } = require('electron')
const isReachable = require('is-reachable');

let win = null;

function createWindow () {
    // Create the browser window.
    let win = new BrowserWindow({width: 1200, height: 840, x: 0, y: 0, frame: false, webPreferences: {nodeIntegration: true}})
    win.on('closed', () => app.quit()) // TODO remove inline function

    // and load the index.html of the app.
    win.loadFile('index.html')

    let ipc = require("electron").ipcMain;
    ipc.on("win.close", (e) => {
        win.close();
    });
};
  
app.on('ready', createWindow)
