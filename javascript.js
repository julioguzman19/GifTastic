/* let queryURL = "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=cats"; */
//Using my API Key
let queryURL = "https://api.giphy.com/v1/gifs/random?api_key=zxcvbnm123456789&tag=cats";

$('$search').on("click",function(){

    let queryURL = "https://api.giphy.com/v1/gifs/random?api_key=zxcvbnm123456789&tag=cats";

    $.ajax({
        url:queryURL,
        method:"GET"
    })
})