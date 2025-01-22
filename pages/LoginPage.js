const {expect} = require("@playwright/test") 

class LoginPage {

    constructor(page)
    {
        this.page = page
        this.header = `//h2[normalize-space()='Sign In']`
        this.username = '#email1'
        this.password = '#password1'
        this.loginbutton = `//button[text()='Sign in']`
    }

    async LoginToApplication(user,password)
    {
        await this.page.fill(this.username,user)
        await this.page.fill(this.password,password)
        await this.page.click(this.loginbutton)
        await this.page.waitForTimeout(10000)
    }

    async VerifySignIn()
    {
        await expect(this.page.locator(this.header)).toBeVisible()
    }

}

module.exports= LoginPage;