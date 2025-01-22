const {test,expect} = require("@playwright/test")

test('Handling I Frames', async function({page}) {

    await page.goto('https://docs.oracle.com/javase/8/docs/api/')

    const Iframe = await page.frameLocator('html > frameset > frameset > frame:nth-child(1)')

    await Iframe.locator(`//a[normalize-space()='java.applet']`).click()

    await page.pause()
    
})