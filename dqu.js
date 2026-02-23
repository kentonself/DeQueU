require('chromedriver'); // This line makes the chromedriver executable available
const { Builder, By, Key, until } = require('selenium-webdriver');

(async function mars() {
  let driver = await new Builder().forBrowser('chrome').build();
  let mainNav = ""
  try {
    await driver.get('https://dequeuniversity.com/demo/mars');
    await driver.findElement(By.id('main-nav'))
  } catch (error) {
    console.error("Could not find mainNav" + error)
  } finally {
    await driver.quit();
  }
})();
