//Array for current visible buttons
let animalList = ["Cat","Dog","Elephant","Pengin","Snail","Snake","Owl","Sloth"];

//Creating buttons for current animal list
    for(let i=0; i<animalList.length;i++){
        $(".animalButtons").append("<button "+"class = gif"+" " + "data-animal ="+ animalList[i]  +">"  + animalList[i] + "</button>")
    }

//Creating new butons for users inputs and appending into id animalButtons
$('#button').on("click",function(){
    let giphyTextSearch = document.getElementById("inputSearch").value
    $(".animalButtons").append("<button "+ "class = gif"+" " + "data-animal ="  +giphyTextSearch +">" + giphyTextSearch  + "</button>")
    console.log(giphyTextSearch)
    
})



//Retrieving Giphys via button click
//Third parameter to grab it from the parent for new buttons
$(".animalButtons").on("click",".gif",function(){
    let currentAnimal = $(this).attr("data-animal");

    if(currentAnimal!== undefined){
       
        
        let api = "https://api.giphy.com/v1/gifs/search?"
        let apiKey = "&api_key=vuQllzX4miPlYbuVJ1MIViy7wMvNFuKw"
        let query = "&q=";//after q= its the search for the giphy
        let queryURL = (api + apiKey + query + "'" + currentAnimal + "'");
        $("#gifsDiv").empty();
        $("#gifsDiv").empty()

        for(let i=0; i<10;i++){
            $.ajax({
                url:queryURL,
                method:"GET"
            }).then(function(response){
                //original will have animated original_still wont be animated can set variable for this
                let still = response.data[i].images.original_still.url;
                let animate = response.data[i].images.original.url
                let rating = ("Rating: " +response.data[i].rating);
                let img = `<img class="gif" src=${still} data-animate=${animate} data-still=${still} data-state="still" />`
                let div = `<div class="inlineBlock"><p> ${rating} </p><img class="gif" src= ${still} data-animate=${animate} data-still=${still} data-state="still" />   </div>`
                
                $("#gifsDiv").append(div);
              
            }) 
        }   
    }
});

//Animating on click

$("#gifsDiv").on("click",".gif",function(event){
    let state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
});

/* $(document).on("click", '.gif', function(event){

    if (event.currentTarget.dataset.state === 'still') {
        // if still, change to active
    } else {
        // change to still
    }
    console.log(event.currentTarget);


}); */


