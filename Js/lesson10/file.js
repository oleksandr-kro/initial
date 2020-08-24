function userCard(number) {
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    let key = number <= 3 ? number : 'Key not valid';

    function getCardOption() {
        return {
            balance,
            transactionLimit,
            historyLogs,
            key
        }
    }

    function addHistory(operationType, credits, operationTime) {
        historyLogs.push({ operationType, credits, operationTime })
    };

    function putCredits(credit) {
        let now = new Date();
        let date = now.toLocaleDateString();
        let time = now.toLocaleTimeString();
        if (credit > 0) {
            balance += credit;
            addHistory('putCredits', credit, date + ' ' + time);
        }
    };

    function takeCredits(credit, typeOperation) {
        let now = new Date();
        let date = now.toLocaleDateString();
        let time = now.toLocaleTimeString();
        if (credit <= transactionLimit && credit <= balance) {
            balance = +(balance - credit).toFixed(2);
            typeOperation
                ?
                addHistory('typeOperation', credit, date + ' ' + time) :
                addHistory('takeCredits', credit, date + ' ' + time)
            return true;
        } else {
            console.log('Error in Take credit');
        }
        return false;
    };

    function setTransactionLimit(number) {
        let now = new Date();
        let date = now.toLocaleDateString();
        let time = now.toLocaleTimeString();
        if (number > 0) {
            transactionLimit = number;
            addHistory('setTransactionLimit', number, date + ' ' + time);
        }
    };

    function transferCredits(sum, card) {
        let now = new Date();
        let date = now.toLocaleDateString();
        let time = now.toLocaleTimeString();
        let credit = +(sum * 1.005).toFixed(2);
        let check = takeCredits(credit, 'transferCredits')
        check ? card.putCredits(sum) : '';
    };

    function getKey(params) {
        return key;
    }

    return {
        getCardOption,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits,
        getKey
    }
}
// const userCard1 = new userCard(1);
// const userCard2 = new userCard(2);
// // userCard1.putCredits(128);
// // userCard1.setTransactionLimit(200);
// // userCard1.takeCredits(200)
// userCard1.transferCredits(80, userCard2)
// console.log(userCard1.getCardOption());
// console.log(userCard2.getCardOption());





class UserAccaunt {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }
};
UserAccaunt.prototype.addCard = function() {
    if (this.cards.length < 3) {
        this.cards.push(new userCard(this.cards.length + 1))
    } else {
        console.log('cards limit over');
    }
};
UserAccaunt.prototype.getCardByKey = function(number) {
    return this.cards.find(value => value.getKey() === number)
}
let user1 = new UserAccaunt('Vasia');
let user2 = new UserAccaunt('Vova');
user2.addCard();
user2.addCard();
user1.addCard();
user1.addCard();
const user1card1 = user1.getCardByKey(1);
const user2card1 = user2.getCardByKey(2);
console.log(user1card1.getCardOption());
user1card1.putCredits(1500);
user1card1.setTransactionLimit(1000);
user1card1.transferCredits(500, user2card1);
console.log(user2card1.getCardOption());