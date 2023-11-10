class loginpage{
     
constructor(page){
    this.page = page;
    this.userName = page.locator("#userEmail");
    this.password = page.locator("#userPassword");
    this.signIn = page.locator("#login"); //if we want to make use of the code throughout the class that we have written then we have to make use of "this" keyword
    //jiske aage this lag jaayega use class variables bolte hain//
    //esi calss jisme constructor hai and usme argument pass kia h toh onject bnane m argument daalenge

}
 // creating a method for valid login 
   async validlogin(email,pass_word){
    
    await this.userName.type(email);
    await this.password.type(pass_word);
    await this.signIn.click();
    await this.page.waitForLoadState('networkidle');
    }

    async gotourl(){
        await this.page.goto("https://rahulshettyacademy.com/client/");
    }
     //creating a method for opening the website
    //this is the command used in javascript so that we can make use of current file in other files/folder
}
 module.exports = {loginpage}
 