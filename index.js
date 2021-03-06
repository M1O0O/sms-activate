const axios = require('axios').default,
    yaml = require('js-yaml');

module.exports = class {
    /**
     * @param {String} key 
     */
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

    /**
     * @param {String} text 
     * @returns {JSON}
     */
    parseYAMLtoJSON(text) {
        return text.replace(':', ': ');
    }

    /**
     * @returns {Promise <{ACCESS_BALANCE: number}>}
     */
    async getBalance() {
        const response = await this.CreateRequest('get', 'getBalance');
        return yaml.load(this.parseYAMLtoJSON(response));
    }

    /**
     * @returns {Promise <Object>}
     */
    async getAllCountries() {
        return await this.CreateRequest('get', 'getCountries');
    }

    /**
     * @param {string} service
     * @param {Array} operator
     * @param {Number} country
     * @param {String} ref
     * @returns {Promise <{ACCESS_NUMBER: string}>}
     */
    async orderNumber(service, operator, country, ref) {
        const response = await this.CreateRequest('get', 'getNumber', {
            service: service,
            operator: operator?.join(','),
            country: country,
            ref: ref
        });

        return yaml.load(this.parseYAMLtoJSON(response));
    }

    /**
     * @param {Number} id 
     * @returns {Promise <String>}
     */
    async getStatus(id) {
        const response = await this.CreateRequest('get', 'getStatus', {
            id: id
        });

        return yaml.load(response);
    }

    /**
     * @param {Number} id 
     * @param {String} status
     * @returns {Promise <String>}
     */
    async setStatus(id, status) {
        const response = await this.CreateRequest('get', 'setStatus', {
            id: id,
            status: status
        });

        return yaml.load(response);
    }

    /**
     * @param {Array} operator
     * @param {Number} country
     * @returns {Promise <Object>}
     */
    async getAvailablePhones(operator, country) {
        const response = await this.CreateRequest('get', 'getNumbersStatus', {
            country: country,
            operator: operator.join(',')
        });

        return response;
    }
};