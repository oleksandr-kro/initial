// ======================1========================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//    }
// ======================1========================
// function Tag(tagName, whathTagDo, attributes) {
//     this.name = tagName;
//     this.action = whathTagDo;
//     this.attribut = attributes;
// };
// let aTag = new Tag('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок', [{
//         titleOfAttr: 'accesskey',
//         actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'
//     },
//     {
//         titleOfAttr: 'coords',
//         actionOfAttr: 'Устанавливает координаты активной области.'
//     }
// ]);
// let divTag = new Tag('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого', [{
//         titleOfAttr: 'align',
//         actionOfAttr: 'Задает выравнивание содержимого тега <div>.'
//     },
//     {
//         titleOfAttr: 'title',
//         actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'
//     }
// ]);
// let h1Tag = new Tag('h1', ' Так, тег <h1> представляет собой наиболее важный заголовок первого уровня', [{
//         titleOfAttr: 'align',
//         actionOfAttr: 'Определяет выравнивание заголовка.'
//     },
//     {
//         titleOfAttr: 'class',
//         actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'
//     }
// ]);
// let spanTag = new Tag('span', 'Тег <span> предназначен для определения строчных элементов документа', [{
//         titleOfAttr: 'id',
//         actionOfAttr: 'Указывает имя стилевого идентификатора.'
//     },
//     {
//         titleOfAttr: 'class',
//         actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'
//     }
// ]);
// let inputTag = new Tag('input', 'Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков,', [{
//         titleOfAttr: 'id',
//         actionOfAttr: 'Указывает имя стилевого идентификатора.'
//     },
//     {
//         titleOfAttr: 'class',
//         actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'
//     }
// ]);
// let formTag = new Tag('form', 'Тег <form> устанавливает форму на веб-странице', [{
//         titleOfAttr: 'id',
//         actionOfAttr: 'Указывает имя стилевого идентификатора.'
//     },
//     {
//         titleOfAttr: 'class',
//         actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'
//     }
// ]);
// let optionTag = new Tag('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>', [{
//         titleOfAttr: 'id',
//         actionOfAttr: 'Указывает имя стилевого идентификатора.'
//     },
//     {
//         titleOfAttr: 'class',
//         actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'
//     }
// ]);
// let selectTag = new Tag('option', 'Тег <Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка', [{
//         titleOfAttr: 'id',
//         actionOfAttr: 'Указывает имя стилевого идентификатора.'
//     },
//     {
//         titleOfAttr: 'class',
//         actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'
//     }
// ]);
// console.log(aTag, divTag, h1Tag, spanTag, inputTag, formTag, optionTag, selectTag, );
// ======================2========================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//    }
// ====================2==========================
// class Tag {
//     constructor(tagName, whathTagDo, attributes) {
//         this.name = tagName;
//         this.action = whathTagDo;
//         this.attribut = attributes;
//     }
// };
// let aTag = new Tag('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок', [{
//         titleOfAttr: 'accesskey',
//         actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'
//     },
//     {
//         titleOfAttr: 'coords',
//         actionOfAttr: 'Устанавливает координаты активной области.'
//     }
// ]);
// let divTag = new Tag('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого', [{
//         titleOfAttr: 'align',
//         actionOfAttr: 'Задает выравнивание содержимого тега <div>.'
//     },
//     {
//         titleOfAttr: 'title',
//         actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'
//     }
// ]);
// let h1Tag = new Tag('h1', ' Так, тег <h1> представляет собой наиболее важный заголовок первого уровня', [{
//         titleOfAttr: 'align',
//         actionOfAttr: 'Определяет выравнивание заголовка.'
//     },
//     {
//         titleOfAttr: 'class',
//         actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'
//     }
// ]);
// let spanTag = new Tag('span', 'Тег <span> предназначен для определения строчных элементов документа', [{
//         titleOfAttr: 'id',
//         actionOfAttr: 'Указывает имя стилевого идентификатора.'
//     },
//     {
//         titleOfAttr: 'class',
//         actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'
//     }
// ]);
// let inputTag = new Tag('input', 'Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков,', [{
//         titleOfAttr: 'id',
//         actionOfAttr: 'Указывает имя стилевого идентификатора.'
//     },
//     {
//         titleOfAttr: 'class',
//         actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'
//     }
// ]);

// let formTag = new Tag('form', 'Тег <form> устанавливает форму на веб-странице', [{
//         titleOfAttr: 'id',
//         actionOfAttr: 'Указывает имя стилевого идентификатора.'
//     },
//     {
//         titleOfAttr: 'class',
//         actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'
//     }
// ]);
// let optionTag = new Tag('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>', [{
//         titleOfAttr: 'id',
//         actionOfAttr: 'Указывает имя стилевого идентификатора.'
//     },
//     {
//         titleOfAttr: 'class',
//         actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'
//     }
// ]);
// let selectTag = new Tag('option', 'Тег <Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка', [{
//         titleOfAttr: 'id',
//         actionOfAttr: 'Указывает имя стилевого идентификатора.'
//     },
//     {
//         titleOfAttr: 'class',
//         actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'
//     }
// ]);
// console.log(aTag, divTag, h1Tag, spanTag, inputTag, formTag, optionTag, selectTag, );
// ========================3======================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ========================3======================
// let cars = {
//     model: 'Ford',
//     producer: 'General motors',
//     year: 2015,
//     maxSpeed: 320,
//     engineCapacity: 6.0,

//     drive: function() {
//         console.log(`we go at a speed of ${cars.maxSpeed} km/h`)
//     },

//     info: function() {
//         console.log(cars);
//     },
//     increaseMaxSpeed: function(newSpeed) {
//         cars.maxSpeed = newSpeed;
//     },
//     changeYear: function(newValue) {
//         cars.year = newValue;
//     },
//     addDriver: function(driver) {
//         cars.driver = driver;
//     }
// }
// cars.drive();
// cars.info();
// cars.increaseMaxSpeed(400)
// cars.changeYear(2018)
// cars.addDriver({ name: 'Vasia', age: '32', experience: 6 });
// console.log(cars);
// // ===================4===========================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ======================4========================
// function Car(model, producer, year, maxSpeed, engineCapacity) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//     this.driver;
//     this.drive = function() {
//         console.log(`we go at a speed of ${this.maxSpeed} km/h`);
//     }
//     this.info = function() {
//         console.log(cars);
//     }
//     this.increaseMaxSpeed = function(newSpeed) {
//         this.maxSpeed = newSpeed;
//     }
//     this.changeYear = function(newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function(driver) {
//         this.driver = driver;
//     }
// }
// let cars = new Car('scoda', 'wagon group', 2009, 180, 3.2);
// cars.addDriver({ name: 'Vasia', age: '32', experience: 6 });
// cars.changeYear(2012);
// cars.increaseMaxSpeed(320);
// cars.drive();
// cars.info();
// ======================5========================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ======================5========================
// class Car {
//     constructor(model, producer, year, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//         this.driver;
//         this.drive = function() {
//             console.log(`we go at a speed of ${this.maxSpeed} km/h`);
//         }
//         this.info = function() {
//             console.log(cars);
//         }
//         this.increaseMaxSpeed = function(newSpeed) {
//             this.maxSpeed = newSpeed
//         }
//         this.changeYear = function(newValue) {
//             this.year = newValue
//         }
//         this.addDriver = function (driver) {
//             this.driver = driver
//         }
//     }
// }
// let cars = new Car('scoda', 'wagon group', 2009, 180, 3.2);
// cars.addDriver({name:'Vasia',age: '32',experience: 6});
// cars.changeYear(2012)
// cars.increaseMaxSpeed(320)
// cars.drive();
// cars.info();
// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
// let cinderellaOlena = new Cinderella('Olena', 21, 36);
// let cinderellaVika = new Cinderella('Vika', 22, 37)
// let cinderellaPenelopa = new Cinderella('Penelopa', 20, 34);
// let cinderellaKatia = new Cinderella('Katia', 18, 35);
// let cinderellaLina = new Cinderella('Lina', 21, 36);
// let cinderellaNata = new Cinderella('Nata', 19, 35);
// let cinderellaMaria = new Cinderella('Maria', 21, 37);
// let cinderellaLana = new Cinderella('Lana', 23, 38);
// let cinderellaMira = new Cinderella('Mira', 28, 36);
// let cinderellaOlia = new Cinderella('Olia', 27, 35);
// let users = [cinderellaOlena, cinderellaVika, cinderellaPenelopa,
//     cinderellaKatia, cinderellaLina, cinderellaNata, cinderellaMaria,
//     cinderellaLana, cinderellaMira, cinderellaOlia
// ];
// class Prince {
//     constructor(name, age, shoeSize) {
//         this.name = name;
//         this.age = age;
//         this.shoeSize = shoeSize;
//         this.cinderellaWhichYouNeed = function(users) {
//             for (let i = 0; i < users.length; i++) {
//                 if (users[i].footSize === this.shoeSize) {
//                     console.log(`Prince ${princeMan.name}, you need cinderella, which name is  ${users[i].name}`);
//                 }
//             }
//         }
//     }
// }
// let princeMan = new Prince('Barik', 30, 34)
// princeMan.cinderellaWhichYouNeed(users)
// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================
// function Cinderella(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }

// let cinderellaOlena = new Cinderella('Olena', 21, 36);
// let cinderellaVika = new Cinderella('Vika', 22, 37)
// let cinderellaPenelopa = new Cinderella('Penelopa', 20, 34);
// let cinderellaKatia = new Cinderella('Katia', 18, 35);
// let cinderellaLina = new Cinderella('Lina', 21, 36);
// let cinderellaNata = new Cinderella('Nata', 19, 35);
// let cinderellaMaria = new Cinderella('Maria', 21, 37);
// let cinderellaLana = new Cinderella('Lana', 23, 46);
// let cinderellaMira = new Cinderella('Mira', 28, 36);
// let cinderellaOlia = new Cinderella('Olia', 27, 35);
// let users = [cinderellaOlena, cinderellaVika, cinderellaPenelopa,
//     cinderellaKatia, cinderellaLina, cinderellaNata, cinderellaMaria,
//     cinderellaLana, cinderellaMira, cinderellaOlia
// ];
// let princeMan = new Prince('Barik', 30, 46);

// function Prince(name, age, shoeSize) {
//     this.name = name;
//     this.age = age;
//     this.shoeSize = shoeSize;
//     this.searchForcinderella = function(users) {
//         for (let i = 0; i < users.length; i++) {

//             if (users[i].footSize === this.shoeSize) {
//                 console.log(`Prince ${princeMan.name}, you need cinderella, which name is  ${users[i].name}`);
//             }
//         }
//     }
// }
// princeMan.searchForcinderella(users)
//