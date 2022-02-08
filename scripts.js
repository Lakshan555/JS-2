//function is a reusable peace of code that does specific thing

//without return
function addNumbers(num1,num2){
    var ans = num1 + num2;
    console.log('Addition : ' + ans);
}

//with return
function subNumbers(num1,num2){
  
    return num1 - num2;
   
}

//invoke function

addNumbers(5,6);
var sub = subNumbers(10,5);

console.log('Subtraction : ' + sub);



//............................................

//Define
function calculateAge(birthYear){
    return 2022 - birthYear;
}

//invoke
console.log("Your age is : " + calculateAge(1998) + " Years old." );

function retimentyear(fisrtName,birthYear){
    var age = calculateAge(birthYear);
    var retire = 60 - age;

    console.log(fisrtName + " retire in " + retire + " year in " + (birthYear + age + retire)  );

}

//invoke 
retimentyear('ishanka',1964);
