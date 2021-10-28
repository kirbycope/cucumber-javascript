const { After, Before, Given, When, Then} = require('@cucumber/cucumber');
const assert = require("assert").strict;
const webdriver = require('selenium-webdriver');
require('chromedriver');
require('../../../test-data');

// This runs before each scenario
Before(async function () {
    timeStart = new Date()
    driver = await new webdriver.Builder()
        .forBrowser('chrome')
        .build();
    await driver.manage().window().maximize();
    await driver.manage().setTimeouts( { implicit: 5000 } );
});

// This runs after each scenario
After(async function () {
    await driver.quit();
    timeEnd = new Date();
    let timeDiff = (timeEnd - timeStart)/1000;
    console.log("\n" + '\033[94m' + "  Total Test Time: " + timeDiff + '\033[0m');
});

// Then I should see a message saying <message>
Then(/^I should see a message saying (.*)$/, async function (message) {
    let element = await driver.findElement(webdriver.By.xpath('//*[contains(text(),"' + message + '")]'));
    assert(await element.isDisplayed);
});
