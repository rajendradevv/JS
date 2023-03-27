const prompt=require("prompt-sync")({sigint:true})
food=prompt('enter your food amount ')
tippercentage=prompt('enter your tip amount in percentage % ')/100
tipamount=food*tippercentage
total=food+tipamount
console.log(tipamount)
 console.log(total)
    
// npm install prompt-sync
// const prompt=require("prompt-sync")({sigint:true});