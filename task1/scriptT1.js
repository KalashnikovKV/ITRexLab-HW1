// source
function setABS(num) { 
    if (num<6 && num>0){
        console.log(`ABS:${num}`)
    }else {
        alert(`error ABS:${num}`)
    }
}
function setTraction(num) { 
    if (num<6 && num>0){
        console.log(`Traction Control:${num}`)
    }else {
        alert(`error Traction Control:${num}`)
    } 
}
function setStability(num) {
    if (num<6 && num>0){
        console.log(`Stability Control:${num}`)
    }else {
        alert(`error Stability Control:${num}`)
    }  
}

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