const api = require('../class/api');

(async function () {
    const me = new api("My_Api_Key");
    const status = await me.getStatus(00000001);
    console.log(status);
})()