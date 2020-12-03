package tale;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
         Cinderella cinderellaOlena = new Cinderella("Olena", 21,  34);
         Cinderella cinderellaVika = new Cinderella("Vika", 22, 37);
         Cinderella cinderellaPenelopa = new Cinderella("Penelopa", 20, 34);
         Cinderella cinderellaKatia = new Cinderella("Katia", 18, 35);
         Cinderella cinderellaLina = new Cinderella("Lina", 21, 36);
         Cinderella cinderellaNata = new Cinderella("Nata", 19, 35);
         Cinderella cinderellaMaria = new Cinderella("Maria", 21, 37);
         Cinderella cinderellaLana = new Cinderella("Lana", 23, 38);
         Cinderella cinderellaMira = new Cinderella("Mira", 28, 36);
         Cinderella cinderellaOlia = new Cinderella("Olia", 27, 35);

    Cinderella[] cinderellas = new Cinderella[] {cinderellaOlena,cinderellaVika,cinderellaPenelopa,cinderellaKatia,
            cinderellaLana,cinderellaLina,cinderellaNata,cinderellaMaria,cinderellaMira,cinderellaOlia};


         Prince prince = new Prince(38);
         prince.choseCinderela(cinderellas,prince);


    }


}
