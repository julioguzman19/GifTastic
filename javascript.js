//Array for current visible buttons
let animalList = ["Cat","Dog","Elephant","Pengin","Snail","Snake","Owl","Sloth"];

//Creating buttons for current animal list
    for(let i=0; i<animalList.length;i++){
        $(".animalButtons").append("<button "+ "data-animal =" + "data-state ="+ +animalList[i] +">"  + animalList[i] + "</button>")
    }

//Creating new butons for users inputs and appending into id animalButtons
$('#button').on("click",function(){
    let giphyTextSearch = document.getElementById("inputSearch").value
    $(".animalButtons").append("<button "+ "data-animal =" + "data-state =" +giphyTextSearch +">" + giphyTextSearch  + "</button>")
  
    animalList.push(giphyTextSearch);
    
})

//FAILING CUZ THE ABOVE IS NOT BEING RECOGNIZED GLOBALLY? FOR HTE NEW BUTTON

//Retrieving Giphys via button click
$('button').on("click",function(){
    let currentAnimal = $(this).attr("data-animal");
    if(currentAnimal!== undefined){
       
        
        let api = "http://api.giphy.com/v1/gifs/search?"
        let apiKey = "&api_key=vuQllzX4miPlYbuVJ1MIViy7wMvNFuKw"
        let query = "&q=";//after q= its the search for the giphy
        let queryURL = (api + apiKey + query + "'" + currentAnimal + "'");

        for(let i=0; i<10;i++){
            $.ajax({
                url:queryURL,
                method:"GET"
            }).then(function(response){
                //original will have animated original_still wont be animated can set variable for this
                $("#gif").append("<img src = "+response.data[i].images.original_still.url+"/>")
                
            }) 
        }   
}

})

$('#gif').on("click",function(e){
    console.log(e);

})

