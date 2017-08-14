/**
 * Created by beelarr on 7/14/17.
 */

"use strict";

let getView = $(function () {

// **********VIEW HIDE SHOW**********
let add_form = $('form');
let add_button = $('#add');
add_button.click( ()=>{
    add_form.toggleClass('hide');
});

// ************ADD VIEW FUNCTIONALITY*****************

let artist_input = $('#Artist');
let album_input = $('#Album');
let song_input = $('#Song');
let submit_button = $('#lets-hear-it-button');


submit_button.click( ()=>{
    // input_handler(song_input.value, artist_input.value, album_input.value);

});




// **************PAGINATION OF FORM***********************


$(function () {


    var page_size = 10;
    var page_count = $('.one-row').length;
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


});




// *******************DELETE BUTTON************************
    $('.one-row').on('click', '#delete-btn', function () {
        $(this).closest('tr').remove();

    });
});

// *********MODAL**********


$(function () {
    $('#filter').modal('show');

});

module.exports = {getView};