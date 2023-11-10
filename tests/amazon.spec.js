const {test,expect}= require ('@playwright/test');
test('first automation',async function({browser})
{const context= await browser.newContext();
const page = await context.newPage();
await page.goto("https://www.amazon.in/ap/signin?openid.pape.max_auth_age=900&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fgp%2Fyourstore%2Fhome%3Fpath%3D%252Fgp%252Fyourstore%252Fhome%26useRedirectOnSuccess%3D1%26signIn%3D1%26action%3Dsign-out%26ref_%3Dnav_AccountFlyout_signout&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0");
const phoneNumber = await page.locator("#ap_email").type("8368009524");
const Continue = await page.locator("span#continue").click();
const Password = await page.locator("#ap_password").type("Jagman@8368009524");
const Check = await page.getByLabel("Keep me signed in.").check();
const signIn = await page.locator("#signInSubmit").click();
const search = await page.locator("#twotabsearchtextbox").type("iphone13 pro max",{delay:100});
const dropdownresults = page.locator(".left-pane-results-container");
await dropdownresults.waitFor();
const resultsCount = await dropdownresults.locator(".s-suggestion-container").count();
await console.log(resultsCount);
for (let i=0;i<resultsCount;++i)
{if (await dropdownresults.locator(".s-suggestion-container").nth(i).textContent()==="iphone 13 pro max tempered glass")

   {await dropdownresults.locator(".s-suggestion-container").nth(i).click();
   break;
   }
 }
 const cover = await page.locator("span.a-size-medium").nth(7).click();
 await page.pause();
});
