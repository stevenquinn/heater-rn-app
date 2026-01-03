import { useEffect, useState } from "react";
import { ActivityIndicator, Image, Pressable, Text, View } from "react-native";
import Api from "./api";

export default function App() {

    const api = new Api();
    const [connected, setConnected] = useState(false);
    const [connectionError, setConnectionError] = useState(false);
    const [powerOn, setPowerOn] = useState(false);
    const [heatOn, setHeatOn] = useState(false);
    const pingInterval = 5000;

    const heatOffImage = require('../assets/images/heat_off.png')
    const heatOnImage = require('../assets/images/heat_on.png')
    const powerOffImage = require('../assets/images/power_off.png')
    const powerOnImage = require('../assets/images/power_on.png')
    const connectionErrorImage = require('../assets/images/connection_error.png')

    useEffect(() => {
        pingDevice();
        const interval = setInterval(() => {
            pingDevice();
        }, pingInterval);

        return () => clearInterval(interval);
    }, []);

    const togglePower = async () => {
        try {
            await api.togglePower();
            setPowerOn(!powerOn);
        } catch (error) {
            // Handle error if needed
        }
    }

    const toggleHeat = async () => {
        try {
            await api.toggleHeat();
            setHeatOn(!heatOn);
        } catch (error) {
            // Handle error if needed
        }
    }

    const pingDevice = async () => {
        try {
            const response = await api.ping();
            if (response.status === 200) {
                setConnected(true);
                setConnectionError(false);
            } else {
                setConnected(false);
                setConnectionError(true);
            }
        } catch (error) {
            setConnected(false);
            setConnectionError(true);
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, marginBottom: 80, textAlign: 'center', fontWeight: 'bold' }}>Heater Control</Text>
            {connected === false && !connectionError && (
                <ActivityIndicator size="large" color="#000000" />
            )}

            {connectionError && (
                <View>
                    <Image source={connectionErrorImage} />
                </View>
            )}

            {connected && (
                <View style={{ gap: 8 }}>
                    <Pressable onPress={togglePower}>
                        <Image source={powerOn ? powerOnImage : powerOffImage} />
                    </Pressable>
                    <Pressable onPress={toggleHeat}>
                        <Image source={heatOn ? heatOnImage : heatOffImage} />
                    </Pressable>
                </View>
            )}
        </View>
    )
}