const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Login extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('input[type="text"]') }
    get inputPassword () { return $('input[type="password"]') }
    get btnSubmit () { return $('input[type="submit"]') }

    //Get text after login
    get loginText () {return $('.maintitle')}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }

    //async getHi () {
        //await (await this.loginText).getText();
    //}

    /**
     * overwrite specifc options to adapt it to page object
     */
    async open (path) {
        await browser.deleteCookies();
        return super.open(path);
    }
}

module.exports = new Login();