package homework3;

public class Main {

    public static void main(String[] args) {

        Book harryPotter = new Book("harryPotter");
        Book peppa = new Book("peppa");
        Magazine vogue = new Magazine("vogue");
        Magazine bazar = new Magazine("bazar");
        Printable[] printables = new Printable[]{harryPotter,peppa,vogue,bazar};


        for (Printable printable : printables) {
            printable.print();
        }
        Magazine.printMagazines(printables);
        Book.printBook(printables);
    }
}
