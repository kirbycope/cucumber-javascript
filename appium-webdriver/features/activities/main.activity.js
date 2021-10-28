const { By } = require("selenium-webdriver");

/**URL looks like: {baseURL}/login */
module.exports = {

    /** The `editText` with the placeholder 'Enter a messsage'. */
    editTextEnterAMessage: async function() {
        return await driver.findElement(By.id('editTextTextPersonName'));
    },

    /** The The 'SEND' `button`. */
    buttonSend: async function() {
        return await driver.findElement(By.id('button'));
    },

    /** Opens `this` page. */
    open: async function () {
        console.log(); // being the default activity there is nothing to do here
    },

    /** Sends the given message. */
    sendMessage: async function(message) {
        await (await this.editTextEnterAMessage()).sendKeys(message);
        await (await this.buttonSend()).click();
    }
}
