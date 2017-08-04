/**
 * Created by beelarr on 7/29/17.
 */
{
    var Music_log = {};
    let music = [];


    Music_log.load_items = function () {
        $.ajax({
            url: 'js/chatty.json',
        }).done(function() {
            loader_of_music(music);
        });

        loader.open('GET', 'music.json')
        loader.send()
    }
}


{
    function loader_of_music(music) {
        music.forEach((e)=>{
            $('.data').innerHTML +=
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
        });



    }
}
Music_log.load_items(loader_of_music)





