const {test, expect} = require('@playwright/test');
test('Framework', async function({page}){
    await page.goto("https://rahulshettyacademy.com/client/");
    const email = "saxenamaya@gmail.com";
    const userName = page.locator("#userEmail");
    const password = page.locator("#userPassword");
    const signIn = page.locator("#login");
    const products = page.locator(".card-body");
    const cardTitles = page.locator(".card-body b");
    const productname = "iphone 13 pro";
    // entering email
    await userName.type("saxenamaya@gmail.com");
    // entering password
    await password.type("Second50#*");
    // clicking log in button
    await signIn.click();
    // waiting all APIs call have been made
    await page.waitForLoadState('networkidle');
    // getting titles of all cards
    const titles = await cardTitles.allTextContents();
    console.log(titles)
    // getting the count of products
    const productcount = await products.count();
    console.log(productcount);
    // iterating over products
    for(let i=0; i < productcount; ++i)
    {
      //console.log(await products.nth(i).locator("b").textContent());
    if (await products.nth(i).locator("b").textContent() === productname)
    {
        // add product to cart
        await products.nth(i).locator("text= Add To Cart").click();
        break;
      }
    }
    // await page.pause();
    // Clicking on Cart button on top
    await page.locator("[routerlink='/dashboard/cart']").click();
    // Waiting for page to load all data
    await page.locator("div li").first().waitFor();
    // Validating that the product added in present on the Cart page
    const boolvalue = await page.locator("h3:has-text('iphone 13 pro')").isVisible();
    console.log(boolvalue)
    expect(boolvalue).toBeTruthy();
    // Click Checkout
    await page.locator("text=Checkout").click();
    // Selecting Payment method
    await page.locator(".payment__type--cc").click();
    // Entering Credit Card Number
    await page.locator("input[type='text']").first().fill(" ");
    await page.locator("input[type='text']").first().fill("4111111111111111");
    // Entering Expiry Code
    await page.locator("select.input").first().selectOption("04");
    await page.locator("select.input").last().selectOption("12");
    // Entering CVV code
    await page.locator("input[type='text']").nth(1).fill("041");
    // Entering name on card
    await page.locator("input[type='text']").nth(2).fill("Mayank Saxena");
    // Selecting country from dynamic dropdown
    await page.locator("[placeholder='Select Country']").type("ind", {delay:100});
    const dropdownresults = page.locator(".ta-results");
    await dropdownresults.waitFor();
    const resultsCount = await dropdownresults.locator("button").count();
    for(let j=0; j < resultsCount; ++j)
    {
      if (await dropdownresults.locator("button").nth(j).textContent() === " India")
      {
        await dropdownresults.locator("button").nth(j).click();
        break;
      }
    }
    // Validating that login email is present on checkout page
    await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
    // Clicking Place Order button
    await page.locator(".action__submit").click();
    // Validation of successful order
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    // Grabbing the order number
    const orderid = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderid);
    // Navigate to Orders History Page
    await page.locator("td [routerlink='/dashboard/myorders']").click();
    // Waiting for data to be populated
    await page.locator("tbody").waitFor();
    // Taking all the rows on order history into an array
    const rows = await page.locator("tbody tr");
    // Getting the count of rows
    const rowscount = await rows.count();
    console.log(rowscount);
    // Iterating over rowscount
    for(let z=0; z<rowscount; ++z)
    {
      const roworderid = await rows.nth(z).locator("th").textContent();
      if (orderid.includes(roworderid))
      {
        await rows.nth(z).locator("button").first().click();
        break;
      }
    }
    // Assertion of orderid on Order Summary page
    const orderidsummary = await page.locator(".col-text").textContent();
    // 1-expect(orderid.includes(orderidsummary)).toBeTruthy();

    await expect(orderid).toContain(orderidsummary);
});