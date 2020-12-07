package Clothes;

import java.util.ArrayList;


public class Main {
    public static void main(String[] args) {
        Dress dress = new Dress(ClothesSize.S, 822.21,"white",ClothesSize.S.getDescription());
        Tie tie = new Tie(ClothesSize.M, 262.21,"blue",ClothesSize.M.getDescription());
        Pants pants = new Pants(ClothesSize.L, 522.21,"black",ClothesSize.L.getDescription());
        Tshort tshort = new Tshort(ClothesSize.XXS, 222.21,"pink",ClothesSize.XXS.getDescription());

        ArrayList<Clothes> clothes = new ArrayList<>();
        clothes.add(dress);
        clothes.add(tie);
        clothes.add(tshort);
        clothes.add(pants);

        Atelier atelier = new Atelier(clothes);

        atelier.choiceOfMen();
        atelier.choiceOfWomen();


    }


    }
