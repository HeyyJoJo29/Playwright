const {test, expect, request} = require('@playwright/test');
const loginPayload = {userEmail: "saxenamaya@gmail.com",userPassword: "Second50#*"};
//requst is the name of the package/fixtures used to handle API in playwright or JS
test.beforeAll (async () =>
{
//handling login api
const apiContext = await request.newContext //this line is creating a session or diaglogue of api
const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login"),{data: loginPayload}
await expect(loginResponse.ok()).toBeTruthy();
//fetching the token from loginResponse
const jsonData = await loginResponse.json();
const token = await jsonData.token
console.log(token);
})