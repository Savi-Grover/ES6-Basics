//------------------VAR keyword
// function sayHello(){
//   for ( var i =0; i<5; i++){
//     console.log(i);
//   }
//   console.log(i);
// }
// sayHello();
// //O/p - 0,1,2,3,4,5

//------------------LET KEYWORD
// function sayHello1(){
//   for ( let i =0; i<5; i++){
//     console.log(i);
//   }
//  //console.log(i);  //error - i not defined
// }
// sayHello1();

//--------------CONST KEYWORD
//const x=5;
//x=2;   //error - x is a constant

// const place="mumbai";
// if(1){
//   const place="mysore";
//   console.log(place);
// }

// console.log(place);

//o/p - mysore
//      mumbai

//--------------------OBJECTS
// const person ={
// name: 'Savi',
// walk(){},
// talk(){return 'savi can talk'}
// };
// const name1=person.name;
// console.log(name1);
// console.log(person.talk());

// //o/p - Savi
// //      savi can talk

//--------------object destructuring 
// const address ={
// 	Street: 'a',
// 	City: 'b',
// 	Country: 'c'

// };

// const street = address.Street;
// const city = address.City;
// const country = address.Country;

// console.log(street);
// console.log(address.Street);
// console.log(city);
// console.log(country);

// console.log(address);

//-------------------this keyword
// const person1 ={
//   name:"Savi",
//   walk(){
//     console.log(this);
//   },
//   };
// person1.walk();  
//o/p- {"name": "Savi", walk: f}

//-----BUt this keyword behaves different if called it as a reference to an object
// const person2 ={
//   name:"Savi",
//   walk(){
//     console.log(this);
//   },
//   };
// const act=person2.walk();
// console.log(act);

//Output -      {"name": "Savi", walk: f}
//             undefined - because there is no binding

//-------------binding to THIS 

// const person3 ={
//   name:"Savi",
//   walk(){
//     console.log(this);
//   },
//   };

// person3.walk();     // function in js are objects
// const walk= person3.walk.bind(person3);
// walk();  //call above const walk

//o/p-   {"name": "Savi", walk: f}
//       {"name": "Savi", walk: f}


//-------------------------ARROW FUNCTIONS 

//----------------------- function in js are objects

//js format
// const square = function(number){
// return number*number
// }
// console.log(square(7));

//es 6 format for single param function - remove function kyword, remove(), add=>, remove {}, remove return
// const square1 = number=>
// number*number
// console.log(square1(5));

  //---------------------FUNCTIONS for array of objects

    // const jobs=[
    // { id:1, isActive: true },
    // { id:2, isActive: true },
    // { id:3, isActive: false },
    // ];
    
    // //const activejobs=jobs.filter(function(jobs) {return jobs.isActive;}) //js format
    // const activejobs1=jobs.filter(jobs=> jobs.isActive);
    // console.log(activejobs1);

    ///-----------Array map  - used for rendering/traversal lists of array 

    // const colors= ['red','green','blue'];
    
    // //const items= colors.map(color=> '<li>'  + color + '</li>'); //js format
    
    // colors.map(color=> `<li>${color}</li>`);
    // console.log(colors);   // ${color} - called template literal
    

    //-----------Spreading / concatenate 2 arrays / .. . operator

const first = [1,2,3];
const second = [4,5,6];

//const combined = first.concat(second); //js
const combined1 = [...first, ...second];
console.log(combined1);

//---------------Also helps in cloning a array:

const array1=[1,2,3];
const clone= [...array1 ];
console.log(array1);
console.log(clone);





























