package homework3;


public class Magazine  implements Printable{

    public Magazine() {

    }

    String title;

    public Magazine(String title) {
        this.title = title;
    }

    public static   void printMagazines (Printable[] printablese) {

        for (Printable printable : printablese) {

            if (printable instanceof Magazine) System.out.println(printable);
        }

    }

    @Override
    public void print() {
        System.out.println("this magazine is print " + title);

    }

    @Override
    public String toString() {
        return "Magazine{" +
                "title='" + title + '\'' +
                '}';
    }
}
