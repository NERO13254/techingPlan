const {app , BrowserWindow} = require("electron")

app.on("ready" , ()=>{
    
    const window = new BrowserWindow({
        width: 1050,
        height:700,
        webPreferences:{
            contextIsolation: false,
            nodeIntegration : true
        }
    })

    window.setMenu(null);
    window.webContents.openDevTools();
    window.loadFile("src/loadIndex/loadIndex.html");


    
})