class dashboardpage {
   constructor(page){
   this.products = page.locator(".card-body");
   this.cardTitles = page.locator(".card-body b");
   this.cart = page.locator("[routerlink='/dashboard/cart']");
   }

   async heyy(productname){
    const titles = await this.cardTitles.allTextContents();
    console.log(titles)
    // getting the count of products
    const productcount = await this.products.count();
    console.log(productcount); 
    // iterating over products
    for(let i=0; i < productcount; ++i)
    {
      //console.log(await products.nth(i).locator("b").textContent());
    if (await this.products.nth(i).locator("b").textContent() === productname)
    {
        // add product to cart
        await this.products.nth(i).locator("text= Add To Cart").click();
        break;
      }
    }
  }
    
    async gotocart()
    
    {
      await this.cart.click();
    }

  }
   
module.exports = {dashboardpage}