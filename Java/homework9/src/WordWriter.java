import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;


public class WordWriter implements Runnable{

    LineStorage lineStorage;
    private File parsingWordsFromLineStorage = new File("parsingWordsFromLineStorage.txt");




    public WordWriter() {
    }

    public WordWriter(LineStorage lineStorage) {
        this.lineStorage = lineStorage;
    }

    @Override
    public  void run() {

        try(PrintWriter printWriter = new PrintWriter(parsingWordsFromLineStorage)){

            for (String word : lineStorage.getLine().split(" ")) {
                printWriter.print(word + "\n");

            }

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
            System.out.println(Thread.currentThread().getName() + " has already worked");


    }
}
