Feature: Webdriver University- Login Portal Page

    Background: Pre conditions
        Given I navigate to the webdriver university homepage
        When I click on login portal button

    Scenario Outline: Validate valid login and invalid login credentials
        When I type username '<userName>'
        And I type password '<password>'
        And I click on login button
        Then I should be presented with message in an alert box '<message>'
        Examples:
            | userName  | password     | message              |
            | webdriver | webdriver123 | validation succeeded |
            | webiver   | web123       | validation failed    |

