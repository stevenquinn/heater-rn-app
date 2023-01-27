import axios from 'axios'

export default class Api {

    constructor() {
        this.api = axios.create({
            baseURL: 'http://apple.com',
            timeout: 5000,
        });
    }

    ping() {
        console.log('pinging')
        return this.api.get('/')
    }

    togglePower() {
        return this.api.get('/toggle-power')
    }

    toggleHeat() {
        return this.api.get('/toggle-heat')
    }
}