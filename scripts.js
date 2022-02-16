 for(var i = 5 ; i >= 0 ; i--){
     console.log(i);
 }

 //itarete an array
 var student = ["ishanka ", "pramidu","Lakshan"];

 for(var i = 0 ; i < student.length ; i++){
    console.log(student[i]);
 }

 //for In loop

 var person = {frame:"ishanka",lname:'Pramidu',age:24}

 for(var i in person){
     console.log(person[i]);
 }

 //for of looop
var fullName = "Ishanka"

for(var j of fullName){
    console.log(j);
}

//While looop
var marks =[33,55,66,88,66,99]
var k = 0;
while(k < marks.length){
    console.log(marks[k]);
    k++;
}

//do while loop
var l = 10;
do{
    console.log(l);
    l--;
}while(l >= 0);

// // continue and break

var data = ["ishanka","Kaduwela",1996,"math",true,"chocolate"];

//continue
for(var p=0 ; p<data.length ;p++){
    if(typeof(data[p]) !== 'string')continue;
    console.log(data[p]);
}

//break
for(var p=0 ; p<data.length ;p++){
    if(typeof(data[p]) !== 'string')break;
    console.log(data[p]);
}