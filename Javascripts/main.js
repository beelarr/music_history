"use strict";

let db = require('./loader'),
    templates = require("./toDaDOM"),
    user = require("./user");

let buildSongObj = function () {
    return {
        title: $("#form--title").val(),
        artist: $("#form--artist").val(),
        album: $("#form--album").val(),
        year: $("#form--year").val(),
        uid: user.getUser()
    };

};

let loadSongsToDom = function () {
    console.log("Need some songs. I don't see any.");
    let currentUser = user.getUser();
    console.log('currentUser in loadSongs', currentUser);
    db.getSongs(currentUser)
        .then((songData) => {
        console.log('got data', songData);
        templates.makeSongList(songData);
    });
};

$(".edit-btn").click(function () {
    console.log('clicked edit button');
    let songID = $(this).data("edit-id");
    db.getSong(songID)
        .then((song) => {
        return templates.songForm(song, songID);
        })
        .then((finishedForm) => {
        $(".uiContainer--wrapper").html(finishedForm);
        });
});

$(".save_edit_btn").click(function () {
    let songObj = buildSongObj(),
        songID = $(this).attr('id');
    console.log('songID', songID);
    db.editSong(songObj, songID)
        .then((data) => {
        loadSongsToDom();
        });
});

$(".delete-btn").click(function () {
    console.log('clicked on delete song', $(this).data("delete-id"));
    let songID = $(this).data("delete-id");
    db.deleteSong(songID)
        .then(() => {
        loadSongsToDom();
        });
});

$("#view-songs").click(function () {
    $(".uiContainer--wrapper").html("");
    loadSongsToDom();
});

$("#auth-btn").click(function () {
    console.log('clicke auth');
    user.logInGoogle()
        .then((result) => {
        console.log('result from login', result.user.uid);
        user.setUser(result.user.uid);
        $("#auth-btn").addClass("is-hidden");
        $("#logout").removeClass('is-hidden');
        loadSongsToDom();
        });
});

$("#logout").click(() => {
    console.log('logout clicked');
    user.logOut();
});



$("#add-song").click(function () {
    console.log("clicked add song");
    var songForm = templates.songForm()
        .then((songForm) => {
        $(".uiContainer--wrapper").html(songForm);
        });
});