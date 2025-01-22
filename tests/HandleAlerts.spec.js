const {test,expect} = require("@playwright/test")

test('Handle Alert', async function({page}) {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    page.on('dialog', async (d) => 
    {
        expect(d.type()).toContain('alert')
        expect(d.message()).toContain('I am a JS Alert')
        await d.accept()
    })

    await page.locator(`button[onclick='jsAlert()']`).click()
    await page.waitForTimeout(1000)
    
})

test('Handle Confirm Box', async function({page}) {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    page.on('dialog', async (dialogWindow) => 
    {
        expect(dialogWindow.type()).toContain('confirm')
        expect(dialogWindow.message()).toContain('I am a JS Confirm')
        await dialogWindow.dismiss()
    })
      
    await page.locator(`button[onclick='jsConfirm()']`).click()
    await page.waitForTimeout(2000)
    
})

test('Handle Prompt Box', async function({page}) {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    page.on('dialog', async (dialogWindow) => 
    {
        expect(dialogWindow.type()).toContain('prompt')
        expect(dialogWindow.message()).toContain('I am a JS prompt')
        await dialogWindow.accept("Kojo Ankra")
    })
      
    await page.locator(`button[onclick='jsPrompt()']`).click()
    await page.waitForTimeout(2000)
    
})