package animals;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString


public abstract class Animal {
 public    String food;
 public    String location;
 public    boolean sick;
 public    double energy;


    public void makeNoise(String name, String toy){
        System.out.println("this "+ name  +" play with "+ toy);
    }
    public  void eat(String name, String eatForThisAnimal ){
        System.out.println("this "+ name  +" want to eat " + food) ;
    }
    public  void sleep(String name){
        System.out.println("this "+ name  +" sleep");
    }

}
