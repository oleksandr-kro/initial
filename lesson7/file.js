// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let element = document.querySelector(`#text`)
// element.onclick = () => {
//         element.style.display = 'none'
//     }
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let elementForm = document.forms.search
// let elementButton = elementForm.send

// elementButton.onclick = (ev) => {
//     ev.preventDefault();
//     elementButton.style.display = 'none'
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
//  та повідомити про це користувача
// let elementForm = document.forms.search;
// elementForm.button.onclick = (ev) => {
//     ev.preventDefault();
//     let text = elementForm.age.value;
//     for (let i = 0; i < text.length; i++) {
//         if (text < 18) {
//             alert(`you are too young`)
//         } else { alert(`Welcome`) };
//     }
// };
// - Создайте меню, которое раскрывается/сворачивается при клике
// let elementIdMenu = document.querySelector(`#menu`)
// let elementClassMenu = document.querySelector(`.dropDownMenu`)
// elementIdMenu.onclick = () => {
//     elementClassMenu.style.display = elementClassMenu.style.display 
//     === 'none' ? 'block': 'none';
// }
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
// let mountains = [
//     { title: 'Carpathian ', body: 'Roughly 1,500 km (932 mi) long, it is1 the third-longest European mountain range after the Uralsdolo sit ameti' },
//     { title: 'Alps ', body: 'The Alps[a] are the highest and most extensive mountain range system that lies entirely in Europe' },
//     { title: 'Everest ', body: 'The current official elevation of 8,848 m (29,029 ft), recognised by China and Nepal, was established by a 1955 Indian survey and confirmed by a 1975 Chinese survey.[1]' }
// ];
// let containerDom = document.createElement('div')
// for (const mountain of mountains) {
//     let wrapper = document.createElement('div')
//     containerDom.appendChild(wrapper)
//     let button = document.createElement('button')
//     let wrapperTitle = document.createElement('div')
//     let wrapperBody = document.createElement('p')
//     wrapperTitle.innerText = `${mountain.title}`
//     wrapperBody.innerText = `${mountain.body}`
//     wrapper.appendChild(wrapperTitle, )
//     wrapper.appendChild(wrapperBody)
//     wrapper.appendChild(button)
//     button.style.width = '20px';
//     button.style.height = '20px';
//     button.style.backgroundColor = 'blue';
//     wrapper.style.border = '2px solid black'
//     wrapper.style.width = '600px'
//     button.onclick = () => {
//         wrapperBody.style.display = 'none'
//     }
//     console.log();
// }
// document.body.appendChild(containerDom)

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let elementFormOne = document.forms.formone;
// let elementFormTwo = document.forms.formtwo;
// let button = document.getElementById('button')
// button.onclick = () => {
//   console.log(elementFormOne.inputone.value, elementFormOne.inputtwo.value, elementFormTwo.inputthree.value, elementFormTwo.inputfour.value  );
// };
// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.
// function createTable(row, column, element) {
//     let tableContain = document.createElement('table')
//     let elementWithId = document.getElementById(element)
//     for (let i = 0; i < row; i++) {
//         let newTr = document.createElement("tr");
//         for (let j = 0; j < column; j++) {
//             let newTd = document.createElement("td");
//             newTd.innerHTML = `row: ${i} ---- column: ${j}`;
//             newTr.appendChild(newTd);
//         }
//         tableContain.appendChild(newTr);
//     }
//     elementWithId.appendChild(tableContain);
// }
// createTable(5, 5, "tableContain")
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// let elementForm = document.forms.formForTable;
// let tableContain = document.createElement('table')
// elementForm.tableButton.onclick = (ev) => {
//     ev.preventDefault();
//     let row = elementForm.countRow.value
//     let column = elementForm.countColumn.value
//     let text = elementForm.textForTableCell.value
//     for (let i = 0; i < row; i++) {
//         let newTr = document.createElement("tr");
//         for (let j = 0; j < column; j++) {
//             let newTd = document.createElement("td");
//             newTd.innerHTML = ` ${text}`;
//             newTr.appendChild(newTd);
//         }
//         tableContain.appendChild(newTr);
//     }
// }
// document.body.appendChild(tableContain)
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.


// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку


// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку
// let swearWords = ['bastard', 'bitch', 'bollocks', 'bugger'];
// let elementForm = document.forms.formForSwearWords;
// let button = elementForm.button;
// button.onclick = (ev) => {
//     ev.preventDefault();
//     let elementForma = elementForm.sentences.value;
//     swearWords.forEach(element => {
//         if (elementForma.includes(element)) {
//             alert('Dont use swear words')
//         }
//     });
// };
// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
// let dropDownMenu = document.createElement('div');
// let headers = document.querySelectorAll('h2');
// for (let i = 0; i < headers.length; i++) {
//     let dropDownMenuItem = document.createElement('div')
//     dropDownMenuItem.appendChild(headers[i]);

//     function handleHeaderClick() {
//         document.getElementsByClassName('rules')[i].scrollIntoView({ block: "center", behavior: "smooth" });
//         console.log(document.getElementsByClassName('rules')[i]);
//     }
//     headers[i].addEventListener('click', handleHeaderClick);
//     dropDownMenu.appendChild(dropDownMenuItem)
//     dropDownMenuItem.style.width = '40%';
//     dropDownMenuItem.style.height = '5%';
//     dropDownMenuItem.style.border = '1px solid black';
//     dropDownMenuItem.style.textAlign = 'center';
// };
// dropDownMenu.style.display = 'none';
// let menu = document.createElement('div');
// menu.innerHTML = `<h1>Menu</h1>`;
// menu.style.width = '40%';
// menu.style.height = '5%';
// menu.style.border = '2px solid black';
// menu.style.textAlign = 'center';
// menu.onclick = (ev) => {
//     ev.preventDefault();
//     dropDownMenu.style.display = 'block'
// };
// let content = document.getElementById('content');
// content.appendChild(menu);
// content.appendChild(dropDownMenu);

// -- взять массив пользователей
// Создать три чекбокса.
//  Каждый из них активирует фильтр для вышеуказаного массива.
//   Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
// let usersWithAddress = [
//     { id: 1, name: 'vasya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
//     { id: 2, name: 'petya', age: 30, status: true, address: { city: 'Kyiv', street: 'Shevchenko', number: 1 } },
//     { id: 3, name: 'kolya', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } },
//     { id: 4, name: 'olya', age: 28, status: false, address: { city: 'Ternopil', street: 'Shevchenko', number: 90 } },
//     { id: 5, name: 'max', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 115 } },
//     { id: 6, name: 'anya', age: 31, status: false, address: { city: 'Kyiv', street: 'Shevchenko', number: 2 } },
//     { id: 7, name: 'oleg', age: 28, status: false, address: { city: 'Ternopil', street: 'Shevchenko', number: 22 } },
//     { id: 8, name: 'andrey', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 43 } },
//     { id: 9, name: 'masha', age: 30, status: true, address: { city: 'Kyiv', street: 'Shevchenko', number: 12 } },
//     { id: 10, name: 'olya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
//     { id: 11, name: 'max', age: 31, status: true, address: { city: 'Ternopil', street: 'Shevchenko', number: 121 } }
// ];
// let elementForm = document.forms.formForCheckBox;
// let container = document.createElement('div');
// container.appendChild(usersWithFiltres(usersWithAddress));
// elementForm.usersButton.onclick = (ev) => {
//     ev.preventDefault();
//     let newArray = JSON.parse(JSON.stringify(usersWithAddress));
//     if (elementForm.booleanFilter.checked) newArray = newArray.filter(value => !value.status);
//     if (elementForm.ageFilter.checked) newArray = newArray.filter(value => value.age >= 29);
//     if (elementForm.cityFilter.checked) newArray = newArray.filter(value => value.address.city === 'Kyiv');
//     container.innerHTML = '';
//     container.appendChild(usersWithFiltres(newArray));
// };
// function usersWithFiltres(array) {
//     let usersDiv = document.createElement('div');
//     array.forEach(item => {
//         let userrWrapper = document.createElement('div');
//         userrWrapper.innerHTML = JSON.stringify(item);
//         usersDiv.appendChild(userrWrapper);
//     });

//     return usersDiv
// }
// document.body.appendChild(container);
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .
// Функция создает в боди 2 кнопки (назад/вперед)
// // при нажатии вперед, вы переходите к дочернему элементу,
//  при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу 
//  (лежащему на одном уровне)
// // НО если у (какого-либо)дочеренего элемента есть дети, 
// то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
// window.addEventListener('mouseup', e => {
//     if (e.view.getSelection().toString()) {
//         let selection = e.view.getSelection();
//         if (selection.rangeCount) {
//             let range = selection.getRangeAt(0).cloneRange();
//             let span = document.createElement('span');
//             span.style.fontWeight = 'bold'
//             range.surroundContents(span);
//             selection.removeAllRanges();
//             selection.addRange(range);
//         }
//     }
// })