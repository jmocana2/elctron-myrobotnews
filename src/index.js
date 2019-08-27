const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

if(process.env.NODE_ENV !== 'production'){
  require('electron-reload')(__dirname, {
    
  })
}

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 500, height: 900, x:0, y:0})
  mainWindow.loadURL('http://localhost:3000/')
})