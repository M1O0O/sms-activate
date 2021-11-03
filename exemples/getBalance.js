const account = require('../class/api');

(async function () {
    const me = new account("My_Api_Key");
    const balance = await me.balance();
    console.log(balance);
})()