const {test, expect} = require('@playwright/test');
test('handling child window',async function({browser})
 {
    const context = await browser.newContext();
    const page =  await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator("#username");
    const blinkingText = page.locator("body a.blinkingText");
    await expect(blinkingText).toHaveAttribute("class", "blinkingText");
    //clicking on blinking text and waiting for new window / tab to open
    //jab bhi hm waitforevent use krnge toh ek promise generate hoga 
    const [newPage] = await Promise.all([context.waitForEvent('page'),
                      blinkingText.click(),]);
   // await page.pause();
    //harr page ka ek apna handle hota hai 
    //getting the text of the red highlighted from tab
    const textFromNewTab = await newPage.locator("p.red").textContent();
    console.log(textFromNewTab);
    //Getting a substring from a whole string 
    const subText = textFromNewTab.split("@");
    console.log(subText);
    const subSubText = subText[1].split(" ")[0];
    console.log(subSubText);

    
  
 });