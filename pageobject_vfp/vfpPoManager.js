const {loginPage} = require('./login.js');
class pomanagervfp {
    constructor(page){
        this.page = page;
        this.loginobject = new loginPage(this.page);
    }
    getloginpage(){
        return  this.loginobject;
    }
}
module.exports = {pomanagervfp}