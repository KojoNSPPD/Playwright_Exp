const {test,expect} = require("@playwright/test")
const { timeout } = require("../playwright.config")
const { name } = require("pug")
const fs = require('fs');

test('Valid Login', async function({page}) {

    /*
  
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.getByPlaceholder('Username').fill('Admin',{delay:200})

    await page.locator(`input[name='password']`).fill('admin123',{delay:100})

    await page.locator(`//button[@type='submit']`).click({button:"left"})

    
    const browser = await chromium.launch();
    const context = await browser.newContext();

    */

    const cookies = JSON.parse(fs.readFileSync('cookies.json'));
    await context.addCookies(cookies);


    await expect(page).toHaveURL('https://freelance-learn-automation.vercel.app/')

})