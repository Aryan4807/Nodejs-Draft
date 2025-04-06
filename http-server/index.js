// const http=require('http')
// const fs=require('fs')
// const url=require('url')
// const server=http.createServer((req,res)=>{
// const log= `${Date.now()}: ${req.url} Request received\n`
// fs.appendFile('req.txt',log,(data,err)=>{
//     // if(err)throw err;
//     if(err){
//         console.log('err',err)
//     }
//     else{
//         let par=url.parse(req.url)
//         if(req.url==="/favicon.ico")return res.end()
//         switch(par.pathname){
//             case '/':
//                 console.log('data')
//                 res.end('Homepage')
//                 break;
//                 case '/about':
//                     console.log('data')
//                     res.end(`DSF`)
//                     break;
//                 default:
//                     res.end('404')
//         }
//     }
// })
// // console.log(res);
// })

// server.listen(8000,()=>{console.log('saa done with server')})


const express=require('express')

const app=express();

app.get("/",(req,res)=>{
return res.send("Hello from homepage")
})
app.get("/about",(req,res)=>{
    return res.send(`Hello from about ${req?.query?.name}|| ''`)
    })

 app.listen(8000,()=>{
    console.log('server returned')
 })   