//object

var kasun = new Object();
var chamal = new Object();

kasun.fullName = prompt("Enter Kamal full Name:");
kasun.mass = prompt("Enter Kamal Mass:");
kasun.hight = prompt("Enter Kamal Hight:");

chamal.fullName = prompt("Enter Chamal full Name:");
chamal.mass = prompt("Enter Chamal Mass:");
chamal.hight = prompt("Enter Chamal Hight:");

kasun.bmi = chamal.bmi = function(){
    this.bmiVal = this.mass / (this.hight ** 2);
    return this.bmiVal;
}


console.log(kasun);
console.log(chamal);


if (kasun.bmi() > chamal.bmi()){
    alert( kasun.fullName +  " has Higest BMI:" + kasun.bmiVal);
}
else if(kasun.bmi() < chamal.bmi()){
    alert( chamal.fullName +  " has Higest BMI:" + chamal.bmiVal);
}
else{
    alert( "Both BMI are equal!");
}
console.log(kasun);
console.log(chamal);


