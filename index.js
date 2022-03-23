//1. Reassingn
var x ="hello";
var x ="world";
console.log(x); //result world



let a = "hello";
let a = "world";
console.log(a); //Error: duplicate declaration x



// // 2. Hoisting: memungkinkan variabel/fungsi digunkan sebelum deklarasi
x = "10";
var x;
console.log(x); //result 10



let x;
x = "10";
console.log(x); // Error: x is not defined



// 3. Scope
var a ="0";
let b ="0";
const c ="0";

if (true) {
    var a = "1";
    let b = "1";
    const c = "1";
}

console.log(a); //result 1, tidak menerapkan block scope
console.log(b); //result 0, menerapkan block scope
console.log(c); //result 0, menerapkan block scope



const a = 123;
a = 456; //Eror: Assignment to constant variable.
console.log(a);



const obj = { id: 1, name: "Andi" };
obj.age = 20;
console.log(obj); // result: {id: 1, name: 'Andi', age: 20}
obj = {}; //Error: Assignment to constant variable.



const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr); // result: [1,2,3,4,5]
arr = []; // Eror: Assignment to constant variable.



//4. globalVar = "This is a global variable";
let globalVar = "This is a global variable";

function fun() {
  let localVar = "This is a local variable";

  console.log(globalVar);~
  console.log(localVar);
}
fun();
// result: 'This is a global variable'
// result: 'This is a local variable'


// globalVar = Not defined
let globalVar = "This is a global variable";

function fun() {
  let localVar = "This is a local variable";

  console.log(globalVar);
  console.log(localVar);
}
fun();
console.log(localVar);
// result: 'This is a global variable'
//  Eror: localVar is not defined


//  Java (Statically typed language)
let x = 5; // dapat menyimpan nilai integer.
let name = 'abc' // begitu juga variabel y hanya dapat menyimpan nilai string.

// Javascript (Dynamically typed)
let x = 5; // dapat menyimpan nilai integer.
let name = 'abc'; // dapat juga menyimpan nilai string.


let message = 'hello';
message = 123456;

// tidak terjadi error, karena sifatnya yang dinamis, dapat menerima
// tipe data yang berbeda-beda



// Number
let a = 123;
let b = 12.345;
let c = a + b;
let d = a * b;

console.log(d);


let a = 1 / 0; // result: Infinity


let a = NaN + 1; // result: NaN
let b = 3 * NaN; // result: NaN
let c = 'not a number' / 2 - 1; // result: NaN



// deklarasi nilai BigInt
const value1 = 900719925124740998n;

// Menambahkan 2 BigInt
const result1 = value1 + 1n; // 900719925124740999n

const value2 = 900719925124740998n;
const result2 = value2 + 1; // Error! BitInt and number cannot be added



let str = 'Andi';
let str2 = 'Budi';
let names = `The names are ${str} and ${str2}`;
console.log(names); // result: 'The names are Andi and Budi'

let name = 'John';
console.log(`Hello, ${name}!`); // result: 'Hello, John!'

console.log(`result: ${1 + 2}`); // result: 'result: 3'



let isValidEntry = true; // yes, it is a valid entry
let nameFieldChecked = false; // no, name field is not checked

let isGreater = 4 > 1;
console.log(isGreater); // result: true <- comparison

if (isValidEntry) {
  // do something
}



let score = null;



let name;
console.log(name); // result: undefined



let name = 'Andi';

// mengubah nilai variabel menjadi undefined
name = undefined;

console.log(name); // result: undefined



// contoh deklarasi object

const student = {
    firstName: 'Andi',
    lastName: 'Maulana',
    class: 12,
  };



  // Dua symbol dengan deskripsi yang sama

const value1 = Symbol('hello');
const value2 = Symbol('hello');



const name = 'ram';
typeof name; // result: "string"

const number = 4;
typeof number; // result: "number"

const valueChecked = true;
typeof valueChecked; // result: "boolean"

const a = null;
typeof a; // result: "object"



