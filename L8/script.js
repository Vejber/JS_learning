// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

function showNumbers(){
    let i = 0;
    do {
        if(i == 0){
            console.log(`${i} - это ноль`)
        }else if( i % 2 == 0){
            console.log(`${i} – четное число`)
        } else {
            console.log(`${i} – нечетное число`)
        }
        i++;
    } while (i < 11);
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

function createNewArray(){
    const arrNums = [1, 2, 3, 4, 5, 6, 7];
    arrNums.splice(arrNums.indexOf(4), 2);
    console.log(arrNums);
}

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

function createArrayRandom(){
    const arr = [];

    for(let i = 0; i < 5; i++){
        let n = Math.floor(Math.random() * (10 - 0) + 0);
        arr.push(n);
    }
    console.log(`Array is ${arr}`);

    i = 0;
    let sum = 0;
    while(i < arr.length){
        sum = sum + arr[i];
        i++;
    }
    console.log(`Sum is ${sum}`);

    i = 0;
    let min = arr[0];
    do {
        if(arr[i] < min){
            min = arr[i];
        }
        i++;
    } while (i < arr.length);
    console.log(`Min is ${min}`);

    if(arr.indexOf(3) !== -1){
        console.log(`In array ${arr} there is number 3`);
    } else {
        console.log(`In array ${arr} there is no number 3`);
    }

}

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, 
// а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

function makePiramid(){
    let xString = '';
    for(let i = 0; i < 20; i++){
        xString += 'x';
        console.log(xString);
    }
}