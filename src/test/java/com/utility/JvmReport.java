package com.utility;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JvmReport {
	
	
public static void generateJvmReport(String jsonPath) {
	
	
	File f = new File(System.getProperty("user.dir")+"\\target\\Reports\\JVMReport");
	
	Configuration c = new Configuration(f, "Facebook");
	c.addClassifications("platform", "window10");
	c.addClassifications("browser", "chrome");
	c.addClassifications("sprint number", "23");
	
	
	List<String> li = new ArrayList<String>();
	li.add(jsonPath);
	
	ReportBuilder r = new ReportBuilder(li, c);
	r.generateReports();
	
	

}
}
