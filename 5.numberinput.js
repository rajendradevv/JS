const prompt = require("prompt-sync")({sigint:true})
food=Number(prompt('enter the food amount'))
tippercentage=Number(prompt('enter your tip amount in percentage % ')/100)
tipamount=food*tippercentage
total=food+tipamount
console.log("this is tip",tipamount)
 console.log('this is total',total)
 
 
