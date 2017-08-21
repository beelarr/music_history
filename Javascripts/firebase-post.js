"use strict";

let save_data = require('./pagination');
let firebase = require('firebase');


var config = {
    apiKey: "AIzaSyCKCDw2H_VAidpqkufA6ctxTiuvQOrmpeQ",
    authDomain: "music-history-ad2de.firebaseapp.com",
    databaseURL: "https://music-history-ad2de.firebaseio.com",
    projectId: "music-history-ad2de",
    storageBucket: "music-history-ad2de.appspot.com",
    messagingSenderId: "884860831747"
};

var newEntry = {};

$(function () {



$("#lets-hear-it-button").click(function (e) {
    console.log("trying to post");
    // newEntry.year = $("#Year").val();
    // newEntry.album = $("#Album").val();
    // newEntry.artist = $("#Artist").val();
    // newEntry.genre = $("#Song").val();
    // firebase.initializeApp(config);
    // var database = firebase.database();
    // var ref = database.ref('music');
    // var data = newEntry;
    // ref.push(data);

});

});