const {app , BrowserWindow , ipcMain} = require("electron")

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
    window.loadFile("loadIndex/loadIndex.html");


    
    //aca va la primer tarea (estos comentarios son solo referenciales no tienen importancia , se pueden borrar )
    
    
    //


    //aca va la primer tarea
})