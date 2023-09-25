// Дан список целых чисел numbers. Необходимо написать в императивном и декларативном стиле процедуру для
// сортировки числа в списке в порядке убывания. Можно использовать любой алгоритм сортировки.

// в императивном стиле:
function sort_list_imperative(){
    let numbers = [1,2,3,4,5,6,7,3];
    for(let j = 0; j < numbers.length; j++){ 
        for(let index = 0; index < numbers.length - 1; index++){
            if(numbers[index] < numbers[index + 1]){
                let temp = numbers[index];
                numbers[index] = numbers[index + 1];
                numbers[index + 1] = temp;
            }
        }
    }
    console.log(numbers);
    return numbers;
}

// в декларативном:
function sort_list_declarative(){
    let numbers = [1,2,3,4,5,6,7,3];
    console.log(numbers.sort((a,b) => b - a));
    return numbers;
}