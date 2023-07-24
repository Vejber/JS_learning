// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

function getCube(){
    console.log(`2 ^ 3 степени + 3 ^ 3 степени = `+ ((2*2*2)+(3*3*3)));
};

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст 
// "Размер заработной платы за вычетом налогов равен значение"

function showSalary(){
    let gross = prompt(`Введите сумму`);
    if(!isNaN(gross)){
let salary = gross * 0.87;
console.log(`Размер заработной платы за вычетом налогов равен ${salary}`)
    } else {
        alert ('It is not a number')
    }
};

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

function showMax(){
    let num1 = Number(prompt(`Введите первое число`));
    let num2 = Number(prompt(`Введите второе число`));
    let num3 = Number(prompt(`Введите третье число`));
    if(!isNaN(num1) && !isNaN(num2) &&!isNaN(num3)){
        let arrayNums = new Array;
        arrayNums.push(num1);
        arrayNums.push(num2);
        arrayNums.push(num3);
        let maxNumber = num1;
        arrayNums.forEach(element => {
            if(element > maxNumber){
                maxNumber = element;
            }
        });
        alert(`Max number is ${maxNumber}`);
    } else {
        alert('isNan!');
    }
};
// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций 
// (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); 
// должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). 
// Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, 
// функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. 
// Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

function sum(num1, num2){
    return(num1 + num2);
};

function minus(num1, num2){
    let max = num1;
    let min = num2;
    if(num2 > num1){
        max = num2;
        min = num1;
    }
    return(max - min);
};

function multiply(num1, num2){
    return(num1 * num2);
};

function divide(num1, num2){
    if(num2 == 0){
        console.log(`num2 is 0`)
    } else{
        return(num1 / num2);
    }
};

function calculateNumbers(){
    let operation = prompt(`Выберете операцию: 1 - сложение, 2 - разность, 3 - умножение, 4 - деление`);
    let num1 = Number(prompt(`Введите первое число`));
    let num2 = Number(prompt(`Введите второе число`));
    if(operation == 1){
        console.log(sum(num1, num2));
    }
    if(operation == 2){
        console.log(minus(num1, num2));
    }
    if(operation == 3){
        console.log(multiply(num1, num2));
    }
    if(operation == 4){
        console.log(divide(num1, num2));
    } 
};

