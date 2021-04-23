const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Main extends Page {

    //Active users tab
    get tableActive () { return $('.thin'); }

    async findAllUsers() {
        const active_users = await this.tableActive;
        let str_active_users = await active_users.getText();
        let array_of_users = await str_active_users.split(' , ');

        return array_of_users;
    }

    async open (path) {
        await browser.deleteCookies();
        return super.open(path);
    }
}

module.exports = new Main();