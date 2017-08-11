$(function () {

    var musicArray

    let loaderOfMusic = function (music) {
        $.ajax({
            url: 'music.json'
        })
            .done((music) => {
                musicArray = music;
                music.forEach((e)=>{
                    $(".data").html(
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
                      </tr>`
                    )
                })
            })

    };

let addSong = function () {
        let songObj = {}
        songObj.Artist =  $('#Artist').val()
        songObj.Album = ('#Album').val()
        songObj.Song = ("#Song").val()
        musicArray.push(songObj)
}

});

$("#lets-hear-it-button").click(() => {
    addSong()
});

module.exports = {loaderOfMusic, addSong};


