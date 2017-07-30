/**
 * Created by beelarr on 7/29/17.
 */
{
    var music_log = {};
    let music = [];


    music_log.load_items = function () {
        var loader = new XMLHttpRequest()
        loader.addEventListener('load', function () {
            music = JSON.parse(this.responseText);
            loader_of_music(music);
        });

        loader.open('GET', 'music.json')
        loader.send()
    }

}

{
    function loader_of_music(music) {
        music.forEach((e)=>{
            document.querySelector('.data').innerHTML +=
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
music_log.load_items(loader_of_music)






// $('.one-row').on('click', $('#delete-btn'), function () {
//     console.log('jquery ')
//     $(this).closest('tr').remove()
//     console.log('jquery')
// })


