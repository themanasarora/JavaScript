const prompt = require('prompt-sync')();
let x = Math.floor(Math.random()*100);
console.log(x)
let i = 0;
while(i<5){
let a = prompt("Enter a number between 1 and 100: ");
a = Number.parseInt(a);


  if(a==x){
    console.log("the number is correct")
    break;
  }
  else{
    console.log("incorrect number")
  }
  i++
}
console.log("THE END")