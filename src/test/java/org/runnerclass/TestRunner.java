package org.runnerclass;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.utility.JvmReport;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
//import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources", glue = "org.step", monochrome = true, 
		 plugin = { "pretty",
				"html:C:\\Users\\DELL\\eclipse-workspace\\DemoCucumber\\target\\Reports\\HtmlReport",
				"json:C:\\Users\\DELL\\eclipse-workspace\\DemoCucumber\\target\\Reports\\JSONReport\\fb.json",
				"junit:C:\\Users\\DELL\\eclipse-workspace\\DemoCucumber\\target\\Reports\\JunitReport\\fbnw.xml"
				,"rerun:src\\test\\resources\\Rerun\\failed.txt"})
public class TestRunner {

	@AfterClass
	public static void jvmReportGeneration() {

		JvmReport.generateJvmReport(System.getProperty("user.dir") + "\\target\\Reports\\JSONReport\\fb.json");

	}

}
