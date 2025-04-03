const fs=require('fs');
// const ret=fs.writeFileSync('./test.txt','hi it is txt file')
// console.log('aa',ret)


fs.writeFile('./test1.txt','hi it is txt file',(err)=>{
console.log('aa',err)
})
fs.readFileSync('./test.txt','utf-8')

// let v=fs.appendFileSync('./test.txt',`${Date.now()}`)
let v=fs.appendFileSync('./test.txt',`${Date.now()}`)
console.log(v)
fs.appendFileSync('./test.txt',`addad\n`)

fs.unlinkSync('./test1.txt')
// fs.writeFile("example.txt","Trial text in file",(err)=>{
//     if(err){
//         console.log('err',err);
//     }
//     else{
//         console.log('file created successfully');
//         fs.readFile('example.txt','utf8',(err,file)=>{
//             if(err){
//                 console.log('error in reading file',err);
//             }
//             else{
//                 console.log(file);
//             }
//         })
//     }
// });

// fs.rename('example.txt','trial.txt',(err)=>{
//     if(err)console.log('err',err)
//         else{
//     console.log('successfully created file');
//         }
// });

// fs.appendFile('trial.txt',"\a Some data to append",(err)=>{
//     if(err)console.log(err);
//     else{
//         console.log('data is appended');
//     }
// });

// fs.unlink('trial.txt',err=>{
//     if(err){
//         console.log('aa',err);

//     }
//     else{
//         console.log('deleted successfully')
//     }
// })