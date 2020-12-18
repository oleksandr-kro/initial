package homework7;

import java.time.LocalDate;
import java.util.*;
import java.util.function.BiFunction;
import java.util.function.Supplier;
import java.util.stream.Collectors;


public class Main {
    public static void main(String[] args) {


        Supplier<Person> personSupplier = new Supplier<Person>() {
            @Override
            public Person get() {
                return new Person(5, "Olena", LocalDate.of(1990, 12, 22));
            }
        };

        Person pavlo = new Person(1, "Pavlo", LocalDate.of(1892, 11, 26));
        Person petro = new Person(2, "Petro", LocalDate.of(1983, 10, 11));
        Person nazar = new Person(3, "Nazar", LocalDate.of(1967, 06, 23));
        Person ruslan = new Person(4, "Ruslan", LocalDate.of(1998, 05, 06));

        Set<Person> personSet = new TreeSet<>();
        personSet.add(pavlo);
        personSet.add(petro);
        personSet.add(nazar);
        personSet.add(ruslan);
        personSet.add(personSupplier.get());


        Book book1 = new Book(500, "book1", 122.22);
        Book book2 = new Book(2300, "book2", 222.22);
        Book book3 = new Book(444, "book3", 422.22);
        Book book4 = new Book(674, "book4", 522.22);
        Book book5 = new Book(1231, "book1", 1322.22);

        Set<Book> bookSet = new TreeSet<>();
        bookSet.add(book1);
        bookSet.add(book2);
        bookSet.add(book3);
        bookSet.add(book4);
        bookSet.add(book5);
//        1. згенерувати мапу <Person, Integer>, де Integer - кількість сторінок усіх книжок, які має людина
        int sumOfPages = bookSet.stream().reduce(0,(x,y)-> {
                    return x + y.getNumberOfPages();
                },(x, y)->x+y);

//        System.out.println(sumOfPages);

        Map<Person, Integer> personMap =new TreeMap<>();
        personSet.forEach(p->{
            personMap.put(p, sumOfPages);
        });
//        personMap.forEach((person,numOfPages)-> System.out.println(person + "" + "num of pages: " + numOfPages));

//        2. згенерувати мапу <String, Book>, де String - ім'я людини, Book - книжка з найбільшою кількістю сторінок
        Map<String,Book> bookMap = new TreeMap<>();
        List<String> names = personSet.stream().map(Person::getName).collect(Collectors.toList());
        List<Book> sortedList = bookSet.stream().sorted(Comparator.comparingInt(Book::getNumberOfPages))
                .collect(Collectors.toList());


        personSet.forEach(person -> {
            bookMap.put(person.getName(),sortedList.get(sortedList.size()-1));
        });
//        bookMap.forEach((name,book)-> System.out.println(name + "" + " has a book: " + book));

//        3. згенерувати List<Book> відфільтрувавши тільких тих людей, хто старше 25 років і книжки які мають більше 500 сторінок

        List <Book> books = bookSet.stream().filter(book -> book.getNumberOfPages()>500).collect(Collectors.toList());
        List <Person> persons = personSet.stream()
                .filter(person -> person.getDateOfBirth().getYear()<1995)
                .collect(Collectors.toList());
        ArrayList<Object> booksWithPersons = new ArrayList<>();

        booksWithPersons.addAll(books);
        booksWithPersons.addAll(persons);
        booksWithPersons.forEach(value-> System.out.println(value + "\n"));


    }
}
