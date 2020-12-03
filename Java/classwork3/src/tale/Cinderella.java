package tale;

public class Cinderella {
    String name;
    int age;
    int footSize;



    public Cinderella(String name, int age, int footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }

    @Override
    public String toString() {
        return "Cinderella{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", footSize=" + footSize +
                '}';
    }
}
