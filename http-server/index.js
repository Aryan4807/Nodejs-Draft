const http=require('http')
const fs=require('fs')

const server=http.createServer((req,res)=>{
const log= `${Date.now()}: ${req.url} Request received\n`
fs.appendFile('req.txt',log,(data,err)=>{
    // if(err)throw err;
    if(err){
        console.log('err',err)
    }
    else{
        if(req.url==='./favicon/ico')return res.end()
        switch(req.url){
            case '/':
                console.log('data')
                res.end('Homepage')
                break;
                case '/about':
                    console.log('data')
                    res.end('About')
                    break;
                default:
                    res.end('404')
        }
    }
})
// console.log(res);
})

server.listen(8000,()=>{console.log('saa done with server')})