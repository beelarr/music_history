"use strict";

$(function () {

// **********VIEW HIDE SHOW**********
    let add_form = $('form');
    let add_button = $('#add');
    add_button.click(() => {
        add_form.toggleClass('hide');
    });

// ************ADD VIEW FUNCTIONALITY*****************

    let artist_input = $('#Artist');
    let album_input = $('#Album');
    let song_input = $('#Song');
    let submit_button = $('#lets-hear-it-button');


    submit_button.click(() => {
        // input_handler(song_input.value, artist_input.value, album_input.value);

    });

});