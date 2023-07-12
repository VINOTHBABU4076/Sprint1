// console.log("javascript");
// console.log("html and css");
// console.log("wesley");


// // syntax

// let age=21;
// console.log(age);

// if(true)
// {
//     const a=25;
//     console.log(a);
// }
// // console.log(a);
// // window.alert("pop ups in browser");

// // variable redeclaration

// var b=12;
// console.log(b);

// var b=15;
// console.log(b);

// let num=12;
// console.log(12);

// num=15;
// console.log(15);

// const d=12;
// console.log(d);
// // ternary operator
//  let num1=28;
//  let result;
// //  if(num1%2===0){
// //     console.log("even")
// //  }
// //     else{
// //         console.log("odd");
// //     }
//     //using ternary 
//    console.log (result=num1%2===0?"even":"odd");
// //    let name=prompt ("what's your code");

//    let string1="html and css";
//    let string2=" javascript";
//   let names= string1.concat(string2);
//    console.log(names);
//    let sliced=string1.slice(9);
//    console.log(sliced);
//   let str="Abcde";
//   let a=str.charCodeAt(0);
//   console.log(a);
//   let name1="javascript";

//   function randomChar(){
//              let name ="javascript"
//             let noOFChar = name.length
//             let no = Math.random()*noOFChar
//             let char = name.charAt(no)
//             console.log(char);

//   }
//   randomChar()

//   let item={
//     name:'phone',
//     price:30000,
//     quantity:1

//   }
//   console.log(item);
//   let item2=new Object();

//   item2.name="charger";
//   item2.price="500";
//   item2.quantity=1;

//   console.log(item2);
//   console.log(item2.name);
//   console.log(item2.price);
//   console.log(item2.quantity);
//   //dot notation
//   item.price=40000;
//   console.log(item.price);
//   item2.returnable=true;
//   console.log(item2);

//   //square bracket notation
//   console.log(item2['name']);
//   console.log(item2['price']);

function study(name) {
  console.log("hello" + name);
}

function study2(name) {
  const head = document.querySelector('h1');
  head.innerHTML = "hello" + name;

}
function geet(callback) {
  callback("tenz");
  // callback("prime")
}
geet(study);
geet(study2);

setTimeout(function sub() {
  console.log("hello")
}, 3000
);
function stay(name) {
  console.log("javascript time out" + name)
}
let time = setTimeout(stay, 3000, "js");

function myname(name) {
  console.log("my first name is" + name)
};
setTimeout(myname, 4000, "vinoth");

function count(start, end) {
  let timer = setInterval(() => {
    console.log(start);
    if (start >= end) {
      clearInterval(timer);
    }
    else {
      start++;
    }
  }, 1000);

}
count(0, 10);

const arr = ['A', 'B', 'C', 'D', 'E']
const arr2 = ['q', 'w', 'e', 'r', 't']
const [a, , c, ...rest] = arr;

console.log(a);
console.log(c);
console.log(rest);

const newarr = [...arr, ...arr2];
console.log(newarr);
// function declaration
function ispositive(num) {
  return num > 0;
}
// function calling
console.log(ispositive(2));

const arr3 = [2, 3, 4, 5, 6];
let findsum = function (arr3) {
  let sum = 0;
  for (const val of arr3) {
    sum += val;
  }
  return sum;
}
console.log(findsum(arr3));

// const prom = new Promise(resolve,reject)
// {
//   let positivenumber = true;
//   if (positivenumber) {
//     resolve();
//   }
//   else {
//     reject();
//   }   
// }
// prom.then(success)
//   .catch(failure)



function toss() {
  return new Promise((resolve, reject)=>{
    const rand = Math.floor(Math.random()*2);
    if (rand == 0) {
      resolve();
    }
    else {
      reject();
    }  
  })
  
}
toss()
.then(()=> console.log("got head"))
.catch(()=> console.log("got tails"));

// let any=new promise((resolve,reject))
// const reach=true;
// if(reach){
//   setTimeout(resolve,3000,"tenz");
// }
// else{ 
//   console.log("not reached home")
// }

// async function fn(){
// ytt=await any;

// }
// fn();
