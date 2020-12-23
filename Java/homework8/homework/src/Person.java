import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;



public class Person {

   private UUID id;
   private String name;
   private int age;
   private String city;
   private List<Pet> pets;

   public Person() {
   }

   public Person(UUID id, String name, int age, String city, List<Pet> pets) {
      this.id = id;
      this.name = name;
      this.age = age;
      this.city = city;
      this.pets = pets;
   }



   public UUID getId() {
      return id;
   }

   public void setId(UUID id) {
      this.id = id;
   }

   public String getName() {
      return name;
   }

   public void setName(String name) {
      this.name = name;
   }

   public int getAge() {
      return age;
   }

   public void setAge(int age) {
      this.age = age;
   }

   public String getCity() {
      return city;
   }

   public void setCity(String city) {
      this.city = city;
   }

   public List<Pet> getPets() {
      return pets;
   }

   public void setPets(List<Pet> pets) {
      this.pets = pets;
   }

   @Override
   public String toString() {
      return "Person{" +
              "id=" + id +
              ", name='" + name + '\'' +
              ", age=" + age +
              ", city='" + city + '\'' +
              ", pets=" + pets +
              '}';
   }
}
