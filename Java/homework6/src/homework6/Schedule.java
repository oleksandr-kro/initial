package homework6;

import org.jetbrains.annotations.NotNull;

import java.util.*;
import java.util.stream.Collectors;

public class Schedule {

    private Set<Seance> seanceSet;




    public Schedule() {
        this.seanceSet = new TreeSet<>();
    }


    public Schedule(Set<Seance> seanceSet) {
        this.seanceSet = seanceSet.stream()
                .sorted(Comparator.comparing(o->o.getStartTime().getHour()))
                .collect(Collectors.toCollection(TreeSet::new));
    }


    public Set<Seance> getSeanceSet() {
        return seanceSet;
    }

    public void setSeanceSet(Set<Seance> seanceSet) {
        this.seanceSet = seanceSet;
    }

    public void updateSeanceSet( Set<Seance> seanceSet) {

        this.seanceSet.addAll(seanceSet);

    }
    public  void removeSeance(Seance seance){

        this.seanceSet.remove(seance);

    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Schedule schedule = (Schedule) o;
        return Objects.equals(seanceSet, schedule.seanceSet);
    }

    @Override
    public int hashCode() {
        return Objects.hash(seanceSet);
    }

    @Override
    public String toString() {
        return "Schedule{" +
                "seanceSet=" + seanceSet +
                "\n"+
                '}';
    }



}
