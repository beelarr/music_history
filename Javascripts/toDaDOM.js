"use strict";

let loader = require('./loader');

loader.getSongs()
    .then((songList) => {
        console.log(songList);
    });

function makeSongList(songList) {
    let $songDisplay = $(
        `<div class="uiContainer__song-list box col s12">
            <ul class="song-list">
            </ul>
        </div>`);
    $(".data").html($songDisplay);

    for (let song in songList) {
        let currentSong = songList[song],
            songListItem = $("<li>", {class: "song-list__item"}),
            title = $("<span/>", {class: "song-title"}).text(currentSong.title),
            songListData = $("<ul/>", {class: "song-list__item--data"}),
            songListEdit = $("<a>", {
                "data-edit-id": song,
                class: "edit-btn waves-effect waves-light btn",
                text: "edit"
            }),
            songListDelete = $("<a>", {
                "data-delete-id": song,
                class: "delete-btn waves-effect waves-light btn",
                text: "delete"
            });

        songListData.append(
            `<li>${currentSong.artist},</li>
             <li>${currentSong.album}</li>
            <li>${currentSong.year}</li>`);

        $(".song-list").append(songListItem.append(title));
        $(".song-list").append(songListItem.append(songListData).append(songListDelete).append(songListEdit));
    }
}


function songForm(song, songId) {
    return new Promise((resolve, reject) => {
        let songItem = {
            title: song ? song.title : "",
            artist: song ? song.artist : "",
            year: song ? song.year : "",
            album: song ? song.album : "",
            formTitle: song ? `Edit "${song.title}"` : "Add a new song",
            btnText: song ? "save_edit_btn" : "save_new_btn"
        },
            form =
                `<h3>${songItem.formTitle}</h3>
                <input type="text" id="form--title" placeholder="title value=${songItem.title}"/>
                <input type="text" id="form--artist" placeholder="artist value=${songItem.aritst}"/>
                <input type="text" id="form--album" placeholder="album value=${songItem.album}"/>
                <input type="text" id="form--year" placeholder="year value=${songItem.year}"/>
                <button id="${songId}" class="${songItem.btnId}">${songItem.btnText}</button>`;
        resolve(form);
    });
}
module.exports = {makeSongList, songForm};









// function loader_of_music(music) {
//     music.forEach((e) => {
//         $('.data').each((index, element) => {
//             element.innerHTML +=
//                 `<tr class="one-row">
//               <th class="number" scope="row">${e.Number}</th>
//               <td class="year" >${e.Year}</td>
//               <td class="album">${e.Album}</td>
//               <td class="artist">${e.Artist}</td>
//               <td class="genre">${e.Genre}</td>
//               <td>
//                   <p  data-placement="top" data-toggle="tooltip" title="Delete">
//                     <button id="delete-btn" class="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" >
//                       <span class="glyphicon glyphicon-trash"></span>
//                     </button>
//                     </p>
//               </td>
//           </tr>`;
//         });
//     });
// }