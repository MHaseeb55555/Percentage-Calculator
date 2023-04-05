// <<<<<<<<<<<<<<<<<<< Percentage Calculator >>>>>>>>>>>>>>>>




var ObtainMarks = prompt(" Enter your OBTAINED marks");
var TotalMarks = prompt(" Enter your TOTAL marks");

var marks= ObtainMarks/TotalMarks
 
var Percentage= marks * 100

alert( " YOUR PERCENTAGE IS " + Percentage + "%")


// <<<<<<<<<<<<<<<< Else IF >>>>>>>>>>>>>>>>>>>>>>

var a = 2;
var b = 5;
var c = 2;

if (a == b) {
    console.log("A is equal to B")
} else if (a <= b) {
    console.log("A is less than B")
} else if (a == c) {
    console.log(" A is equal to C")
}



// <<<<<<<<<<<<< nested else if >>>>>>>>>>>>>>>>>>>>>>>


var age = prompt("ENTTER YOUR AGE",18)

if (age >= 18) {
    if ( age >= 25) {
        console.log(" 'Allowed'. Only For 25 or above")
    } else {

        console.log(" Sorry! You are under age . This is only for 25  or above")
    }
} else { console.log(" 'NOT ALLOWED' Because you are under 18") }





// <<<<<<<<<<<<<<<<<<<< && and || >>>>>>>>>>>>>>>>>>>>>>>>>

var a = 1;
var b = 3;
var c = 1;

if (a <= b && a == c) {
    console.log(" A is less than B and A is equal to C")
} else if (a >= b || a <= c) {
    console.log("A is equal to B and A is equal to C")
}


// <<<<<<<<<<<<<<<<<<<<<<<<<< Arrays >>>>>>>>>>>>>>>>>>>>>>>>>>

var names = [ "haseeb","hammad","shayan","rajab", "anas" , "ali"]

console.log(names);
console.log(names.length);

names [6]="Arfat"
names [5]="arbaz"
names.push('ahmed');
names.pop('ahmed');


console.log(names);
console.log(names.length);



