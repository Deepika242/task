// function declaration

function sum(){
let num1=30;
let num2=35;
let result = `${num1}+${num2} =${num1+num2}`
console.log(result);
};
sum();


//function expressions

let bill=function(){
    let mango=15;
    let apple= 20;
    let melon = 30;
    let paid = `{mango} + {apple}+ {melon}  = ${mango+apple+melon}`
    console.log(paid);

};
bill();

// arrow function




//parameters and arguments

function sum1(n1,n2){
let add = `adding of  ${n1} + ${n2} = ${n1+n2}`;
let sub = `subtracting  of ${n1} - ${n2} = ${n1-n2}`;

console.log(add)
console.log(sub)
}

sum1(25,30);
sum1(46,57);
sum1(34,89);
   

function mobileInfo(mobileDetails){

    console.log(mobileDetails.mName, mobileDetails.netWork);

}
let mobileDetails = {
    mName : "oppo",
    screenSize : "6inches",
    bodyMat: "glass",
    netWork: "5G",
}

mobileInfo(mobileDetails);


function main(number1,number2){
let add= number1+number2;
let sub=number1-number2;

return[`${add},${sub}`]
}
let result=main(300,454);
console.log(result);

