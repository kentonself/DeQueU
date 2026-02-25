const { AxeBuilder } = require('@axe-core/webdriverjs');
require('chromedriver'); // This line makes the chromedriver executable available
const { Builder } = require('selenium-webdriver');

async function t() {
    let driver = await new Builder().forBrowser('chrome').build();
    let results = {}
    try {
        await driver.get('https://dequeuniversity.com/demo/mars');
        results = await new AxeBuilder(driver).analyze();
        //console.log(results)
    } catch (error) {
        console.error("Could not find mainNav" + error)
    } finally {
        await driver.quit();
    }
    return results
}

let a11yCases = [
    { "impact": "moderate", "upperLimit": 15 },
    { "impact": "serious", "upperLimit": 10 },
    { "impact": "critical", "upperLimit": 5 }
]

test.each(a11yCases)("Is Catagory over limit", async ({ impact, upperLimit }) => {
    const results = await t()
    const violations = results.violations
    //console.log(violations)
    console.log(results)
    impacts = violations.filter(violation => violation.impact == impact)
    expect(impacts.length).toBeLessThanOrEqual(upperLimit)
})
