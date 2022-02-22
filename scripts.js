//object

var nimal = {
    fisrtName : 'Nimal',
    lastName : "Perera",
    age : 25,
    subjects: ["Java","Mern"],
    degree:{
        name:'software engineer',
        duration:'4years'
    },
    projects:[
        {
            name:'E-COmmercce APP',
            technology :'flutter',
            version: 2.0
        },
        {
            name:'Music Player',
            technology :'java',
            version: 12.0
        },
    ],
    yearOfBirth : function(year){
        return year - this.age;
    }
}

console.log(nimal);
console.log(nimal.fisrtName);
console.log(nimal['lastName']);
var x = 'age';
console.log(nimal[x]);

//get array
console.log(nimal.subjects);
console.log(nimal["subjects"]);

console.log(nimal.subjects[0]);
console.log(nimal["subjects"][0]);

//get dgree object
console.log(nimal.degree)
console.log(nimal.degree.name)
console.log(nimal.degree["name"])

//get project
console.log(nimal.projects)
console.log(nimal.projects[0])

console.log(nimal.projects[0].technology)
console.log(nimal.projects[0]['technology'])

//funtcion
console.log("Year of Birth " + nimal.yearOfBirth(2022));

//modify values
nimal.age = 52

console.log(nimal.age);

//other way to crete object 
var kasun = new Object();

kasun.name = 'kasun';
kasun.age = 24;

kasun.arr = ['hello',true]

kasun.degree ={
    name:'SE',
    year:'3 year'
}

kasun.yearOfBirth = function(year){
        return 2022 - year ;
    }

console.log(kasun.degree);
console.log(kasun.arr);
console.log(kasun.yearOfBirth(1998));