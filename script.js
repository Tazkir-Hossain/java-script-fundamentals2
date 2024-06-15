/*
'use strect';//to highlight my error in console terminal

let hasDriversLicence = false;
const passTest = true;

if(passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log(`I can drive :D`);

const interface = 'Audio';//this interface key js own property
const private = 534;//this private key is js own property

// functions

function logger(){
    console.log(`My name is Tazkir`);
}

//calling / running / invoking function
logger();
logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

fruitProcessor(5, 0);
const  appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const orangeJuice = fruitProcessor(2, 4);
console.log(orangeJuice);

Number = ('23');// this is build in function


//Function Declarations vs Expressions

// Functions declaration
function calcAge1(birthYear)
{
    return 2024 - birthYear;
}
const age1 = calcAge1(2001);
// Function expression
const calcAge2 = function(birthYear){
    return 2024 - birthYear;
}
const age2 = calcAge2(2001);
console.log(age1, age2);

// Arrow functions

const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));

// Functions Calling Other Functions
function cutFruitPieces(fruit){
    return fruit * 3;
}
function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice =`juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2,3));

//Reviewing Functions
const calcAge = function(birthYear){
   return 2037 - birthYear;
}
const yearsUntilRetirement = function (birthYear, firstName){
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    return retirement;
}
console.log(yearsUntilRetirement(1991, 'Tazkir'));

//Reviewing Functions including if else statement
const calcAge = function(birthYear){
    return 2037 - birthYear;
 }
 const yearsUntilRetirement = function (birthYear, firstName){
     const age = calcAge(birthYear);
     const retirement = 65 - age;

     if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
     }
     else{
        console.log(`${firstName} has already retired`);
        return -1;
     }
     
 }
 console.log(yearsUntilRetirement(1991, 'Tazkir'));
 
 // Coding Channenge #1
 function calcAverage (a ,b, c){
    const avg = (a + b + c)/3;
    return avg;
    
 }
 let scoreDolphins = calcAverage(44,23,71);
 let scoreKoalas = calcAverage(65, 54, 49)
 console.log(scoreDolphins, scoreKoalas);

 function checkWinner (dolphinsAvg, koalasAvg){
   if(dolphinsAvg >= 2 * koalasAvg){console.log(`Dolphins win ${dolphinsAvg} vs ${koalasAvg}`);

   }
   else if(koalasAvg >= 2 * dolphinsAvg){
    console.log(`Koalas win ${koalasAvg} vs ${dolphinsAvg}`);
   }
   else{
    console.log(`No team wins...`)
   }
 }

 checkWinner(scoreDolphins, scoreKoalas);
 checkWinner(546, 234);
  scoreDolphins = calcAverage(85,54,41);
  scoreKoalas = calcAverage(23, 34, 27);
  
  checkWinner(scoreDolphins, scoreKoalas);
 
 //Introduction to Array
  const friend1 = 'Tazkir';
  const friend2 = 'Sakib';
  const friend3 = 'Amir';

  const friends = ['Sakib', 'Amir', 'labu'];
  console.log(friends);

  const years = new Array(1991, 2000, 2020, 2030);

  console.log(friends[0]);
  console.log(friends[2]);

  console.log(friends.length);
  console.log(friends[friends.length - 1]);

  friends[2] = 'Ibrahim';//using array value change
  console.log(friends);
  // friends = ['Khalil', 'Mehedi']; this is not possible

  const firstName = 'Tazkir';
  const Tanveer = [firstName, 'Dhaka', 2024-2001, 'USA', friends];
  console.log(Tanveer);
  console.log(Tanveer.length);

  // exercise
  function calcAge (birthYear){
    return 2037 - birthYear;
  }
  const year = [1990, 1967, 2002, 2010, 2018];
  const age1 = calcAge(year[0]);
  const age2 = calcAge(year[1]);
  const age3 = calcAge(year[year.length-1]);
  console.log(age1, age2, age3);

  const ages = [calcAge(year[0]), calcAge(year[1]), calcAge(year[year.length - 1])];
  console.log(ages);

// Basic Array Operations

const friends = ['Asif', 'Saiful', 'Noor'];
// add elements
friends.push('Mohib');// Asif,Saiful,Noor,Mohib
console.log(friends);
const newLenght = friends.push('Mohib');// 4
console.log(newLenght);// o/p,,4

friends.unshift('Amir');//Asif,Saiful,Noor,Mohib,Amir
console.log(friends)
// remove elements
friends.pop();//last // Asif, Saiful, Noor,Mohib
const popped = friends.pop();// Asif, Saiful, Noor
console.log(popped);// Mohib return
console.log(friends);// Asif, Saiful, Noor

friends.shift(); // first
console.log(friends);// Asif, Saiful

console.log(friends.indexOf('Asif'));// 1
console.log(friends.indexOf('Shafayet'));// -1

friends.push(23);
console.log(friends.includes('Asif'));// true
console.log(friends.includes('Shafayet'));// false
console.log(friends.includes('23'));// strict equality it does not do type coercion

// Coding Challenge #2
function calcTip(bill){
   if(bill >=50 && bill <=300){
     let tip= bill * 0.15;
     return tip;
   }
   else{
     let tip = bill * 0.20;
     return tip;
   }
}
   const bills = [125,555,44];
   const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
   const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
   console.log(bills, tips, totals);

//Introduction to object
const tazkirArray =[
  'Tanveer',
  'Hossain',
  2037 - 1991,
  'teacher',
  ['Mohib','Noor','Asif']

];

const Tazkir={
  firstName: 'Tazkir',
  lastName: 'Hossain',
  age: 2037 - 1991,
  job:'teacher',
  friends:['Mohib','Noor','Asif']
};
 

// Dot vs Bracket Notation
const tazkir={
  firstName: 'Tazkir',
  lastName: 'Hossain',
  age: 2037 - 1991,
  job:'teacher',
  friends:['Mohib','Noor','Asif']
};

console.log(tazkir);
console.log(tazkir.firstName);
console.log(tazkir['lastName']);

const nameKey = 'Name';
console.log(tazkir['first' + nameKey]);// 1st of all String concate than print value from class tazkir to object tazkir.firstName.
console.log(tazkir['last' + nameKey]);// same upper
//console.log(tazkir.'last' + nameKey);// It does not work.
const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
console.log(tazkir.interestedIn);//but it print undefined
//console.log(tazkir[interestedIn]); this is correct

if(tazkir[interestedIn]){
  console.log(tazkir[interestedIn]);
}
else{
  console.log(`Wrong answer,try it again`)
}
tazkir.location = 'Dhaka';//adding object
tazkir['twitter'] = '@tazkir';//adding object
console.log(tazkir);
// challenge
// "Tazkir has 3 friends, and his best friend is called Michael"
console.log(`${tazkir.firstName} has ${tazkir.friends.length} friends, and his best friend is called ${tazkir.friends[0]}`);

// Object Methods
const tazkir={
  firstName: 'Tazkir',
  lastName: 'Hossain',
  age: 2037 - 1991,
  job:'teacher',
  birthYear: 1991,
  friends:['Mohib','Noor','Asif'],
  hasDriversLicense: true,

  // calcAge: function(birthYear){
  //   return 2037 - birthYear;
  // }
  
  // calcAge: function(){
  //   this.tazkir;
  //   return 2037 - this.birthYear;
  // }

  calcAge:function(){
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  
  getSummary: function(){
     return `${this.tazkir} is a ${this.calcAge()}-year old ${this.job}, and he has a ${this.hasDriversLicense ? 'a' : 'no'} driver's License.`
  }
};
//console.log(tazkir.calcAge(1991));
//console.log(tazkir['calcAge'](1991));
//console.log(tazkir.calcAge());
console.log(tazkir.age);
console.log(tazkir.getSummary);

// Coding Challenge #3
const markMiller ={
  fullName:"Jhon's",
  mass:78,
  height:1.69,

  calcBmi: function(){
    return this.bmi = this.mass/(this.height ** 2);
  }
};

const jhonSmith ={
  fullName:"Mark's",
  mass: 92,
  height:1.95,

  calcBmi: function(){
    return this.bmi = this.mass/(this.height ** 2);
  }
};
markMiller.calcBmi();
jhonSmith.calcBmi();
//console.log(markMiller.calcBmi());
//console.log(jhonSmith.calcBmi());

if(markMiller.bmi > jhonSmith.bmi){
   console.log(`${markMiller.fullName} BMI (${markMiller.bmi}) is higher than ${jhonSmith.fullName} (${jhonSmith.bmi})!`);
}
else{
  console.log(`${jhonSmith.fullName} BMI (${jhonSmith.bmi}) is higher than ${markMiller.fullName} (${markMiller.bmi})!`);
}

// for loop
for(let i=1;i<11;i++){
  console.log(`Hello Bangladesh ${i}`);
}

//Looping Arrays, Breaking and Continuing
const tazkir = [
  'tazkir',
  'hossain',
  2037 - 1991,
  'teacher',
  ['mohib','noor','asif']
];

const type = [];

for(let i = 0; i < tazkir.length; i++){
  //Reading from tazkir array
  //console.log(tazkir[i],typeof tazkir[i]);

  // filling type array,right down below two process
  //type[i] = typeof tazkir[i];
  type.push(typeof tazkir[i]);
}
console.log(type);
const birthYears = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < birthYears.length; i++){
  //ages.push(2037 - birthYears[i]);// this one and below one both are correct
  ages[i] = (2037 - birthYears[i]);
}
console.log(ages);

// Continue and break
console.log('--- Only Strings --');
for(let i=0;i<tazkir.length;i++){
  if(typeof tazkir[i] !== 'string') continue;

  console.log(tazkir [i], typeof tazkir[i]);
}

console.log('--- Break With Number ---');
for(let i=0;i<tazkir.length;i++)
{
  if(typeof tazkir[i] === 'number') break;
   console.log(tazkir[i], typeof tazkir[i]);
}

// Looping Backwards and Loops in Loops
const tazkir = [
  'tazkir',
  'hossain',
  2037 - 1991,
  'teacher',
  ['mohib','noor','asif'],
  true
];

for(let i=tazkir.length - 1; i >=0; i--){
  console.log(i,tazkir[i]);
}

for(let i =1;i<4;i++){
  console.log(`------- Starting Exercise ${i}`);

  for(let rep =1;rep<6;rep++){
    console.log(`Lifiting Weight Repetition ${rep}`);
  }
} 
*/
// The While Loop

let i = 1;
while(i<=10){
  console.log(`Hello Bangladesh ${i}`);
  i++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while(dice !== 6){
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random()*6)+1;
  if (dice === 6) console.log('Loop is about to end');
}