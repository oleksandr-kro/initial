public class LineStorage {
    String line = "";

    public LineStorage() {
    }

    public LineStorage(String line) {
        this.line = line;
    }

    @Override
    public String toString() {
        return "LineStorage{" +
                "line='" + line + '\'' +
                '}';
    }
}
