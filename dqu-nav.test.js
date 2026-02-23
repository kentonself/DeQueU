require('chromedriver'); // This line makes the chromedriver executable available
const { Builder, By } = require('selenium-webdriver');

 test('Ensure Nav Bar is found', async () => {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://dequeuniversity.com/demo/mars');
    const mainNav = await driver.findElement(By.id('main-nav'))
    await expect(mainNav).not.toBeNull()
  } catch (error) {
    console.error("Could not find mainNav" + error)
  } finally {
    await driver.quit();
  }
 })

