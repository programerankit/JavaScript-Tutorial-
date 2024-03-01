//please ignor the spaling mistacks

//In this tutorial we will descuse data type
//diffrence between old js and new js (es6)
//all the code has a same database but when we use "Strict mode" autometic browser or node.js will tried as a es6 of js code

"Strict mode";  //use strick mode for batter understanding of js compiler

// JS has kind of datatype
//1. number:- use the all numaric with decimal or without decimal (bigInt is also grator data type of number)
let marks=90;
let age=21.3;

//2. string:- use the all charactor with in single('') or double("") comase 
let name="Ankit Kumar";
let youtube='AKSD SOLTUION';

//3. null:- this is specific type that use where we want to show data in null format like data will not or not empty 
let nu=null;

//4. undefined:- is is data type and js compilet auto assigned the undefined of every veriable
let und; //it will consider "undefined"

//5. symbol:- it is use for unique value

//6. boolen:- it contain true and false 
let isAccount=true;

//7. object:- it contain the key or value 
let obj={
    name:"ankit kumar",
    rollNo:12345
}
console.table([marks,age,name,youtube,nu,und,isAccount,obj])

