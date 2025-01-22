const {test,expect} = require("@playwright/test")

test('Keyboard Events Playwright', async function({page}) {
    
    await page.goto('https://www.google.com')

    await page.locator('#APjFqb').focus

    await page.keyboard.type('Mukesh Otwani')

    await page.keyboard.press('ArrowLeft')

    await page.keyboard.down('Shift')

    for( let i = 0;i<6;i++)
    {   
        await page.waitForTimeout(1000)
        await page.keyboard.press("ArrowLeft")
    }

    await page.keyboard.up('Shift')

    await page. keyboard.press('Backspace')

    /*await page.keyboard.press('Enter')

    await page.keyboard.press('Meta+A')   //Select All
    await page.waitForTimeout(1000)

    await page.keyboard.press('Meta+C')   //Copy
    await page.waitForTimeout(1000)

    await page. keyboard.press('Backspace') //BackSpace
    await page.waitForTimeout(1000)

    await page.keyboard.press('Meta+V')   //Paste
    await page.waitForTimeout(1000)

    */
   

    
})
