package Clothes;

public class Tie extends Clothes implements  MenClothing {
    public Tie(ClothesSize sizeOfClothes, double price, String color,String description) {
        super(sizeOfClothes, price, color);
    }

    @Override
    public void toDressAMan() {

    }

    @Override
    public String toString() {
        return "Tie " + super.toString()+ getSizeOfClothes().getDescription();
    }
}
