"use strict";

let firebase = require("./firebase-getter"),
    provider = new firebase.auth().GoogleAuthProvider(),
    currentUser = null;

firebase.auth().onAuthStateChanged((user) => {
    console.log("onAuthStateChanged", user);
    if (user) {
        currentUser = user.uid;
        console.log("current user logged in?", currentUser);
    }else {
        currentUser = null;
        console.log("current user NOTTTT logged in:" , currentUser);

    }
});

let logInGoogle = function () {
    return firebase.auth().signInWithPopup(provider);
};

let logOut = function () {
    return firebase.auth().signOut();
};

let getUser = function () {
    return currentUser;
};

let setUser = function (val) {
    currentUser = val;
};

module.exports = {logInGoogle, logOut, getUser, setUser};