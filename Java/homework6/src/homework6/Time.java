package homework6;

import java.util.Objects;

public class Time {

    private int min;
    private int hour;



    public Time() {
    }

    public Time( int hour, int min) {
        this.setHour(hour);
        this.setMin(min);
    }

    public int getMin() {
        return min;
    }

    public int getFullMinutes() {

        return this.hour * 60 + this.min;
    }

    public void setMin(int min) {
        if (min >= 0 && min <= 59){
            this.min = min;
        } else {
            System.err.println("You are entering  wrong minutes: " + min + "min");
        }
    }

    public int getHour() {
        return hour;
    }

    public void addHour() {
        if (hour <= 23 && hour >= 0){
            this.hour++;
        }
    }

    public void setHour(int hour) {
        if (hour <= 23 && hour>=0){
            this.hour = hour;
        } else {
            System.err.println("You are entering  wrong hours: " + hour + "hour");
        }

    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Time time = (Time) o;
        return min == time.min &&
                hour == time.hour;
    }

    @Override
    public int hashCode() {
        return Objects.hash(min, hour);
    }

    @Override
    public String toString() {
        return "time{" +
                " hour=" + hour +
                " min=" + min +
                '}';
    }
}
