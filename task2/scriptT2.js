//code
const number = calc(200)

function calc(num) {
    let value = 2
    console.log("numFirst" + ' ' + num),console.log('valueFirst' + ' ' + value)
    return function() {
        if (num % 5 === 0 && num > 0) {
            value = 3 // value +=3
            num /= 5
            return console.log("num after /5" + ' = ' + num),console.log('value change to' + ' ' + value)
        }if (num % 7 === 0 && num > 0) {
            value = 1 // value +=1
            num -= 7
            return console.log("num after -7" + ' = ' + num),console.log('value change to' + ' '  + value)
        }else {
            num += value
            return console.log("num" + ' ' + num),console.log('value' + ' ' + value)
        }
    }
}
   
for (let i = 0; i < 10; i++) {
    number()
}  
