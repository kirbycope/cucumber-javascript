const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert").strict;

// Given I am on the login page
Given("I am on the login page", function () {
    // todo
});

// When I login with <username> and <password>
When(/^I login with (.*) and (.*)$/, function (username, password) {
    // todo
});

// Then I should see a message saying <message>
Then(/^I should see a message saying (.*)$/, function (message) {
    // todo
});
