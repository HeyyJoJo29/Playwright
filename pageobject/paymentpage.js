class paymentpage {
    constructor(page){
       this.creditcard =  page.locator(".payment__type--cc");
       this.creditcardnumber = page.locator("input[type='text']");
       this.expirycode = page.locator("select.input");
       this.country = page.locator("[placeholder='Select Country']");
       this.dropdownresults = page.locator(".ta-results");
       this.confirm = page.locator(".user__name [type='text']");
       this.placeorder = page.locator(".action__submit");
    
    }
    async jaggi(ccn,ec,ec1,cvvcode,name){
        await this.creditcard.click();
        await this.creditcardnumber.first().fill(" ");
        await this.creditcardnumber.first().fill(ccn);
        await this.expirycode.first().selectOption(ec);
        await this.expirycode.last().selectOption(ec1);
        await  this.creditcardnumber.nth(1).fill(cvvcode);
        await this.creditcardnumber.nth(2).fill(name);
        await  this.country.type("ind", {delay:100});
        await this.dropdownresults.waitFor();
    const resultsCount = await this.dropdownresults.locator("button").count();
    for(let j=0; j < resultsCount; ++j)
    {
      if (await this.dropdownresults.locator("button").nth(j).textContent() === " India")
      {
        await this.dropdownresults.locator("button").nth(j).click();
        break;
      }
    }
    
  
    await this.placeorder.click();


    }
}
module.exports = {paymentpage}