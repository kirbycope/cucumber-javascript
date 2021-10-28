var { After, Before } = require('@cucumber/cucumber');
require('chromedriver');
var webdriver = require('selenium-webdriver');
const testData = require("../../../test-data");

var driver;

// This runs before each scenario
Before(function () {
    driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();
        driver.manage().window().maximize();
});

// This runs after each scenario
After(function () {
    return driver.quit();
});
