import { Builder, By, until } from "selenium-webdriver";

describe("Home page", () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser("chrome").build();
  });

  afterAll(async () => {
    await driver.quit();
  });

  it("should display the header section", async () => {
    await driver.get("http://localhost:3000");

    const header = await driver.findElement(By.css(".hero-section"));
    expect(await header.isDisplayed()).toBe(true);
  });

  it("should display the features of our product", async () => {
    await driver.get("http://localhost:3000");

    const features = await driver.findElement(
      By.css(".feature-section pt-150")
    );
    expect(await features.isDisplayed()).toBe(true);
  });

  it("should display the Main Section of our product", async () => {
    await driver.get("http://localhost:3000");

    const features = await driver.findElement(
      By.css(".Main_Section pt-150 pb-120")
    );
    expect(await features.isDisplayed()).toBe(true);
  });

  it("should display the about section of our product", async () => {
    await driver.get("http://localhost:3000");

    const features = await driver.findElement(
      By.css(".about-section pt-150 pb-20")
    );
    expect(await features.isDisplayed()).toBe(true);
  });

  it("should display the countdown section of our product", async () => {
    await driver.get("http://localhost:3000");

    const features = await driver.findElement(
      By.css(".countdown-section pt-70 pb-70 img-bg")
    );
    expect(await features.isDisplayed()).toBe(true);
  });

  it("should display the Contact Us section of our product", async () => {
    await driver.get("http://localhost:3000");

    const features = await driver.findElement(
      By.css(".contact-section pt-120 pb-105")
    );
    expect(await features.isDisplayed()).toBe(true);
  });

  it("should display the footer of our home page", async () => {
    await driver.get("http://localhost:3000");

    const features = await driver.findElement(By.css(".footer pt-100 img-bg"));
    expect(await features.isDisplayed()).toBe(true);
  });
  // Add more test cases for other sections of the home page
});
