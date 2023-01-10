//1. ways to print in JavaScript
// console.log("Hello world");
// alert("me");
// document.write("This is a document");


//2. JavaScript console API
// console.log("Hello world",4+6,"Another log");
// console.warn("This is warning");
// console.error("this is an error");

//3.JavaScript Variables
//what are variables? - container to store data values
/*
multi
line 
Comment
*/

var number1=23;
var number2=24;
//console.log(number1+number2);

// 4. DAta types in JavaScript
//Numbers
var num1=23;
var num2=23.98;

//String
var str1="This is a string";
var str2="This is also a string";

//Ojects
var marks={
    ravi: 34,
    shubham: 76,
    shashi:99.9999
}

//console.log(marks);

//Booleans
var a=true;
var b=false;
//console.log(a,b);

//var und=undefined;
var und;
//console.log(und);

var n=null;
//console.log(n);

/*
At a very high level, there are two types of data types in javaScript
1. Primitive: undefined, null, number, string, boolean, symbol
2. Reference data types: Arrays and Objects
*/

var arr=[1,"sona",3,4,5];
// console.log(arr)
// console.log(arr[0])
// console.log(arr[1])

//Operator in JavaScript
//Arithetic Operator
// var a=34;
// var b=56;
//console.log("The value of a + b is ",a+b);

//Assingnment Operator
// var c=b;
// c=c+2;
// console.log(c)

//Compariaion Operator
// var x=34;
// var y=56;
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);

//Logical Operator

//Logical and
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(false && true);

//Logical or
// console.log(true || true);
// console.log(true || false);
// console.log(false ||  false);
// console.log(false || true);

//Logical not
// console.log(!true);
// console.log(!false);

/*
var x=5;
operand 5 hai yeha pe;
*/

//Function in javaScript
//DRY=Do not repeat yourself
// function avg(a,b)
// {
//     return (a+b)/2;
// }
// c=avg(2,4);
// console.log(c)

//Conditionals in JavaScript

// var age=1;
// if(age>8){
//     console.log("You are not a kid");
// }
// else{
//     console.log("You are a kid");
// }


// var n=87;
// if(n>=1 && n<=30)
// {
//     console.log("1 to 30 ");
// }
// else if(n>=31 && n<=60)
// {
//     console.log("31 to 60 ");
// }
// else if(n>=60 && n<=90)
// {
//     console.log("60 to 90 ");
// }
// else if(n>90)
// {
//     console.log("90 to above ");
// }
// else{
//     console.log("negative number");
// }

//Loop in JavaScript
var arr=[1,2,3,4,5,6,7,8,9]
// console.log(arr);

// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }

// arr.forEach(element => {
//     console.log(element)
// });

let j=0;
// const p=0;
//p++; //const variable ko dobara edit nahi kr sakte hai

// var d=0;
// while(d<arr.length)
// {
//     console.log(arr[d]);
//     d++;
// }


// var d=0;
// do
// {
//     console.log(arr[d]);
//     d++;
// }while(d<arr.length)

// let myArr = ["Fan","Camera", 34, null, true];
// //Array Methods
// console.log(myArr.length);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);
// myArr.push("Shashi");
// console.log(myArr);
// myArr.shift();
// console.log(myArr);
// myArr.unshift("Mohan");
// console.log(myArr);
console.log("---------------------------");

//String Method in JAvaScript
let mylovelyString ="I am a good boy good boy";
// console.log(mylovelyString.length);
// console.log(mylovelyString.indexOf("good"));
// console.log(mylovelyString.lastIndexOf("good"));

// console.log(mylovelyString.slice(0,3));
// console.log(mylovelyString.replace("good","bad")); //replace bas 1 st word ko i krta hai ek bar

// let myDate=new Date();
// console.log(myDate);
// console.log(myDate.getDate());
// console.log(myDate.getDay());
// console.log(myDate.getFullYear());
// console.log(myDate.getMonth());


//DOM Manipulation

// let elem=document.getElementById('click');
// // console.log(elem);

// let elemclass=document.getElementsByClassName('container')
// console.log(elemclass);
//elemclass[0].style.background="yellow"
// elemclass[0].classList.add('bg-primary')
// elemclass[0].classList.add('text-sucess')
// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elemclass[0].innerHTML);
// console.log(elemclass[0].innerText);

// tn=document.getElementsByTagName('button')
// console.log(tn);

tn=document.getElementsByTagName('div')
// console.log(tn);
createdElement = document.createElement('p');
createdElement.innerText = "This is a created paragrah";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2,createdElement);
//removeChild(element); ---> removes an element

//selecting using query
sel=document.querySelector('.container')
// console.log(sel)

sel=document.querySelectorAll('.container')
// console.log(sel)



// function clicked()
// {
//     console.log('The button was clicked')
// }

// window.onload=function(){
//     console.log('The document was loaded') 
// }
//Events in JavaScript
// firstContainer.addEventListener('click',function()
// {
//     document.querySelectorAll('.container')[1].innerHTML="<b>We have Clicked</b>"
//     console.log("clicked on container")
// })

// firstContainer.addEventListener('mouseover',function()
// {
//     console.log("Mouse on container")
// })


// firstContainer.addEventListener('mouseout',function()
// {
//     console.log("Mouse  out of container")
// })

// let prevHTML=document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup',function()
// {
//     document.querySelectorAll('.container')[1].innerHTML=prevHTML;
//     console.log("Mouse up when clicked of container")
// })

// firstContainer.addEventListener('mousedown',function()
// {
//     document.querySelectorAll('.container')[1].innerHTML="<b>We have Clicked</b>"
//     console.log("Mouse down when clicked of container")
// })


//Arrow Function
// function sum(a,b)
// {
//     return a+b;
// }
// sum=(a,b)=>{
//     return a+b;
// }
// let jj=sum(2,3);
// console.log(jj);

logKaro=()=>{
    document.querySelectorAll('.container')[1].innerHTML="<b>Set interval</b>"
    console.log("log kar diya hu");
}
//SetTimeout and setinterval
//  setTimeout(logKaro,2000);
// clr= setInterval(logKaro,2000);
//use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

// JavaScript Local Storage
// localStorage.setItem('name','shashi');
// localStorage
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear();


 
//Json
obj={
    name:"shashi",
    length:"1",
    a:{this :"that"}
}
jso=JSON.stringify(obj);
console.log(jso)
// typeof obj
// typeof jso
parsed=JSON.parse(
    `{    
    "name":"shashi",
    "length":"1",
    "a":{"this" :"that"}
     }`
)
console.log(parsed);




