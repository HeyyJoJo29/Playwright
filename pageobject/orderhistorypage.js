class orderhistorypage {
    constructor(page){
        this.page = page;
        this.yoo = page.locator(".em-spacer-1 .ng-star-inserted")
        this.history = page.locator("td [routerlink='/dashboard/myorders']")
       this.orderTable =  page.locator("tbody");
       this.rows = page.locator("tbody tr");
       this.orderIdDetails = page.locator(".col-text");
     
    }
    async searchOrderAndSelect (){
      const orderid = this.yoo.textContent();
      console.log(orderid);
      await this.history.click();
      const rowscount = await this.rows.count();
        console.log(rowscount);
        for(let z=0; z<rowscount; ++z)
        {
          const roworderid = await this.rows.nth(z).locator("th").textContent();
          if (orderid.includes(roworderid));
          {
            await this.rows.nth(z).locator("button").first().click();
            break;
          }
        }
       
    }
}
module.exports = {orderhistorypage};