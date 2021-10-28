const { By } = require("selenium-webdriver");

/**URL looks like: {baseURL}/login */
module.exports = {

    /** The `input` for "Username". */
    inputUserName: async function() {
        return await driver.findElement(By.id('username'));
    },

    /** The `input` for "Password". */
    inputPassword: async function() {
        return await driver.findElement(By.id('password'));
    },

    /** The `button` to submit a form. */
    btnSubmit: async function() {
        return await driver.findElement(By.css('button[type="submit"]'));
    },

    /** Opens `this` page. */
    open: async function () {
        await driver.get(baseUrl + '/login');
    },

    /** Log in using the given username and password. */
    login: async function(username, password) {
        if (username == 'valid') {
            username = testUser;
        }
        if (password == 'valid') {
            password = testPass;
        }
        await (await this.inputUserName()).sendKeys(username);
        await (await this.inputPassword()).sendKeys(password);
        await (await this.btnSubmit()).click();
    }
}
