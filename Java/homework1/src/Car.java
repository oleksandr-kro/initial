public class Car {
    int power;
    double volume;
    int id;
    String title;
    int year;
    String producer;
    boolean isDiesel;

    public Car(int power, double volume, int id, String title, int year, String producer, boolean isDiesel) {
        this.power = power;
        this.volume = volume;
        this.id = id;
        this.title = title;
        this.year = year;
        this.producer = producer;
        this.isDiesel = isDiesel;
    }

    @Override
    public String toString() {
        return "Car{" +
                "power=" + power +
                ", volume=" + volume +
                ", id=" + id +
                ", title='" + title + '\'' +
                ", year=" + year +
                ", producer='" + producer + '\'' +
                ", isDiesel=" + isDiesel +
                '}';
    }
}
