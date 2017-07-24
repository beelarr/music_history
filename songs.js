/**
 * Created by beelarr on 7/14/17.
 */
var songs = [];

songs[songs.length] = "Bright Sized Life - by Pat Metheny on the album Bright Sized Life";
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
songs[songs.length] = "Love's In Need Of Love Today - by Stevie Wonder on the album Songs In The Key Of Life";

// console.log(songs)
songs.toString();
// console.log(songs)
for (let i = 0; i < songs.length; i++){
    // console.log(songs[i]);
    let song_string = songs[i].replace('*' , '').replace('@' , '').replace('(', '').replace('!', '').replace('>','-');
    // console.log(song_string);

    // *****SONG TITLE*******
    let song_title = song_string.split('-')
    song_title = song_title.shift()

    // *****ARTIST NAME*******
    let artist_name = song_string.split(' on ')
    artist_name = artist_name.shift()
    by_index = artist_name.indexOf('by')
    artist_name = artist_name.slice(by_index + 3,)
    console.log(artist_name)


    // *****ALBUM NAME******

    let album_name = song_string.split('album')

    album_name = album_name[1]

    console.log(album_name)



    let song_string_edit = `<div class="title-container"<h4>${song_title}</h4></div>
                             <div class="description container"><p>${artist_name} |${album_name} | Genre</p><p></p></div>`

    let placeholder = document.querySelector('div.song-list');
    placeholder.innerHTML += song_string_edit;
    // console.log('placeholder', placeholder)
    // console.log('song string', song_string)
}


let add_form = document.querySelector('form');
let add_button = document.querySelector('#add')
// console.log(add_form)


add_button.addEventListener('click', ()=>{
    add_form.classList.toggle('hide')
})



// **********SLIDER**********

// $('#ex1').slider({
//     formatter: (value)=> {
//         return 'Current value: ' + value;
//     }
// });