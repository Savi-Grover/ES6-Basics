
//------------------LET KEYWORD
// function sayHello1(){
//   for ( let i =0; i<5; i++){
//     console.log(i);
//   }
//   //console.log(i);  //error - i not defined
// }
// sayHello1();

//--------------CONST KEYWORD
// const x=5;
// //x=2;   //error - x is a constant

//--------------------OBJECTS
// const person ={
// name: 'Savi',
// walk(){},
// talk(){}
// };
// person.name='Savi';
// person.talk();

//this keyword
// const person1 ={
//   name:"Savi",
//   walk(){
//     console.log(this);
//   },
//   };

// person1.walk();  

// //----------------------- function in js are objects

// const walk= person1.walk.bind(person1);
// walk();  //call above const

//js format
// const square = function(number){
// return number*number

//}

//es 6 format for single param function - remove function ,(), add=>, 
//remove {}, remove return
// const square1 = number=>
//    number*number

  //  console.log(square1(5));
  //FUNCTIONS for array of objects
  //  const jobs=[
  //   { id:1, isActive: true },
  //   { id:2, isActive: true },
  //   { id:3, isActive: false },
  //   ];
    
  //   const activejobs=jobs.filter(function(jobs) {return jobs.isActive;})
  //   const activejobs1=jobs.filter(jobs=> jobs.isActive);
  //   console.log(activejobs1);


// const person ={
// talk(){
// setTimeout (function(){
// console.log('this', this);
// },1000);
// }};

// person.talk();

// const person ={
//   talk(){
//   var self= this;
//   setTimeout (()=>{
//   console.log("this", this);
//   },1000);
//   }};
  //person.talk();

//   const colors= ['red','green','blue'];

//   const items= colors.map(color=> '<li>'  + color + '</li>');

// const items1= colors.map(color=> `<li>${color}</li>`);
// console.log(items1);
// destructuring
// const address ={
// 	Street: 'a',
// 	City: 'b',
// 	Country: 'c'

// };

// const street = address.Street;
// const city = address.City;
// const country = address.Country;

// const { Street: st } = address;
// console.log(street);
// console.log(city);
// console.log(country);

// const first = [1,2,3];
// const second= [4,5,6];

// const combined= first.concat(second);
// const combined1= [...first, ...second];

// console.log(combined);
// console.log(combined1);


// const array1=[1,2,3];
// const clone= {...array1 };
// console.log(array1);
// console.log(clone);


//code for inheritance
  
//  import Teacher  from "./teacher"
//   const teacher=new Teacher('Laila', 'Msc');
// teacher.walk(); 

