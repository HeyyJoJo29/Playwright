const{test,expect} = require('@playwright/test');
const{loginpage} = require("../pageobject_accounting/loginpageaccnt.js");
const {pomanageraccnt}= require('../pageobject_accounting/pomanager_accnt.js');
const dataset_accnt = JSON.parse(JSON.stringify(require("../testdata/accounting_testData.json")));
test('Login page',async function({page})
{ 
  const loginobject = new pomanageraccnt(page);
  const xyz =  loginobject.getloginpage();
  await xyz.websiteurl();
  await xyz.validcredentials(dataset_accnt.email ,dataset_accnt.pass_word)
 });