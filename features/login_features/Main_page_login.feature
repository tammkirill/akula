Feature: Yarportal log in from the main page and from the login page

  Scenario Outline: I can log in

    Given I am on the <page> page
    When I login with <username> and <password>
    Then I should see a message on the main page saying <message>

    Examples:
      | username     | password             | message                          | page                         |
      | AkulaTester1 | BolshoiParol         | С возвращением, AkulaTester1   	 | 	|
      | AkulaTester2 | ParolPomenshe        | С возвращением, AkulaTester2   	 | 	|
      | AkulaTester1 | BolshoiParol         | С возвращением, AkulaTester1   	 | index.html?act=Login&CODE=00	|
      | AkulaTester2 | ParolPomenshe        | С возвращением, AkulaTester2   	 | index.html?act=Login&CODE=00	|
      