/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = document.getElementById('dynamicInput')
const convertBtn = document.getElementById('convert-btn')
const lengthEl = document.getElementById('length-el')
const volumeEl = document.getElementById('volume-el')
const massEl = document.getElementById('mass-el')


function resizeInput() {
    input.style.width = '117px'
    const newWidth = Math.max(Math.min(input.scrollWidth, 450), 117)
    input.style.width = `${newWidth}px`
}

input.addEventListener('input', resizeInput)

convertBtn.addEventListener('click', function () {
    const inputval = input.value
    if (inputval.trim() === '') {
        alert("Empty input!!!")
    } else if (isNaN(parseFloat(inputval))) {
        alert("Wrong input!!!")
    } else {
        calculate(inputval)
    }

})


function calculate(inputval) {
    numericvalue = Number(inputval)
    lengthEl.textContent = `${numericvalue} meters = ${(numericvalue * 3.281).toFixed(3)} feet | ${numericvalue} feet = ${(1 / 3.281 * numericvalue).toFixed(3)} meters`
    volumeEl.textContent = `${numericvalue} liters = ${(numericvalue * 0.264).toFixed(3)} gallons | ${numericvalue} gallons = ${(1 / 0.264 * numericvalue).toFixed(3)} liters`
    massEl.textContent = `${numericvalue} kilos = ${(numericvalue * 2.204).toFixed(3)} pounds | ${numericvalue} pounds = ${(1 / 2.204 * numericvalue).toFixed(3)} kilos`
}