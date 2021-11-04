const api = require('../class/api');

(async function () {
    const me = new api("My_Api_Key");
    const countriesList = await me.getAllCountries();
    console.log(countriesList);
})()