var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Culture%20%26%20Entertainment/Best%20Selling%20Video%20Games.csv";

//this links all the columns and lists to variables 
var videoGames = getColumn(url, 1);
var platforms = getColumn(url, 3);
var releaseDate = getColumn(url, 4);
var publisher = getColumn(url, 6);


var displayGames = [];
//this is the most important variable, this is the final product. 
//after every input is completed it is added up into matching games
//to be displayed
var matchingGames = [];


//this is the code for the slider, it makes it so that you 
//can change your year with the simple slider, the further you go 
//then the sooner in recent times it will get.

function showYear(){
    document.getElementById("sliderValue").innerHTML = document.getElementById("year").value;
 }

var uniquePlatforms = [];
 for (var i = 0; i < platforms.length; i++){
 if(!uniquePlatforms.includes(platforms[i])){
    uniquePlatforms.push(platforms[i])
 }
}



//Creates the platform select drop-down, it is also linked to the list
//making it alot easier than manually adding everything
var platformSelect = document.getElementById("platformSelect");

var index = 0;
while (index < uniquePlatforms.length){
    var el = document.createElement("option");
    el.innerHTML = uniquePlatforms[index];
    el.value = uniquePlatforms [index];

    platformSelect.appendChild(el);

    index++;
}

   
//This is the code for publishers, if you input that you need 
var uniquePublisher = [];
 for (var i = 0; i < publisher.length; i++){
 if(!uniquePublisher.includes(publisher[i])){
    uniquePublisher.push(publisher[i])
 }
}
// console.log(uniquePublisher);


//Creates the platform select drop-down, it is also linked to the list
//making it alot easier than manually adding everything
var publisherSelect = document.getElementById("publisherSelect");
for (var i = 0; i < uniquePublisher.length; i++){
    var el = document.createElement("option");
    el.innerHTML = uniquePublisher[i];
    el.value = uniquePublisher[i];

    publisherSelect.appendChild(el);
    }   

//------------------------------------------------------------------------------

//Creates the final list from all inputs


    //if platform select = Mobile then 
   //then print all applying videogames 

function findVideogames (chosenYear, chosenPlatform, chosenPublisher){
    var outputList = [];
    console.log(chosenYear);
    console.log(chosenPlatform);
    console.log(chosenPublisher);
    for(var i = 0; i < videoGames.length; i++){
       
        //This looks at all the platforms, prefered publishers, 
        //and how recent it is and creates the list that is shown 
        //to the user. It is the end product. 
        if(platforms[i] == chosenPlatform && publisher[i] == chosenPublisher && releaseDate[i].includes(chosenYear)){
            outputList.push(videoGames[i]);
        } 
        
    }  
    //This is if there is no  
    console.log(outputList);
    if(outputList.length == 0){
        document.getElementById("output").innerHTML = "Sorry, there are no matches"
    }

    else{
    document.getElementById("output").innerHTML = outputList;
    }
}
