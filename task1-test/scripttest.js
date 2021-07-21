/* 
В гоночной игре есть следующие настройки автомобиля: ABS, Traction Control, Stability Control. 
Каждый параметр может меняться от 1 до 5. 
Для упрощения жизни игрока нужно создать функции Beginner, Good Driver, Maniac, 
которые имеют значения все 5-ки, все 3-ки и все 0 соответсвенно.
*/

// source
function setABS(num) { console.log(`ABS:${num}`) }
function setTraction(num) { console.log(`Traction Control:${num}`) }
function setStability(num) { console.log(`Stability Control:${num}`) }

//code
let inputABS = document.querySelector('.rangeABS');
let inputTraction = document.querySelector('.rangeTraction');
let inputStability = document.querySelector('.rangeStability');

let buttonBegginer = document.querySelector('.beginner')
let buttonGoodDriver = document.querySelector('.goodDriver')
let buttonManiac = document.querySelector('.maniac')

let numBeginner = 5
let numGoodDriver = 3
let numManiac = 0

//input range
inputABS.addEventListener('click', () =>{
    setABS(inputABS.value)   
})

inputTraction.addEventListener('click', () =>{ 
    setTraction(inputTraction.value)
})

inputStability.addEventListener('click', () =>{
    setStability(inputStability.value)
})

//button
buttonBegginer.addEventListener('click', () =>{
    Beginner(numBeginner)   
    newValueInput(numBeginner)
})

buttonGoodDriver.addEventListener('click', () =>{
    GoodDriver(numGoodDriver)
    newValueInput(numGoodDriver)
})

buttonManiac.addEventListener('click', () =>{
    Maniac(numManiac) 
    newValueInput(numManiac)
})

//function
function newValueInput(num) {
    inputABS.value = num
    inputTraction.value = num
    inputStability.value = num
}

function sourceSetFunc(num) {
    setABS(num)
    setTraction(num)
    setStability(num)
}

function Beginner(num) {
    console.log('Beginner:')
    sourceSetFunc(num)
}
   
function GoodDriver(num) {
    console.log('Good Driver:')
    sourceSetFunc(num)
}
   
function Maniac(num) {
    console.log('Maniac:')
    sourceSetFunc(num)
}