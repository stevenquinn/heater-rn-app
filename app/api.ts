import axios from "axios";

export default class Api {
    apiToken: string | undefined;
    deviceAddress: string | undefined;
    request: any;

    constructor() {
        this.apiToken = process.env.EXPO_PUBLIC_API_TOKEN;
        this.deviceAddress = process.env.EXPO_PUBLIC_DEVICE_ADDRESS;
        this.request = axios.create({
            baseURL: `http://${this.deviceAddress}`,
            timeout: 5000,
        });
    }

    ping() {
        return this.request.get(`/ping?token=${this.apiToken}`);
    }

    togglePower() {
        return this.request.get(`/on-off?token=${this.apiToken}`);
    }

    toggleHeat() {
        return this.request.get(`/temp?token=${this.apiToken}`);
    }
}
