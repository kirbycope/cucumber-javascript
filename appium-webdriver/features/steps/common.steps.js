const { After, Before, Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const assert = require("assert").strict;
const webdriver = require('selenium-webdriver');
const appiumJson = require('../../../appium.json')
require('../../../test-data');
setDefaultTimeout(30*1000);

/** This runs before each scenario. */
Before(async function () {
    timeStart = new Date();
    await startSession();
});

/** This runs after each scenario. */
After(async function () {
    await driver.quit();
    timeEnd = new Date();
    let timeDiff = (timeEnd - timeStart) / 1000;
    console.log("\n" + '\033[94m' + "  Total Test Time: " + timeDiff + '\033[0m');
});

/** Starts a session with the global webdriver. */
async function startSession() {
    let desiredCapabilities = {
        "appium:app": appiumJson["APP"],
        "appium:udid": appiumJson["UDID"],
        "platformName": appiumJson["PLATFORMNAME"]
    }
    driver = await new webdriver.Builder()
        .usingServer(appiumJson["HUBURI"])
        .withCapabilities(desiredCapabilities)
        .forBrowser("Android")
        .build();
    await driver.manage().setTimeouts({ implicit: 5000 });
}

// Then I should see a message saying <message>
Then(/^I should see a message saying (.*)$/, async function (message) {
    //let element = await driver.findElement(webdriver.By.xpath('//*[contains(text(),"' + message + '")]'));
    //assert(await element.isDisplayed);
});
