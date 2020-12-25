import java.io.*;

public class ContentReader implements Runnable {
    LineStorage lineStorage;
    File file;

    public ContentReader(LineStorage lineStorage, File file) {
        this.lineStorage = lineStorage;
        this.file = file;
    }



    @Override
    public void run() {

          synchronized (lineStorage) {


              try (BufferedReader bufferedReader = new BufferedReader(new FileReader(file))) {
                  int collector;
                  while ((collector = bufferedReader.read()) != -1) {

                      lineStorage.setLine(lineStorage.getLine() + (char) collector);


                  }

              } catch (IOException e) {
                  e.printStackTrace();
              }
              System.out.println(Thread.currentThread().getName() + " has already worked");



              lineStorage.notifyAll();

          }



    }
}
