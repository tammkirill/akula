const { Given, When, Then } = require('@cucumber/cucumber');

const assert = require('assert');

///After log in check stealth and check user name in activity table

const LoginPage = require('../../pageobjects/login.page.js');
const MainPage = require('../../pageobjects/main.page.js');

Given (/^I am on the (.+)$/, async (page) => {
    await LoginPage.open(page || "")
});

When(/^I log in with (\w+) and (.+) and check Stealth$/, async (username, password) => {
    await LoginPage.checkStealth();
    await LoginPage.login(username, password);
    
});

Then(/^I shouldn't see my user name (.+) in the list of active users$/, async (name) => {

    //Find my username in the table
    let array_of_names = await MainPage.findAllUsers();

    //Find <username> among all active users
    for (let i = 0; i < array_of_names.length; i++){
        let str_tmp = await array_of_names[i];
        assert.notStrictEqual(await str_tmp, name);
    }

});