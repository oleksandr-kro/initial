public class User {
    int id;// default 0   // byte short int long(l)
    int age;// default 0
    String name;// default null
    String surname;// default null
    double weight;// default 0.0
    double height;// default 0.0

//    boolean status;// default   false
//    char symbol = '$'; // can be Ascii code

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", age=" + age +
                ", name='" + name + '\'' +
                ", weight=" + weight +
                ", height=" + height +
                '}';
    }

    public User(){

    }

    public User(int id, int age, String name, double weight, double height) {
        this.id = id;
        this.age = age;
        this.name = name;
        this.weight = weight;
        this.height = height;
    }
}
