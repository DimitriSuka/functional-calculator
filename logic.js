const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(num1, num2) {
    return multiply(num1, num2);
}

const gridPad = document.querySelector('#grid-pad');

const Button7 = document.querySelector('button-7');
const Button8 = document.querySelector('button-8');
const Button9 = document.querySelector('button-9');
const ButtonDivide = document.querySelector('button-divide');
const Button4 = document.querySelector('button-4');
const Button5 = document.querySelector('button-5');
const Button6 = document.querySelector('button-6');
const Buttonx = document.querySelector('button-x');
const Button1 = document.querySelector('button-1');
const Button2 = document.querySelector('button-2');
const Button3 = document.querySelector('button-3');
const ButtonMin = document.querySelector('button--');
const Button0 = document.querySelector('button-0');
const ButtonDot = document.querySelector('button-dot');
const ButtonPlus = document.querySelector('button-plus');
const ButtonEquals = document.querySelector('button-equals');
const ButtonClear = document.querySelector('button-clear');
const ButtonLeave = document.querySelector('button-leave');
const ButtonReset = document.querySelector('button-reset');
const ButtonTrumpTroll = document.querySelector('button-trump-troll');

Button7.addEventListener('onclick', () => {
    console.log(7);
});
Button8.addEventListener('onclick', () => {
    console.log(8);
});
Button9.addEventListener('onclick', () => {
    console.log(9);
});
ButtonDivide.addEventListener('onclick', () => {
    console.log("/");
});
Button4.addEventListener('onclick', () => {
    console.log(4);
});
Button5.addEventListener('onclick', () => {
    console.log(5);
});
Button6.addEventListener('onclick', () => {
    console.log(6);
});
Buttonx.addEventListener('onclick', () => {
    console.log("x");
});
Button1.addEventListener('onclick', () => {
    console.log(1);
});
Button2.addEventListener('onclick', () => {
    console.log(2);
});
Button3.addEventListener('onclick', () => {
    console.log(3);
});
ButtonMin.addEventListener('onclick', () => {
    console.log("-");
});
Button0.addEventListener('onclick', () => {
    console.log(0);
});
ButtonDot.addEventListener('onclick', () => {
    console.log(".");
});
ButtonPlus.addEventListener('onclick', () => {
    console.log("+");
});
ButtonEquals.addEventListener('onclick', () => {
    console.log("=");
});
ButtonClear.addEventListener('onclick', () => {
    console.log("clear");
});
ButtonReset.addEventListener('onclick', () => {
    console.log("reset");
});
ButtonTrumpTroll.addEventListener('onclick', () => {
    console.log("TRUMP");
});