const {expect} = require("@playwright/test")

class HomePage {
    constructor(page) {

        this.page = page
        this.manage ="//span[normalize-space()='Manage']"
        this.menu ="//img[@alt='menu']"
        this.logOut = "//button[normalize-space()='Sign out']"
        
    }

    async verifyManageOption(){
        await expect(this.page.locator(this.manage)).toBeVisible()
    }

    async logoutFromApplication(){
        await this.page.click(this.menu)
        await this.page.click(this.logOut)
    }
}

module.exports = HomePage;