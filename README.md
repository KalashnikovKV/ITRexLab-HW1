TASK 1
В гоночной игре есть следующие настройки автомобиля: ABS, Traction Control, Stability Control. 
Каждый параметр может меняться от 1 до 5. 
Для упрощения жизни игрока нужно создать функции Beginner, Good Driver, Maniac, 
которые имеют значения все 5-ки, все 3-ки и все 0 соответсвенно.

function setABS(num) { console.log(`ABS:${num}`) }
function setTraction(num) { console.log(`Traction Control:${num}`) }
function setStability(num) { console.log(`Stability Control:${num}`) }

TASK 2
Напишите функцию, которая замкнута на стартовое значение (число) 
и при каждом вызове добавляет к этому числу 2 и возвращает его. 

Если предыдущее число кратно 5, то оно делится на 5 и возвращается, 
а все последующие числа увеличиваются на 3.

Если предыдущее числа кратно 7, то от него отнимается 7 и возвращается, 
а все последующие числа увеличиваются на 1.

TASK 3
Дан код
------------------------------------
function crasher(a) {
  delete a.bla;
}

const a = {
  bla: 'bla',
};

// начало блока изменений
crasher(a);
// конец блока изменений

console.log(a);
------------------------------------
Задача: вызвать функцию crasher так, чтобы из объекта a не удалялось поле bla