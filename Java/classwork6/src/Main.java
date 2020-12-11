public class Main {
    public static void main(String[] args) {

        Seasons favoriteSeason = Seasons.SPRING;
        for (Seasons season: Seasons.values()){
            System.out.println(season + "#" +  (season.ordinal()+1) +
            "{ Середня температура: " + season.AVG_TEMPERATURE + "°C } " );
            season.getDescription();

        }

            System.out.println("Моя улюблена пора року: " + favoriteSeason + "#" +  (favoriteSeason.ordinal()+1) +
                    "{ Середня температура: " + favoriteSeason.AVG_TEMPERATURE + "°C } " );
            favoriteSeason.getDescription();
        }
    }

