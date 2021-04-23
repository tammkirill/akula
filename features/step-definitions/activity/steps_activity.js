const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

///After log in check user name in activity table

const LoginPage = require('../../pageobjects/login.page.js');
const MainPage = require('../../pageobjects/main.page.js');

Given (/^I am on the main page$/, async () => {
    await LoginPage.open("")
});

When(/^I log in with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see my user name (.+) in the list of active users$/, async (name) => {

    //Find my username in the table
    let array_of_names = await MainPage.findAllUsers();

    //Find <username> among all active users
    for (let i = 0; i < array_of_names.length; i++){
        if (await array_of_names[i] === name){
            let str_tmp = await array_of_names[i];
            await assert.strictEqual(str_tmp, name)
        }
    }
    assert.fail();

});