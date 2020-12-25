import java.io.*;

public class Main {
    public static void main(String[] args) {
        File data = new File("data.txt");
        try(PrintWriter printWriter = new PrintWriter(data)){
            printWriter.print("Java is a class-based," +
                    " object-oriented programming language" +
                    " that is designed to have as" +
                    " few implementation dependencies" +
                    " as possible. ");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }




        LineStorage lineStorage = new LineStorage();
        ContentReader contentReader = new ContentReader();
        contentReader.readFile(lineStorage, data);
        Thread threadReader = new Thread(contentReader,"reader");
        threadReader.start();
        Thread threadPrinter = new Thread(contentReader,"printer");
        threadPrinter.start();



    }
}
