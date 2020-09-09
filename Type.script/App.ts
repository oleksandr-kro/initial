let id:number = 0;

class Parlament {
    factionsArray:[]=[];
    addFactions;
    removeFactions;
    constructor(factions:[],addFactions,removeFactions) {
        // this.removeFactions = removeFactions(1);
        this.addFactions = addFactions(green);
        // this.addFactions = addFactions(blue);
        this.factionsArray = factions;
        console.log(this.factionsArray)
        this.addFactions = function (fraction:object) {
            this.factionsArray.push(fraction)

        };
        // this.removeFactions = function (id) {
        //     this.factionsArray  = this.factionsArray.filter(f=>f.id !== id)
        // }

    }

}



let green = {
    id:1,
    listOfDeputy: {
morozov:{age:28 , sumOfBribe: 1000}
    }
};

let blue = {
    id:2,
    listOfDeputy: {
        galcin:{age:26 , sumOfBribe: 2000}
    }
};
