package Clothes;

import java.util.ArrayList;
import java.util.List;

public class Atelier {

   public ArrayList<Clothes> clothes = new ArrayList<>();



    public Atelier(ArrayList<Clothes> clothes) {
        this.clothes = clothes;
    }


    public void choiceOfMen(){
        for (Clothes item: clothes){
            if (item instanceof MenClothing)
                System.out.println("this clothes fit for men: " + item);
        }


    }
    public void choiceOfWomen(){
        for (Clothes item: clothes){
            if (item instanceof WomenClothing)
                System.out.println("this clothes fit for women: " + item);
        }
    }

    @Override
    public String toString() {
        return "Atelier{" +
                "clothes=" + clothes +
                '}';
    }
}
