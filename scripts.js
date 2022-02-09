
//- function exprestions
var profesions = function(firstName,job){

    switch(job.toLocaleLowerCase()){
        case 'doctor' :
            return firstName + ' is a Doctor'
        case 'singer' :
            return firstName + ' is a Singer'
        default :
            return firstName + ' is doing something else'
    }

}

//invoke
console.log(profesions('ishanka','Doctor'));
console.log(profesions('Kamal','singer'));
console.log(profesions('Lalith','saa'));



