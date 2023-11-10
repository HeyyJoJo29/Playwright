const {test, expect} = require('@playwright/test');
const {pomanager} = require('../pageobject/pomanager.js');
const dataset = JSON.parse(JSON.stringify(require("../testdata/framework_pageobject_testData.json"))); //we need to convert the imported json into a javascript object 
//parameterisation is a process of testing a testcase with multiple test data
for(const data of dataset)
{
test('Framework with pageobject for ${data.productname}`', async function({page})
     {
      const pom = new pomanager(page);
     const abc =  pom.getLoginPage();
     await abc.gotourl();
     // const email = "saxenamaya@gmail.com";
     // const pass_word = "Second50#*"
     await abc.validlogin(data.email ,data.pass_word)
     const pom2 = await pom.getdashboardpage();
     const productname = "iphone 13 pro";
     await pom2.heyy(data.productname);
     await pom2.gotocart();
     const pom3 = await pom.getcartpage();
     await pom3.clickcheckout();
     const ccn ="4111111111111111"
     const ec = "04"
     const ec1 = "12"
     const cvvcode ="041"
     const name ="Mayank Saxena"
     const pom4 = await pom.getpaymentpage();
     await pom4.jaggi(ccn,ec,ec1,cvvcode,name);
     await expect(page.locator(".user__name [type='text']").first()).toHaveText(data.email);
    await page.pause();
     const pom5 =  await pom.getorderhistorypage();
     await pom5.searchOrderAndSelect();
   
})};