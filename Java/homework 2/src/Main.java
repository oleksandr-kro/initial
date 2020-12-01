import animals.Animal;
import animals.Cat;
import animals.Dog;
import animals.Horse;

import java.util.ArrayList;

public class Main {



    public static void main(String[] args) {



        Cat tom = new Cat();
        tom.sleep(tom.name);
        tom.food = "Wiskas";
        tom.eat(tom.name, tom.food);
        tom.makeNoise(tom.name, tom.toy);
        tom.location = "Kyiv";
        tom.energy =  Math.floor(Math.random() * (Math.random() * 50));

        if(tom.energy<20){
            tom.sick = !tom.sick ;
        }



        Dog rex = new Dog();
        rex.sleep(rex.name);
        rex.food = "Meat";
        rex.eat(rex.name, rex.food);
        rex.makeNoise(rex.name, rex.toy);
        rex.location = "Lviv";
        rex.energy =  Math.floor(Math.random() * (Math.random() * 50));
        System.out.println(rex.sick);
        if(rex.energy<20){
            rex.sick = !rex.sick ;
        }
        System.out.println(rex.sick);

        Horse champ = new Horse();
        champ.sleep(champ.name);
        champ.food = "grass";
        champ.eat(champ.name, champ.food);
        champ.makeNoise(champ.name, champ.toy);
        champ.location = "Harkiv";
        champ.energy =  Math.floor(Math.random() * (Math.random() * 50));

        if(champ.energy<20){
            champ.sick = !champ.sick ;
        }



        ArrayList<Animal> animals =new ArrayList<>();
        animals.add(0, tom);
        animals.add(0, rex);
        animals.add(0, champ);

         Veterinarian veterinarian = new Veterinarian();

        for ( Animal animal : animals ) {
            if (animal.sick){
                veterinarian.treatAnimal( animal);
            }
        }

    }
}
