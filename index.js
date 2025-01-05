/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.205 pound
*/

// Constant variables
const meterToFeet = 3.281;

const literToGallon = 0.264;
const gallonToLiter = 3.785;

const kilogramToPound = 2.205;

// Input and Button
const numberInputEl = document.getElementById("number-input");
const convertBtnEl = document.getElementById("convert-btn");

// Paragraphs
const meterAndFeetPrg = document.getElementById("meter-feet");
const literAndGallonPrg = document.getElementById("liter-gallon");
const kilogramAndPoundPrg = document.getElementById("kilogram-pound");

// Functions to implement converts
function meterToFeetFunction(input) {
    const mtToFt = input * meterToFeet;
    const ftToMt = input / meterToFeet;

    meterAndFeetPrg.innerHTML = `${input} meters = ${mtToFt.toFixed(
        3
    )} feet | ${input} feet = ${ftToMt.toFixed(3)} meters`;
}

function literToGallonFunction(input) {
    const ltToGl = input * literToGallon;
    const glToLt = input * gallonToLiter;

    literAndGallonPrg.innerHTML = `${input} liters = ${ltToGl.toFixed(
        3
    )} gallons | ${input} gallons = ${glToLt.toFixed(3)} liters`;
}

function kilogramToPoundFunction(input) {
    const kgToPnd = input * kilogramToPound;
    const pndToKg = input / kilogramToPound;

    kilogramAndPoundPrg.innerHTML = `${input} kilos = ${kgToPnd.toFixed(
        3
    )} pounds | ${input} pounds = ${pndToKg.toFixed(3)} kilos`;
}

convertBtnEl.addEventListener("click", function () {
    meterToFeetFunction(numberInputEl.value);
    literToGallonFunction(numberInputEl.value);
    kilogramToPoundFunction(numberInputEl.value);
});
