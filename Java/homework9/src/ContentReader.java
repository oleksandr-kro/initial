import java.io.*;

public class ContentReader implements Runnable {
    ContentPrinter contentPrinter = new ContentPrinter();

    public void readFile(LineStorage lineStorage, File file){

                try(BufferedReader bufferedReader = new BufferedReader(new FileReader(file))) {
            int collector;
           while ((collector = bufferedReader.read())!= -1){
               try {
                   Thread.sleep(100);
                 lineStorage.line = lineStorage.line +String.valueOf((char)collector);
               } catch (InterruptedException e) {
                   e.printStackTrace();
               }


           }

        } catch (IOException e) {
            e.printStackTrace();
        }


        contentPrinter.printLine(lineStorage);


    }


    @Override
    public void run() {

        System.out.println(Thread.currentThread().getName());

    }
}
