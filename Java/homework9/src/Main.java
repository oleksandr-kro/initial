import java.io.*;


public class Main {


    public static void main(String[] args) throws InterruptedException {
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
        ContentReader contentReader = new ContentReader(lineStorage, data);
        ContentPrinter contentPrinter = new ContentPrinter(lineStorage);


        Thread printerThread = new Thread(contentPrinter,"printer");
        printerThread.start();

        Thread readerThread = new Thread(contentReader,"reader");
        readerThread.start();
        readerThread.join();

        WordWriter wordWriter = new WordWriter(lineStorage);
        Thread writerThread = new Thread(wordWriter,"writer");
        writerThread.start();

    }
}
