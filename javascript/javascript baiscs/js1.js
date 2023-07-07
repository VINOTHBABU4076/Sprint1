console.log("javascript");
console.log("html and css");
console.log("wesley");


// syntax

let age=21;
console.log(age);

if(true)
{
    const a=25;
    console.log(a);
}
// console.log(a);
// window.alert("pop ups in browser");

// variable redeclaration

var b=12;
console.log(b);

var b=15;
console.log(b);

let num=12;
console.log(12);
 
num=15;
console.log(15);

const d=12;
console.log(d);
// ternary operator
 let num1=28;
 let result;
//  if(num1%2===0){
//     console.log("even")
//  }
//     else{
//         console.log("odd");
//     }
    //using ternary 
   console.log (result=num1%2===0?"even":"odd");
//    let name=prompt ("what's your code");
    
   let string1="html and css";
   let string2=" javascript";
  let names= string1.concat(string2);
   console.log(names);
   let sliced=string1.slice(9);
   console.log(sliced);
  let str="Abcde";
  let a=str.charCodeAt(0);
  console.log(a);
  let name1="javascript";

  function randomChar(){
             let name ="javascript"
            let noOFChar = name.length
            let no = Math.random()*noOFChar
            let char = name.charAt(no)
            console.log(char);

  }
  randomChar()

  let item={
    name:'phone',
    price:30000,
    quantity:1

  }
  console.log(item);
  let item2=new Object();

  item2.name="charger";
  item2.price="500";
  item2.quantity=1;

  console.log(item2);
  console.log(item2.name);
  console.log(item2.price);
  console.log(item2.quantity);
  //dot notation
  item.price=40000;
  console.log(item.price);
  item2.returnable=true;
  console.log(item2);

  //square bracket notation
  console.log(item2['name']);
  console.log(item2['price']);



 
 