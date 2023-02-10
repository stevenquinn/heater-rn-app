import axios from 'axios'

const DEVICE_IP = '192.168.7.91'
const API_TOKEN = 'RjXx8dtAvT2pKCF9DnR8fVtuBbo'

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