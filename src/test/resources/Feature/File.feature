Feature: Multiple user Login with TestMe

Scenario Outline:Login to TestMeApp
When user launche the chrome browser
When user open the application
When user clicks on the signin
When user enter the "<username>" in the un field
When user enter the "<password>" in the pwd field
Then click on the Login button


Examples:
|username|password|
|Lalitha|Password123|
