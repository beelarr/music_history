"use strict";

let firebase = require('./firebase/app'),
    fb = require('./firebase-getter'),
    fbData = fb();

require('firebase/auth');
require('firebase/database');

var config = {
    apiKey: fbData.apiKey,
    authDomain: fbData.authDomain,
    databaseURL: fbData.databaseURL
};

firebase.initalizeApp(config);

firebase.getFBsettings = () =>{
    console.log('get FB settings', config);
    return config
};

module.exports = firebase;