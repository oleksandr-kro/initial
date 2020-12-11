import java.util.Objects;

public class Product {
    private   String title;
    private  double price;
    private GroceryList type;
    private   int id;
    private  boolean isFresh;

    public Product() {
    }

    public Product(String title, double price, GroceryList type, int id, boolean isFresh) {
        this.title = title;
        this.price = price;
        this.type = type;
        this.id = id;
        this.isFresh = isFresh;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public GroceryList getType() {
        return type;
    }

    public void setType(GroceryList type) {
        this.type = type;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public boolean isFresh() {
        return isFresh;
    }

    public void setFresh(boolean fresh) {
        isFresh = fresh;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Product product = (Product) o;
        return Double.compare(product.price, price) == 0 &&
                id == product.id &&
                isFresh == product.isFresh &&
                title.equals(product.title) &&
                type.equals(product.type);
    }

    @Override
    public int hashCode() {
        return Objects.hash(title, price, type, id, isFresh);
    }

    @Override
    public String toString() {
        return "Product{" +
                "title='" + title + '\'' +
                ", price=" + price +
                ", type='" + type + '\'' +
                ", id=" + id +
                ", isFresh=" + isFresh +
                '}';
    }
}
