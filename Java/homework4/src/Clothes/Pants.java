package Clothes;

public class Pants extends Clothes implements WomenClothing, MenClothing {

    public Pants(ClothesSize sizeOfClothes, double price, String color, String description) {
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
        return "Pants" + super.toString() + getSizeOfClothes().getDescription();
    }
}
