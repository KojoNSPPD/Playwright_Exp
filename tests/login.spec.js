const {test,expect} = require("@playwright/test")
const { timeout } = require("../playwright.config")
const { name } = require("pug")

test('Valid Login', async function({page}) {
  
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.getByPlaceholder('Username').fill('Admin',{delay:200})

    await page.locator(`input[name='password']`).fill('admin123',{delay:100})

    await page.locator(`//button[@type='submit']`).click({button:"left"})

    await page.waitForTimeout(3000)

    await expect(page).toHaveURL(/dashboard/)

    await page.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").first().click()

    await page.locator("//a[normalize-space()='Logout']").click()

    await expect(page).toHaveURL(/login/)

})