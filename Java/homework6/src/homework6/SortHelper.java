package homework6;

import java.util.Comparator;

public class SortHelper implements Comparator<Seance> {


    @Override
    public int compare(Seance s1, Seance s2) {
        return s1.getStartTime().getFullMinutes() - s2.getStartTime().getFullMinutes();
    }
}
