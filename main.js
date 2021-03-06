// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')
const contextMenu = require('electron-context-menu')

require('update-electron-app')({
  repo: 'bigfuture/opendirector_desktop',
  updateInterval: '1 hour'
})

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1800,
    height: 900,
    minWidth: 1800,
    minHeight: 900,
    title: 'OpenDirector',
    backgroundColor: '#35d1be',
    center: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
	  spellcheck: true
    }
  })

  // and load the index.html of the app.
  mainWindow.loadURL('https://opendirector.com.au')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

contextMenu()

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
