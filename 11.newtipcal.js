const prompt=require("prompt-sync")({sigint:true})
function tipamount(food,tip){
    tipercentage=tip/100
    amountoftip=tipercentage*food
    total=food+amountoftip
    return total

}

food=Number(prompt())
tip=Number(prompt())
console.log(tipamount(food,tip))
