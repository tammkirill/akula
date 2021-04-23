Feature: Yarportal log in from the main page and from the login page with wrong data

  Scenario Outline: I can log in

    Given I am on the <page> page
    When I login with wrong <username> and <password>
    Then I should see a message on the main page saying <message>

    Examples:
      | username     | password             | message                                                                       | page                         |
      | adsde        | dasdf                | Невозможно найти пользователя с именем adsde, Вы ввели верные данные? 	    | 	|
      | Adfgdfg      | fdgdfgh              | Невозможно найти пользователя с именем Adfgdfg, Вы ввели верные данные?   	| 	|
      | akulatester1 | BolshoiParol         | Невозможно найти пользователя с именем akulatester1, Вы ввели верные данные?  | index.html?act=Login&CODE=00	|
      | AkulaTester2 | parolpomenshe        | Неверный пароль. Все пароли чувствительны к регистру   	                    | index.html?act=Login&CODE=00	|