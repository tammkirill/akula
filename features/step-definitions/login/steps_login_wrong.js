const { Given, When, Then } = require('@cucumber/cucumber');

///* Log in with wrong and not existing user name and password 

const LoginPage = require('../../pageobjects/login.page.js');


Given(/^I am on the (.*) page$/, async (page) => {
    await LoginPage.open(page|| "")
});

When(/^I login with wrong (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a message on the main page saying (.+)$/, async (message) => {

    //Compare massege on the main page with text from Gherkin
    const wrong_text = await LoginPage.wrongText;
    await wrong_text.waitForDisplayed({ timeout: 10000 });
    await wrong_text.getText() === message;
});