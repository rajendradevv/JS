const prompt=require("prompt-sync")({sigint:true})
food=prompt('enter your food amount ')                              // taking a number input as a an integer  example '100' + '10' =10010'
tippercentage=prompt('enter your tip amount in percentage % ')/100
tipamount=food*tippercentage
total=food+tipamount
console.log(tipamount)
 console.log(total)
    
// npm install prompt-sync
// const prompt=require("prompt-sync")({sigint:true});