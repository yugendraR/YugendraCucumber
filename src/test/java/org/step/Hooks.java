package org.step;

import java.io.IOException;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import com.utility.Bclass;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;

public class Hooks extends Bclass {
	
	
	@After
	public void afterScenario(Scenario s) throws IOException {
//		String name = s.getName();
//		
//		String filename = name.replace(" ", "_");
//		takeScreenShots(filename);
		if(s.isFailed()){
		TakesScreenshot ts = (TakesScreenshot) driver;
		byte[] screenshot = ts.getScreenshotAs(OutputType.BYTES);
		
		s.embed(screenshot, "img/png");
		
		}
	}
}
