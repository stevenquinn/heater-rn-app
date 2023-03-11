# heater-rn-app

This is the code for my on-off React Native app that allows me to remotely control my wall heater in my office, combined with a Raspberry Pi Pico W running code from [https://github.com/stevenquinn/smart-heater](https://github.com/stevenquinn/smart-heater). Feel free to use this as a jumping off point for your own Iot projects.

## Overview

This app does the following:

* When it boots, it tries to ping the heater via an HTTP request to see if it's online. If it is, it displays the controls on the screen.
* It can send an HTTP request to use the on/off button on the heater which controls an attached servo to physically hit the button. 
* It can send an HTTP request to use temperature button on the heater which controls an attached servo to physically hit the button.
* There's no feedback from the heater so there's no way to know if either button was successfully hit, or if the heater is on or off.

## Installation

* Make sure your local development environment is setup for React Native development. See [https://reactnative.dev/docs/environment-setup](https://reactnative.dev/docs/environment-setup) for more information.
* Clone this repo
* Run `npm install` to install the dependencies
* Copy `.env.example` to `.env` and update the `api_token` to match the token you set in the `smart-heater` code.
* Run `npm run start` to start the development server
* Run `npm run ios` to start the app in the IOS simulator (a Mac and Xcode required). This also supports Android via `npm run android` and building via Android Studio, but I'm not an Android user.
* Your device will need to be on the same network the heater is on.

