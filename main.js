// function calculate(firstNum, secondNum, operation) {
//     if(secondNum === undefined & operation=== undefined ){
//         console.log(`Second Number Not Found`)
//     }else if(operation === undefined){
//         console.log(`${firstNum + secondNum}`)
//     }else if(operation === 'add'){
//         console.log(`${firstNum + secondNum}`)
//     }else if(operation === 'subtract'){
//         console.log(`${firstNum - secondNum}`)
//     }else if(operation === 'multiply'){
//         console.log(`${firstNum * secondNum}`)
//     }
//   }

//   // Needed Output
//   calculate(20); // Second Number Not Found
//   calculate(20, 30); // 50
//   calculate(20, 30, 'add'); // 50
//   calculate(20, 30, 'subtract'); // -10
//   calculate(20, 30, 'multiply'); // 600

// function ageInTime(theAge) {
//    if(theAge < 10 || theAge > 100){
//     console.log(`Age Out Of Range`)
//    }else{
//     console.log(`${theAge *12}`)
//     console.log(`${theAge *12 * 30}`)
//     console.log(`${theAge *12 * 30* 4}`)
//     console.log(`${theAge *12 * 30* 4*7}`)
//     console.log(`${theAge *12 * 30* 4*7*24}`)
//    }
//   }
//   // Needed Output
//   ageInTime(110); // Age Out Of Range
//   ageInTime(38); // Months Example => 456 Months

// function createSelectBox(startYear, endYear) {
//     document.write(`<select>`)
//     for(let i = startYear ; i <= endYear ; i++){
//         document.write(`<option>${i}</option>`)
//     }
//     document.write(`</select>`)
// }
// createSelectBox(2000, 2021);

// multiply(10, 20); // 200
// multiply("A", 10, 30); // 300
// multiply(100.5, 10, "B"); // 1000

// document.getElementById("cl").onclick = function(){
//     for(let i = 0 ; i < 10 ; i++){
//         console.log("ahmed")
//     }
// }

// document.getElementById("cl").onclick = function() {
//     console.log("ahmed");
// }




// function ageInTime(theAge) {
//    if(theAge < 10 || theAge > 100){
//     console.log(`Age Out Of Range`)
//    }else{
//     console.log(`${theAge *12}`)
//     console.log(`${theAge *12 * 30}`)
//     console.log(`${theAge *12 * 30* 4}`)
//     console.log(`${theAge *12 * 30* 4*7}`)
//     console.log(`${theAge *12 * 30* 4*7*24}`)
//    }
//   }

//   ageInTime(22);


// let swap="AhMeD";
// let swapahmed = swap.split("").map(function(ele){
//  return ele === ele.toLowerCase() ? ele.toUpperCase() : ele.toLowerCase()
// }).join("")

// console.log(swapahmed)

// let member  ={
//     name:"Elzero",
//     age:38,
//     country:"Egypt",
//     fullDetails:function(){
//         return `My Name Is ${member.name}, My Age Is ${member.age}, I Live in ${member.country}`
//     }
// }

// console.log(member.name); // Elzero
// console.log(member.age); // 38
// console.log(member.country); // Egypt
// console.log(member.fullDetails());
// // My Name Is Elzero, My Age Is 38, I Live in Egypt


// // Method One
// let objMethodOne = {
//     property:"Method One"
// };

// console.log(objMethodOne.property); // "Method One"

// // Method Two
// let objMethodTwo={};
// objMethodTwo.property="Method Two"

// console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here
// let objMethodThree = new Object({property:"Method Three"});

// console.log(objMethodThree.property); // "Method Three"


// // Method Four
// // Create Your Object Here
// let objMethodFour = Object.create({property:"Method Four"})

// console.log(objMethodFour.property); // "Method Four"

// let a = 1;

// let threeNums = {
//   b: 2,
//   c: 3,
//   d: 4,
// };

// let twoNums = {
//   e: 5,
//   f: 6,
// };

// let finalObject = Object.assign({a:1},threeNums,twoNums)

// console.log(finalObject);

// /*
//   a: 1
//   b: 2
//   c: 3
//   d: 4
//   e: 5
//   f: 6
// */
// let a = 99.5;

//   console.log(Math.round(99.5));



// document.getElementById("cl").onclick = function(){
//     for(let i = 0; i < 100; i++){
//         console.log(`${i+1} - i love judy`);
//     }
// 


// let parent = document.createElement("div");
// let h2 = document.createElement("h2");
// let p = document.createElement("p");
// let headingText = document.createTextNode("Product title");
// let descriptionText = document.createTextNode("Product description");
// parent.className = "Product";
// document.body.appendChild(parent);


// let myMainElement = document.createElement("div");
// let myHeading = document.createElement("h2");
// let myParagraph = document.createElement("p");
// let myHeadingText = document.createTextNode("Product Title");
// let myParagraphText = document.createTextNode("Product Description");
// myMainElement.className='Product'
// document.body.appendChild(myMainElement);
// myMainElement.appendChild(myHeading);
// myMainElement.appendChild(myParagraph);
// myHeading.appendChild(myHeadingText);
// myParagraph.appendChild(myParagraphText);


// for(let  i =1; i<=100; i++){
//     let myMainElement = document.createElement("div");
// let myHeading = document.createElement("h2");
// let myParagraph = document.createElement("p");
// let myHeadingText = document.createTextNode(`Product Title ${i}`);
// let myParagraphText = document.createTextNode("Product Description");
// myMainElement.className='Product'
// document.body.appendChild(myMainElement);
// myMainElement.appendChild(myHeading);
// myMainElement.appendChild(myParagraph);
// myHeading.appendChild(myHeadingText);
// myParagraph.appendChild(myParagraphText);
// }


// let a =0;
// let b =[];
// console.log(a == b);






// let input = document.querySelector("input");
// let result = document.querySelector(".result");


// input.oninput= function(){
//     result.innerHTML = `{${input.value}} USD Dollar = {${(input.value*15.6).toFixed(2)}} Egyptian Pound`
// }


// let one = document.querySelector(".one");
// console.log(one);
// let two = document.querySelector(".two");
// console.log(two);


// one.title = one.className; // تعيين قيمة الفئة CSS لـ one كقيمة title
// one.two = two.className; // تعيين قيمة الفئة CSS لـ two كقيمة two (هذا غير صحيح)


// let imgs = document.images;
// for(let i =0; i<= imgs.length ; i++){
//     if(imgs[i].hasAttribute("alt")){
//         imgs[i].alt='old'
//     }else(
//         imgs[i].alt="Elzero New"
//     )
// }


let input = document.querySelector('#text');
let result = document.querySelector('.result');

input.oninput = function(){
    result.innerHTML = `{${input.value}} USD Dollar = {${(input.value*47.30).toFixed(2)}} Egyptian Pound`;
}



