var id = 0;
var Parlament = /** @class */ (function () {
    function Parlament(factions, addFactions, removeFactions) {
        this.factionsArray = [];
        // this.removeFactions = removeFactions(1);
        this.addFactions = addFactions(green);
        this.addFactions = addFactions(blue);
        this.factionsArray = factions;
        console.log(this.factionsArray);
        this.addFactions = function (fraction) {
            this.factionsArray.push(fraction);
        };
        // this.removeFactions = function (id) {
        //     this.factionsArray  = this.factionsArray.filter(f=>f.id !== id)
        // }
    }
    return Parlament;
}());
var green = {
    id: 1,
    listOfDeputy: {
        morozov: { age: 28, sumOfBribe: 1000 }
    }
};
var blue = {
    id: 2,
    listOfDeputy: {
        galcin: { age: 26, sumOfBribe: 2000 }
    }
};
