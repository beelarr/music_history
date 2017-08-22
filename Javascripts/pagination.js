// "use strict";
//
// let loader = require('./loader.js');
//
//
// loader.load_items()
//     .then((data) => {
//     console.log(data);
//
//     let page_size = 10;
//     let page_count = $('.one-row').length;
//     var current_page = 1;
//
//
//     // ********PREPARE NAV**********
//
//     var nav = '';
//     var total_pages = Math.ceil(page_count / page_size);
//     for (var i = 0; i < total_pages; i++){
//         // nav += `<li class='number'><a href="#"> ${i + 1} </a></li> `
//     }
//     $('.page_prev').after(nav);
//     $('.number').first().addClass('active');
//
//     // *************************
//
//     let show_page = function () {
//         $('.one-row').hide().each(function (n) {
//             if (n >= page_size * (current_page - 1) && n < page_size * current_page)
//                 $(this).show();
//
//         });
//
//     };
//     show_page();
//
//     $(".pagination li.number").click(function () {
//         $(".pagination li").removeClass('active');
//         $(this).addClass('active');
//         current_page = parseInt($(this).text());
//         show_page();
//
//     });
//     $('.pagination li.page_prev').click(function () {
//         if ($(this).next().is('active')) return;
//         $('.number.acitve').removeClass('active').prev().addClass('active');
//         current_page = current_page > 1 ? (current_page - 1) : 1;
//         show_page();
//
//     });
//
//     $('.pagination li.page-next').click(function () {
//         if ($(this).prev().is('active')) return;
//
//         $('.number.active').removeClass('active').next().addClass('active');
//
//         current_page = current_page < total_pages ? (current_page + 1) : total_pages;
//         show_page();
//
//     });
//
//
//
//     // *******************DELETE BUTTON************************
//     $("#delete-btn").click(function () {
//         console.log('delete');
//         $(this).closest('tr').remove();
//
//     });
// });
//
// // });
