const readLine = require('readline');
const rl=readLine.createInterface({input: process.stdin,output:process.stdout})
let num1= Math.floor((Math.random()*10)+1)
let num2= Math.floor((Math.random()*10)+1)

let ans=num1+num2;
rl.question(`What is the sum of ${ num1 } + ${ num2 } number?\n`,(userInput)=>{

    if(num1+num2==userInput.trim()){
        // console.log('correct answer!!!!!!!!!!',userInput);
        rl.close();
    }
    else{
        rl.setPrompt('Please try again');
        rl.prompt();
        rl.on('line',(userInput)=>{
            if(userInput.trim()==ans){
                rl.close();
            }
            else{
                rl.setPrompt('your answer is incorrect',userInput.trim())
                rl.prompt();
            }
        })
    }
});

rl.on('close',()=>{
    console.log('correct ans you did a great job')
});