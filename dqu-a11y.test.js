const { AxeBuilder } = require('@axe-core/webdriverjs');
require('chromedriver'); // This line makes the chromedriver executable available
const { Builder } = require('selenium-webdriver');

let a11yCases = [
    { "impact": "moderate", "upperLimit": 15 },
    { "impact": "serious", "upperLimit": 10 },
    { "impact": "critical", "upperLimit": 5 }
]

test(`Does the page meet the accessibility requirements?`, async () => {
    let results = ""
    failureString = "";
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://dequeuniversity.com/demo/mars');
    results = await new AxeBuilder(driver).analyze();
    //console.log(results)
    const violations = results.violations
    //console.log(violations) // Show only the violations
    console.log(results) // Show ALL the results
    for (const a11yCase of a11yCases) {
        // console.log(`${a11yCase.impact}: ${a11yCase.upperLimit} : `)
        let impacts = violations.filter(violation => violation.impact == a11yCase.impact)
        if (impacts.length > a11yCase.upperLimit) {
            if(failureString.length > 0) {
                failureString += "\n"
            }
            failureString = `${failureString}Too many ${a11yCase.impact} violations. ` +
                `Expecing less than ${a11yCase.upperLimit}. Received ${impacts.length}.`
        }
    }
    await expect(failureString).toBe("")
    await driver.quit();
})
