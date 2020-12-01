package animals;


public class Horse extends Animal {

    public String name = "Champ";
    public String toy = "Human";


    @Override

    public  void sleep(String name) {
        System.out.println("I want to sleep...");
        super.sleep(name);
    }
    public  void eat( String name,String eatForThisAnimal) {
        System.out.println("I want to eat...");
        super.eat(name, eatForThisAnimal );
    }
    public  void makeNoise( String name,String  toy) {
        System.out.println("I want to play...");
        super.makeNoise(name, toy );
    }

}
