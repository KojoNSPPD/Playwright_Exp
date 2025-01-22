
const {test,expect} = require("@playwright/test")
const { beforeEach } = require("node:test")


test('Handle Augo Suggestions using Keyboard', async function({page}) {

    await page.goto('https://www.google.com')

    await page.locator('#APjFqb').fill('Mukesh Otwani')

    await page.waitForSelector(`//li[@role='presentation']`)
    await page.waitForTimeout(1000)

    await page.keyboard.press('ArrowDown')
    await page.waitForTimeout(1000)

    await page.keyboard.press('ArrowDown')
    await page.waitForTimeout(1000)

    await page.keyboard.press('Enter')
    await page.waitForTimeout(1000)
    
})

test('Handle Augo Suggestions using a loop', async function({page}) {

    await page.goto('https://www.google.com')

    await page.locator('#APjFqb').fill('Mukesh Otwani')

    await page.waitForSelector(`//li[@role='presentation']`)
    await page.waitForTimeout(1000)

   const elements = await page.$$(`//li[@role='presentation']`)

   for(let i =0; i<elements.length;i++)
      { 
        
        const text = await elements[i].textContent()

        if(text.includes('youtube'))
            {
                await elements[i].click()
                await page.waitForTimeout(1000)
                break
            }
      }
  
})
