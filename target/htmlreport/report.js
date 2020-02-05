$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/File.feature");
formatter.feature({
  "name": "Multiple user Login with TestMe",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login to TestMeApp",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user launche the chrome browser",
  "keyword": "When "
});
formatter.step({
  "name": "user open the application",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on the signin",
  "keyword": "When "
});
formatter.step({
  "name": "user enter the \"\u003cusername\u003e\" in the un field",
  "keyword": "When "
});
formatter.step({
  "name": "user enter the \"\u003cpassword\u003e\" in the pwd field",
  "keyword": "When "
});
formatter.step({
  "name": "click on the Login button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Lalitha",
        "Password123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login to TestMeApp",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user launche the chrome browser",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_launche_the_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user open the application",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_open_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the signin",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_clicks_on_the_signin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the \"Lalitha\" in the un field",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_enter_the_in_the_un_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the \"Password123\" in the pwd field",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_enter_the_in_the_pwd_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the Login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.click_on_the_Login_button()"
});
formatter.result({
  "status": "passed"
});
});