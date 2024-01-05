"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50
символов в длину и не более 500. В случае неверной длины, необходимо выводить
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру.
На странице должны отображаться товары, под каждым товаром должен быть список
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных
при запуске вашего приложения.

Каждый отзыв, как и продукт, должен иметь уникальное id, для упрощения, используем
`Date.now()`.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не
делать, пока рано.
*/

const initialData = [
  {
    id: Date.now(),
    product: "Apple iPhone 13",
    reviews: [
      {
        id: Date.now(),
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: Date.now(),
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    id: Date.now(),
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: Date.now(),
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    id: Date.now(),
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: Date.now(),
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

// Функция создает карточку продукта с отзывами и формой
function createProductElement(product) {
  const productDiv = document.createElement('div');
  productDiv.className = 'product';
  productDiv.innerHTML = `<h2>${product.product}</h2>`;

  const reviewsList = document.createElement('ul');
  reviewsList.className = 'reviews';
  product.reviews.forEach(review => {
    const reviewItem = document.createElement('li');
    reviewItem.textContent = review.text;
    reviewsList.appendChild(reviewItem);
  });

  const form = document.createElement('form');
  form.innerHTML = `
    <textarea required minlength="50" maxlength="500"></textarea>
    <button type="submit">Создать отзыв</button>
    <span class="error-message" style="color: red;"></span>
  `;

  // Управление подтверждением отзыва
  form.onsubmit = function(event) {
    event.preventDefault();
    const textarea = form.querySelector('textarea');
    const errorMessage = form.querySelector('.error-message');

    // Проверка длины отзыва
    if (textarea.value.length < 50 || textarea.value.length > 500) {
      errorMessage.textContent = 'Отзыв должен быть длинее 50 и короче 500 символов.';
    } else {
      errorMessage.textContent = '';
      const reviewItem = document.createElement('li');
      reviewItem.textContent = textarea.value;
      reviewsList.appendChild(reviewItem);
      textarea.value = '';
    }
  };

  productDiv.appendChild(reviewsList);
  productDiv.appendChild(form);

  return productDiv;
}

// Загрузка изначальных карточек и отзывов
const productsContainer = document.getElementById('products-container');
initialData.forEach(product => {
  const productElement = createProductElement(product);
  productsContainer.appendChild(productElement);
});
