const api = require('../class/api');

(async function () {
    const me = new api("My_Api_Key");
    const balance = await me.balance();
    console.log(balance);
})()