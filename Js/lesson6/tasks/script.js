// -создать массив с 20 числами..
//     --при помощи метода sort и колбека отсортировать массив.
// let numbers = [2, 4, 3, 5, 11, 32, 54, 35, 42, 15, 46, 1, 0, 67, 59, 43, 51, 15, 26, 38];
// numbers.sort((a, b) => {

//     return a - b;
// });
// console.log(numbers);
//     --при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// let numbers = [2, 4, 3, 5, 11, 32, 54, 35, 42, 15, 46, 1, 0, 67, 59, 43, 51, 15, 26, 38];
// numbers.sort((a, b) => {
//     return b - a;
// });
// console.log(numbers);
//     --при помощи filter получить числа кратные 3
// let numbers = [2, 4, 3, 5, 11, 32, 54, 35, 42, 15, 46, 1, 0, 67, 59, 43, 51, 15, 26, 38];
// let filterNumbers = numbers.filter(value => !(value % 3));
// console.log(filterNumbers);
//     --при помощи filter получить числа кратные 10
// let numbers = [2, 4, 3, 5, 11, 32, 54, 35, 42, 15, 46, 1, 0, 67, 59, 43, 51, 15, 100, 38];
// let filterNumbers = numbers.filter(value => !(value % 10));
// console.log(filterNumbers);
//     --перебрать(проитерировать) массив при помощи foreach()
// let numbers = [2, 4, 3, 5, 11, 32, 54, 35, 42, 15, 46, 1, 0, 67, 59, 43, 51, 15, 100, 38];
// numbers.forEach(element => {
//     console.log(element);
// });
//     --перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let numbers = [2, 4, 3, 5, 11, 32, 54, 35, 42, 15, 46, 1, 0, 67, 59, 43, 51, 15, 100, 38];
// let mapNumbers = numbers.map((value) => {
//     return value * 3
// })
// console.log(mapNumbers);
// ---------------------------------------------------------------------------
//     -создать массив со словами на 15 - 20 элементов.
//     --отсортировать его по алфавиту в восходящем порядке.
// let words = ['АННА', 'СОФІЯ', 'МАРІЯ', 'ВЕРОНІКА', 'ВІКТОРІЯ', 'АНАСТАСІЯ', 'ЕМІЛІЯ',
//     'ЯНА', 'Єва', 'ЗЛАТА', 'СОЛОМІЯ', 'МЕЛАНІЯ', 'ДАРИНА', 'МІЛАНА', 'АНГЕЛІНА'
// ];
// let newWords = words.sort((a, b) => a.localeCompare(b))
// console.log(newWords);
//     --отсортировать его по алфавиту в нисходящем порядке.
// let words = ['АННА', 'СОФІЯ', 'МАРІЯ', 'ВЕРОНІКА', 'ВІКТОРІЯ', 'АНАСТАСІЯ', 'ЕМІЛІЯ',
//     'ЯНА', 'Єва', 'ЗЛАТА', 'СОЛОМІЯ', 'МЕЛАНІЯ', 'ДАРИНА', 'МІЛАНА', 'АНГЕЛІНА'
// ];
// let newWords = words.sort((a, b) => b.localeCompare(a))
// console.log(newWords);
//     --отфильтровать слова длиной менее 4 х символов
// let words = ['АННА', 'СОФІЯ', 'МАРІЯ', 'ВЕРОНІКА', 'ВІКТОРІЯ', 'АНАСТАСІЯ', 'ЕМІЛІЯ',
//     'ЯНА', 'МАРТА', 'ЗЛАТА', 'СОЛОМІЯ', 'МЕЛАНІЯ', 'ДАРИНА', 'МІЛАНА', 'АНГЕЛІНА'
// ];
// let result = words.filter(word => word.length < 4);
// console.log(result);
//     --перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!"
// в конце
// let words = ['АННА', 'СОФІЯ', 'МАРІЯ', 'ВЕРОНІКА', 'ВІКТОРІЯ', 'АНАСТАСІЯ', 'ЕМІЛІЯ',
//     'ЯНА', 'МАРТА', 'ЗЛАТА', 'СОЛОМІЯ', 'МЕЛАНІЯ', 'ДАРИНА', 'МІЛАНА', 'АНГЕЛІНА'
// ];
// let result = words.map(word => word + '!')
// console.log(result);
// Все робити через функції масивів(foreach, map...тд)
// Дан масив:
// let users = [
//     { name: 'vasya', age: 31, status: false },
//     { name: 'petya', age: 30, status: true },
//     { name: 'kolya', age: 29, status: true },
//     { name: 'olya', age: 28, status: false },
//     { name: 'max', age: 30, status: true },
//     { name: 'anya', age: 31, status: false },
//     { name: 'oleg', age: 28, status: false },
//     { name: 'andrey', age: 29, status: true },
//     { name: 'masha', age: 30, status: true },
//     { name: 'olya', age: 31, status: false },
//     { name: 'max', age: 31, status: true }
// ];

// відсортувати його за віком(зростання, а потім окремо спадання) -
// let users = [
//     { name: 'vasya', age: 31, status: false },
//     { name: 'petya', age: 30, status: true },
//     { name: 'kolya', age: 29, status: true },
//     { name: 'olya', age: 28, status: false },
//     { name: 'max', age: 30, status: true },
//     { name: 'anya', age: 31, status: false },
//     { name: 'oleg', age: 28, status: false },
//     { name: 'andrey', age: 29, status: true },
//     { name: 'masha', age: 30, status: true },
//     { name: 'olya', age: 31, status: false },
//     { name: 'max', age: 31, status: true }
// ];
// users.sort((a, b) => {
//     return a.age - b.age
// })
// console.log(users);
// // --------------------------------------------------------------
// let users = [
//     { name: 'vasya', age: 31, status: false },
//     { name: 'petya', age: 30, status: true },
//     { name: 'kolya', age: 29, status: true },
//     { name: 'olya', age: 28, status: false },
//     { name: 'max', age: 30, status: true },
//     { name: 'anya', age: 31, status: false },
//     { name: 'oleg', age: 28, status: false },
//     { name: 'andrey', age: 29, status: true },
//     { name: 'masha', age: 30, status: true },
//     { name: 'olya', age: 31, status: false },
//     { name: 'max', age: 31, status: true }
// ];
// users.sort((a, b) => {
//     return b.age - a.age
// })
// console.log(users);
// console.log(sortResult);
//     відсортувати його за кількістю знаків в імені(зростання, а потім окремо спадання) -
// let users = [
//     { name: 'vasya', age: 31, status: false },
//     { name: 'petya', age: 30, status: true },
//     { name: 'kolya', age: 29, status: true },
//     { name: 'olya', age: 28, status: false },
//     { name: 'max', age: 30, status: true },
//     { name: 'anya', age: 31, status: false },
//     { name: 'oleg', age: 28, status: false },
//     { name: 'andrey', age: 29, status: true },
//     { name: 'masha', age: 30, status: true },
//     { name: 'olya', age: 31, status: false },
//     { name: 'max', age: 31, status: true }
// ];
// users.sort((a, b) => {
//     return a.name.length - b.name.length
// })
// console.log(users);

// -------------------------------------------------------------------
// let users = [
//     { name: 'vasya', age: 31, status: false },
//     { name: 'petya', age: 30, status: true },
//     { name: 'kolya', age: 29, status: true },
//     { name: 'olya', age: 28, status: false },
//     { name: 'max', age: 30, status: true },
//     { name: 'anya', age: 31, status: false },
//     { name: 'oleg', age: 28, status: false },
//     { name: 'andrey', age: 29, status: true },
//     { name: 'masha', age: 30, status: true },
//     { name: 'olya', age: 31, status: false },
//     { name: 'max', age: 31, status: true }
// ];
// users.sort((a, b) => {
//         return b.name.length - a.name.length
//     })
//     console.log(users);
//     пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор(По якому принципу його створювати - ваше рішення), та зберегти це в новий масив(первинний масив залишиться без змін) -
//     відсортувати його за індентифікатором
// let users = [
//     { name: 'vasya', age: 31, status: false },
//     { name: 'petya', age: 30, status: true },
//     { name: 'kolya', age: 29, status: true },
//     { name: 'olya', age: 28, status: false },
//     { name: 'max', age: 30, status: true },
//     { name: 'anya', age: 31, status: false },
//     { name: 'oleg', age: 28, status: false },
//     { name: 'andrey', age: 29, status: true },
//     { name: 'masha', age: 30, status: true },
//     { name: 'olya', age: 31, status: false },
//     { name: 'max', age: 31, status: true }
// ];
// let usersWithId = users.map((object, index) => {
//     object.id = index + 1
//     return object
// })
// usersWithId.sort((a, b) => {
//     return b.id - a.id
// })
// console.log(usersWithId);
// --наисать функцию калькулятора с 2 мя числами и колбеком
// function Calculalate(a, b, callback) {
//     console.log(callback(a, b));
// }
// Calculalate(10, 20, function(a, b) {
//     return a * b;
// });

// --наисать функцию калькулятора с 3 мя числами и колбеком
// function Calculalate(a, b, c, callback) {
//     console.log(callback(a, b, c));
// }
// Calculalate(10, 20, 30, function(a, b, c) {
//     return a * b + c;
// });
//     ===
//     === === === === === === === === === === === === === ===
//     ===
//     === === === === === === === === === === === === === ===
//     ===
//     === === === = КЛАССНАЯ РАБОТА === === === === === ==
//     ===
//     === === === === === === === === === === === === === ===
//     ===
//     === === === === === === === === === === === === === ===




//     let cars = [{ producer: "subaru", model: "wrx", year: 2010, color: "blue", type: "sedan", engine: "ej204x", volume: 2, power: 400 }, { producer: "subaru", model: "legacy", year: 2007, color: "silver", type: "sedan", engine: "ez30", volume: 3, power: 250 }, { producer: "subaru", model: "tribeca", year: 2011, color: "white", type: "jeep", engine: "ej20", volume: 2, power: 300 }, { producer: "subaru", model: "leone", year: 1998, color: "yellow", type: "sedan", engine: "ez20x", volume: 2, power: 140 }, { producer: "subaru", model: "impreza", year: 2014, color: "red", type: "sedan", engine: "ej204x", volume: 2, power: 200 }, { producer: "subaru", model: "outback", year: 2014, color: "red", type: "hachback", engine: "ej204", volume: 2, power: 165 }, { producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120 }, { producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120 }, { producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350 }, { producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180 }, { producer: "mercedes", model: "e200", year: 1990, color: "silver", type: "sedan", engine: "eng200", volume: 2, power: 180 }, { producer: "mercedes", model: "e63", year 2017, color: "yellow", type: "sedan", engine: "amg63", volume: 3, power: 400 }, { producer: "mercedes", model: "c250", year: 2017, color: "red", type: "sedan", engine: "eng25", volume: 2.5, power: 230 }];
// Відфільтрувати масив за наступними крітеріями:
//     -двигун більше 3 х літрів -
//     двигун = 2 л -
//     виробник мерс -
//     двигун більше 3 х літрів + виробник мерседес -
//     двигун більше 3 х літрів + виробник субару -
//     сили більше ніж 300 -
//     сили більше ніж 300 + виробник субару -
//     мотор серіі ej -
//     сили більше ніж 300 + виробник субару + мотор серіі ej -
//     двигун меньше 3 х літрів + виробник мерседес -
//     двигун більше 2 л + сили більше 250 -
//     сили більше 250 + виробник бмв
// let cars = [
//     { producer: "subaru", model: "wrx", year: 2010, color: "blue", type: "sedan", engine: "ej204x", volume: 2, power: 400 },
//     { producer: "subaru", model: "legacy", year: 2007, color: "silver", type: "sedan", engine: "ez30", volume: 3, power: 250 },
//     { producer: "subaru", model: "tribeca", year: 2011, color: "white", type: "jeep", engine: "ej20", volume: 2, power: 300 },
//     { producer: "subaru", model: "leone", year: 1998, color: "yellow", type: "sedan", engine: "ez20x", volume: 2, power: 140 },
//     { producer: "subaru", model: "impreza", year: 2014, color: "red", type: "sedan", engine: "ej204x", volume: 2, power: 200 },
//     { producer: "subaru", model: "outback", year: 2014, color: "red", type: "hachback", engine: "ej204", volume: 2, power: 165 },
//     { producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120 },
//     { producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120 },
//     { producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350 },
//     { producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180 },
//     { producer: "mercedes", model: "e200", year: 1990, color: "silver", type: "sedan", engine: "eng200", volume: 2, power: 180 },
//     { producer: "mercedes", model: "e63", year: 2017, color: "yellow", type: "sedan", engine: "amg63", volume: 3, power: 400 },
//     { producer: "mercedes", model: "c250", year: 2017, color: "red", type: "sedan", engine: "eng25", volume: 2.5, power: 230 }
// ];

// let newCars = cars.filter(car => car.volume > 3);
// console.log(newCars);
// let newCars = cars.filter(car => car.volume === 2);
// console.log(newCars);
// let findMercedes = cars.filter(car => car.producer === 'mercedes');
// console.log(findMercedes);
// let findMercedesWithVolume = cars.filter(car =>car.producer === 'mercedes' && car.volume === 3);
// console.log(findMercedesWithVolume);
// let findSubaruWithVolume = cars.filter(car =>car.producer === 'subaru' && car.volume === 3);
//   console.log(findSubaruWithVolume);
// let newCars = cars.filter(car => car.power > 300);
// console.log(newCars);
// let newCars = cars.filter(car => car.power > 300 && car.producer === 'subaru' );
// console.log(newCars);
// let newCars = cars.filter(car => car.engine.toLowerCase().startsWith('ej'));
// console.log(newCars);
// let newCars = cars.filter(car => car.engine.toLowerCase().startsWith('ej') && car.power > 300 && car.producer ==='subaru' );
// console.log(newCars);
// let newCars = cars.filter(car =>  car.volume < 3 && car.producer ==='mercedes' );
// console.log(newCars);
// let newCars = cars.filter(car =>  car.volume >2 && car.power > 250 );
// console.log(newCars);
// let newCars = cars.filter(car =>  car.producer ==='bmw'  && car.power > 250 );
// console.log(newCars);
//     -
//     взять слдующий массив
// let usersWithAddress = [{ id: 1, name: 'vasya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } }, { id: 2, name: 'petya', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 1 } }, { id: 3, name: 'kolya', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } }, { id: 4, name: 'olya', age: 28, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 90 } }, { id: 5, name: 'max', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 115 } }, { id: 6, name: 'anya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 2 } }, { id: 7, name: 'oleg', age: 28, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 22 } }, { id: 8, name: 'andrey', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 43 } }, { id: 9, name: 'masha', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 12 } }, { id: 10, name: 'olya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } }, { id: 11, name: 'max', age: 31, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } }];
// --отсортировать его по id пользователей
// --отсортировать его по id пользователей в обратном опрядке
// --отсортировать его по возрасту пользователей
// --отсортировать его по возрасту пользователей в обратном порядке
// --отсортировать его по имени пользователей
// --отсортировать его по имени пользователей в обратном порядке
// --отсортировать его по названию улицы в алфавитном порядке
// --отсортировать его по номеру дома по возрастанию
// --отфильтровать(оставить) тех кто младше 30
//     --отфильтровать(оставить) тех у кого отрицательный статус
//     --отфильтровать(оставить) тех у кого отрицательный статус и младше 30 лет
//     --отфильтровать(оставить) тех у кого номер дома четный
// let usersWithAddress = [
//     { id: 1, name: 'vasya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
//     { id: 2, name: 'petya', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 1 } },
//     { id: 3, name: 'kolya', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } },
//     { id: 4, name: 'olya', age: 28, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 90 } },
//     { id: 5, name: 'max', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 115 } },
//     { id: 6, name: 'anya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 2 } },
//     { id: 7, name: 'oleg', age: 28, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 22 } },
//     { id: 8, name: 'andrey', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 43 } },
//     { id: 9, name: 'masha', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 12 } },
//     { id: 10, name: 'olya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
//     { id: 11, name: 'max', age: 31, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } }
// ];
// console.log(usersWithAddress.sort((a,b)=> b.id-a.id));
// console.log(usersWithAddress.sort((a,b)=> a.id - b.id));
// console.log(usersWithAddress.sort((a, b) => a.age - b.age));
// console.log(usersWithAddress.sort((a, b) => b.age - a.age));
// console.log(usersWithAddress.sort((a, b) => b.name < a.name ? 1 : -1));
// console.log(usersWithAddress.sort((a, b) => a.name < b.name ? 1 : -1));
// console.log(usersWithAddress.sort((a, b) => a.address.street < b.address.street ? 1 : -1));
// console.log(usersWithAddress.sort((a, b) => a.address.number - b.address.number));
// let usersSmallerThirty = usersWithAddress.filter(user => user.age < 30);
// console.log(usersSmallerThirty);
// let usersWithFalseStatus = usersWithAddress.filter(user => user.status === false);
// console.log(usersWithFalseStatus);
// let usersSmallerThirtyStatusFalse = usersWithAddress.filter(user => user.status === false && user.age < 30);
// console.log(usersSmallerThirtyStatusFalse);
// let usersHouseNumber = usersWithAddress.filter((user) => {
//     if (user.address.number % 2 === 0) {
//         return user
//     }
// });
// console.log(usersHouseNumber);
//     ===
//     === === === === === === === ===
//     ===
//     === ДОПОЛНИТЕЛЬНО === === ==
//     ===
//     === === === === === === === ===

//     Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10 % (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв(переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку(цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10 % та ціну на 5 %
//     Після того зробити перевірку досвіду ВСІХ наших водіїв.Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// let cars = [
//     { brand: 'bmw', enginePower: 3.2, owner: { name: 'Petia', age: 22, experience: 2 }, price: 15000, year: 2006 },
//     { brand: 'mazda', enginePower: 2.2, owner: { name: 'Vasia', age: 24, experience: 3 }, price: 17000, year: 2005 },
//     { brand: 'suzuki', enginePower: 1.5, owner: { name: 'Kolia', age: 52, experience: 22 }, price: 13000, year: 2008 },
//     { brand: 'reno', enginePower: 2.4, owner: { name: 'Maks', age: 46, experience: 14 }, price: 18000, year: 2003 },
//     { brand: 'vw', enginePower: 3.6, owner: { name: 'Angey', age: 21, experience: 4 }, price: 22000, year: 2014 },
//     { brand: 'ford', enginePower: 2.0, owner: { name: 'Oleg', age: 18, experience: 1 }, price: 26000, year: 2015 },
//     { brand: 'zaz', enginePower: 1.2, owner: { name: 'Roman', age: 19, experience: 1 }, price: 6000, year: 2002 },
//     { brand: 'kraz', enginePower: 6.0, owner: { name: 'Rostik', age: 27, experience: 5 }, price: 12000, year: 2012 },
// ];
// let newDrivers = ['Saha', 'Maria', 'Sofia', 'Abdul']



// function newDriver(cars, drivers) {
//     for (let i = 0; i < cars.length; i = i + 2) {
//         cars[i].enginePower = cars[i].enginePower * 1.1
//         cars[i].enginePower = cars[i].enginePower.toFixed(2)
//         cars[i].owner.name = drivers[i];
//     }

// }
// newDriver(cars, newDrivers)
// console.log(cars);
// for (let i = 0; i < cars.length; i = i + 2) {
//     cars[i].enginePower = cars[i].enginePower * 1.1
//     cars[i].enginePower = cars[i].enginePower.toFixed(2)
//     cars[i].price = cars[i].price * 1.05

// }
// cars.forEach(element => {
//     if (element.owner.experience < 5 || element.owner.age>25 ) {
//         element.owner.experience = element.owner.experience + 1;
//     }

// });
// let sumPricesOfCar = cars.reduce((acc, curr) => {
//     return acc + curr.price
// }, 0)
// console.log(sumPricesOfCar);
// console.log(cars);
// ------------------------------------------------------
// Задача: дан отсортированный по возрастанию массив целых чисел.
// Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr— массив целых чисел значения которых по модулю не больше 10.
//  Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента.
// Если такого элемента нет в массиве, выведите - 1.

// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

// let arrayOfNumbers = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];

// function searching(number, array) {
//     let MinIndex = array.indexOf(number)
//     let MaxIndex = array.lastIndexOf(number)
//     console.log(`MinIndex:`, MinIndex);
//     console.log(`MaxIndex:`, MaxIndex);

// }
// searching(1, arrayOfNumbers)
// searching(4, arrayOfNumbers)