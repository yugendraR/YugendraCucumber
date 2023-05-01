$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Feature/cu.feature");
formatter.feature({
  "name": "To check the login functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To validate the invaid username and Invalid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enter in the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User give invalid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should be in invalid credentials page",
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
        "nfdn",
        "234"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate the invaid username and Invalid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "User enter in the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_enter_in_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User give invalid \"nfdn\" and \"234\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_give_invalid_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be in invalid credentials page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_br_in_invalid_credentials_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login functionality without entering login credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "User enter in the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_enter_in_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the login button without entering any login credentials",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_click_the_login_button_without_entering_any_login_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be in invalid credentials page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_should_br_in_invalid_credentials_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Feature/forgot.feature");
formatter.feature({
  "name": "To validate the forgot passsword functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@forgot"
    }
  ]
});
formatter.scenario({
  "name": "To To validate searching the account using mobile number when user forgets password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@forgot"
    }
  ]
});
formatter.step({
  "name": "User enter in the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_enter_in_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click  the forgot link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.click_the_forgot_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will be Redirect to Find Your Account Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_will_be_Redirect_to_Find_Your_Account_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter invalid username",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_enter_invalid_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click  the search button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_click_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will  see the No Search Results in the Find you Account Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_will_see_the_No_Search_Results_in_the_Find_you_Account_Page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[contains(text(),\u0027Please fill in at least one field\u0027)]\"}\n  (Session info: MicrosoftEdge\u003d110.0.1587.69)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.2.0\u0027, revision: \u002786eb611648\u0027\nSystem info: host: \u0027DESKTOP-GSO9MPU\u0027, ip: \u0027192.168.1.17\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.edge.EdgeDriver\nCommand: [5c29b7f2d76c599ae2b42060d48ce0d7, findElement {using\u003dxpath, value\u003d//div[contains(text(),\u0027Please fill in at least one field\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: msedge, browserVersion: 110.0.1587.69, javascriptEnabled: true, ms:edgeOptions: {debuggerAddress: localhost:63064}, msedge: {msedgedriverVersion: 110.0.1587.63 (b26c9b8fc01e..., userDataDir: C:\\Users\\DELL\\AppData\\Local...}, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:63064/devtoo..., se:cdpVersion: 110.0.1587.69, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 5c29b7f2d76c599ae2b42060d48ce0d7\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:566)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:384)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:376)\r\n\tat org.step.LoginStepDefinition.user_will_see_the_No_Search_Results_in_the_Find_you_Account_Page(LoginStepDefinition.java:163)\r\n\tat ✽.User will  see the No Search Results in the Find you Account Page(file:src/test/resources/Feature/forgot.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat org.step.Hooks.afterScenario(Hooks.java:25)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
});