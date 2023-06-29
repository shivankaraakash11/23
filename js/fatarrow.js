// function defination 
function myFunctionA(a){ // a is a formal aurgument
    // function body
    console.log("Hello Good Morning " + a);

    return a; // function returing something
}

// function calling
myFunctionA('How are you?'); // 'How are you?' is a actual aurgument.


// Fat arrow function
let myFunctionB = (a) =>{
    console.log("Hello Good Morning " + a);
}

myFunctionB('How are you?');


// spread operator example (copy operator yad krne ke liye name)

let a = ['hii','hiii1','hiii3'];

console.log(a);

let b = [...a,'hii4','hiii5','hiii6'];

console.log(b);


// an arrow function expression is
let z2 = ["Hello Good Morning"]
let x1 = ['an',"arrow"];
let y1 = [...x1,"function"];
let z1 = [...y1,"expression is",...z2];
console.log(z1);

var paragraph ='';

for(var i=0;i<z1.length;i++){
    console.log(z1[i]);
    //paragraph = paragraph + z1[i] + ' '; // Not optimized
    paragraph += z1[i] + ' '; // optimized fast
}
console.log(paragraph);
//alert(paragraph);