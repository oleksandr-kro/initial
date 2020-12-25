import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.concurrent.locks.Lock;

public class ContentPrinter  implements Runnable{

    LineStorage lineStorage;
   private File dataAfterReading = new File("dataAfterReading.txt");


    public ContentPrinter(LineStorage lineStorage) {
        this.lineStorage = lineStorage;
    }

    public LineStorage getLineStorage() {
        return lineStorage;
    }

    public void setLineStorage(LineStorage lineStorage) {
        this.lineStorage = lineStorage;
    }

    public File getDataAfterReading() {
        return dataAfterReading;
    }

    public void setDataAfterReading(File dataAfterReading) {
        this.dataAfterReading = dataAfterReading;
    }

    @Override
    public String toString() {
        return "ContentPrinter{" +
                "lineStorage=" + lineStorage +
                ", dataAfterReading=" + dataAfterReading +
                '}';
    }

    @Override
    public  void run() {
            synchronized (lineStorage) {
                try {
                    lineStorage.wait();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                while (lineStorage.getLine() != null) {

                    try (PrintWriter printWriter = new PrintWriter(dataAfterReading)) {
                        printWriter.print(lineStorage.getLine());
                    } catch (FileNotFoundException e) {
                        e.printStackTrace();
                    }


                    for (String s : lineStorage.getLine().split(" ")) {
                        try {
                            Thread.sleep(100);
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                        System.out.println(s);

                    }
                    System.out.println(Thread.currentThread().getName() + " has already worked");
                    break;

                }
            }

        }




}
