const { test, chromium } = require('@playwright/test');
const fs = require('fs');

test('Capture login token', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    // Navigate to the login page
    await page.goto('https://freelance-learn-automation.vercel.app/login');

    // Perform the login
    await page.fill('#email1', 'admin@email.com');
    await page.fill('#password1', 'admin@123');
    await page.click(`//button[text()='Sign in']`);

    // Wait for navigation to complete
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000)

    // Save cookies to a file
    await context.storageState({ path: 'cookies.json' });
    const cookies = await context.cookies();
    console.log('Captured Cookies:', cookies);
    fs.writeFileSync('cookies.json', JSON.stringify(cookies));

    await browser.close();
});
