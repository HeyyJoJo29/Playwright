const {loginpageaccnt} = require('./loginpageaccnt.js');
class pomanageraccnt {
    constructor(page){
        this.page = page;
        this.login = new loginpage(this.page);
    }
    getloginpage(){
        return this.login;
    }
};
module.exports = {pomanageraccnt}