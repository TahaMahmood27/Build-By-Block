import { Builder, By } from 'selenium-webdriver';

describe('Navbar', () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  afterAll(async () => {
    await driver.quit();
  });

  it('should highlight the discover section', async () => {
    await driver.get('http://localhost:3000');

    // Simulate clicking on a specific section
    const discoverLink = await driver.findElement(By.linkText("/discover"));
    await discoverLink.click();

    // Assert that the 'About' section is highlighted
    const activeLink = await driver.findElement(By.css('.container .row .col-lg-12 .navbar navbar-expand-lg #navbarSupportedContent #id .nav-item')); //??
    expect(await activeLink.getText()).toBe('/discover');
  });

  it('should navigate to the features/services section', async () => {
    await driver.get('http://localhost:3000');

    // Simulate clicking on a specific section
    const servicesLink = await driver.findElement(By.linkText('#service'));
    await servicesLink.click();

    // Assert that the page navigated to the 'Services' section
    const currentURL = await driver.getCurrentUrl();
    expect(currentURL).toContain('/service');
  });

  it('should navigate to the About Us section', async () => {
    await driver.get('http://localhost:3000');

    // Simulate clicking on a specific section
    const servicesLink = await driver.findElement(By.linkText('#about'));
    await servicesLink.click();

    // Assert that the page navigated to the About Us section
    const currentURL = await driver.getCurrentUrl();
    expect(currentURL).toContain('/about');
  });

  it('should navigate to the Contact Us section', async () => {
    await driver.get('http://localhost:3000');

    // Simulate clicking on a specific section
    const servicesLink = await driver.findElement(By.linkText('#contact'));
    await servicesLink.click();

    // Assert that the page navigated to the 'Contact Us' section
    const currentURL = await driver.getCurrentUrl();
    expect(currentURL).toContain('/contact');
  });

  it('should display the correct number of menu items', async () => {
    await driver.get('http://localhost:3000');
  
    // Get all the menu items
    const menuItems = await driver.findElements(By.css('.navbar .menu-item'));
  
    // Assert that the number of menu items matches the expected count
    expect(menuItems.length).toBe(4); // Assuming there are 4 menu items
  });
  
  it('should hide the navbar on small screens', async () => {
    // Set the browser window size to a small screen resolution
    await driver.manage().window().setRect({ width: 320, height: 480 });
  
    await driver.get('http://localhost:3000');
  
    // Check if the navbar is hidden
    const navbar = await driver.findElement(By.css('.navbar'));
    const isDisplayed = await navbar.isDisplayed();
  
    // Assert that the navbar is not displayed on small screens
    expect(isDisplayed).toBe(false);
  });
  
  it('should have a responsive design', async () => {
    // Set the browser window size to a large screen resolution
    await driver.manage().window().setRect({ width: 1366, height: 768 });
  
    await driver.get('http://localhost:3000');
  
    // Simulate resizing the browser window
    await driver.manage().window().setRect({ width: 800, height: 600 });
  
    // Check if the navbar elements are still visible and properly aligned
    const menuItems = await driver.findElements(By.css('.navbar .menu-item'));
    const isAligned = await areElementsHorizontallyAligned(menuItems);
  
    // Assert that the navbar elements are properly aligned after resizing
    expect(menuItems.length).toBeGreaterThan(0);
    expect(isAligned).toBe(true);
  });
  

  // Add more test cases for other functionality of the navbar
});
