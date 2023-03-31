const prompt=require("prompt-sync")({sigint:true})
function sum(a,b){
    c=a+b
return c
}

let a=Number(prompt()) 
let b=Number(prompt())
console.log("sum of the number is ",sum(a,b))