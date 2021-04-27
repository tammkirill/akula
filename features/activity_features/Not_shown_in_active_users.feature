Feature: List of logged in users on a login page

  Scenario Outline: After log in and check "Stealth" I don't want my user name to be shown on a main page

    Given I am on the <page>
    When I log in with <username> and <password> and check Stealth 
    Then I shouldn't see my user name <name> in the list of active users

    Examples:
      | username     | password             | name          | page                          |
      | AkulaTester1 | BolshoiParol         | AkulaTester1  | index.html?act=Login&CODE=00  |
      | AkulaTester2 | ParolPomenshe        | AkulaTester2  | index.html?act=Login&CODE=00  |