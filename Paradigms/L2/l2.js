// Написать скрипт в любой парадигме, который выводит на экран таблицу умножения всех чисел от 1 до n.
// Обоснуйте выбор парадигм.

function multiply_till_n(){
    n = Number(prompt("Enter your number: "));
    if(!isNaN(n)){
        for( let i = 1; i <= n; i++){
            console.log(`1 * ${i} = ${ 1 * i }`);
        }
    }
    else{
        alert(`${n} is not a number`)
    }
}