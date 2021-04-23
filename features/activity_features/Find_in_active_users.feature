Feature: List of logged in users on a main page

  Scenario Outline: After log in I want to see my user name on the main page

    Given I am on the main page
    When I log in with <username> and <password>
    Then I should see my user name <name> in the list of active users

    Examples:
      | username     | password             | name          |
      | AkulaTester1 | BolshoiParol         | AkulaTester1  |
      | AkulaTester2 | ParolPomenshe        | AkulaTester2  |

      