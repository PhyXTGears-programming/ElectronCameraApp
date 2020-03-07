const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const isReachable = require('is-reachable');

function createWindow () {
    // Create the browser window.
	var electronScreen = electron.screen;
	var displays = electronScreen.getAllDisplays();
	var externalDisplay = null;
	for (var i in displays) {
		if (displays[i].bounds.x != 0 || displays[i].bounds.y != 0) {
			externalDisplay = displays[i];
			break;
		}
	}
	
    let win = new BrowserWindow({
		width: 1920,
		height: 800,
		x:  externalDisplay.bounds.x,
		y:  externalDisplay.bounds.y,
		frame: false
	})
    win.on('closed', () => app.quit())

    // and load the index.html of the app.
    win.loadFile('index.html')

    let ipc = require("electron").ipcMain;
    ipc.on("win.close", (e) => {
        win.close();
    });
}
  
app.on('ready', createWindow)
