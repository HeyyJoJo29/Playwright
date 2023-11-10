class loginpage {
    constructor(page){
        this.page = page;
        this.username = page.locator("#username");
        this.password = page.locator("#password");
        this.loginbutton =    page.locator("[type='submit']");
    }

    async validcredentials(email,passWord){
        await this.username.type(email);
        await this.password.type(passWord);
        await this.loginbutton.click();

    }
    async websiteurl(){
        await this.page.goto("https://accounting.daxko.com/login");
    }
}
module.exports ={loginpage}