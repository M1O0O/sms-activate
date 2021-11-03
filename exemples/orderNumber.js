const api = require('../class/api');

(async function () {
    const me = new api("My_Api_Key");
    const phone = await me.orderNumber("ds", ["megafon", "mts", "beeline", "tele2"], 0);
    console.log(phone);
})()