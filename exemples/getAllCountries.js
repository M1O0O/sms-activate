const api = require('sms-activate.ru');

(async function () {
    const me = new api("My_Api_Key");
    const countriesList = await me.getAllCountries();
    console.log(countriesList);
})()