package com.utility;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import io.github.bonigarcia.wdm.WebDriverManager;

public class Bclass {

	// we give driver in global because we use that again and again
	public static WebDriver driver;

	// first upa ll we use driver ref to create an instance of class
	// WebDriver driver = new ChromeDriver();
	// 1.
	public static void chromeBrowser() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();

	}

	// 2.
	public static void close() {
		driver.close();

	}

	// 3.
	public static void manageWindow() {
		driver.manage().window().maximize();
	}

	// 4.
	public static String pageTittle() {
		String tiltleName = driver.getTitle();
		return tiltleName;
	}

	// 5.
	public static String pageUrl() {
		String url = driver.getCurrentUrl();
		return url;
		
	}

	// 6.
	public static void launchUrl(String url) {
		driver.get(url);
	}

	// 7.
	public static void btnClick(WebElement element) {
		element.click();
	}

	// 8.
	public static void fillTextBox(WebElement element, String value) {
		element.sendKeys(value);
	}

	// 9.
	public void toElement(WebElement element) {
		Actions a = new Actions(driver);

		a.moveToElement(element).perform();
	}

	// 10.
	public void clickDouble(WebElement element) {
		Actions a = new Actions(driver);
		a.doubleClick().perform();
	}

	// 11.
	public void clickContent(WebElement element) {
		Actions a = new Actions(driver);
		a.contextClick(element);
	}

	// 12.
	public void dragDrop(WebElement start, WebElement end) {
		Actions a = new Actions(driver);
		a.dragAndDrop(start, end);
	}

	// 13.
	public void copy() throws AWTException {
		Robot r = new Robot();
		r.keyPress(KeyEvent.VK_CONTROL);
		r.keyPress(KeyEvent.VK_C);
		r.keyRelease(KeyEvent.VK_CONTROL);
		r.keyRelease(KeyEvent.VK_C);

	}

	// 14.
	public void paste() throws AWTException {
		Robot r = new Robot();
		r.keyPress(KeyEvent.VK_CONTROL);
		r.keyPress(KeyEvent.VK_V);
		r.keyRelease(KeyEvent.VK_CONTROL);
		r.keyRelease(KeyEvent.VK_V);
	}

	// 15.
	public static String readExcel(String ename,String sheet, int row, int cell) throws IOException {
		File file = new File("C:\\Users\\DELL\\eclipse-workspace\\Maven\\External file\\"+ename+".xlsx");

		FileInputStream fi = new FileInputStream(file);

		Workbook book = new XSSFWorkbook(fi);

		Sheet s = book.getSheet(sheet);

		Row r = s.getRow(row);
		Cell c = r.getCell(cell);

		int type = c.getCellType();
		String name;

		if (type == 1) {
			name = c.getStringCellValue();
		} else if (DateUtil.isCellDateFormatted(c)) {
			Date da = c.getDateCellValue();
			SimpleDateFormat sim = new SimpleDateFormat("dd-mmm-yyyy");
			name = sim.format(da);
		} else {
			double d = c.getNumericCellValue();
			long l = (long) d;
			name = String.valueOf(l);
		}
		return name;

	}

	// 16.
	public static void takeScreenShots(String filename) throws IOException {
		TakesScreenshot tk = (TakesScreenshot) driver;

		File src = tk.getScreenshotAs(OutputType.FILE);

		File des = new File("C:\\Users\\DELL\\eclips"
				+ "e-workspace\\DemoCucumber\\Screenshots\\" + filename + ".png");
		FileUtils.copyFile(src, des);
	}

	public static void jspageDown(WebElement element) {
		
		JavascriptExecutor js =(JavascriptExecutor)driver;
		
		js.executeScript("arguments[0].scrollIntoView(true)", element);
	}
	public static void jspageUp(WebElement element) {
		JavascriptExecutor js =(JavascriptExecutor)driver;
		js.executeScript("arguments[0].scrollIntoView(false)", element);
	}
	
	public static void getText(WebElement ele) {
		String t =ele.getText();
		System.out.println(t);

	}
	
	public static void singleDropDown(WebElement ele, String year) {
		Select s = new Select(ele);
		
		s.selectByValue(year);
		
	}
	public static void keyDown() throws AWTException {
		Robot r = new Robot();
		r.keyPress(KeyEvent.VK_DOWN);
	}
	public static void keyUp() throws AWTException {
		Robot r = new Robot();
		r.keyPress(KeyEvent.VK_UP);
	}
	public static void enter() throws AWTException {
		Robot r = new Robot();
		r.keyPress(KeyEvent.VK_ENTER);
	}
	
	public static void jsBtnClick(WebElement ele) {
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("arguments[0].click()",ele);
	}

	
	public static void getDate() {
		Date date = new Date();
		System.out.println(date.toString());
	}
	
	public static void jsSendKeys(WebElement ele,String name) {
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("arguments[0].setAttribute('value','"+name+"')",ele);
	}
	
}
