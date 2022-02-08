

var match1,match2,match3,avgSri,avgEng;

// Sri lanka avarage
match1 = parseInt(prompt("Sri lanaka First match score"));
match2 = parseInt(prompt("Sri lanaka Second match score"));
match3 = parseInt(prompt("Sri lanaka Third match score"));

avgSri = (match1 + match2 + match3) / 3;

console.log(" Sri lanka team " + avgSri);

// Engaland team avarage
match1 = parseInt(prompt("Engaland First match score"));
match2 = parseInt(prompt("Engaland Second match score"));
match3 = parseInt(prompt("Engaland Third match score"));

avgEng = (match1 + match2 + match3) / 3;

console.log(" Engalanda team " + avgEng);

if (avgSri > avgEng){
    alert("Winner team is Sri lankan  .Avrrage Score is " + avgSri);
    console.log("Winner team is Sri lankan  .Avrrage Score is " + avgSri);
    
}
else if(avgEng > avgSri){
    alert("Winner team is Engaland .Avrrage Score is " + avgEng);
    console.log("Winner team is Engaland .Avrrage Score is " + avgEng);
}
else{
    alert("Match is draw" );
    console.log("Match is draw" );
}