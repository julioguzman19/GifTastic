//Array for current visible buttons
let animalList = ["Bat","Cat","Dog","Elephant","Pengin","Snail","Snake","Owl"];

//Creating buttons for current animal list
    for(let i=0; i<animalList.length;i++){
        $(".animalButtons").append("<button "+ "data-animal =" +animalList[i] +">"  + animalList[i] + "</button>")
    }

//Creating new butons for users inputs and appending into id animalButtons
$('#button').on("click",function(){
    let giphyTextSearch = document.getElementById("inputSearch").value
    $(".animalButtons").append("<button "+ "data-animal =" +giphyTextSearch +">" + giphyTextSearch  + "</button>")
    console.log(giphyTextSearch)
})

//Retrieving Giphys via button click
$('button').on("click",function(){
    let currentAnimal = $(this).attr("data-animal");
    if(currentAnimal!== undefined){
        console.log(currentAnimal);
        
        let api = "http://api.giphy.com/v1/gifs/search?"
        let apiKey = "&api_key=vuQllzX4miPlYbuVJ1MIViy7wMvNFuKw"
        let query = "&q=";//after q= its the search for the giphy
        let queryURL = (api + apiKey + query + "'" + currentAnimal + "'");

        $.ajax({
            url:queryURL,
            method:"GET"
        }).then(function(response){
            $("#gif").append("<img src = "+response.data[0].images.original.url+"/>")
        }) 

}
})



/* $('#button').on("click",function(){
    
    
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
}) */