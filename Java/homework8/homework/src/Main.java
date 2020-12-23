import java.io.*;
import java.util.*;
import java.util.stream.Stream;

public class Main {
    public static void main(String[] args) throws IOException{

        Stream<String> names = Stream.<String>builder()
                .add("John")
                .add("Mike")
                .add("Joe")
                .build();
        Stream<Integer> streamOfAge = Stream.<Integer>builder()
                .add(22)
                .add(33)
                .add(14)
                .build();
        Stream<String> cities = Stream.<String>builder()
                .add("Lviv")
                .add("Harkiv")
                .add("Kyiv")
                .build();


        File data = new File("PersonData.txt");
        try(PrintWriter printWriter = new PrintWriter(data)) {
            names.forEach(name-> printWriter.println("name:" + name));
            streamOfAge.forEach(age-> printWriter.println("age:" + age));
            cities.forEach(city-> printWriter.println("city:" + city));
            }
         catch (IOException e) {
            e.printStackTrace();
        }

        ArrayList<String> namesFromData = new ArrayList<>();
        ArrayList<String> agesFromData = new ArrayList<>();
        ArrayList<String> citiesFromData = new ArrayList<>();




        try(BufferedReader bufferedReader = new BufferedReader(new FileReader(data))) {

            bufferedReader.lines().forEach(s->{
                if (s.startsWith("name")){
                    namesFromData.add(s.substring(5));
                }else if (s.startsWith("age")){
                    agesFromData.add(s.substring(4));
                }else if (s.startsWith("city")){
                    citiesFromData.add(s.substring(5));
                }else if (s.startsWith("birthDate")){
                    System.out.println(s);
                }

            });
        } catch (IOException e) {
            e.printStackTrace();
        }

                Stream<Pet> petStream = Stream.<Pet>builder()
                .add(new Pet (1,"reks", "dog"))
                .add(new Pet (2,"tom", "cat"))
                .add(new Pet (3,"jerry", "turtle"))
                .add(new Pet (4,"keks", "fish"))
                .build();
        File petData = new File("PetData.txt");
        ObjectOutputStream objectOutputStream = new ObjectOutputStream(new FileOutputStream(petData));

        petStream.forEach(obj -> {
            try {
                objectOutputStream.writeObject(obj);
            } catch (IOException e) {
                e.printStackTrace();
            }
        });

        objectOutputStream.flush();
        objectOutputStream.close();


        ArrayList<Pet> pets = new ArrayList<>();
        try (ObjectInputStream objectInputStream = new ObjectInputStream(new FileInputStream(petData))) {

            while (objectInputStream != null){
                pets.add((Pet) objectInputStream.readObject());
            }

        } catch(Exception ex){ }


        Person person1 = new Person(UUID.randomUUID(),namesFromData.get(0),Integer.parseInt (agesFromData.get(0)),citiesFromData.get(0),pets);
        System.out.println(person1);

    }
}
