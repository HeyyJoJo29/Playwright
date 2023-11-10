const{test,expect} = require('@playwright/test');
const {pomanagervfp} = require('../pageobject_vfp/vfpPoManager.js');
test('automating vfp',async function({browser})
{ 
     const context = await browser.newContext();
     const page = await context.newPage();

     const pomvfp = new pomanagervfp(page);
     const connector =  pomvfp.getloginpage();
     await connector.websiteUrl();
     pomvfp.getloginpage();
     const username = "jagdish.negi@daxko.com"
     const password ="Jagman@8368009524"
     await connector.validCredentials(username,password);
     await  page.waitForLoadState('networkidle')

     const addLead = page.locator(".show-add-lead");
     await expect (addLead).toHaveAttribute("class","btn btn-lg btn-green show-add-lead");
     await addLead.click();
 
     const firstName =  page.locator("input.ng-touched");
     await firstName.type("jaggi");

    // //  const lastName = page.locator("div input[data-testid = 'lead-last-name']");
    // //  await lastName.type("negi");
     await page.pause();

});