/**
 * Created by beelarr on 7/14/17.
 */
// var songs = [];
//
// songs[songs.length] = "Bright Sized Life - by Pat Metheny on the album Bright Sized Life";
// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
// songs[songs.length] = "Love's In Need Of Love Today - by Stevie Wonder on the album Songs In The Key Of Life";
// songs.toString();
// songs.forEach((song)=>{
//     var song_string = song.replace('*' , '').replace('@' , '').replace('(', '').replace('!', '').replace('>','-');
//     song_parser(song_string)
// });

// **********VIEW HIDE SHOW**********
let add_form = document.querySelector('form');
let add_button = document.querySelector('#add')
add_button.addEventListener('click', ()=>{
    add_form.classList.toggle('hide')
});

// ************ADD VIEW FUNCTIONALITY*****************

let artist_input = document.querySelector('#Artist');
let album_input = document.querySelector('#Album');
let song_input = document.querySelector('#Song')
let submit_button = document.querySelector('#lets-hear-it-button')

submit_button.addEventListener('click', input_handler());


function input_handler() {
    let new_song = (song_input.value + ' - by ' + artist_input.value + ' on the album ' + album_input.value)
    songs.push(new_song)
    song_parser(new_song)


}

submit_button.addEventListener('click', ()=>{
    input_handler(song_input.value, artist_input.value, album_input.value)

});


// function song_parser(song_string) {
//
//
//     // *****SONG TITLE*******
//     let song_title = song_string.split('-')
//     song_title = song_title.shift()
//
//     // *****ARTIST NAME*******
//     let artist_name = song_string.split(' on ')
//     artist_name = artist_name.shift()
//     by_index = artist_name.indexOf('by')
//     artist_name = artist_name.slice(by_index + 3,)
//
//
//     // *****ALBUM NAME******
//     let album_name = song_string.split('album')
//     album_name = album_name[1]
//
//
//
//     // *****JS RENDERING******
//
//     let song_string_edit = `<div class="song-container"><title>${song_title}</title><p>${artist_name} |${album_name} | Genre</p></div>`
//
//     let placeholder = document.querySelector('div.song-list');
//     placeholder.innerHTML += song_string_edit;
// }








// **********SLIDER**********

// $('#ex1').slider({
//     formatter: (value)=> {
//         return 'Current value: ' + value;
//     }
// });