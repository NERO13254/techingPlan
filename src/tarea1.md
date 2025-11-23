# Tarea 1 🤪🤪🤪

en base a lo explicado en el archivo [["readme.md"](./readme.md)] y con la información de ipcMain 
desarrollar un bucle forEach en base a un array de nombres claves . Para modularizar (hacer automatico) 
el proceso para crear una ventana .


## ¿por que ?
Osea , si tendríamos que crear todas las ventanas manualmente tendríamos 800 lineas de codigo dedicadas
solo a la creación de ventanas . 
Es algo muy improductivo y poco escalable (profesional) , Por ejemplo si tuvieramos 15 ventanas y queremos 
sacarle a funcion de **windows.webContents.openDevTools()** a todas , tardaríamos mucho además de que hay
muchas posibilidades de olvidarse alguna devTools en alguna de las 15 ventans .



# Información de ipcMain

¿Que es ipcMain? es la herramienta que tiene Electron para enviar información entre ventanas . Supongamos que tenes 2
ventanas abiertas en el mismo proceso . 

1 - Ventana de "inicio" (ventana principal nunca se cierra )
2 - Ventana de "añadir nuevo numero de telefono" (es una ventana secundaria )

la ventana secundaria ("nuevo numero de telefono") le quiere enviar información a la ventana principal ("ya finalizó mi prcoeso")
la ventana principal al recibir la información de la ventana secundaria hace algo (commo una conversación) : 

2 - che ventana principal ya terminó mi proceso me estoy cerrando.
1 - ah enserio ventana 2 ? cheto bro ahora comienzo a ejecutar mi proceso de "ventanaTelefonoCerrandose" 

ejemplo : 

en la ventana principal **index.js** [["index.js"](./index.js)]

1 - se importa el modulo ipcMain
  const {app , BrowserWindow , **ipcMain**} = require("electron")

2 - se llama al modulo : 
  ipcMain.on()      # hace referencia al estado del ipcMain
  
  ipcMain.on() recibe 2 parametros 
  1 - el renderer  (es el nombre clave con el que vamos a nombrar cada ventana: [["loadIndex"](./loadIndex/loadIndex.html)])
  2 - la función anonima que ejecuta el codigo cuando se reciba el renderer **()=>{}**

  ejemplo : 

  ipcMain.on("loadIndex" , ()=>{ # codigo }  )

  # ¿bueno si y? ipcMain como me sirve para crear ventas automaticamente ?
  bueno cada vez que te manden un renderer , podes crear una ventana 

  ejemplo : 

  ipcMain.on("loadIndex" , ()=>{

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


   }  )

   podes crear un array así : 
   const array = []

   que contenga los nombres de las ventanas (inventatelos vos ) : 

   const array = ["ventana1" , "ventana2" , "ventana3" ];

   y con un bucle forEach podes recorrer el array que creaste para que con cada vuelta cree el ipcMain
   ejemplo : 

   array.forEach(element=>{

        ipcMain.on( element , ()=>{

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
        window.loadFile( `loadIndex/${element}` );


        }  )
   })


    podés usar las comillas invertidas (``) para insertar una variable en medio de un texto con ayuda de ${}
    ejemplo : 
    
    variable = 'datos como variable'

    `este es un texto que acepta ${varialbe} `;

    salida : 
    este es un texto que acepta datos como variable

