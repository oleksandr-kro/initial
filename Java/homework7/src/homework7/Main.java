package homework7;

import org.testng.annotations.Test;

import java.awt.*;
import java.time.LocalDate;
import java.util.*;
import java.util.List;
import java.util.function.BiFunction;
import java.util.function.Supplier;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

import static java.util.stream.IntStream.of;


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
        Person ruslan = new Person(4, "Ruslan", LocalDate.of(2005, 05, 06));

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
//                1. згенерувати мапу <Person, Integer>, де Integer - кількість сторінок усіх книжок, які має людина
        int sumOfPages = bookSet.stream().reduce(0, (x, y) -> {
            return x + y.getNumberOfPages();
        }, (x, y) -> x + y);

//        System.out.println(sumOfPages);

        Map<Person, Integer> personMap = new TreeMap<>();
        personSet.forEach(p -> {
            personMap.put(p, sumOfPages);
        });
//        personMap.forEach((person,numOfPages)-> System.out.println(person + "" + "num of pages: " + numOfPages));

//                2. згенерувати мапу <String, Book>, де String - ім'я людини, Book - книжка з найбільшою кількістю сторінок
        Map<String, Book> bookMap = new TreeMap<>();
        List<String> names = personSet.stream().map(Person::getName).collect(Collectors.toList());
        List<Book> sortedList = bookSet.stream().sorted(Comparator.comparingInt(Book::getNumberOfPages))
                .collect(Collectors.toList());


        personSet.forEach(person -> {
            bookMap.put(person.getName(), sortedList.get(sortedList.size() - 1));
        });
//        bookMap.forEach((name,book)-> System.out.println(name + "" + " has a book: " + book));

//                3. згенерувати List<Book> відфільтрувавши тільких тих людей, хто старше 25 років і книжки які мають більше 500 сторінок

        List<Book> books = bookSet.stream().filter(book -> book.getNumberOfPages() > 500).collect(Collectors.toList());
        List<Person> persons = personSet.stream()
                .filter(person -> person.getDateOfBirth().getYear() < 1995)
                .collect(Collectors.toList());
        ArrayList<Object> booksWithPersons = new ArrayList<>();

        booksWithPersons.addAll(books);
        booksWithPersons.addAll(persons);
//        booksWithPersons.forEach(value-> System.out.println(value + "\n"));

//               4.Згенерувати нову Map де ключ це: Id, а value: name + dateOfBirth
        Map<Integer, String> newPersonsMap = personSet.stream().collect(Collectors.toMap(
                Person::getId,
                person -> String.format("%s %s", person.getName(), person.getDateOfBirth())
        ));
//        System.out.println(newPersonsMap);

//        personSet.forEach(person -> System.out.println(person.getDateOfBirth().getYear()> 2002));

//        System.out.println(personSet.stream().anyMatch(person -> person.getDateOfBirth().getYear() < 2002));

        //        5.Перевірити чи є хоть один Person імя якого починається на "M".
//        System.out.println(personSet.stream().noneMatch(person -> person.getName().startsWith("M")));

        //        6.Перевірити чи всі книжки коштують більше ніж 100.

//        System.out.println(bookSet.stream().allMatch(book -> book.getPrice()>100));

//                7.Отримати три останніх Person , відобразити двох перших.
//        personSet.forEach(value-> System.out.println(value));
//        System.out.println("----");
//       Stream streamLimit =  personSet.stream()
//                .skip(2)
//                .limit(2);
//        streamLimit.forEach(value-> System.out.println(value));

//                8.Встановити всім книжкам акційну ціну 99.99 .
//       Stream changePrice =  bookSet.stream()
//                .peek(book -> book.setPrice(99.99));
//        changePrice.forEach(book-> System.out.println(book));
//                9.Зменшити крок послідовних чисел за допомогою flatMap
//        IntStream.of(10, 20, 30, 40, 50)
//                .flatMap(value -> IntStream.of(value - 5, value))
//                .forEach(System.out::println);

//                  10.Отримати статистику усіх книжок задопомогою summaryStatistics
//        DoubleSummaryStatistics intSummaryStatistics = bookSet.stream()
//                .mapToDouble(Book::getPrice)
//                .summaryStatistics();
//        System.out.println(intSummaryStatistics);
    }


}
