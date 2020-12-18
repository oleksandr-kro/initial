package homework6;



import java.util.Objects;


public class Seance implements Comparable<Seance>{
    private Movie movie;
    private Time startTime;
    private Time endTime;

    public Seance() {
    }

    public Seance(Movie movie, Time startTime) {
        this.movie = movie;
        this.startTime = startTime;

        this.endTime = this.validateTime(startTime, movie.getDuration());
    }

    public Time validateTime(Time st, Time d) {

        Time t = new Time();

        t.setHour(st.getHour() + d.getHour());

        if(st.getMin()+d.getMin() > 59) {
            t.setMin((st.getMin()+d.getMin()) % 60);
            t.addHour();
        } else {
            t.setMin(st.getMin()+d.getMin());
        }

        return t;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {

        this.movie = movie;
    }

    public Time getStartTime() {
        return startTime;
    }

    public void setStartTime(Time startTime) {
        this.startTime = startTime;
    }

    public Time getEndTime() {
        return endTime;
    }

    public void setEndTime(Time endTime) {
        this.endTime = endTime;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Seance seance = (Seance) o;
        return Objects.equals(movie, seance.movie) &&
                Objects.equals(startTime, seance.startTime) &&
                Objects.equals(endTime, seance.endTime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(movie, startTime, endTime);
    }

    @Override
    public String toString() {
        return " \n Seance{" +
                "movie=" + movie +
                ", startTime=" + startTime +
                ", endTime=" + endTime +

                '}' ;
    }

    @Override
    public int compareTo(Seance o) {
        if ((this.startTime.getFullMinutes() < o.getStartTime().getFullMinutes()
            && this.endTime.getFullMinutes() < o.getStartTime().getFullMinutes())
                || (this.startTime.getFullMinutes() > o.getEndTime().getFullMinutes()
                    && this.endTime.getFullMinutes() > o.getEndTime().getFullMinutes())){
            return 1;
        }

        if (!this.equals(o)){
            System.out.println("We can't add this seance");
        }

        return 0;
    }
}
