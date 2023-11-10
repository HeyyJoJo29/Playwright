class cartpage {
    constructor(page){
        this.loadstate =  page.locator("div li");
        this.boolvalue =  page.locator("h3:has-text('iphone 13 pro')");
        this.checkout = page.locator("text=Checkout");
    }
    async clickcheckout(){
         await this.loadstate.first().waitFor();
         await  this.boolvalue.isVisible();
         await this.checkout.click();
    }
}
module.exports = {cartpage}