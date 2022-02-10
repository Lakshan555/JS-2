var tips = [];
var amount = [];

function bilCalulator(bill){
    var tip;
    if(bill < 1000){
        tip = bill * 20 /100;
    }
    else if(bill >= 1000 && bill <= 1500){
        tip = bill * 15 /100;
    }
    else{
        tip = bill * 10 /100;
    }

    tips.push(tip);
    amount.push(bill + tip);
   
    return tip;
}

console.log("1 - TIP:" + bilCalulator(1230) )
console.log("2 - TIP:" + bilCalulator(982) )
console.log("3 - TIP:" + bilCalulator(1640) )

console.log(tips)
console.log(amount)

