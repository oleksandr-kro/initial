public class ContentPrinter  implements Runnable{

   public void printLine(LineStorage lineStorage){
       for (String s : lineStorage.line.split(" ")) {

           System.out.println(s);
       }
   }

    @Override
    public void run() {
        System.out.println(Thread.currentThread().getName());
    }
}
