package org.step;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginStepDefinition {
	WebDriver driver;
	
	
	
	//Exmples tag  .. 
	
	
	

@When("User give invalid {string} and {string}")
public void user_give_invalid_and(String email, String pass) {
   
	
	driver.findElement(By.id("email")).sendKeys(email);
	driver.findElement(By.id("pass")).sendKeys(pass);
	
}

@Then("User should be in invalid Credentials Page")
public void user_should_be_in_invalid_Credentials_Page() {

}


	
	
	









	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	@Given("User enter in the login page")
	public void user_enter_in_the_login_page() {
		WebDriverManager.edgedriver().setup();
		driver = new EdgeDriver();
		driver.get("https://www.facebook.com/");
	}

	@When("User give invalid username and password")
	public void user_give_invalid_username_and_password(String username,String password) throws InterruptedException {
//		List<Map<String, String>> maps = d.asMaps();
//		Map<String, String> map = maps.get(1);
//		String email = map.get("username");
//		Map<String, String> map = d.asMap(String.class, String.class);
//		String email = map.get("username");
//		List<Map<String, String>> map = d.asMaps();
//		maps.get(0).get("username");
//		maps.get(0).get("password");
//		
		//String pass = map.get("password");
//		List<String> list = d.asList();
//		String email = list.get(1);
		//list.get(2);
		//List<String> list = lists.get(1);
		//String email = list.get(1);
		WebElement txtEmail = driver.findElement(By.id("email"));
		txtEmail.sendKeys(username);
//				String pass = list.get(2);
		WebElement txtPass = driver.findElement(By.id("pass"));
		txtPass.sendKeys(password);
		Thread.sleep(2000);
	}

	@When("User click the login button")
	public void user_click_the_login_button() throws InterruptedException {
		WebElement btnLogin = driver.findElement(By.name("login"));
		btnLogin.click();
		Thread.sleep(5000);
	}

//	@Then("User should be in invalid Credentials Page")
//	public void user_should_be_in_invalid_Credentials_Page() {
//		// Write code here that turns the phrase above into concrete actions
//		throw new cucumber.api.PendingException();
//	}

	
	
	@When("User click the login button without entering any login credentials")
	public void user_click_the_login_button_without_entering_any_login_credentials() throws InterruptedException {
	  driver.findElement(By.name("login")).click();
	  Thread.sleep(3000);
	}

	@Then("User should be in invalid credentials page")
	public void user_should_br_in_invalid_credentials_page() {
		String url = driver.getCurrentUrl();
	    Assert.assertTrue("url",url.contains("privacy_mutation_token") );
	   
	}

	

	@Given("Click  the forgot link")
	public void click_the_forgot_link() throws InterruptedException {
	  driver.findElement(By.xpath("//a[contains(text(),'Forgotten password?')]")).click();
	  Thread.sleep(5000);
	}

	@Then("User will be Redirect to Find Your Account Page")
	public void user_will_be_Redirect_to_Find_Your_Account_Page() {
		String url = driver.getCurrentUrl();
	   Assert.assertTrue("redirect", url.contains("/login/identify/"));
	}

	@When("User enter invalid username")
	public void user_enter_invalid_username() {
	  driver.findElement(By.name("email")).sendKeys("12345");;
	}

	@When("User click  the search button")
	public void user_click_the_search_button() throws InterruptedException {
	   driver.findElement(By.name("did_submit")).click();
	   Thread.sleep(2000);
	}

	@Then("User will  see the No Search Results in the Find you Account Page")
	public void user_will_see_the_No_Search_Results_in_the_Find_you_Account_Page() {
	   WebElement box = driver.findElement(By.xpath("//div[contains(text(),'Please fill in at least one field')]"));
	   Assert.assertTrue("not displayed", box.isDisplayed());
	}

	
}
