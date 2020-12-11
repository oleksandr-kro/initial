import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class Store {

    private List <Product> products = new ArrayList<>();
    {
     this.products.add(new Product("tomato",44.22, GroceryType.VEGETABLES,1,true));
     this.products.add(new Product("orange",46.22, GroceryType.FRUITS,2,true));
     this.products.add(new Product("pepsi",24.22, GroceryType.DRINKS,3,true));
     this.products.add(new Product("pasta",14.22, GroceryType.GROCERY,4,true));
     this.products.add(new Product("potato",4.22, GroceryType.VEGETABLES,5,false));
     this.products.add(new Product("juice",44.22, GroceryType.GROCERY,6,true));

    }





    public void addProductToStore(Product product){
        if (product.getPrice()> 0 && product.getTitle().matches("[\\p{L}| ]+") ){
            this.products.add(product);
        }
       else {
            System.out.println("Your product title includes integer");
        }
        System.out.println("Your product has been successfully added");
      

    }

    public  void  removeProduct(String  inputTitle) {

    for (Product product: products){

        if ( product.getTitle().equals(inputTitle) ){

            products.remove(product);
        }else {
            System.out.println("There is no product which title is: " + inputTitle);
        }
        System.out.println("Your product has been successfully removed");

    }
    }

    public void increasePrice(GroceryType inputType ) {
        for (Product product: products){
          if (product.getType().equals(inputType) ) product.setPrice(product.getPrice()*2);
            System.out.println("Your product price where type of product is:  " + inputType + " has been successfully changed");


       }

    }

    public void premiumGoods(Integer inputPrice){
        List<Product> premiumGoods = new ArrayList<>();
        for (Product product: products){
            if (product.getPrice()>inputPrice){

                premiumGoods.add(product);

            }
            if (premiumGoods.isEmpty()){
                System.out.println("There is no product which price is more than: " + inputPrice);
                return;
            }



        }
        System.out.println("This is your premium product list: " + premiumGoods);
    }

    public void sumOfProductsWithType(GroceryType inputType){
       double sumOfProducts = 0;
        for (Product product: products){
            if (product.getType().equals(inputType)){
                sumOfProducts +=     product.getPrice();

            }
        }
        System.out.println(sumOfProducts);
    }

    public void averagePrice() {
       double sumOfPrice = 0;
       double avgPrice =0;
        for (Product product: products){
            sumOfPrice +=   product.getPrice();
            avgPrice = sumOfPrice/products.size();
        }
        System.out.printf("The average price of goods in the store is: "+ "%.2f", avgPrice);
    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Store store = (Store) o;
        return Objects.equals(products, store.products);
    }

    @Override
    public int hashCode() {
        return Objects.hash(products);
    }
}
