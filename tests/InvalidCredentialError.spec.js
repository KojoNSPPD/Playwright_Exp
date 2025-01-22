const {test,expect} = require("@playwright/test")
const { error } = require("console")
test.use({viewport:{width:899,height:899}})
test('Verify Error Message', async function({page}) {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    console.log (await page.viewportSize().width)
    console.log (await page.viewportSize().height)

    await page.getByPlaceholder('Username').fill('Admin',{delay:200})

    await page.locator(`input[name='password']`).fill('admin1234',{delay:100})

    await page.locator(`//button[@type='submit']`).click({button:"left"})

    await page.waitForTimeout(3000)

    const Error_Message = await page.locator(`//p[contains(@class,'alert-content-text')]`).textContent()

    console.log("Error Message is "+Error_Message)

    expect(Error_Message.includes('Invalid')).toBeTruthy()

    expect(Error_Message==='Invalid credentials').toBeTruthy()

    
    
})

