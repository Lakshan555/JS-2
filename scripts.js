/// try catch Error handling

function largestNumber(a,b,c){
   try{
        if(typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number'){
            console.log("Error : Please Enter only Numbers.");
        }
        else if(a == b || a == c || b == c ){
            console.log("Error : Please Enter diffirent Numbers");
        }
        else{
            if(a > b && a > c){
                console.log("A is Largest Number!");
            }
            else if(b > a && b > c){
                console.log("B is Largest Number!");
            }
            else if(c > a && c > b){
                console.log("C is Largest Number!");
            }
            else{
                console.log("Invalid Inputs!");
            }
        }
   }
   catch(err){
    console.log(err);
   }
   finally{
    console.log("You inputs values are " + a + " " + b + " and " + c);
   }
}

largestNumber(1,3,3);