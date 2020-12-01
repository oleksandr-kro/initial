import animals.Animal;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;



@AllArgsConstructor
public class Veterinarian {



    public static void treatAnimal(Animal animal) {

        System.out.println("the animal is from : " + animal.location + " and eats a " + animal.food);

    }
}
