const axios = require('axios').default,
    yaml = require('js-yaml');

module.exports = class {
    constructor(key) {
        if (typeof key !== 'string') throw new Error('API key must be a string');

        this.key = key;
        this.axios = axios.create({
            baseURL: 'https://sms-activate.ru/stubs/handler_api.php',
        })
    }

    CreateRequest(method, action, params) {
        return new Promise(async (resolve, reject) => {
            const r = await this.axios({
                method: method,
                params: {
                    action,
                    api_key: this.key,
                    ...params,
                }
            });

            const errors = [
                'BAD_KEY',
                'BAD_ACTION'
            ]

            if (errors.includes(r.data)) throw new Error(r.data);
            resolve(r.data);
        })
    }

    parseYAMLtoJSON(text) {
        return text.replace(/:/gm, ': ');
    }

    /**
     * @returns {Promise <{ACCESS_BALANCE: number}>}
     */
    async getBalance() {
        const response = await this.CreateRequest('get', 'getBalance');
        return yaml.load(this.parseYAMLtoJSON(response));
    }
    /**
     * @returns {Object}
     */
    async getCountries() {
        return await this.CreateRequest('get', 'getCountries');
    }
};