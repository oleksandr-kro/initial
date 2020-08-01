// Треба реалізувати свій розпорядок дня. 
// Колбеками, промісами та асинк авейт.

// В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання. 
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби 
// і т.д.

// Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають. 
// Якщо ж все ок, то ви маєте прожити свій звичайний день.
// Кожна подія має бути з рандомною (не по зростанню) затримкою.
// let energy = 80;

// function checkCondition() {
//     return Math.random() >= 0.1;
// }

// function randomEnergy() {
//     return Math.floor(Math.random() * (Math.random() * 50));
// }

// function wakeUp(energy) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (energy) {
//                 energy = energy - randomEnergy();
//                 let water = checkCondition();
//                 if (water) {
//                     console.log('You are waked up. Your energy is: ' + energy);
//                     resolve(energy);
//                 } else {
//                     reject('No water no life')
//                 }
//             } else {
//                 reject('You are exhausted, go to bed. Your energy is: ' + energy);
//             }
//         }, 1500)
//     });

// };


// function cleaningFace(energy) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (energy) {
//                 energy = energy - randomEnergy();
//                 let queue = checkCondition();
//                 if (queue) {
//                     console.log('You had clean your face. Your energy is: ' + energy);
//                     resolve(energy);
//                 } else {
//                     reject('You need to get up first');
//                 }
//             } else {
//                 reject('You are exhausted, go to bed. Your energy is: ' + energy);
//             }
//         }, 1200)
//     });

// };


// function cleanTeeth(energy) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (energy) {
//                 energy = energy - randomEnergy();
//                 let toothpaste = checkCondition();
//                 if (toothpaste) {
//                     console.log('You had cleanned your teeth. Your energy is: ' + energy);
//                     resolve(energy);
//                 } else {
//                     reject('No toothpaste no clean teeth');
//                 }
//             } else {
//                 reject('You are exhausted, go to bed. Your energy is: ' + energy);
//             }
//         }, 1400)
//     });

// };


// function makeBreakfast(energy) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (energy) {
//                 energy = energy - randomEnergy();
//                 let grocery = checkCondition();
//                 if (grocery) {
//                     console.log('You had made breakfast. Your energy is: ' + energy);
//                     resolve(energy)
//                 } else {
//                     reject('no food no mood');
//                 }
//             } else {
//                 reject('You are exhausted, go to bed. Your energy is: ' + energy);
//             }
//         }, 1600)
//     });

// };


// function eatBreakfast(energy) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (energy) {
//                 energy = energy + randomEnergy();
//                 let fork = checkCondition();
//                 if (fork) {
//                     console.log('You had ate your breakfast. Your energy is: ' + energy);
//                     resolve(energy)
//                 } else {
//                     reject('You cannot use chopsticks');
//                 }
//             } else {
//                 reject('You are exhausted, go to bed. Your energy is: ' + energy);
//             }
//         }, 1800)
//     });

// };

// function eatLunch(energy) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (energy) {
//                 energy = energy + randomEnergy();
//                 let hadBreakfast = checkCondition();
//                 if (hadBreakfast) {
//                     console.log('You had ate your lunch. Your energy is: ' + energy);
//                     resolve(energy)
//                 } else {
//                     reject('no breakfast no lunch');
//                 }
//             } else {
//                 reject('You are exhausted, go to bed. Your energy is: ' + energy);
//             }
//         }, 1900)
//     });
// };

// function eatDiner(energy) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (energy) {
//                 energy = energy + randomEnergy();
//                 let hadLunch = checkCondition();
//                 if (hadLunch) {
//                     console.log('You had ate your dinner. Your energy is: ' + energy);
//                     resolve(energy)
//                 } else {
//                     reject('No lunch no diner');
//                 }
//             } else {
//                 reject('You are exhausted, go to bed. Your energy is: ' + energy);
//             }
//         }, 1400)
//     });
// };

// function goToBed(energy) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (energy) {
//                 energy -= energy;
//                 let girl = checkCondition();
//                 if (girl) {
//                     console.log('You sleep with your girlfriend. Your energy is: ' + energy);
//                     resolve(energy)
//                 } else {
//                     reject('No money no funny honey bunny');
//                 }
//             } else {
//                 reject(new Error('You are exhausted, go to bed. Your energy is: ' + energy));
//             }
//         }, 1800)
//     });
// };

// async function myRegularDay(energy) {
//     try {
//         let wakeUpEnergy = await wakeUp(energy)
//         let cleaningFaceEnergy = await cleaningFace(wakeUpEnergy);
//         let cleanTeethEnergy = await cleanTeeth(cleaningFaceEnergy);
//         let makeBreakfastEnergy = await makeBreakfast(cleanTeethEnergy);
//         let eatBreakfastEnergy = await eatBreakfast(makeBreakfastEnergy);
//         let eatLunchEnergy = await eatLunch(eatBreakfastEnergy);
//         let eatDinerEnergy = await eatDiner(eatLunchEnergy);
//         let goToBedEnergy = await goToBed(eatDinerEnergy);
//         console.log('Your energy at the end of the day is ' + goToBedEnergy)
//     } catch (error) {
//         console.log(error);
//     }

// }
// myRegularDay(energy);

// -----------------------------2-------------------------------------------------
// Значить так. #task 
// Необхіжно реалізувати друкарську машинку.
// У вас є інпут. Ви в нього ввожите якусь слово і тицькаєте кнопку "друкувати".

// Після того як ви тикнули кнопку вам необхідно запустити функцію яка буде друкувтаи на строніці то, шо ви ввели по одній букві з рандомною затримкою від 0.1 до 0.5 секунд. 
// Тим самим симулюючи друкування цього тексту реальною людиною.
// НА КОЖНУ БУКВА РІЗНА ЗАТРИМКА !
// let btn = document.getElementById('btn');
// let inputText = document.getElementById('text');
// let textAreaValue = document.createElement('div');
// textAreaValue.id = 'written-text';
// let previousValue = '';

// document.body.appendChild(textAreaValue);

// document.querySelector('#text').onkeydown = function(event) {
//     if (event.keyCode === 13) {
//         document.querySelector('#btn').click();
//     }
// }

// function timeout(letter) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log(letter);
//             resolve(letter)
//         }, (Math.random() * (500 - 100) + 100));
//     })
// }

// btn.onclick = async(e) => {
//     let newSymbolArray = [];
//     if (previousValue && inputText.value.indexOf(previousValue) === 0) {
//         newSymbolArray = inputText.value.slice(previousValue.length).split('');
//     } else {
//         textAreaValue.innerHTML = '';
//         newSymbolArray = inputText.value.split('');
//     }
//     for (let letter of newSymbolArray) {
//         textAreaValue.innerHTML += await timeout(letter);
//     }
//     previousValue = inputText.value;
// }