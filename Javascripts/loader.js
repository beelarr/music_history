"use strict";

let getSongs = function (user) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `https://music-history-ad2de.firebaseio.com/songs.json?orderBy="Number"&equalTo="${user}"`
        }).done((songData) => {
            resolve(songData);
        }).fail((error) => {
            reject(error);
        });
    });
};

let addSong = function (songFormObj) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "https://music-history-ad2de.firebaseio.com/songs.json",
            type: 'POST',
            data: JSON.stringify(songFormObj),
            dataType: 'json'
        }).done((songID) => {

        });
    });
};

let deleteSong = function (songID) {
    return new Promise((resolve) =>{
        $.ajax({
            url: `https://music-history-ad2de.firebaseio.com/songs/${songID}.json`,
            method: 'DELETE'
        }).done(() => {
            resolve();
        });
    });
};

let getSong = function (songID) {
    return new Promise((resolve, reject) =>{
        $.ajax({
            url: `https://music-history-ad2de.firebaseio.com/songs/${songID}.json`
        }).done((songData) => {
            resolve(songData);
        }).fail((error) => {
            reject(error);
        });
    });
};


let editSong = function (songFormObj, songID) {
    return new Promise((resolve) => {
        $.ajax({
            url: `https://music-history-ad2de.firebaseio.com/songs/${songID}.json`,
            type: 'PUT',
            data: JSON.stringify(songFormObj)
        }).done((data) => {
            resolve(data);
        });
    });
};

module.exports = {getSongs, addSong, getSong, deleteSong, editSong};











