/* 
В гоночной игре есть следующие настройки автомобиля: ABS, Traction Control, Stability Control. 
Каждый параметр может меняться от 1 до 5. 
Для упрощения жизни игрока нужно создать функции Beginner, Good Driver, Maniac, 
которые имеют значения все 5-ки, все 3-ки и все 0 соответсвенно.
*/

// source
function setABS(num) { 
    if (num<6 && num>0){
        console.log(`ABS:${num}`)
    }else {
        console.log(`Неверное значение ABS:${num}` + ' ' + 'Выберите значение от 1 до 5')

    }
}
function setTraction(num) { 
    if (num<6 && num>0){
        console.log(`Traction Control:${num}`)
    }else {
        console.log(`Неверное значение Traction Control:${num}` + ' ' + 'Выберите значение от 1 до 5')
    } 
}
function setStability(num) {
    if (num<6 && num>0){
        console.log(`Stability Control:${num}`)
    }else {
        console.log(`Неверное значение Stability Control:${num}` + ' ' + 'Выберите значение от 1 до 5')
    }  
}

//code
let inputABS = document.querySelector('.rangeABS');
let inputTraction = document.querySelector('.rangeTraction');
let inputStability = document.querySelector('.rangeStability');

let buttonBegginer = document.querySelector('.beginner')
let buttonGoodDriver = document.querySelector('.goodDriver')
let buttonManiac = document.querySelector('.maniac')

let numBeginner = 6
let numGoodDriver = 3
let numManiac = 1

//input range
inputABS.addEventListener('click', () =>{
    if(inputABS.value<6 && inputABS.value>0){
        setABS(inputABS.value) 
    } else {
        inputABS.value = 1
        alert('Выберите значение от 1 до 5')
    }
})

inputTraction.addEventListener('click', () =>{ 
    if(inputTraction.value<6 && inputTraction.value>0){
        setABS(inputABS.value) 
    } else {
        inputTraction.value = 1
        alert('Выберите значение от 1 до 5')
    }
    setTraction(inputTraction.value)
})

inputStability.addEventListener('click', () =>{
    if(inputStability.value<6 && inputStability.value>0){
        setABS(inputStability.value) 
    } else {
        inputStability.value = 1
        alert('Выберите значение от 1 до 5')
    }
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
    if(num<6 && num>0){
        inputABS.value = num
        inputTraction.value = num
        inputStability.value = num
    }else {
        inputABS.value = inputABS.value
        inputTraction.value = inputTraction.value
        inputStability.value = inputStability.value
    }
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