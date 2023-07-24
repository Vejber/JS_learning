// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

let num1 = prompt('Enter the first number equal or less than 1.');
let num2 = prompt('Enter the first number equal or greater than 3.');
if(!isNaN(num1) && !isNaN(num2)){
    if(num1 <= 1 && num2 >= 3){
        alert('ok')
    } else{
        alert('not ok')
    }
} else {
    alert('isNaN!')
}
// _________________________________________________________________
// Задание 2
// Перепишите код к тернарному оператору

// let test = true;
// if (test === true) {
// console.log('+++');
// } else {
// console.log('---');
// }

let test = true;
(test) ? console.log('+++') : console.log('---');
// _________________________________________________________________
// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31. 
// Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

let day = Math.floor(Math.random() * (32 - 1) + 1);
if(day <= 10){
    alert(`The day is ${day}, it's the first decade of the month.`)
} else if (day > 10 && day <= 20){
    alert(`The day is ${day}, it's the second decade of the month.`)
} else {
    alert(`The day is ${day}, it's the third decade of the month.`)
}
// _________________________________________________________________
// Задание 4
// Необязательное задание. (Если вам показалось домашнее задание простым, выполняем данный пункт)
// (Для решения задания вам потребуется оператор остаток от деления %, например 10%3 === 1 , десять разделить на 3, остаток 1, второй пример 7 % 5, тут остаток от деления будет 2, ну и 3 пример это 14 % 10 === 4, остаток от деления на 10 будет равен 4)

// Необходимо от пользователя получить число.
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

// Пример:
// Пользователь ввел число 163. Программа должна вывести:
// "В числе 163 количество сотен: 1, десятков: 6, единиц: 3"

// Пример 2:
// Пользователь ввел число 74. Программа должна вывести:
// "В числе 74 количество сотен: 0, десятков: 7, единиц: 4"

// Пример 3:
// Пользователь ввел число 9537. Программа должна вывести:
// "В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"

// Уточнение: пользователь всегда вводит корректное положительное целое число.

let userNumber = prompt('Enter your nubmer'); //123
if(!isNaN(userNumber)){
    let units;
    let dozens;
    let hundreds;
    units = Math.floor(userNumber % 10); //3
    dozens = Math.floor((userNumber / 10) % 10); 
    hundreds = Math.floor((userNumber / 100) % 10);

    alert(`In number ${userNumber} there are ${units} units, ${dozens} dozens, ${hundreds} hundreds.`)
} else {
    alert('It is not a number')
}