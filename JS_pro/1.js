"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса должен принимать начальный список книг (массив) в качестве аргумента.
Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список.
Если книга с таким названием уже существует в списке, выбросьте ошибку с
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в
библиотеке и возвращать true или false в зависимости от того, есть ли такая
книга в списке или нет.
*/

"use strict";

class Library {
    #books = [];

    constructor(booksArr) {
        const uniqueBooks = new Set(booksArr);
        if (uniqueBooks.size !== booksArr.length) {
            throw new Error("Массив содержит одинаковые книги");
        }
        this.#books = [...uniqueBooks];
    }

    get allBooks() {
        return this.#books;
    }

    addBook(title) {
        if (this.#books.includes(title)) {
            throw new Error("Такая книга уже есть");
        }
        this.#books.push(title);
    }

    removeBook(title) {
        const index = this.#books.indexOf(title);
        if (index === -1) {
            throw new Error("Такой книги нет");
        }
        this.#books.splice(index, 1);
    }

    hasBook(title) {
        return this.#books.includes(title);
    }
}

let myLibrary = new Library(["Mumu", "Crime and Punishment", "Otsy i deti"]);
console.log(myLibrary.allBooks);

console.log(myLibrary.addBook("Mumu"));
console.log(myLibrary.allBooks);

console.log(myLibrary.addBook("Mumus"));
console.log(myLibrary.allBooks);

console.log(myLibrary.removeBook("Mumus"));
console.log(myLibrary.allBooks);

console.log(myLibrary.hasBook("Mumus"));
console.log(myLibrary.hasBook("Mumu"));

