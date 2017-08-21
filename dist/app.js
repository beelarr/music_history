(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by beelarr on 7/29/17.
 */
"use strict";

    var Music_log = {};
    let music = [];


    Music_log.load_items = function (music) {
        return new Promise(function (resolve) {

        $.ajax({
            url: 'https://music-history-ad2de.firebaseio.com/music.json?orderBy=%22Number%22',
            success(result){
                console.log(result);

                resolve(loader_of_music(result));
            }
        });

        });
    };




    function loader_of_music(music) {
        music.forEach((e) => {
            $('.data').each((index, element) => {
                element.innerHTML +=
                    `<tr class="one-row">
                  <th class="number" scope="row">${e.Number}</th>
                  <td class="year" >${e.Year}</td>
                  <td class="album">${e.Album}</td>
                  <td class="artist">${e.Artist}</td>
                  <td class="genre">${e.Genre}</td>
                  <td>
                      <p  data-placement="top" data-toggle="tooltip" title="Delete">
                        <button id="delete-btn" class="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" >
                          <span class="glyphicon glyphicon-trash"></span>
                        </button>
                        </p>
                  </td>
              </tr>`;
            });
        });
    }

Music_log.load_items(loader_of_music);

module.exports = Music_log;







},{}],2:[function(require,module,exports){
"use strict";

let loader = require('./loader');
let views = require('./views');
let pagination = require('./pagination');
},{"./loader":1,"./pagination":3,"./views":4}],3:[function(require,module,exports){
"use strict";

let loader = require('./loader.js');
$(function () {

// Music_log.load_items()
//     .then((data) => {

    let page_size = 10;
    let page_count = $('.one-row').length;
    var current_page = 1;


    // ********PREPARE NAV**********

    var nav = '';
    var total_pages = Math.ceil(page_count / page_size);
    for (var i = 0; i < total_pages; i++){
        // nav += `<li class='number'><a href="#"> ${i + 1} </a></li> `
    }
    $('.page_prev').after(nav);
    $('.number').first().addClass('active');

    // *************************

    let show_page = function () {
        $('.one-row').hide().each(function (n) {
            if (n >= page_size * (current_page - 1) && n < page_size * current_page)
                $(this).show();

        });

    };
    show_page();

    $(".pagination li.number").click(function () {
        $(".pagination li").removeClass('active');
        $(this).addClass('active');
        current_page = parseInt($(this).text());
        show_page();

    });
    $('.pagination li.page_prev').click(function () {
        if ($(this).next().is('active')) return;
        $('.number.acitve').removeClass('active').prev().addClass('active');
        current_page = current_page > 1 ? (current_page - 1) : 1;
        show_page();

    });

    $('.pagination li.page-next').click(function () {
        if ($(this).prev().is('active')) return;

        $('.number.active').removeClass('active').next().addClass('active');

        current_page = current_page < total_pages ? (current_page + 1) : total_pages;
        show_page();

    });



    // *******************DELETE BUTTON************************
    $('#delete-btn').click(function () {
        console.log('delete');
        $(this).closest('tr').remove();

    });
});

// });

},{"./loader.js":1}],4:[function(require,module,exports){
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
},{}]},{},[2]);
