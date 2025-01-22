const {test,expect} = require("@playwright/test")

test('Mouse Hover Test', async function({page}) {

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await page.getByPlaceholder('Enter Email').fill('admin@email.com')

    await page.getByPlaceholder('Enter Password').fill('admin@123')

    await page.getByRole('button',{name:'Sign in '}).click()

    await page.locator(`//span[normalize-space()='Manage']`).hover()

    await page.locator(`//a[normalize-space()='Manage Courses']`).click()

})