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
    let song_string_edit = `<div>${song_string}</div>`

    let placeholder = document.querySelector('div.song-list');
    placeholder.innerHTML += song_string_edit;
    // console.log('placeholder', placeholder)
    // console.log('song string', song_string)
}


let add_form = document.querySelector('form');
let add_button = document.querySelector('#add')
console.log(add_form)


add_button.addEventListener('click', ()=>{
    add_form.classList.toggle('hide')
})



// **********SLIDER**********

$('#ex1').slider({
    formatter: function(value) {
        return 'Current value: ' + value;
    }
});