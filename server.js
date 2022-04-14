const http = require("http")
const fs = require("fs")


const server = http.createServer((req,res)=>{
    if(req.url ==="/"){
        fs.readFile("./staticFiles/index.html",(err,data)=>{
            if(err)console.log(err.message);
            res.writeHead(200,{'Content-Type': 'text/html'})
            res.end(data)
        })
        
    }else if(req.url.includes("css")){
        fs.readFile(`./staticFiles/${req.url}`,(err,data)=>{
            if(err)console.log(err.message);
            res.writeHead(200,{'Content-Type': 'text/css'})
            res.end(data)
        })
    }else if(req.url.includes("js")){
        fs.readFile(`./${req.url}`,(err,data)=>{
            if(err)console.log(err.message);
            res.writeHead(200,{'Content-Type': 'text/javascript'})
            res.end(data)
        })
    }else if(req.url.includes("favicon.ico")){
        res.writeHead(200,{"application":"octet-stream"})
        res.end()
    }
})
const PORT = 8080
server.listen(PORT,()=>{
    console.log(`Сеовер запущен на порту ${PORT}`);
})