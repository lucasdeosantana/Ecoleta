import express from 'express'

export default function RouterCreator(configurations={}){
    const router = configurations.router || express.Router
    const Router = router()
    const debug = configurations.debug || false
    function consoleDebug(logFrase:string){
        debug ? console.log(logFrase) : null
    }
    
    function get(route:String, call:any){
            consoleDebug(`Create Route ${route}...`)
            Router.get(route, (request, response)=>{
                consoleDebug(`Receive a POST request from ${route}`)
                call(request,response)
            })
        }

    function post(route:String, call:any){
            consoleDebug(`Create Route ${route}...`)
            Router.post(route, (request, response)=>{
                consoleDebug(`Receive a POST request from ${route}`)
                call(request,response)
            })
        }

    function put(route:String, call:any){
            consoleDebug(`Create Route ${route}...`)
            Router.put(route, (request, response)=>{
                consoleDebug(`Receive a PUT request from ${route}`)
                call(request,response)
            })
        }
    
    function delet(route:String, call:any){
        consoleDebug(`Create Route ${route}...`)
        Router.delete(route, (request, response)=>{
            consoleDebug(`Receive a PUT request from ${route}`)
            call(request,response)
        })
    }
    return{
        Router,
        get,
        post,
        delet,
        put,
    }
}

