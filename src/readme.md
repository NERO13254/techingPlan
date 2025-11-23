# Funciones principales 
## Index.js
En el index se le agregaron las importaciones de los modulos "app" y "BrowserWindow" de electron
Los cuales son fundamentales para iniciar la app electron . 

app = sirve para evaluar el estado general , los procesos y hacer referencia a la app en general . 

BrowserWindow = sirve para crear una nueva ventana , o para ejecutar funciones relacionadas con las ventanas.
                pero principalmente va a ser usado para crear ventanas.


## app.on 
app.on = hace referencia al estado de la aplicación , es decir , cuando la aplicación alcanze un estado , entonces
         debe hacer algo . En otras palabras : cuando la app haya finalizado de cargar ejecuta un codigo. 
         este codigo se ejecuta como una función anonima " ()=>{}  " (se le llama anonima por que no tiene nombre)

         ejemplo completo = app.on( "ready" , ()=>{  # codigo . . . .  }    )

        on() !!recibe parametros dentro de los parentesis¡¡ "()" . Estos no son parametros cualquiera , sino que recibe
        parametros especificos , En este caso "ready" . el cual hace referencia a que cuando la aplicación este lista 
        haga algo . 

        ejemplo = app.on("ready" , ##funcion anonima  )


# BrowserWindow 
Crea una nueva ventana . Según buenas practicas de Electron es necesario encapsular esta ventana dentro de una constante.

ejemplo = new BrowserWindow();

BrowserWindow recibe parametros como el ancho (width) de la pantalla y el largo (height). estos parametros deben pasarse
como un objeto 

ejemplo generico =   

{                    # deben abrir y  cerrar las llaves obligatoriamente y luego de cada especificacion una COMA!!!
    ancho : 1000,    # debe respetarse esta estructura obligatoriamente   "nombre" : "valor" ,
    alto  : 700     
}

ejemplo final = 

const window = new BrowserWindow(
    {
        width: 1050,
        height:700,        
        
        webPreferences:{
            contextIsolation: false,
            nodeIntegration : true
        }
    }
)

       webPreferences = son especificaciones tecnicas adicionales (por ahora no vienen al caso D: )


# Una vez creada la venta con BROWSERWINDOWS

se pueden establecer especificaciones adicionales cuando la ventana ya fué creada como las siguientes : 


    window.setMenu(null);               # elimina el menú de la parte superior de la pantalla que viene por defecto con Electron 
    window.webContents.openDevTools();  # abre la consola para desarrolladores (para poder testear errores)
    
    window.loadFile("src/loadIndex/loadIndex.html");  #carga el archivo HTML especificado

    en este caso tenemos el archivo .html que queremos cargar dentro de la carpeta SRC y LOADINDEX (debemos respetar las rutas)

    src
    |_ _ _ > loadIndex
            |_ _ _ _ _ >  loadIndex.html !!! # este es el q nos interesa
    
    