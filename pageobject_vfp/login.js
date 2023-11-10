class loginPage {
    constructor(page){
        this.page =page;
        this.userName = page.locator("[type = 'text']");
        this.passWord = page.locator("[type = 'password']");
        this.signIn = page.locator("#signin_btn");
    }
    async validCredentials(username ,password){
        await this.userName.type(username);
        await this.passWord.type(password);
        await this.signIn.click();
    }
    async websiteUrl (){
        await this.page.goto("https://vfpnextdev.com/login");
    }


}
module.exports = {loginPage}