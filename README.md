# Package for [sms-activate.ru](https://sms-activate.ru/) using API


- Import :

```js
const api = require('sms-activate.ru');
```
- Import api Key :
```js
/**
 * @param {String} key 
 */
const me = new api(Key);
```

--- 

- Get balance of the account :
```js
/**
 * @returns {Promise <{ACCESS_BALANCE: number}>}
 */
const balance = await me.balance();
console.log(balance);
```

- Get list of countries :

```js
/**
 * @returns {Promise <Object>}
 */
const countriesList = await me.getCountries();
console.log(countriesList);
```

- Order number :
```js
/**
 * @param {string} service
 * @param {Array} operator
 * @param {Number} country
 * @param {String} ref
 * @returns {Promise <{ACCESS_NUMBER: string}>}
 */
const phone = await me.orderNumber(service, operator, country, ref);
console.log(phone);
```

- Get status of number :
```js
/**
 * @param {Number} id 
 * @returns {Promise <String>}
 */
const status = await me.getStatus(id);
console.log(status);
```

- Request the number of available phones :
```js
/**
 * @param {Number} id 
 * @returns {Promise <String>}
 */
const status = await me.getAvailablePhones(id);
console.log(status);
```