
# 1. +Вибрати усіх клієнтів, чиє ім'я має менше ніж 6 символів.
select * from client where length(FirstName) < 6;
# 2. +Вибрати львівські відділення банку.+
select * from department where DepartmentCity = 'Lviv';
# 3. +Вибрати клієнтів з вищою освітою та посортувати по прізвищу.
select * from client where Education = 'middle' order by FirstName;
# 4. +Виконати сортування у зворотньому порядку над таблицею Заявка і вивести 5 останніх елементів.
select * from application order by Client_idClient desc limit 5;
# 5. +Вивести усіх клієнтів, чиє прізвище закінчується на OV чи OVA.
select * from client where LastName like 'OV' or 'OVA';
# 6. +Вивести клієнтів банку, які обслуговуються київськими відділеннями.
select * from client where Department_idDepartment in  (1,2,4);

# 7. +Вивести імена клієнтів та їхні номера телефону, погрупувавши їх за іменами.
select FirstName, Passport from client order by  FirstName;
# 8. +Вивести дані про клієнтів, які мають кредит більше ніж на 5000 тисяч гривень.
select * from client c join application a on c.idClient = a.Client_idClient where Sum>5000;

# 9. +Порахувати кількість клієнтів усіх відділень та лише львівських відділень.
select count(idClient) from client c
    join department d on d.idDepartment = c.Department_idDepartment where DepartmentCity = 'Lviv';

# 10. Знайти кредити, які мають найбільшу суму для кожного клієнта окремо.
select FirstName,LastName, Sum from bank.client join bank.application on client.idClient = application.Client_idClient where sum in(select max(Sum) from bank.application group by Client_idClient );
# 11. Визначити кількість заявок на крдеит для кожного клієнта.
select FirstName,LastName,count(Client_idClient)  from bank.client join  bank.application on client.idClient = application.Client_idClient group by Client_idClient;
# 12. Визначити найбільший та найменший кредити.
select max(Sum) from application;
select min(Sum) from application;
# 13. Порахувати кількість кредитів для клієнтів,які мають вищу освіту.
select count(Sum) from application a
    join client c on c.idClient = a.Client_idClient where Education = 'high';
# 14. Вивести дані про клієнта, в якого середня сума кредитів найвища.
select FirstName,LastName,Education,Passport,City,Age,avg(Sum) avg_sum from client c
join application a on c.idClient = a.Client_idClient
group by FirstName,LastName,Education,Passport,City,Age
order by avg(Sum) desc
limit 1;

# 15. Вивести відділення, яке видало в кредити найбільше грошей
select SUM(Sum), DepartmentCity,idDepartment from application
    join client c on c.idClient = application.Client_idClient
JOIN department d on c.Department_idDepartment = d.idDepartment
GROUP BY DepartmentCity,idDepartment ORDER BY SUM(Sum) DESC LIMIT 1
;


# 16. Вивести відділення, яке видало найбільший кредит.
select MAX(Sum), DepartmentCity,idDepartment from application
    join client c on c.idClient = application.Client_idClient
JOIN department d on c.Department_idDepartment = d.idDepartment
GROUP BY DepartmentCity,idDepartment ORDER BY SUM(Sum) DESC LIMIT 1;
# 17. Усім клієнтам, які мають вищу освіту, встановити усі їхні кредити у розмірі 6000 грн.
update client c
join application a on c.idClient = a.Client_idClient
set a.Sum=6000 where c.Education = 'high';
# 18. Усіх клієнтів київських відділень пересилити до Києва.
update client c
JOIN department d on d.idDepartment = c.Department_idDepartment
set C.City = 'Kyiv' where d.idDepartment IN (1,2,4);
# 19. Видалити усі кредити, які є повернені.
DELETE FROM application WHERE CreditState = 'Returned';
# 20. Видалити кредити клієнтів, в яких друга літера прізвища є голосною.
delete from application
        where Client_idClient in (select idClient from client where
LastName like '_o%' or LastName like '_e%' or LastName like '_a%'or LastName like '_u%'or LastName like '_i%' );
# Знайти львівські відділення, які видали кредитів на загальну суму більше ніж 5000
select * from application join client c on c.idClient = application.Client_idClient
join department d on c.Department_idDepartment = d.idDepartment  where (select avg(Sum)>5000 from application) and DepartmentCity='Lviv';
# Знайти клієнтів, які повністю погасили кредити на суму більше ніж 5000
select *,FirstName,LastName
from application
    join client c on c.idClient = application.Client_idClient
where Sum >5000 and CreditState ='returned';

/* Знайти максимальний неповернений кредит.*/
select  max(Sum) from application where CreditState = 'not returned';

/*Знайти клієнта, сума кредиту якого найменша*/
select FirstName,LastName,min(Sum)
from bank.application join client c on c.idClient = application.Client_idClient ;
/*Знайти кредити, сума яких більша за середнє значення усіх кредитів*/
select  Sum, idClient, FirstName, LastName, City from application join client c2 on c2.idClient = application.Client_idClient where
Sum > (select  avg(Sum) from application);

/*Знайти клієнтів, які є з того самого міста, що і клієнт, який взяв найбільшу кількість кредитів*/
(SELECT City,FirstName,LastName from(
select *,count(Client_idClient) as num,Client_idClient as id from application
right join client c on application.Client_idClient = c.idClient
    group by Client_idClient order by num desc limit 1) as t where id=idClient);


#місто чувака який набрав найбільше кредитів
select count(Client_idClient), FirstName,City from application join client c on c.idClient = application.Client_idClient
where Client_idClient = idClient group by City, FirstName limit 1;

