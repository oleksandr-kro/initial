// Клас людина:
//     поля:
//         вага,зріст
// Клас депутат(наслідується від людини):
// поля:
//     прізвище,ім'я,вік,хабарник?,розмі хабаря
// методи:
//     дати хабаря(зробити відповідні перевірки...
// якщо депутат не хабарник то щоб він відмовився,
//     або ж якщо сума хабаря надто велика то щоб він вагався
// чи брати чи ні)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Клас фракція
// поля:
//     список депутатів
// методи:
//     додати депутата (вводимо з клави)
// видалити депутата(теж з клави)
// видалити всіх негідників які брали хабаря
// вивести найбільшого хабарника
// вивести всіх депутатів
// видалити всіх депутатів
// вивести загальну суму хабарів для фракції
// клас Верховна рада
// поля:
//     мапа фракцій
// методи:
//     додати\видалити фракцію
// вивести всі фракції
// вивести конкретну фракцію
// додати\видалити депутата з фракції
// вивести всіх хабарників фракції
// вивести найбільшого хабарника у фрації
// вивести найбільшого хабарника верховної ради
// вивести фсіх депутатів фракції
// вивести найбільшого хабарника фракції
//
// в майні зробити через switch меню
//     1 - Верховна рада
//         2 - Фракція
//         3 - Депутат
//         відповідно при вводі з клави певної цифри ми попадаєио в інше меню
//         якщо ми нажали 1 то нам промалюється в консолі таке меню
//         1-додати фракцію
//         2-вивести всі фракції
//         3-вивести найбільшого хабарника
//         меню робимо на свій смак
var AbsHuman = /** @class */ (function () {
    function AbsHuman(weight, height) {
        this.weight = weight;
        this.height = height;
    }
    return AbsHuman;
}());
var Deputat = /** @class */ (function (_super) {
    __extends(Deputat, _super);
    function Deputat(surname, name, weight, height, sizeOfHabar, habarnyk) {
        if (sizeOfHabar === void 0) { sizeOfHabar = 0; }
        if (habarnyk === void 0) { habarnyk = false; }
        var _this = _super.call(this, weight, height) || this;
        // this.id =  +(Math.random() * Date.now()).toFixed();
        _this.id = Deputat.count++;
        _this.name = name;
        _this.surname = surname;
        _this.habarnyk = habarnyk;
        _this.sizeOfHabar = sizeOfHabar;
        return _this;
    }
    Deputat.prototype.giveHabar = function (money) {
        if (this.habarnyk && (money > 10000 && money < 10000000)) {
            this.sizeOfHabar += money;
            console.log("Im " + this.name + " " + this.surname + "! Give me your money, b..");
            return;
        }
        console.log('Keep your money away from me');
        return;
    };
    Deputat.count = 1;
    return Deputat;
}(AbsHuman));
var deputat1 = new Deputat('Корнієнко', 'Олександр', 80, 180, 0, true);
deputat1.giveHabar(50000);
var deputat2 = new Deputat('Арахамія', 'Давид', 95, 185);
var deputat3 = new Deputat('Тищенко', 'Микола', 90, 190, 0, true);
deputat3.giveHabar(100000);
var deputat4 = new Deputat('Тимошенко', 'Юлія', 65, 165, 0, true);
deputat4.giveHabar(1000000);
var deputat5 = new Deputat('Соболєв', 'Сергій', 90, 190);
var deputat6 = new Deputat('Тарута', 'Сергій', 85, 182);
var deputat7 = new Deputat('Бондар', 'Віктор', 95, 180, 0, true);
deputat7.giveHabar(150000);
var deputat8 = new Deputat('Батенко', 'Тарас', 95, 180, 0, true);
deputat8.giveHabar(340000);
var deputat9 = new Deputat('Скороход', 'Анна', 95, 180, 0, true);
var Fraktsia = /** @class */ (function () {
    function Fraktsia(fraktsiaName) {
        this.list = [];
        this.fraktsiaName = fraktsiaName;
    }
    Fraktsia.prototype.getFractionName = function () {
        return this.fraktsiaName;
    };
    Fraktsia.prototype.addDeputat = function (deputat) {
        this.list.push(deputat);
    };
    Fraktsia.prototype.removeDeputat = function (deputat) {
        this.list = this.list.filter(function (dep) { return dep.id !== deputat.id; });
    };
    Fraktsia.prototype.tookHabar = function () {
        return this.list = this.list.filter(function (value) { return value.habarnyk; });
    };
    Fraktsia.prototype.maxHabar = function () {
        return this.list.sort(function (a, b) { return b.sizeOfHabar - a.sizeOfHabar; })[0];
    };
    Fraktsia.prototype.showAllDeputats = function () {
        return this.list;
    };
    Fraktsia.prototype.deleteAllDeputats = function () {
        // this.list.length=0
        this.list = [];
    };
    Fraktsia.prototype.sumOfHabars = function () {
        return this.list.reduce(function (a, b) { return a + b.sizeOfHabar; }, 0);
    };
    return Fraktsia;
}());
var fraktsiaSN = new Fraktsia('SLUGA_NARODU');
fraktsiaSN.addDeputat(deputat1);
fraktsiaSN.addDeputat(deputat2);
fraktsiaSN.addDeputat(deputat3);
var fraktsiaB = new Fraktsia('BATKIVSCHYNA');
fraktsiaB.addDeputat(deputat4);
fraktsiaB.addDeputat(deputat5);
fraktsiaB.addDeputat(deputat6);
var fraktsiaFF = new Fraktsia('FOR_FUTURE');
fraktsiaFF.addDeputat(deputat8);
fraktsiaFF.addDeputat(deputat9);
console.log('--------');
console.log(fraktsiaFF);
console.log('----------------');
console.log(fraktsiaFF.tookHabar());
console.log(fraktsiaFF.sumOfHabars());
// клас Верховна рада
// поля:
//     мапа фракцій
// методи:
//     додати\видалити фракцію
//1вивести всі фракції
// 2вивести конкретну фракцію
// 3додати\видалити депутата з фракції---
// 4вивести всіх хабарників фракції---
// 5вивести найбільшого хабарника у фрації---
// 6вивести найбільшого хабарника верховної ради---
// 7вивести фсіх депутатів фракції---
// 8вивести найбільшого хабарника фракції---
var VerhovnaRada = /** @class */ (function () {
    function VerhovnaRada() {
        this.fraktsiaList = [];
    }
    VerhovnaRada.prototype.addFraktsia = function (fraktsia) {
        this.fraktsiaList.push(fraktsia);
    };
    VerhovnaRada.prototype.removeFraktsia = function (fraktsia) {
        this.fraktsiaList = this.fraktsiaList.filter(function (value) { return value.fraktsiaName !== fraktsia.fraktsiaName; });
    };
    VerhovnaRada.prototype.showAllFraktions = function () {
        return this.fraktsiaList;
    };
    VerhovnaRada.prototype.showFraktion = function (fraktsia) {
        return this.fraktsiaList.filter(function (value) { return value.fraktsiaName.toLowerCase()
            === fraktsia.toLowerCase(); });
    };
    VerhovnaRada.prototype.addDeputat = function (deputat, fraktsia) {
        for (var _i = 0, _a = this.fraktsiaList; _i < _a.length; _i++) {
            var fraction = _a[_i];
            if (fraktsia === fraction.fraktsiaName) {
                fraction.list.push(deputat);
            }
        }
    };
    VerhovnaRada.prototype.removeDeputat = function (deputat) {
        for (var _i = 0, _a = this.fraktsiaList; _i < _a.length; _i++) {
            var fraction = _a[_i];
            fraction.list.filter();
        }
    };
    return VerhovnaRada;
}());
var verhovnaRada = new VerhovnaRada();
verhovnaRada.addFraktsia(fraktsiaFF);
verhovnaRada.addFraktsia(fraktsiaSN);
verhovnaRada.addFraktsia(fraktsiaB);
verhovnaRada.addDeputat(deputat7, 'FOR_FUTURE');
console.log(verhovnaRada.showAllFraktions());
verhovnaRada.removeDeputat(deputat7);
