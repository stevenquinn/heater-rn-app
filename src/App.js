import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

import Api from './Api'
import LinearGradient from 'react-native-linear-gradient'
import useInterval from './hooks/UseInterval'

export default App = () => {

    const [power, setPower] = useState(false)
    const [connected, setConnected] = useState(null)
    const [heat, setHeat] = useState(false)
    const api = new Api()
    const pingInterval = 5000

    const heatOffImage = require(`../resources/images/heat_off.png`)
    const heatOnImage = require(`../resources/images/heat_on.png`)
    const powerOffImage = require(`../resources/images/power_off.png`)
    const powerOnImage = require(`../resources/images/power_on.png`)
    const connectionErrorImage = require(`../resources/images/connection_error.png`)

    useEffect(() => {
        ping()
    }, [])

    useInterval(() => {
        ping()
    }, pingInterval)

    const ping = () => {
        api.ping()
            .then(response => setConnected(true))
            .catch(error => {
                setConnected(false)
                console.error(error)
            })
    }

    const togglePower = () => {
        setPower(!power)
        api.togglePower()
            .then(() => console.log('power toggled'))
            .catch(error => console.log(error))
    }

    const toggleHeat = () => {
        setHeat(!heat)
        api.toggleHeat()
            .then(() => console.log('heat toggled'))
            .catch(error => console.log(error))
    }

    return (
        <LinearGradient colors={['#ffffff', '#F5F3F3']} style={styles.background}>
            { connected === true && 
                <LinearGradient colors={['#696969', '#3A3A3A']} style={ styles.plate }>
                    <TouchableOpacity 
                    style={ styles.button }
                    onPress={ togglePower }>
                        <Image source={ power ? powerOnImage : powerOffImage } style={ styles.buttonImage } />
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={ styles.button }
                    onPress={ toggleHeat }>
                        <Image source={ heat ? heatOnImage : heatOffImage } resizeMode="contain" style={ styles.buttonImage } />
                    </TouchableOpacity>
                </LinearGradient>
            }
            { connected === false &&
                <>
                    <Image source={ connectionErrorImage } style={ {...styles.buttonImage, ...styles.errorImage} } />
                    <Text style={ styles.errorMessage }>Error connecting to heater</Text>
                </>
            }
            { connected === null &&
                <Text style={ styles.errorMessage }>Connecting...</Text>
            }
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#fff',
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    plate: {
        backgroundColor: '#ddd',
        padding: 40,
        borderRadius: 20,
    },
    button: {
        margin: 20,
    },
    buttonImage: {
        width: 150,
        height: 150,
    },
    errorImage: {
        marginBottom: 20,
    },
    errorMessage: {
        textAlign: 'center',
    }
})