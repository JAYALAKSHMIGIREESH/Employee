const jsonServer = require ('json-server')

const epServer = jsonServer.create()

const router = jsonServer.router("db.json")

const middleware = jsonServer.defaults()

const PORT = 3000 || process.env.PORT

epServer.use(middleware)
epServer.use(router)

epServer.listen(PORT,()=>{
    console.log(`MP Server is started at port ${PORT} and waiting for client request!!`);
    
})