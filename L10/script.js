// Задание 1
// Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

// const numbers = {
// keyin1: 1,
// keyin2: 2,
// keyin3: 3,
// keyin4: 4,
// keyin5: 5,
// keyin6: 6,
// keyin7: 7,
// }

function showThree(){
    const numbers = {
        keyin1: 1,
        keyin2: 2,
        keyin3: 3,
        keyin4: 4,
        keyin5: 5,
        keyin6: 6,
        keyin7: 7,
        }
    for(const key in numbers){
        const value = numbers[key];
        if(value > 2){
            console.log(value);
        }
    }

}



// Задание 2
// Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

// const post = {
// author: "John", // вывести этот текст
// postId: 23,
// comments: [
// {
// userId: 10,
// userName: "Alex",
// text: "lorem ipsum",
// rating: {
// likes: 10,
// dislikes: 2, // вывести это число
// },
// },
// {
// userId: 5, // вывести это число
// userName: "Jane",
// text: "lorem ipsum 2", // вывести этот текст
// rating: {
// likes: 3,
// dislikes: 1,
// },
// },
// ],
// };
const getTypeOf = (obj) => {
    return {}.toString.call(obj).slice(8, -1);
  }

function showComment(){
    const post = {
        author: "John", // вывести этот текст
        postId: 23,
        comments: 
        [
            {
                userId: 10,
                userName: "Alex",
                text: "lorem ipsum",
                rating: {
                    likes: 10,
                    dislikes: 2, // вывести это число
                },
            },

            {
                userId: 5, // вывести это число
                userName: "Jane",
                text: "lorem ipsum 2", // вывести этот текст
                rating: {
                    likes: 3,
                    dislikes: 1,
                },
            },
        ],
    };

    for(const key in post){
        if( key === 'author'){
            console.log(post[key]);
        }

        if( key === 'comments'){

            const value = post[key];

            value.forEach(element => {
                if(value.indexOf(element)< 1){
                    console.log(post.comments[0].rating.dislikes);
                } else {
                    for(const elementKey in element){
                        if(elementKey === 'userId' || elementKey === 'text'){
                            console.log(element[elementKey]);
                        }
                    }
                }
            });
        }
    }
}
// Задание 3
// Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.

// const products = [
// {
// id: 3,
// price: 200,
// },
// {
// id: 4,
// price: 900,
// },
// {
// id: 1,
// price: 1000,
// },
// ];

function getLowerPrice(){
    const factor = 0.15;
    const products = [
        {
            id: 3,
            price: 100,
        },
        {
            id: 4,
            price: 900,
        },
        {
            id: 1,
            price: 1000,
        },
    ];

    products.forEach(element => {
        console.log(`old price is ${element.price}`);
        let newPrice = element.price - (element.price * factor);
        console.log(`new price is ${newPrice}`);
    });
}



// Задание 4
// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. 
// Исходные данные - массив products.
// 2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, 
// заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

// ```
// const products = [
// {
// id: 3,
// price: 127,
// photos: [
// "1.jpg",
// "2.jpg",
// ],
// },
// {
// id: 5,
// price: 499,
// photos: [],
// },
// {
// id: 10,
// price: 26,
// photos: [
// "3.jpg",
// ],
// },
// {
// id: 8,
// price: 78,
// },
// ];

// []()
// []()

function filterPhotos(){
    const products = [
        {
            id: 3,
            price: 127,
            photos: [
                "1.jpg",
                "2.jpg",
            ],
        },
        {
            id: 5,
            price: 499,
            photos: [],
        },
        {
            id: 10,
            price: 26,
            photos: [
                "3.jpg",
            ],
        },
        {
            id: 8,
            price: 78,
        },
    ];

   const isPhoto = products.filter((photo) =>
    {
        if(photo.photos){
            if(photo.photos.length < 1) return false;
            return true;
        }
    }
   );
   console.log(isPhoto);

    products.sort((a, b) => a.price - b.price);
    console.log(products);
}

// **Задание 5**
// Дано 2 массива 
// const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
// ```


// Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.

function uniteArrays(){
    const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

    const dictionary = {};

    for(let i = 0; i < en.length; i++){
        dictionary[en[i]] = ru[i];
    }

    console.log(dictionary);
}


const createCounter = () => {
    let counter = 0;
    return () => {
        return ++counter;
    }
}
// Создаем счетчик.
const counter1 = createCounter();
counter1(); // 1
counter1(); // 2
//Создадим еще один счетчик. Каждый будет работать независимо.
const counter2 = createCounter();
counter2(); // 1
counter1(); // 3
