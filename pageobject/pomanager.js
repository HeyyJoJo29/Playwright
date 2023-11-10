const {loginpage} = require('./loginPage.js'); //importing login page to PO manager 
const {dashboardpage} = require('./dashboardpage.js');
const {cartpage} = require('./cartpage.js');
const {paymentpage} = require('./paymentpage.js');
const {orderhistorypage} = require('./orderhistorypage.js');
class pomanager {

    constructor (page){  
    //passing page as an argument bcz we will be using po manager class throughpout our framework
    this.page = page;
    this.classlp = new loginpage(this.page); //bcz page ki value ab this.page hogyi h and mujhe ab wo puri class m access krni h 
    this.dashboard = new dashboardpage(this.page);
    this.checkoutclick = new cartpage(this.page);
    this.paymenttype = new paymentpage(this.page);
    this.jagdish = new orderhistorypage(this.page)
    }
    getLoginPage(){
        return this.classlp;
    }
    getdashboardpage(){
        return  this.dashboard;
        
    }
    getcartpage(){
        return  this.checkoutclick;
        
    }
    getpaymentpage(){
        return  this.paymenttype;
        
    }
    getorderhistorypage(){
        return  this.jagdish;
        
    }
}
module.exports = {pomanager};