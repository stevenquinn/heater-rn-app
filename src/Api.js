import axios from 'axios'

export default class Api {

    constructor() {
        this.api = axios.create({
            baseURL: 'http://192.168.7.91',
            timeout: 5000,
        });
    }

    ping() {
        return this.api.get('/ping')
    }

    togglePower() {
        return this.api.get('/on-off')
    }

    toggleHeat() {
        return this.api.get('/temp')
    }
}