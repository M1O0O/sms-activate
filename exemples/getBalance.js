const api = require('sms-activate.ru');

(async function () {
    const me = new api("My_Api_Key");
    const balance = await me.getBalance();
    console.log(balance);
})()