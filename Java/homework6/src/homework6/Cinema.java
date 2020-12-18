package homework6;


import java.util.*;
import java.util.stream.Collectors;

public class Cinema {
    private TreeMap<Days, Schedule> initMap;
    public static final Time OPEN_TIME = new Time(8,00);
    public static final Time CLOSE_TIME = new Time(22,00);


    public Cinema() {
    }

    public Cinema(TreeMap<Days, Schedule> map) {

        map.forEach((d, schedule)-> {
            validateWorkingHours(schedule.getSeanceSet());
        });

        this.initMap = map;
    }

    public Set<Seance> validateWorkingHours(Set<Seance> schedule) {
            if(!schedule.isEmpty()) {
                int st = schedule.stream().findFirst().get().getStartTime().getFullMinutes();
                int et = schedule.stream()
                        .skip(schedule.size() - 1)
                        .findFirst()
                        .get()
                        .getEndTime()
                        .getFullMinutes();
                if(st < OPEN_TIME.getFullMinutes() || st > CLOSE_TIME.getFullMinutes()) {
                    System.err.println("Start time issue");
                } else if(et > CLOSE_TIME.getFullMinutes()) {
                    System.err.println("End time issue");
                }
            }
        return schedule;
    }

    public TreeMap<Days, Schedule> getMap() {
        return initMap;
    }

    public void setMap(TreeMap<Days, Schedule> map) {
        this.initMap = map;
    }

    public static Time getOpenTime() {
        return OPEN_TIME;
    }

    public static Time getCloseTime() {
        return CLOSE_TIME;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Cinema cinema = (Cinema) o;
        return Objects.equals(initMap, cinema.initMap);
    }

    @Override
    public int hashCode() {
        return Objects.hash(initMap);
    }

    @Override
    public String toString() {
        return "Cinema{" +
                "map=" + initMap +
                '}';
    }


//    Додає набір сеансів у конкретний день
   public void addSeances(Days inputDay, Set<Seance> seances){

       validateWorkingHours(seances);

       Schedule scheduler = this.initMap.get(inputDay);

       scheduler.updateSeanceSet(seances);
   }

//    Додає один сеанс у конкретний день
    public void addSeance(Seance seance, String inputString){

        Days inputDay = Days.valueOf(inputString.toUpperCase());

            Set<Seance> seances = new TreeSet<Seance>() {{
                add(seance);
            }};

                validateWorkingHours(seances);

                Schedule scheduler = this.initMap.get(inputDay);

                scheduler.updateSeanceSet(seances);
    }

//    Повністю видаляє усі сеанси вказаного фільму з розкладу

    public void removeMovie(Movie movie) {

        this.initMap.values().forEach(schedule ->

                    schedule.getSeanceSet().forEach(seance -> {
                        if (seance.getMovie().equals(movie)) {
                            schedule.removeSeance(seance);
                        }
                    }));
    }



//    видаляє конкретний сеанс фільму в конкретний день, який задається параметром String
    public void removeSeance (Seance inptSeance, String param) {
        Days inputDay = Days.valueOf(param.toUpperCase());

        Schedule scheduler = this.initMap.get(inputDay);
            if (scheduler.getSeanceSet().contains(inptSeance)){
            scheduler.removeSeance(inptSeance); }  }

}
