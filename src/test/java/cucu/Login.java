package cucu;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login {
	WebDriver driver;
	@When("user launche the chrome browser")
	public void user_launche_the_chrome_browser() {
		System.out.println("Launche chrome browser");
	    System.setProperty("webdriver.chrome.driver","C:\\Users\\training_c2a.04.30\\Desktop\\Sel-Drivers\\chromedriver.exe");
	    driver=new ChromeDriver();
	}

	@When("user open the application")
	public void user_open_the_application() {
		driver.get("http://10.232.237.143:443/TestMeApp/fetchcat.htm");
		System.out.println("Navigates to application");
	}

	@When("user clicks on the signin")
	public void user_clicks_on_the_signin() {
		driver.findElement(By.linkText("SignIn")).click();
		System.out.println("user clicks on signin");
	}

	@When("user enter the {string} in the un field")
	public void user_enter_the_in_the_un_field(String un) {
		driver.findElement(By.name("userName")).sendKeys(un);
		System.out.println("user enters the password");
	}

	@When("user enter the {string} in the pwd field")
	public void user_enter_the_in_the_pwd_field(String pwd) {
		driver.findElement(By.name("password")).sendKeys(pwd);
		System.out.println("user enters the username");
	}

	@Then("click on the Login button")
	public void click_on_the_Login_button() {
		driver.findElement(By.name("Login")).click();
		System.out.println("click on Login button");
	}
	
		

}
