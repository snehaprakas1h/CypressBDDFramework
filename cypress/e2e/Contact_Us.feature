Feature: Webdriver University- Contact Us Page

    Background: Pre conditions
        Given I navigate to the webdriver university homepage
        When I click on contact us button

    Scenario: Valid Contact Us Form Submission
        When I type a first name
        And I type a last name
        And I enter an email address
        And I type a comment
        And I click on submit button
        Then I should be presented with a successful contact us submission message

    Scenario: Invalid Contact Us Form Submission
        When I type a first name
        And I type a last name
        And I type a comment
        And I click on submit button
        Then I should be presented with a unsuccessful contact us submission message

    Scenario: Valid Contact Us Form Submission -Using specific data
        When I type a first name "sarah"
        And I type a last name "Doe"
        And I enter an email address "sarah@gmail.com"
        And I type a comment "hello123" and number 6788 within comment input field
        And I click on submit button
        Then I should be presented with a successful contact us submission message

    Scenario Outline: Validate contact us page
        When I type a first name '<firstName>' and a last name '<lastName>'
        And I type a email address '<emailId>' and add a comment '<comment>'
        And I click on submit button
        Then I should be presented with header text '<message>'
        Examples:
            | firstName | lastName | emailId        | comment | message                      |
            | John      | Jonas    | jone@gmail.com | Hello   | Thank You for your Message!  |
            | Nick      | Doe      | Nick@gmail.com | Hello1  | Thank You for your Message!  |
            | Peru      | Kate     | kate           | Hello2  | Error: Invalid email address |


# Scenario Outline: Validate Successful and unsuccessful login
#     When I enter a username <username>
#     And I enter a password <password>
#     And I click on the login button
#     Then I should be presented with message <validationText>
#     Examples:
#         | username | password  | validationText        |
#         | test     | test@123  | validation successful |
#         | test1    | test@1231 | validation failed     |
