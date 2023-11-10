const {test,expect} = require ('@playwright/test');

OPEN WEBSITE USING PAGE FIXTURE

// test ('open website',async function({page})
// {         
//     await page.goto("https://www.cricbuzz.com/")                                                                                                                                                                                  

// });

OPEN WEBSITE USING BROWSER FIXTURE

// test('open website',async function({browser})
// {
//      const context = await browser.newContext();
//      const page =  await context.newPage();
//      await page.goto("https://www.facebook.com/login/");
// });

CREATING CONSTANTS
//     // await const userName = page.locator ("#email").type("Jagdish1234@gmail.com");
//     //                   //OR
//     // const userName = page.locator("#email");
//     // await userName.type("Jagdish1234@gmail.com"")

//     // await const passWord = page.locator("#pass").fill("jagdish");
//     // await const login = page.locator("#loginbutton").click();

//     //type and fill same hote hain but ek difference hota h , koi cheez likhi and use mitana  h to fill use krnge 

//  //GOING BACKWARD AND FORWARD

//     // test('go backward and forward',async function({browser}){
//     //     const context = await browser.newContext();
//     //    const page =  await context.newPage();
//     //   await page.goto("https://www.facebook.com/login/");
//     //   await page.goto("https://www.google.com/");
//     //   //go back 
//     //  await  page.goBack();
//     //  await page.goForward();
    
//     // });
    
//     // dropdown : static and dynamic :::select tag hoga to static drop down hoga ....

// //HANDLING RADIOBUTTON

//     test('handling radioButton',async function({browser})
// {
//      const context = await browser.newContext();
//      const page =  await context.newPage();
//      await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
//      //selecting radio button with value radio1
//      const radio = page.locator(".radioButton");
//      await radio.nth(1).click();
//      await page.pause();
//         });

// //HANDLING MOUSEHOVER

//     test('handling mousehover',async function({browser})
// {
//      const context = await browser.newContext();
//      const page =  await context.newPage();
//      await page.goto("https://www.bedbathandbeyond.com/");
//      //const ka use value daalne k liye krte h agr value nhi deni h toh let ka use krnge ..
//      //const A = vishal <<<A variable ko turant use krna h >>>>
//      //let A <<<baad m define krunga A ki value >>>

//     //const hover = page.locator('.accounttxt');
//     //await hover.hover();

//     ///h.w = css chahiye sign in button ka ,hover krna sign in pr click krna and assertion likhna
//      const hover = page.locator('p.accountTxt');
//      await hover.hover();
//     // await page.pause();
//      const signinbtn = page.locator("a.v15.btn.btnPrimary.btnLrg");
//      await signinbtn.click('a.v15.btn.btnPrimary.btnLrg');
//      //await page.pause();


//      //extracting the title of a page 
//      const pagetitle = await page.title();
//      console.log(pagetitle);

//      // applying assertion on title
//      await expect(page).toHaveTitle("Login | Bed Bath & Beyond");
//      //applying assertion on URL
//     await  expect(page).toHaveURL("https://www.bedbathandbeyond.com/store/account/Login");
   

//     });

//  //SELECTING DROPDOWN

//     test('handling static dropdown',async function({browser})
// {
//      const context = await browser.newContext();
//      const page =  await context.newPage();
//      await page.goto("https://rahulshettyacademy.com/AutomationPractice/");


//      //selecting the dropdown

//      const dropDown = page.locator ("#dropdown-class-example");

//      //selecting the value from the dropdown

//      await dropDown.selectOption("option1");
// });

// //HANDLING CHECKBOX

// test('handling checkbox',async function({browser})
// {
//      const context = await browser.newContext();
//      const page =  await context.newPage();
//      await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
//      //selecting checkbox 
//           const checkbox1 = page.locator("#checkBoxOption1");
//      await checkbox1.click();
//     //applying assertion on checkbox 1
//     await expect(page.locator("#checkBoxOption1")).toBeChecked();


//   const checkbox2 = page.locator("#checkBoxOption2");
//   await checkbox2.click();
//   //applying assertion on checkbox2 
//   //await expect(page.locator("#checkBoxOption2")).toBeChecked();
//  await expect(blink).toHaveAttribute('class','blinkingtext');


//      //unchecking 
//      await checkbox1.uncheck();
//         });

// //HANDLING BLINKING TEXT

// test('handling blinking text',async function({browser})
// {
//      const context = await browser.newContext();
//      const page =  await context.newPage();
//      await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

//      const blink = page.locator ('body a.blinkingText'); ///when traverse in dom for css use space
//      //await expect(blink).toBeVisible();
//      await expect(blink).toHaveAttribute('class','blinkingtext');
//     });

// //HANDLING CHILD WINDOW (hyperlink pr click krne k baad agr next page khulta h to use child window kehte h shyd)

test.only('Child window',async function({browser})
{
    const context = await browser.newContext();
    const page = await context.newPage();
    page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    
    const documentLink = page.locator("[.header_style.jumbotron.text-center > .blinkingText]");

    // //before clicking you have to tell playwright that wait for a event of new page --race condition
    
    // //phle wale page object ka access pureane page ka hoga and new page ka new waale pr 
    // const [newPage] = await Promise.all([
    
    // context.waitForEvent('page'),
    // await documentLink.click();
    // ])
    //  text = await newPage.locator(".red").textContent();
    // console.log(text);
   // const arraytext = text ko split krna h toh text.split("@");
   //arraytext[1]
});