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
const person ={
name: 'Savi',
walk(){},
talk(){return 'savi can talk'}
};
const name1=person.name;
console.log(name1);
console.log(person.talk());

//o/p - Savi
//      savi can talk





