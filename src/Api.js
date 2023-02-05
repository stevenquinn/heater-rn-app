import { API_TOKEN } from '@env'
import axios from 'axios'

export default class Api {

    constructor() {
        this.api = axios.create({
            baseURL: 'http://192.168.7.91',
            timeout: 5000,
        });
    }

    ping() {
        return this.api.get(`/ping?token=${API_TOKEN}`)
    }

    togglePower() {
        return this.api.get(`/on-off?token=${API_TOKEN}`)
    }

    toggleHeat() {
        return this.api.get(`/temp?token=${API_TOKEN}`)
    }
}