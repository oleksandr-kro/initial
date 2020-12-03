package homework3;

public class Book implements Printable {
    String title;

    public Book(String title) {
        this.title = title;
    }

    public static void printBook(Printable[] printablese) {
        for (Printable printable : printablese) {

            if (printable instanceof Book) System.out.println(printable);
        }

    }
    @Override
    public void print() {
        System.out.println("this book is print " + title);
    }

    @Override
    public String toString() {
        return "Book{" +
                "title='" + title + '\'' +
                '}';
    }
}
