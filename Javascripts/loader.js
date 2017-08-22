"use strict";

let getSongs = function (user) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `https://music-history-ad2de.firebaseio.com/songs.json?orderBy="Number"&equalTo="${user}"`
        }).done((songData) => {
            resolve(songData);
        }).reject((error) => {
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









