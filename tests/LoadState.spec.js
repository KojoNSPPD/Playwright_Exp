const {test,expect} = require("@playwright/test")

test('Working with load states', async function({page}) {
    await page.goto('https://freelance-learn-automation.vercel.app/login')

    const signup = await page.getByText('New User? Signup')
    
    signup.click()

    await page.waitForLoadState('networkidle')

    const count = await page.locator(`//input[@type='checkbox']`).count()

    console.log(count)

    expect(count).toBe(8)
    
})