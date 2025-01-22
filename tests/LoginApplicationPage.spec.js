const {test,expect} = require("@playwright/test")
const LoginPage = require('../pages/LoginPage')
const HomePage =  require('../pages/HomePage')

test('Login to application using POM', async function({page}) {

    await page.goto('https://freelance-learn-automation.vercel.app/login')

    const AppLoginPage = new LoginPage(page)
    await AppLoginPage.LoginToApplication('admin@email.com','admin@123')
    

    const AppHomePage =new HomePage(page)
    await AppHomePage.verifyManageOption()

    await AppHomePage.logoutFromApplication()
    await AppLoginPage.VerifySignIn()
    
})