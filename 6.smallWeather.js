const prompt = require("prompt-sync")({sigint:true})
let weather= prompt("is it 'rainy' or 'sunny' ")   //let , const and var taking user input 
if(weather=="rainy"){                              //condition loop
    console.log("Grab your umbrella")
}
else if(weather=="sunny"){
    console.log("Grab your sunscreen")
}
else{
    console.log("your input doesn't match with any of the above given single quotted words")
}