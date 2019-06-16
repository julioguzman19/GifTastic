/* let queryURL = "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=cats"; */
//Using my API Key
let api = "http://api.giphy.com/v1/gifs/search?"
let apiKey = "&api_key=vuQllzX4miPlYbuVJ1MIViy7wMvNFuKw"
let query = "&q=rainbow";
let queryURL = (api + apiKey + query);
//add-to-do ID on button

$('#inputSearch').on("click",function(){
    let giphy = document.getElementById("inputSearch").value 
    console.log(giphy);
    $.ajax({
        url:queryURL,
        method:"GET"
    }).then(function(response){
        console.log(response)
        $("#gif").append(response.data[0].imagess)
    })
    
})