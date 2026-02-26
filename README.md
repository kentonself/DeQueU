This process hits a predetermined web site and does two things:

1. Validates that a main-nav element exists in the DOM (dqu-nav.test.js)
2. Runs a set of validations against the Axe Core Accessibility ("A11y") library

The validations are in the JSON object a11yCases in dqu_all1.test.js declared near line 20. The values for each category can be adjusted there.

To Run:

 - npm install

 - npm test
