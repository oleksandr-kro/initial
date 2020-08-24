// - створити функцію яка виводить масив
// function data(array) {
//     console.log(array);
// }
// data([22, 341, 5432, 'Lorem', true])
// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// function data(arr) {

//     for (i = 0; arr.length < 20; i++) {
//         arr.push(Math.floor((Math.random() * 300) + 10));
//     }
//     console.log(arr);

// }
// data([])

// - створити функцію яка приймає три числа та виводить та повертає найменьше.
// function minimator() {
//     let min = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] < min) {
//             min = arguments[i]
//         }
//     }
//     console.log(min);
// }
// let minimal = minimator(2, 32, 12, 1, -32, 56, 24, 86)



// - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function Maximator() {
//     let max = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             max = arguments[i]
//         }
//     }
//     console.log(max);
// }
// let minimal = Maximator(2, 32, 12, 1, -32, 56, 24, 86)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function minimatorMaximator() {
//
//     let min = arguments[0];
//     let max = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] < min) {
//             min = arguments[i]
//         }
//         if (arguments[i] > min) {
//             max = arguments[i]
//         }
//     }
//     console.log(max + 'MAX');
//     return min
// }
// let minimal = minimatorMaximator(2, 32, 12, 1, -32, 56, 24, 86)
// console.log(minimal);

// - створити функцію яка виводить масив
// function data(array) {
//     console.log(array);
// }
// data([22, 341, 5432, 'Lorem', true])
// - створити функцію яка повертає найбільше число з масиву


// function data(array) {
//     let max = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i]


//         }
//     }
//     console.log(max);
// }
// data([22, 341, 5432, 11, 2, 5, 34, 44, 65, 43, 1])

// - створити функцію яка повертає найменьше число з масиву

// function data(array) {
//     let min = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < min) {
//             min = array[i]


//         }
//     }
//     console.log(min);
// }
// data([22, 341, 5432, 11, 2, 5, 34, 44, 65, 43, 1])

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

// function sumator(array) {
//     let sum = array[0] + array[1] + array[2] + array[3] + array[4] + array[5] + array[6] + array[7] + array[8]
//     console.log(sum);
// }
// sumator([22, 341, 5432, 1, 4, 24, 532, 12, 432])

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function sumator(array) {
//     let sum = (array[0] + array[1] + array[2] + array[3] + array[4] + array[5] + array[6] + array[7] + array[8]) / array.length
//     console.log(sum);
// }
// sumator([22, 341, 5432, 1, 4, 24, 532, 12, 432])

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// function data(array) {
//     for (const key in array) {
//         console.log(key.length);
//     }


// }
// data(
//         [{
//                 "id": 1,
//                 "name": "Leanne Graham",
//                 "username": "Bret",
//                 "email": "Sincere@april.biz",
//                 "address": {
//                     "street": "Kulas Light",
//                     "suite": "Apt. 556",
//                     "city": "Gwenborough",
//                     "zipcode": "92998-3874",
//                     "geo": {
//                         "lat": "-37.3159",
//                         "lng": "81.1496"
//                     }
//                 },
//                 "phone": "1-770-736-8031 x56442",
//                 "website": "hildegard.org",
//                 "company": {
//                     "name": "Romaguera-Crona",
//                     "catchPhrase": "Multi-layered client-server neural-net",
//                     "bs": "harness real-time e-markets"
//                 }
//             },
//             {
//                 "id": 2,
//                 "name": "Ervin Howell",
//                 "username": "Antonette",
//                 "email": "Shanna@melissa.tv",
//                 "address": {
//                     "street": "Victor Plains",
//                     "suite": "Suite 879",
//                     "city": "Wisokyburgh",
//                     "zipcode": "90566-7771",
//                     "geo": {
//                         "lat": "-43.9509",
//                         "lng": "-34.4618"
//                     }
//                 },
//                 "phone": "010-692-6593 x09125",
//                 "website": "anastasia.net",
//                 "company": {
//                     "name": "Deckow-Crist",
//                     "catchPhrase": "Proactive didactic contingency",
//                     "bs": "synergize scalable supply-chains"
//                 }
//             },
//             {
//                 "id": 3,
//                 "name": "Clementine Bauch",
//                 "username": "Samantha",
//                 "email": "Nathan@yesenia.net",
//                 "address": {
//                     "street": "Douglas Extension",
//                     "suite": "Suite 847",
//                     "city": "McKenziehaven",
//                     "zipcode": "59590-4157",
//                     "geo": {
//                         "lat": "-68.6102",
//                         "lng": "-47.0653"
//                     }
//                 },
//                 "phone": "1-463-123-4447",
//                 "website": "ramiro.info",
//                 "company": {
//                     "name": "Romaguera-Jacobson",
//                     "catchPhrase": "Face to face bifurcated interface",
//                     "bs": "e-enable strategic applications"
//                 }
//             },
//             {
//                 "id": 4,
//                 "name": "Patricia Lebsack",
//                 "username": "Karianne",
//                 "email": "Julianne.OConner@kory.org",
//                 "address": {
//                     "street": "Hoeger Mall",
//                     "suite": "Apt. 692",
//                     "city": "South Elvis",
//                     "zipcode": "53919-4257",
//                     "geo": {
//                         "lat": "29.4572",
//                         "lng": "-164.2990"
//                     }
//                 },
//                 "phone": "493-170-9623 x156",
//                 "website": "kale.biz",
//                 "company": {
//                     "name": "Robel-Corkery",
//                     "catchPhrase": "Multi-tiered zero tolerance productivity",
//                     "bs": "transition cutting-edge web services"
//                 }
//             },
//             {
//                 "id": 5,
//                 "name": "Chelsey Dietrich",
//                 "username": "Kamren",
//                 "email": "Lucio_Hettinger@annie.ca",
//                 "address": {
//                     "street": "Skiles Walks",
//                     "suite": "Suite 351",
//                     "city": "Roscoeview",
//                     "zipcode": "33263",
//                     "geo": {
//                         "lat": "-31.8129",
//                         "lng": "62.5342"
//                     }
//                 },
//                 "phone": "(254)954-1289",
//                 "website": "demarco.info",
//                 "company": {
//                     "name": "Keebler LLC",
//                     "catchPhrase": "User-centric fault-tolerant solution",
//                     "bs": "revolutionize end-to-end systems"
//                 }
//             },
//             {
//                 "id": 6,
//                 "name": "Mrs. Dennis Schulist",
//                 "username": "Leopoldo_Corkery",
//                 "email": "Karley_Dach@jasper.info",
//                 "address": {
//                     "street": "Norberto Crossing",
//                     "suite": "Apt. 950",
//                     "city": "South Christy",
//                     "zipcode": "23505-1337",
//                     "geo": {
//                         "lat": "-71.4197",
//                         "lng": "71.7478"
//                     }
//                 },
//                 "phone": "1-477-935-8478 x6430",
//                 "website": "ola.org",
//                 "company": {
//                     "name": "Considine-Lockman",
//                     "catchPhrase": "Synchronised bottom-line interface",
//                     "bs": "e-enable innovative applications"
//                 }
//             },
//             {
//                 "id": 7,
//                 "name": "Kurtis Weissnat",
//                 "username": "Elwyn.Skiles",
//                 "email": "Telly.Hoeger@billy.biz",
//                 "address": {
//                     "street": "Rex Trail",
//                     "suite": "Suite 280",
//                     "city": "Howemouth",
//                     "zipcode": "58804-1099",
//                     "geo": {
//                         "lat": "24.8918",
//                         "lng": "21.8984"
//                     }
//                 },
//                 "phone": "210.067.6132",
//                 "website": "elvis.io",
//                 "company": {
//                     "name": "Johns Group",
//                     "catchPhrase": "Configurable multimedia task-force",
//                     "bs": "generate enterprise e-tailers"
//                 }
//             },
//             {
//                 "id": 8,
//                 "name": "Nicholas Runolfsdottir V",
//                 "username": "Maxime_Nienow",
//                 "email": "Sherwood@rosamond.me",
//                 "address": {
//                     "street": "Ellsworth Summit",
//                     "suite": "Suite 729",
//                     "city": "Aliyaview",
//                     "zipcode": "45169",
//                     "geo": {
//                         "lat": "-14.3990",
//                         "lng": "-120.7677"
//                     }
//                 },
//                 "phone": "586.493.6943 x140",
//                 "website": "jacynthe.com",
//                 "company": {
//                     "name": "Abernathy Group",
//                     "catchPhrase": "Implemented secondary concept",
//                     "bs": "e-enable extensible e-tailers"
//                 }
//             },
//             {
//                 "id": 9,
//                 "name": "Glenna Reichert",
//                 "username": "Delphine",
//                 "email": "Chaim_McDermott@dana.io",
//                 "address": {
//                     "street": "Dayna Park",
//                     "suite": "Suite 449",
//                     "city": "Bartholomebury",
//                     "zipcode": "76495-3109",
//                     "geo": {
//                         "lat": "24.6463",
//                         "lng": "-168.8889"
//                     }
//                 },
//                 "phone": "(775)976-6794 x41206",
//                 "website": "conrad.com",
//                 "company": {
//                     "name": "Yost and Sons",
//                     "catchPhrase": "Switchable contextually-based project",
//                     "bs": "aggregate real-time technologies"
//                 }
//             },
//             {
//                 "id": 10,
//                 "name": "Clementina DuBuque",
//                 "username": "Moriah.Stanton",
//                 "email": "Rey.Padberg@karina.biz",
//                 "address": {
//                     "street": "Kattie Turnpike",
//                     "suite": "Suite 198",
//                     "city": "Lebsackbury",
//                     "zipcode": "31428-2261",
//                     "geo": {
//                         "lat": "-38.2386",
//                         "lng": "57.2232"
//                     }
//                 },
//                 "phone": "024-648-3804",
//                 "website": "ambrose.net",
//                 "company": {
//                     "name": "Hoeger LLC",
//                     "catchPhrase": "Centralized empowering task-force",
//                     "bs": "target end-to-end models"
//                 }
//             }
//         ]
//     )
//Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// let arr = [
//     { carId: 1, name: 'Reno', color: 'blue' },
//     { carId: 2, name: 'Mazda', color: 'gray' },
//     { carId: 3, name: 'Ford', color: 'white' },
//     { carId: 4, name: 'Reno', color: 'yellow' },
// ]

// function counter(aray) {
//     let counter = 0;
//     for (const iterator of aray) {
//         for (const key in iterator) {
//             counter++

//         }
//     }
//     console.log(counter);
// }

// counter(arr)
// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// function arraySum(arr1, arr2) {
//     const resultArr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         const sumOfArr = arr1[i] + arr2[i]
//         resultArr.push(sumOfArr)
//     }
//     return resultArr;
// }
// let arrSum = arraySum([0, 1, 2, 3, 4], [1, 2, 3, 4, 0])
// console.log(arrSum);

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

// function iterChange(array, i) {
//     const buffer = array[i]
//     array[i] = array[i + 1]
//     array[i + 1] = buffer
//     console.log(array);
// }
// iterChange([1, 2, 3, 4, 5, 6], 3)

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// function nullChange(array) {
//     for (let i = 0; i < array.length; i++) {
//         let newArr = [];
//         let nullArr = [];
//         if (array[i] === 0) {
//             nullArr.push(array[i])
//             console.log(newArr);
//         } else { newArr.push(array[i]) }

//     }
//     console.log(newArr);

//     return

// }
// nullChange([1, 0, 6, 0, 3])


// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

// function hello(string) {


//    let diwka =  document.createElement('div')
//    diwka.innerText = (string)
//    document.body.appendChild(diwka)

// }

// hello('Hello owu')
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

// function hello(tagElement, text) {

//    let diwka =  document.createElement(tagElement)
//    diwka.innerText = text;
//    document.body.appendChild(diwka)

// }
// hello('h1','Hello owu , I am a student')


// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// let arr = [
//     {carId:1, name: 'Reno', color:'blue'},
//     {carId:2, name: 'Mazda', color:'gray'},
//     {carId:3, name: 'Ford', color:'white'},
//     {carId:4, name: 'Reno', color:'yellow'},
// ]
// function array(cars, id) {


//    let wrapper= document.getElementById(id);
// for (let i = 0; i < cars.length; i++) {
// wrapper.innerHTML = `${cars[i].carId} ${cars[i].name} ${cars[i].color}`

// }

// }
// array(arr,"container");


// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці

// let arr = [
//     {carId:1, name: 'Reno', color:'blue'},
//     {carId:2, name: 'Mazda', color:'gray'},
//     {carId:3, name: 'Ford', color:'white'},
//     {carId:4, name: 'Reno', color:'yellow'},
// ]
// function array(cars, id) {


//    let wrapper= document.getElementById(id);
// for (let i = 0; i < cars.length; i++) {
//     let diwka = document.createElement('div')
//     let diwkaTwo = document.createElement('div')
//     let diwkalLast = document.createElement('div')
// diwka.innerHTML= cars[i].carId
// diwkaTwo.innerHTML= cars[i].name
// diwkalLast.innerHTML= cars[i].color
// wrapper.appendChild(diwka)
// wrapper.appendChild(diwkaTwo)
// wrapper.appendChild(diwkalLast)
// console.log(wrapper);



// }

// }
// array(arr,"container");


// Для кожної властивості створити всередені блока автомоблія свій блок

// let arr = [
//     {carId:1, name: 'Reno', color:'blue'},
//     {carId:2, name: 'Mazda', color:'gray'},
//     {carId:3, name: 'Ford', color:'white'},
//     {carId:4, name: 'Reno', color:'yellow'},
// ]
// function array(cars, id) {


//    let wrapper= document.getElementById(id);
// for (let i = 0; i < cars.length; i++) {
//     let diwka = document.createElement('div')
//     let diwkaTwo = document.createElement('div')
//     let diwkalLast = document.createElement('div')
// diwka.innerHTML= cars[i].carId
// diwkaTwo.innerHTML= cars[i].name
// diwkalLast.innerHTML= cars[i].color
// wrapper.appendChild(diwka)
// wrapper.appendChild(diwkaTwo)
// wrapper.appendChild(diwkalLast)
// console.log(wrapper);



// }

// }
// array(arr,"container");


// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// let usersWithId = [
//     { id: 1, name: 'vasya', age: 31, status: false },
//     { id: 2, name: 'petya', age: 30, status: true },
//     { id: 3, name: 'kolya', age: 29, status: true },
//     { id: 4, name: 'olya', age: 28, status: false },
// ];

// let citiesWithId = [
//     { user_id: 3, country: 'USA', city: 'Portland' },
//     { user_id: 1, country: 'Ukraine', city: 'Ternopil' },
//     { user_id: 2, country: 'Poland', city: 'Krakow' },
//     { user_id: 4, country: 'USA', city: 'Miami' },
// ];

// function usersPlusCities(users, cities) {
//     for (let i = 0; i < users.length; i++) {
//         for (let j = 0; j < cities.length; j++) {
//             if (users[i].id === cities[j].user_id) {
//                 users[i].address = cities[j]
//             }

//         }

//     }
//     console.log(users);


// }


// usersPlusCities(usersWithId, citiesWithId)

// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.

// let rules = document.getElementsByClassName('rules');

// function rulesTitle(rules) {
//     for (let rule of rules) {
//         let hka = rule.getElementsByTagName('h2')
//         let ulKa = document.createElement('ul')


//         for (const number of hka) {
//             let liwka = document.createElement('li')
//             liwka.innerHTML = number.innerHTML;
//             ulKa.appendChild(liwka);
//         }

//         let content = document.getElementById('content');
//         content.appendChild(ulKa);


//     }

// }

// rulesTitle(rules);

// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// let rules = [{
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },

// ];

// function rulesOfFightClub(rules) {

// }
// for (const rule of rules) {
//     let divka = document.createElement('div')
//     let divTitle = document.createElement('h2')
//     let divBody = document.createElement('p')
//     divTitle.innerHTML = `${rule.title}`
//     divBody.innerHTML = `${rule.body}`
//     divka.appendChild(divTitle)
//     divka.appendChild(divBody)
//     document.body.appendChild(divka)
// }
// rulesOfFightClub(rules)
// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!

// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій

// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]