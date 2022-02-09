//array
//array is single veriable that used for store diffrent elements. its often use when we want to list of elements and access them by single veriable.

// way to difine array
var student =["ishanka" , "pramidu", "lakshan"];
var marks = new Array(60,55,25);

//print array 
console.log(student);
console.log(marks);
console.log(student[2] + ' got ' + marks[2] + ' marks for Maths' );

//arry mutation
student[0] = 'Lalith' 
student[student.length] = "Chamara"  // its add new name in end of the  array
console.log(student); // in the console lalith is printed instend of ishanka

//Different type of array
var std1 = ["kamal","Perera","Civil",23,true];

console.log(std1);
console.log(typeof(std1[3])); //its give datatype of 3 element (boolen)

//Add elements
std1.push('green'); // add as last element 
std1.unshift('MR'); // add as first element 
console.log(std1);

//Remove elements
std1.pop(); //Remove as last element 
std1.shift(); //Remove as first element 
console.log(std1);


//get index of an element
console.log(std1.indexOf(22))

var inAgriStudent = std1.indexOf("Agri") === -1 ? std1[0] + 'is not Agri Student' :
std1[0] +  'is a Agri student';

console.log(inAgriStudent);

// var checkInt = std1.indexOf(22) === -1 ? 'is not 22 ' : 'is 22'
// console.log(checkInt);

var checkInt = typeof(std1[3]) === "number" ? 'is int ' : 'is not int'
console.log(checkInt);