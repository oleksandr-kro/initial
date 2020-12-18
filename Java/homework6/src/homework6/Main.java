package homework6;


import java.util.*;
import java.util.TreeMap;

public class Main {
    public static void main(String[] args) {
        Movie movie1 = new Movie("Love", new Time(2,22));
//        Movie movie2 = new Movie("Bad Boys for Life", new Time(24,11)); //видасть помилку "You are entering  wrong hours: 24hour"
//        Movie movie3 = new Movie("Sonic the Hedgehog", new Time(1,77)); //видасть помилку "You are entering  wrong minutes: 77min"
        Movie movie4 = new Movie("Birds of Prey", new Time(2,44));
        Movie movie5 = new Movie("Dolittle", new Time(3,55));
        Movie movie6 = new Movie("The Invisible Man", new Time(2,23));
        Movie movie7 = new Movie("The Call of the Wild", new Time(1,53));
        Movie movie8 = new Movie("23523", new Time(2,23));

        TreeMap tr = new TreeMap<Days, Schedule>() {{
            put(Days.MONDAY, new Schedule(new TreeSet<Seance>(){{
//                add(new Seance(movie5, new Time(7, 15))); // видасть помилку "Start time issue"
                add(new Seance(movie6, new Time(8, 22)));
//                add(new Seance(movie6, new Time(10, 10)));// видасть помилку "We can't add this seance"
//                add(new Seance(movie6, new Time(11, 10)));// видасть помилку "We can't add this seance"
                add(new Seance(movie7, new Time(12, 44)));
                add(new Seance(movie4, new Time(15, 44)));
            }}));

            put(Days.TUESDAY, new Schedule(new TreeSet<Seance>(){{
                add(new Seance(movie5, new Time(10, 14)));
                add(new Seance(movie1, new Time(15, 50)));
//                add(new Seance(movie7, new Time(21, 20))); // видасть помилку "End time issue"
            }}));

            put(Days.WEDNESDAY, new Schedule(new TreeSet<Seance>(){{
                add(new Seance(movie5, new Time(14, 11)));
                add(new Seance(movie4, new Time(11, 20)));
                add(new Seance(movie7, new Time(18, 17)));
            }}));

            put(Days.THURSDAY, new Schedule(new TreeSet<Seance>(){{
                add(new Seance(movie4, new Time(14, 18)));
                add(new Seance(movie1, new Time(17, 20)));
                add(new Seance(movie7, new Time(11, 42)));
            }}));

            put(Days.FRIDAY, new Schedule(new TreeSet<Seance>(){{
                add(new Seance(movie5, new Time(14, 18)));
                add(new Seance(movie4, new Time(18, 20)));
                add(new Seance(movie7, new Time(11, 42)));
            }}));
        }};

        Cinema cinema = new Cinema(tr);

        cinema.addSeances(Days.MONDAY, new TreeSet<Seance>(new SortHelper()){{
            add(new Seance(movie6, new Time(18, 45)));
//            add(new Seance(movie7, new Time(15, 10)));// "We can't add this seance"
            add(new Seance(movie4, new Time(8, 8)));
        }});


//        cinema.addSeance(new Seance(movie1, new Time(9, 11)),"monday");//"We can't add this seance"
        cinema.addSeance(new Seance(movie4, new Time(11, 21)),"friday");
        cinema.addSeance(new Seance(movie6, new Time(11, 22)),"wednesday");


//        cinema.removeMovie(movie1);
//        cinema.removeSeance(new Seance(movie5, new Time(14, 18)),"wednesday");



        cinema.getMap().forEach((key,value)-> {
            System.out.println(key + "--" + value + "\n");
        });







    }
}
