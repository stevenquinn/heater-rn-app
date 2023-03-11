import axios from 'axios'
import {DEVICE_IP, API_TOKEN} from "@env"

export default class Api {

    constructor() {
        this.api = axios.create({
            baseURL: `http://${DEVICE_IP}`,
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