$("button").on("click", function () {
    
    var movieUrl = "https://www.omdbapi.com/";
    var movieName = $("input").val();
    //console.log(movieName);
    $.ajax({
        url: movieUrl,
        method: "GET",
        data: {
            t: movieName,
            apikey: "20498255"
        }
    }).done(function (response) {
        console.log(response)
        var poster = $(".poster");
        // poster.addClass("poster","border");
        var info = $(".info");        
        // info.addClass("info","border");
        //$("#movie-infos").append(poster);
        //$("#movie-infos").append(info);
        poster.html(`<img src='${response.Poster}'>`);
        poster.addClass("border");
        poster.addClass("bg");
        info.html(`<h2> <strong>Actors:      </strong> ${response.Actors}     </h2>
                   <h2> <strong>Genre:       </strong> ${response.Genre}      </h2>
                   <h2> <strong>IMDb rating: </strong> ${response.imdbRating} </h2>
                   <h2> <strong>Language:    </strong> ${response.Language}   </h2>
                   <h2> <strong>Plot:        </strong> ${response.Plot}       </h2>
                   <h2> <strong>Runtime:     </strong> ${response.Runtime}    </h2>
                   <h2> <strong>Year:        </strong> ${response.Year}       </h2>
         `);
        info.addClass("border");
        info.addClass("bg");
        var movieInfo = $("#movie-infos");
        movieInfo.addClass("bg");
        $(".clear").val("");
    });
});