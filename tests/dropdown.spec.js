const {test,expect} = require("@playwright/test")

test('Select Values/Options from dropdown ', async function({page}) {

    await page.goto("https://freelance-learn-automation.vercel.app/signup")

    await page.locator('#state').selectOption({label:'Bihar'})

    await page.waitForTimeout(1000)

    await page.locator('#state').selectOption({value:'Goa'})

    await page.waitForTimeout(1000)

    await page.locator('#state').selectOption({index:7})

    /*await page.waitForTimeout(1000)

    const value = page.locator('#state').textContent()

    console.log('All dropdown values '+value);

    await expect(value.includes('Kerala')).toBeTruthy()
     */
    

    let state = await page.$('#state')
    let allElements = await state.$$('option')
    let ddstatus = false

    for (let i=0;i<allElements.length;i++)
    {
        let element = allElements[i]
        let value = await element.textContent()

        if(value.includes("Bihar"))
        {
            ddstatus= true
            break
        }
        console.log("Value from dropdown using for loop "+value)
        
    }
    await expect(ddstatus).toBeTruthy()

    await page.locator("#hobbies").selectOption(['Playing','Swimming'])

    await page.waitForTimeout(3000)
   
    
})