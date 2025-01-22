const {test,expect} = require("@playwright/test")

test('Verify file upload', async function({page}) {

    await page.goto('https://the-internet.herokuapp.com/upload')

    await page.locator(`//input[@id='file-upload']`).setInputFiles('/Users/kojoankra/Documents/PPic.jpg')

    await page.locator('#file-submit').click({delay:1000})

    const value = await page.$(`div[class='example'] h3`)
    const text = await value.textContent()
    console.log("The text is: "+text)
    
    expect (await page.locator('//h3')).toHaveText('File Uploaded!')

    
})