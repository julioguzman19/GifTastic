/* let queryURL = "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=cats"; */
//Using my API Key

$('#button').on("click",function(){
    
    
    let api = "http://api.giphy.com/v1/gifs/search?"
    let apiKey = "&api_key=vuQllzX4miPlYbuVJ1MIViy7wMvNFuKw"
    let query = "&q=";//after q= its the search for the giphy
    let giphyTextSearch = document.getElementById("inputSearch").value 
    let queryURL = (api + apiKey + query + "'" + giphyTextSearch + "'");
    console.log(giphyTextSearch);

    $.ajax({
        url:queryURL,
        method:"GET"
    }).then(function(response){
        $("#gif").append("<img src = "+response.data[0].images.original.url+"/>")
    })
    
})