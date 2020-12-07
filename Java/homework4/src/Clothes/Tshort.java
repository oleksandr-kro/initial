package Clothes;

public class Tshort extends Clothes implements MenClothing, WomenClothing {

    public Tshort(ClothesSize sizeOfClothes, double price, String color, String description) {
        super(sizeOfClothes, price, color);
    }

    @Override
    public void toDressAMan() {

    }

    @Override
    public void toDressAWoman() {

    }

    @Override
    public String toString() {
        return "Tshort " + super.toString()+ getSizeOfClothes().getDescription();
    }
}
