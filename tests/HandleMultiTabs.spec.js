const {test,expect} = require("@playwright/test")

test('Handling Multiple tabs', async function({browser}) {

    const context = await browser.newContext()

    const page = await context.newPage();

    await page.goto('https://freelance-learn-automation.vercel.app/login')

    const [newPage] = await Promise.all(
        [
            context.waitForEvent('page'),
            page.locator(`//*[@id="login_container"]/div/div/a[4]`).click()

        ]
    )
    
    await newPage.locator(`//input[@id=':ri:']`).fill('Kojoankra@gmail.com')
    await newPage.waitForTimeout(5000)
    await newPage.close()

    await page.locator(`//input[@id='email1']`).fill('admin@email.com')
    await page.waitForTimeout(5000)

   
    
})