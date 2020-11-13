window.onload = function () {
//presets load of default superheroes
    //loads default heroes on startup - also helps that i dont have to recall for default heroes at any point
fetchHeroes("",function(data){
    //trims white space and parses the data returned
    let str = data.trim().split(";")
    //seeing that i sent an All message with the results as my own identifier i removed all from the array with shift.
    str.shift()
    //retrieved the element to display my list
    let ul = document.getElementById("default-list")
    //iterated through the array and display the data in 'li' elements created in this function
    str.forEach(ele => {
        //creating li elements
        let li = document.createElement('li');
        li.innerHTML = ele;
        //appending li elements to the ul tag
        ul.appendChild(li);
    });
})
$('#btn').on('click', function(){

    //retrieved search value from input field
    let hero = $('#search-input').val()
    //sends the search value in my ajax call to my php
    fetchHeroes(hero, function(data){
        //if statements to hide and dispaly various results based on question 3 by adding and removing classes in my html usign js
        if(data.trim() == "No Super Hero Found"){
            
            $('#no-result').text(data)
            $('#no-result').removeClass("hide")
            $('#default-list').addClass("hide")
            $('#found-hero').addClass("hide")
           
        }else if(data.trim().split(";")[0] == 'All'){

            $('#default-list').removeClass("hide")
            $('#found-hero').addClass("hide")
            $('#no-result').addClass("hide")

        }else{

            let str = data.trim().split(";")
            $('#alias').text(str[0])
            $('#fullName').text(str[1])
            $('#biography').text(str[2])
            $('#no-result').addClass("hide")
            $('#default-list').addClass("hide")
            $('#found-hero').removeClass("hide")
            
        }
    });
});

};


//fetch superheroes -  uses a callback function that runs only on success of the fetch(meaning a 200 OK)
//if you're not exactly clear on ajax and the success method you can message me or go here https://www.sitepoint.com/use-jquerys-ajax-function/
function fetchHeroes(alias, callback){
    $.ajax({
        url:"http://localhost/superheroes.php",
        type: "GET",
        data: {
            alias: alias,
          },
        success: function (data){
            callback(data)
        }
    })
}

