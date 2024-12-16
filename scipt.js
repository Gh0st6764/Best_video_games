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

function createList(platform, recent, developer){
    document.getElementById('output').innerHTMl = "";
for(var i = 0; i < videoGames.length; i++)
    if(uniquePlatforms[i] == platformSelect && uniquePublisher[i] == publisherSelect && releaseDate){
        matchingGames.push(videoGames[i])
    }
}

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
for (var i = 0; i < uniquePlatforms.length; i++){
    var el = document.createElement("option");
    el.innerHTML = uniquePlatforms[i];
    el.value = uniquePlatforms [i];

    platformSelect.appendChild(el);


}


   

var uniquePublisher = [];
 for (var i = 0; i < publisher.length; i++){
 if(!uniquePublisher.includes(publisher[i])){
    uniquePublisher.push(publisher[i])
 }
}
console.log(uniquePublisher);


//Creates the platform select drop-down, it is also linked to the list
//making it alot easier than manually adding everything
var publisherSelect = document.getElementById("publisherSelect");
for (var i = 0; i < uniquePublisher.length; i++){
    var el = document.createElement("option");
    el.innerHTML = uniquePublisher[i];
    el.value = uniquePublisher[i];

    publisherSelect.appendChild(el);


}


    
