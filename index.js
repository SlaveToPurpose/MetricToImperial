/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputValue = document.getElementById("input-gap")
const btnConvert = document.getElementById("convert-btn")
const impLength = 3.281
const impVol = 0.264
const impMass = 2.204

btnConvert.addEventListener("click", function(){
    let mainNumber = Number(inputValue.value)
    let lenString = `
    ${mainNumber} meters = ${(mainNumber*impLength).toFixed(3)} feet | 
    ${mainNumber} feet = ${(mainNumber/impLength).toFixed(3)} meters
    `
    let volString =  `
    ${mainNumber} litres = ${(mainNumber*impVol).toFixed(3)} gallons | 
    ${mainNumber} gallons = ${(mainNumber/impVol).toFixed(3)} litres
    `
    let massString =  `
    ${mainNumber} kilos = ${(mainNumber*impMass).toFixed(3)} pounds | 
    ${mainNumber} pounds = ${(mainNumber/impMass).toFixed(3)} kilos
    `
    document.getElementById("len-result").textContent = lenString
    document.getElementById("vol-result").textContent = volString
    document.getElementById("mass-result").textContent = massString
})