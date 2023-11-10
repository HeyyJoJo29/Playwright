//iframe - inline frame //iframe handle krne k liye hmesha browser fixture ka use krnge ,page nhi lenge 
const {test, expect} = require('@playwright/test');
test('letscodeit',async function({browser})
 {
     const context = await browser.newContext();
     const page =  await context.newPage();
     await page.goto("https://www.letskodeit.com/practice");
   //navigating to iframe
    const pageIframe = await page.frameLocator("#courses-iframe");
    const support = await pageIframe.locator("[data-id = '41190']").nth(0).click();
    await page.pause();
  


 });