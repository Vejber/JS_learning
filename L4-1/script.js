// Задача

// Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) 
// и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка. 
// Данные при получении необходимо сохранить в локальное хранилище браузера localStorage. 
// При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage

const urlGetUsers = "https://jsonplaceholder.typicode.com/users";
const ul = document.querySelector('.ul-users');

const getData = async(url) => {
    const result = await fetch(url);
    const data = await result.json();
    return data;
}

async function showUsers(){
    try{
        
        //add li to list of users
        const datashowUsers = await getData(urlGetUsers);
        let i = 0;
        datashowUsers.forEach(element => {
            const userIndex = i++;
            ul.insertAdjacentHTML(
                'beforeend',
                `
                <li id="user_${userIndex}">
                ${element.name} <br>
                <button id="user_${userIndex}">Удалить</button>
                <hr>
                </li>
                `
                )
                localStorage.setItem(`user_${userIndex}`, element.name);
            });
            
            //delete a user from list and from licalStorage on button click
            const buttons = document.querySelectorAll('button');
            buttons.forEach(buttonLi => {
                buttonLi.addEventListener('click', () => {
                    ul.removeChild(buttonLi.parentNode);
                    localStorage.removeItem(buttonLi.id);
                })
            });
            
            //delete a user from list and from licalStorage on li click, incorrect
            // const li = document.querySelectorAll('li');
            // li.forEach(elementLi => {
                //     elementLi.addEventListener('click', () => {
                    //         ul.removeChild(elementLi);
                    //         localStorage.removeItem(elementLi.id);
                    //     })
                    // });
    } catch (error){
        console.error('Something went wrong.');
    }
}
            
// Необязательная задача
            
// Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды. сетинтервал

const urlDogs = "https://dog.ceo/api/breeds/image/random";
const div = document.querySelector('.wrapper');
            
async function showDogsPhotos(){
    try {
        const timer = 3000;
        let timerId = setInterval(async () =>{ 
            const datashowDogs = await getData(urlDogs);
            div.insertAdjacentHTML(
                'beforeend',
                `
                <figure>
                    <img src="${datashowDogs.message}" alt="Doggie" />
                </figure>
                `
            )
        }, timer); 
    setTimeout(() => { clearInterval(timerId); }, timer*10);
    } catch (error) {
        console.error('Something went wrong.');
    }
}

