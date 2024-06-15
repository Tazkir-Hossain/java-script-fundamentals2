/*
let js="amazing";
if(js === "amazing") alert("JavaScript is Fun!");
console.log(40+8+23-10);

let myFirstName;
myFirstName="Tazkir"
console.log(myFirstName);

let PI=3.1416;
console.log(PI);

let myFirstJob="Programmer"
console.log(myFirstJob);

//data - types

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');
// let key define only one time
javaScriptIsFun='yes';

console.log(typeof javaScriptIsFun);

// undefine data type

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);
//bug 
console.groupCollapsed(typeof null);

//let,cont and var
let age=30;
age = 35;

//const
const birthYear = 2001;
// below syntex is not possible
birthYear = 2003;
const job;
//var,but we don't use is,coz it's very older
var job = 'programmer';
job = 'teacher';
// without declaring any type
lastName = 'Hossain';
console.log(lastName);

// Basic operator
const ageRahim = 2037 - 1930;
const agekarim = 2037 - 1956;
console.log(ageRahim, agekarim);

const now = 2024;
const ageSakib = now - 2002;
const ageAmir = now - 2000;
console.log(ageSakib, ageAmir);
 
console.log(ageAmir * 2, ageRahim / 10, 2 ** 3);

const firstName = 'Tazkir';
const lastName = 'Hossain';
console.log (firstName + ' ' + lastName);

//assingnment operator
let x = 10 + 5;//15
x += 10;//x = x + 10 = 25
x *= 4;//x = x * 4 = 100
x ++;//x = x + 1 = 101
x --;
console.log(x);

// Comparison operator
console.log(ageAmir > ageSakib);//true//< ,>, <=,>=,!=
console.log(ageAmir >= 18);//true

const isFullAge = agekarim >= 18;
console.log(now - 2002 > now - 2000);

//Operator Precedence
let z,y;
z = y = 25 - 10 - 5;
console.log(z,y);

const averageAge = (ageAmir + ageSakib) / 2;
console.log(ageRahim, agekarim, averageAge);

//coding Challenge #1
const markMass = 78;
const markHeight = 1.69;
const jhonMass = 92;
const jhonHeight = 1.95;

const markBmi = markMass / markHeight ** 2 ;
const jhonBmi = jhonMass / ( jhonHeight * jhonHeight );
const compareBmi = markBmi > jhonBmi;
console.log(markBmi, jhonBmi, compareBmi);

//Strings and Template Literals
const firstName = 'Tazkir';
const work = 'student';
const birthYear = 2001;
const year = 2024;

const tazkir = "I'm " + firstName + ', a ' + (year - birthYear) + 'years old ' + work + '!';
console.log(tazkir);

const tazkirNew = `I'm ${firstName}, a ${year - birthYear} year old ${work}!`;
console.log(tazkirNew);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with 
multiple 
lines`);


//Taking Decisions if else Statements

const age =15;
if(age >= 18){
  console.log('Anisha can start driving license')
}

else{
    const yearsleft = 18 - age;
    console.log(`Anisha is too young. Wait another ${yearsleft} years`);

}

const birthYear = 1998;

let century;
if(birthYear <= 2000 ){
    century = 20;
}
else{century = 21;}
console.log(century);

//coding Challenge #2
const markMass = 78;
const markHeight = 1.69;
const jhonMass = 92;
const jhonHeight = 1.95;

const markBmi = markMass / markHeight ** 2 ;
const jhonBmi = jhonMass / ( jhonHeight * jhonHeight );
const compareBmi = markBmi > jhonBmi;
console.log(markBmi, jhonBmi, compareBmi);
if(markBmi > jhonBmi){
    console.log(`markBmi ${markBmi} is higher than jhonBmi ${jhonBmi}`)
}
else{ console.log(`jhonBmi ${jhonBmi} is higher than markBmi ${markBmi}`)}


// Type Conversion and Coercion

const inputYear = '1991';
console.log(inputYear + 18);
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Tazzkir'));//ans will ne NaN,it's mean undefine number & it is typecasting
console.log(String(23));

// type coercion
console.log('I am ' + 23 + 'years old');//23 automitacally coverting a string by using + sine
console.log('23' - '10' - '3');// ans 10,coz - sine convarted automitacally string to number
console.log('23' + '10' + '3');// ans 36
console.log('23' * '2');// ans 46 converted to number
console.log('23' / '2');// ans 11.5 converted to number

let n = '1' + 1;
n = n - 1;
console.log(n);
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Tazkir'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if(money){
    console.log(`Don't spend it all`);
}
else{console.log(`You should get a job!`);}

let height = 0;
if (height){
    console.log(`YAY! Height is defined`);
}
else{
    console.log(`Height is Undefined`)
}


// Equality operators == vs ===

const age = '18';
if (age === 18)// here this === sine converting no type coersion & and strict equality.good practice is using === this sine always
    {console.log(`You just became an adult`);}
if (age == 18)//here this == sine converting to type coersion & and loose equality.good practice is not using == this sine always
    {console.log(`You don't become a adult`);}

const favourite = Number(prompt(`What's your favourite number ?`));

if(favourite === 23)
    console.log(`'Cool! 23 is a amazing number`);
else if(favourite === 7){
    console.log('7 is a cool number');
}
else if(favourite === 9){
    console.log("9 is also a cool number");
}
else{
    console.log(`Number is not 23 or 7 or 9`);
}

if(favourite !== 23){
    console.log(`Why not 23`);
}


const hasDriverLicence = true;
const hasGoodVision = true;

console.log(hasDriverLicence && hasGoodVision);
console.log(hasDriverLicence || hasGoodVision);

/*if(hasDriverLicence && hasGoodVision){
    console.log(`Anisha is able to drive!`);
}
else{
    console.log(`Some one else should deive`);
}

const isTired = false;
console.log(hasDriverLicence && hasGoodVision && isTired);

if(hasDriverLicence && hasGoodVision && !isTired){
    console.log(`Anisha is able to drive`);
}
else{
    console.log(`Someone else should drive....`);
}

// challenge 3

// const dolphins = (96 + 108 + 89)/3;
// const koalas = (88 + 91 + 110)/3;

// console.log(dolphins, koalas);
// if(dolphins > koalas){
//     console.log(`winner is dolphins`);
// }
// else if(dolphins < koalas){
//     console.log(`Winner is koalas`);
// }
// else if(dolphins === koalas){
//     console.log(`Both win the trophy!`);
// }


//Bonous 1

const dolphins = (97 + 112 + 101)/3;
const koalas = (109 + 95 + 123)/3;

console.log(dolphins, koalas);
if(dolphins > koalas && dolphins >=100){
     console.log(`winner is dolphins`);
}
else if(dolphins < koalas && >=100){
    console.log(`Winner is koalas`);
}
else if(dolphins === koalas && dolphins >=100 && koalas <=100){
     console.log(`Both win the trophy!`);
}
else{
    console.log(`No one will be win`)
}


// The switch statement
const day = 'monday';

switch(day){
    case 'monday':// day === 'monday
     console.log(`Yes! today is monday`);
     console.log(`Have done your homework?`);
     break;
    case 'tuesday':
        console.log(`Today is tuesday`);
        break;
    case 'wednesday':
    case 'thusday':
        console.log(`Today is your off day`);
        break;
    case 'friday':
        console.log(`Today is government holiday`);
        break;
    case 'saturday':
        console.log(`Today is bank holiday`);
        break;
    case 'sunday':
        console.log(`Today is sunday`);
        break;
    default:
        console.log(`Not a valid day`);
    
}

// if we are here using if else statement,,
if(day === 'monday'){
    console.log(`Yes! today is monday`);
    console.log(`Have done your homework?`);
}
else if(day === 'tuesday'){
    console.log(`Today is tuesday`);
}
else if(day === 'wednesday' || day === 'thusday'){
    console.log(`Today is your off day`);
}
else if(day === 'friday'){
    console.log(`Today is government holiday`);
}
else if(day === 'saturday'){
    console.log(`Today is bank holiday`);
}
else if(day === 'sunday'){
    console.log(`Today is sunday`);
}
else{
    console.log(`This is not a valid day`)
}


//statement and expression
3+4 // this is a expression coz,it gives value
if(23>10){
    const str = `23 is bigger`// this is a statement,coz it gives not any value
}
const me = 'Tazkir';
console.log(`I'am ${2024 - 2001} years old ${me}`);//we can use expression this situation but not use 


//The Conditional (Ternany) Operator
const age = 23;
age >=18 ? console.log(`You are adult`):
console.log(`You are not adult`);

const situation = age >= 18 ? 'adult' : 'not adult';
console.log(situation);

let drink;
if(age >= 18){
    drink = 'tea';
}
else{
    drink = 'water';
}
console.log=(drink);

console.log(`My situation is ${age >= 18 ? 'adult' : 'not adult'}`);
*/

// Coding Channenge #4

const bill = 275;
let tip;
let totalBill;
if(bill >= 50 && bill <= 300){
    tip = bill * (15/100);
    totalBill = bill + tip;
    console.log(`Your bill is ${totalBill}`);
}
else{
    tip = bill * (20/100);
    totalBill = bill + tip;
    console.log(`Your bill is ${totalBill}`);
}