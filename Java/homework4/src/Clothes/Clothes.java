package Clothes;

public abstract class Clothes {
 private ClothesSize  sizeOfClothes;
 private double price;
 private String color;

 public Clothes(ClothesSize sizeOfClothes, double price, String color) {
  this.sizeOfClothes = sizeOfClothes;
  this.price = price;
  this.color = color;
 }

 public ClothesSize getSizeOfClothes() {
  return sizeOfClothes;
 }

 public double getPrice() {
  return price;
 }

 public String getColor() {
  return color;
 }

 public void setSizeOfClothes(ClothesSize sizeOfClothes) {
  this.sizeOfClothes = sizeOfClothes;
 }

 public void setPrice(double price) {
  this.price = price;
 }

 public void setColor(String color) {
  this.color = color;
 }

 @Override
 public String toString() {
  return "{" +
          "sizeOfClothes=" + sizeOfClothes +
          ", price=" + price +
          ", color='" + color + '\'' +
          '}';
 }
}
