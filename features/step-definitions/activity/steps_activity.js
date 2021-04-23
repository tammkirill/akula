const { Given, When, Then } = require('@cucumber/cucumber');

///After log in check user name in activity table

const LoginPage = require('../../pageobjects/login.page.js');
const MainPage = require('../../pageobjects/main.page.js');

Given (/^I am on the main page$/, async () => {
    await LoginPage.open("")
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see my user name (\w+) in the list of active users$/, async (username) => {

    //Find my username in the table
    let str_of_names = MainPage.findAllUsers();

    //Need to be finished
    for (let i = 0; i < str_of_names.length(); i++){

    }


});