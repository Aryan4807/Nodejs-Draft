const EventEmitter=require('events')
const eventsEmitter= new EventEmitter();
eventsEmitter.on('Tutorial',(nums1,nums2)=>{
    console.log('aaa',nums1+nums2)
})
// eventsEmitter.emit('Tutorial',2,5);
// lec 2
class person extends EventEmitter{
 constructor(name){
    super();
     this.name=name;
 }

 get Name(){
    // console.log('sdsdsdsdsdsdsdsdsdsd',this.name)
    return this.name;
 }
}

let pedro=new person('pedro');
pedro.on('Name',()=>{
    console.log('asasasasasass',pedro.name);
    
})
let christin=new person()
pedro.emit('Name',pedro);
// console.log('ss',pedro)


// const tut= require('./sum');
// let a=10;
// let b=100;
// var c= 1000; 
// console.log(tut.su,tut.sum2(a,b));
// console.log('aa',c);
// const p=1000;