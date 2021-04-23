const { Given, When, Then } = require('@cucumber/cucumber');

const assert = require('assert');

///* Log in with exicting user name and password 

const LoginPage = require('../../pageobjects/login.page.js');


Given(/^I am on the (.*) page$/, async (page) => {
    await LoginPage.open(page|| "")
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a message on the main page saying (.+)$/, async (message) => {

    //Compare massege on the main page with text from Gherkin

    const hi_text = await LoginPage.loginText;
    await hi_text.waitForDisplayed({ timeout: 10000 });
    await assert.strictEqual(await hi_text.getText(), ' '+message)
    
});
