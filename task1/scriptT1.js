// source
function setABS(num) { console.log(`ABS:${num}`) }
function setTraction(num) { console.log(`Traction Control:${num}`) }
function setStability(num) { console.log(`Stability Control:${num}`) }

//code
function beginner(num) {
    console.log('Beginner:')
    setABS(num)
    setTraction(num)
    setStability(num)
}
   
function goodDriver(num) {
    console.log('Good Driver:')
    setABS(num)
    setTraction(num)
    setStability(num)
}
   
function maniac(num) {
    console.log('Maniac:')
    setABS(num)
    setTraction(num)
    setStability(num)
}

beginner(5)
goodDriver(3)
maniac(1)