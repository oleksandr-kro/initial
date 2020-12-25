public class LineStorage {
  private String  line   = "";


    public LineStorage() {

    }


    public  String getLine() {
        return line;
    }

    public void setLine(String line) {
        this.line = line;
    }

    @Override
    public String toString() {
        return "LineStorage{" +
                "line='" + line + '\'' +
                '}';
    }
}
