import express from 'express'


export default function webServerRest(configuration={
}){
    const appDepedency = configuration.app || express
    const debug =configuration.debug || false
    const port = configuration.port  || 3333
    const routers = configuration.router 

    function consoleDebug(logFrase:string){
        debug ? console.log(logFrase) : null
    }

    function start(){
        const app = appDepedency()
        consoleDebug("Starting Web Server...")
        consoleDebug("Add json responses...")
        app.use(express.json())
        consoleDebug("Add Router...")
        app.use(routers)
        consoleDebug("Starting server...")
        app.listen(port)
        consoleDebug(`Web Server are listening in port ${port}...`)
    }
    return{
        start  
    }
}