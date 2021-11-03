# Package for [sms-activate.ru](https://sms-activate.ru/) using API


### Get balance of the account :

```js
const api = require('sms-activate.ru');

(async function () {
    const me = new api("My_Api_Key");
    const balance = await me.balance();
    console.log(balance);
})()
```