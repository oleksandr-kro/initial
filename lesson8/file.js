// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
// ----------------------------------------1-----------------------------------------------
// let elementText = document.getElementById('text');
// elementText.oninput = () => {
//     text = elementText.value;
//     localStorage.setItem('textArea', text)


// };
// let item = localStorage.getItem('textArea')


// elementText.value = item;

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.
// ----------------------------------------2----------------------------------------------- -->

// let elementInput = document.getElementById('textinput');
// let elementInputTwo = document.getElementById('textinputtwo');
// let elementText = document.getElementById('text');
// let elementCheckbox = document.getElementById('checkboxone');
// let elementButton = document.getElementById('rdb');
// // Save text for input 1
// elementInput.oninput = () => {
//     text = elementInput.value;
//     localStorage.setItem('inputText', text)
// };
// let item = localStorage.getItem('inputText')
// elementInput.value = item;
// // Save text for input 2
// elementInputTwo.oninput = () => {
//     texttwo = elementInputTwo.value;
//     localStorage.setItem('inputTextTwo', texttwo)
// };
// let itemtwo = localStorage.getItem('inputTextTwo')
// elementInputTwo.value = itemtwo;
// // Save text for textarea
// elementText.oninput = () => {
//     textFromTextArea = elementText.value;
//     localStorage.setItem('textAreaText', textFromTextArea)
// };
// let itemFromTextArea = localStorage.getItem('textAreaText')
// elementText.value = itemFromTextArea;
// // Save checked for input
// elementCheckbox.onclick = () => { localStorage.setItem('inputValue', elementCheckbox.checked) };
// let itemTextArea = localStorage.getItem('inputValue');
// itemTextArea === 'true' ? elementCheckbox.checked = true : elementCheckbox.checked = false;
// // Save checked for rbtn 
// elementButton.onclick = () => {
//     localStorage.setItem('rbtnValue', elementButton.checked)
// };
// let itemrbtn = localStorage.getItem('rbtnValue');
// itemrbtn === 'true' ? elementButton.checked = true : elementButton.checked = false;

// ----------------------------------------3----------------------------------------------- -->

// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруютс.я" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
// let elementText = document.getElementById('text');
// let buttonSend = document.getElementById('button');
// let buttonLeft = document.getElementById('btnLeft');
// let buttonRight = document.getElementById('btnRight');
// let textSaveArray = localStorage.getItem('textArray') ? JSON.parse(localStorage.getItem('textArray')) : [];
// let counter = 0;
// buttonSend.onclick = (e) => {

//     let text = elementText.value;
//     textSaveArray.push(text);
//     localStorage.setItem('textArray', JSON.stringify(textSaveArray));
// };

// console.log(textSaveArray);





// let area = document.createElement('textarea')
// let result = document.getElementById('result')

// if (localStorage.getItem('textArray')) {
//     let index = JSON.parse(localStorage.getItem('textArray')).length - 1;
//     area.innerText = JSON.parse(localStorage.getItem('textArray'))[index];
//     counter = index;
// }


// function buildArray(index, array) {
//     area.innerText = `${array[index]}`;
//     counter = index;
// };

// result.appendChild(area)
// buttonLeft.onclick = () => {
//     if (counter >= 1) {
//         buildArray(counter - 1, textSaveArray);
//     }
// };

// buttonRight.onclick = () => {
//     if (counter <= textSaveArray.length - 2) {
//         buildArray(counter + 1, textSaveArray);
//     }
// };



// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

// Створюю форму для отримання даних
// ----------------------------------------4--------------------------------------------
// const form = document.forms.form;
// const button = form.btn;
// const content = document.getElementById('content');
// let obgEditUser = {};
// const ARRAY_USERS = 'ARRAY USERS';
// button.onclick = ev => {
//     let person = {...obgEditUser };
//     obgEditUser = {};
//     for (let i = 0; i < form.children.length; i++) {
//         const formElement = form.children[i];
//         if (formElement.name && formElement.type !== 'submit') {
//             person[formElement.name] = formElement.value;
//         }
//     }
//     if (!person.id) {
//         person.id = new Date().getTime();
//     };

//     saveUser(person);
// };

// function saveUser(user) {
//     if (localStorage.hasOwnProperty(ARRAY_USERS)) {
//         let arrayUsers = JSON.parse(localStorage.getItem(ARRAY_USERS));
//         const find = arrayUsers.find(value => value.id === user.id);
//         if (find) {

//             const filter = arrayUsers.filter(value => value.id !== user.id);
//             filter.push(user);

//             localStorage.setItem(ARRAY_USERS, JSON.stringify(filter));
//         } else {
//             arrayUsers.push(user);
//             localStorage.setItem(ARRAY_USERS, JSON.stringify(arrayUsers));
//         }

//     } else {
//         localStorage.setItem(ARRAY_USERS, JSON.stringify([user]));
//     }
// }

// function getDatafromlocalST() {
//     if (localStorage.hasOwnProperty(ARRAY_USERS)) {
//         const arrUser = JSON.parse(localStorage.getItem(ARRAY_USERS));
//         for (const user of arrUser) {
//             console.log(user);
//             content.appendChild(creatPersonDiv(user));
//         }
//     }

// };
// getDatafromlocalST();

// function creatPersonDiv(user) {
//     let container = document.createElement('div');
//     let flag = true;
//     for (const key in user) {
//         if (flag) {
//             const header = document.createElement('h3');
//             header.innerText = key + " : " + user[key];
//             container.appendChild(header);
//             flag = false;
//         } else {
//             let paragraf = document.createElement('p');
//             paragraf.innerText = key + ":" + user[key];
//             container.appendChild(paragraf);
//         }
//     }
//     container.style = "width:300px; border: 1px solid black; float: left; margin: 8px";
//     const b1 = document.createElement('button');
//     const b2 = document.createElement('button');

//     b1.innerText = 'edit';
//     b2.innerText = 'delite';
//     b1.onclick = () => {
//         editUser(user.id);
//     }
//     b2.onclick = () => {
//         deleteUser(user.id);
//     }
//     container.appendChild(b1);
//     container.appendChild(b2);
//     return container;
// }

// function deleteUser(id) {
//     const pars = JSON.parse(localStorage.getItem(ARRAY_USERS));
//     const filter = pars.filter(user => user.id !== id);
//     localStorage.setItem(ARRAY_USERS, JSON.stringify(filter));
//     location.reload();
// }

// function editUser(id) {
//     const pars = JSON.parse(localStorage.getItem(ARRAY_USERS));
//     const user = pars.find(user => user.id === id);
//     for (let i = 0; i < form.children.length; i++) {
//         const formElement = form.children[i];
//         if (formElement.name && formElement.type !== 'submit') {
//             for (const key in user) {
//                 if (formElement.name === key) {
//                     formElement.value = user[key];
//                 }
//             }
//         }
//     }
//     obgEditUser = user;
// }