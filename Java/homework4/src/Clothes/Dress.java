package Clothes;

public class Dress extends Clothes implements WomenClothing{

    public Dress(ClothesSize sizeOfClothes, double price, String color, String description) {
        super(sizeOfClothes, price, color);
    }






    @Override
    public void toDressAWoman() {

    }

    @Override
    public String toString() {
        return "Dress " + super.toString()+ getSizeOfClothes().getDescription();
    }
}
