const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert").strict;
var loginPage = require("../pages/login.page");

// Given I am on the login page
Given("I am on the login page", async function () {
    await loginPage.open();
});

// When I login with <username> and <password>
When(/^I login with (.*) and (.*)$/, async function (username, password) {
    await loginPage.login(username, password);
});
