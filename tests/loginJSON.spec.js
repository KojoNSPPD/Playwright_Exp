const { test, expect } = require("@playwright/test")
const data = require('../testlogin.json');

test.describe("Data driven login test", function () 
{

    for (const d of data)
    {

        test.describe(`Login with different user: ${d.id}`, function ()
         {

            test('Login to application', async ({page}) => {


                await page.goto('https://freelance-learn-automation.vercel.app/login')

                await page.locator("//input[@id='email1']").fill(d.username)

                await page.locator(`//input[@id='password1']`).fill(d.password);

                await page.locator(`button[type='submit']`).click({button:"left"})

                await expect(page).toHaveURL('https://freelance-learn-automation.vercel.app/')

                await page.waitForTimeout(4000)


            });


        })
    }
})

