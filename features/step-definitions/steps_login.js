const { Given, When, Then } = require('@cucumber/cucumber');

///* Log in with exicting user name and password 

const Login = require('../pageobjects/login.page.js');


Given(/^I am on the (.*) page$/, async (page) => {
    await Login.open(page|| "")
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await Login.login(username, password)
});

Then(/^I should see a message on the main page saying (.+)$/, async (message) => {

    //Compare messege on the main page with text from Gherkin

    const hi_text = await Login.loginText;
    await hi_text.waitForDisplayed({ timeout: 10000 });
    await hi_text.getText() === message;
});
