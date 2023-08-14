// Задание 1: ""Управление персоналом компании""

// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).
// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:

// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).
// // Пример использования классов
// const employee = new Employee(""John Smith"");
// employee.displayInfo();
// // Вывод:
// // Name: John Smith

// const manager = new Manager(""Jane Doe"", ""Sales"");
// manager.displayInfo();
// Вывод:
// Name: Jane Doe
// Department: Sales

class Employee {
    constructor(name){
        this.name = name;
    }

    displayInfo() {
        console.log(`This is Employee class. Name: ${this.name}.`);
    }
}

class Manager extends Employee{
    constructor(name, department){
        super(name);
        this.department = department;
    }

    displayInfo() {
        console.log(`This is Manager class. Name: ${this.name}\nDepartment: ${this.department}.`);
    }
}

function showInfo(){
    const employee = new Employee('John Smith');
    const manager = new Manager("Jane Doe", "Sales");
    employee.displayInfo();
    manager.displayInfo();
}


// ""Управление списком заказов""

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

// // Пример использования класса
// class Product {
// constructor(name, price) {
// this.name = name;
// this.price = price;
// }
// }

// const order = new Order(12345);

// const product1 = new Product(""Phone"", 500);
// order.addProduct(product1);

// const product2 = new Product(""Headphones"", 100);
// order.addProduct(product2);

// console.log(order.getTotalPrice()); // Вывод: 600

class Order{
    constructor(orderNumber){
        this.orderNumber = orderNumber;
    }

    products = [];
    sum = 0;

    addProduct = (product) =>{
        this.products.push(product);
    }

    getTotalPrice = () =>{
        this.products.forEach(product => {
            this.sum += product.price;
        });
        return this.sum;
    }
}

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

function showPrice(){
    const order = new Order(12345);

    const product1 = new Product("Phone", 500);
    order.addProduct(product1);

    const product2 = new Product("Headphones", 100);
    order.addProduct(product2);

    console.log(order.getTotalPrice()); // Вывод: 600
}

// Задача необязательная для выполнения

// Задача: Создать класс "Студент", который имеет приватные свойства "имя", "возраст" и "средний балл". 
// Класс должен иметь методы для установки и получения значений свойств, а также метод для вывода информации о студенте.
// Про приватные свойства и методы - https://learn.javascript.ru/private-protected-properties-methods

// const student = new Student();
// student.setName('Питер Паркер);
// student.setAge(20);
// student.setAverageGrade(85);
// student.displayInfo();

class Student{
    #name;
    #age;
    #averageGrade;

    setName = (name) =>{
        this.#name = name;
    }
    setAge = (age) =>{
        this.#age = age;
    }
    setAverageGrade = (averageGrade) =>{
        this.#averageGrade = averageGrade;
    }

    displayInfo(){
        return(`Name: ${this.#name}, age: ${this.#age}, average grade: ${this.#averageGrade}`);
    }
}

function showStudent(){
    const student = new Student();
    student.setName('Питер Паркер');
    student.setAge(20);
    student.setAverageGrade(85);
    console.log(student.displayInfo());
}