import { Builder, By } from "selenium-webdriver";

describe('Sidebar', () => {
    let driver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
    });

    afterAll(async () => {
        await driver.quit();
    });

    it('should navigate to the home page', async () => {
        await driver.get('http://localhost:3000');
    
        // Simulate clicking on a specific section
        const servicesLink = await driver.findElement(By.linkText('/'));
        await servicesLink.click();
    
        // Assert that the page navigated to the Home page
        const currentURL = await driver.getCurrentUrl();
        expect(currentURL).toContain('/');
      });

      it('should navigate to the Discover page', async () => {
        await driver.get('http://localhost:3000');
    
        // Simulate clicking on a specific section
        const servicesLink = await driver.findElement(By.linkText('/discover'));
        await servicesLink.click();
    
        // Assert that the page navigated to the Discover page
        const currentURL = await driver.getCurrentUrl();
        expect(currentURL).toContain('/discover');
      });

      it('should navigate to the Messages Page', async () => {
        await driver.get('http://localhost:3000');
    
        // Simulate clicking on a specific section
        const servicesLink = await driver.findElement(By.linkText('/messages'));
        await servicesLink.click();
    
        // Assert that the page navigated to the Messages page
        const currentURL = await driver.getCurrentUrl();
        expect(currentURL).toContain('/messages');
      });

      it('should navigate to the Future trading page', async () => {
        await driver.get('http://localhost:3000');
    
        // Simulate clicking on a specific section
        const servicesLink = await driver.findElement(By.linkText('/profile/future'));
        await servicesLink.click();
    
        // Assert that the page navigated to the Future trading page
        const currentURL = await driver.getCurrentUrl();
        expect(currentURL).toContain('/profile/future');
      });

      it('should navigate to the Spot trading page', async () => {
        await driver.get('http://localhost:3000');
    
        // Simulate clicking on a specific section
        const servicesLink = await driver.findElement(By.linkText('/profile/spot'));
        await servicesLink.click();
    
        // Assert that the page navigated to the Spot trading page
        const currentURL = await driver.getCurrentUrl();
        expect(currentURL).toContain('/profile/spot');
      });

      it('should navigate to the Logout section', async () => {
        await driver.get('http://localhost:3000');
    
        // Simulate clicking on a specific section
        const servicesLink = await driver.findElement(By.linkText('/logout'));
        await servicesLink.click();
    
        // Assert that the page navigated to the 'Services' section
        const currentURL = await driver.getCurrentUrl();
        expect(currentURL).toContain('/login');
      });
});