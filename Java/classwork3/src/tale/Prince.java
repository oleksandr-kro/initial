package tale;

public class Prince {
    int sizeOfShoe;

    public Prince(int sizeOfShoe) {
        this.sizeOfShoe = sizeOfShoe;
    }

    public  void choseCinderela(Cinderella[] cinderellas, Prince prince) {
        for (Cinderella cinderella : cinderellas) {
            if (prince.sizeOfShoe == cinderella.footSize){
                System.out.println("Prince , you need cinderella, which name is " + cinderella.name );
            }
        }
    }

}
