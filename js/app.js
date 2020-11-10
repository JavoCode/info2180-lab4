window.onload = function () {
console.log("loaded");
//presets load of default superheroes
fetchHeroes("",function(data){
    let str = data.trim().split(";")
    str.shift()
    let ul = document.getElementById("default-list")
    str.forEach(ele => {
        console.log(ele)
        let li = document.createElement('li');
        li.innerHTML = ele;
        ul.appendChild(li);
    });
})
$('#btn').on('click', function(){

    let hero = $('#search-input').val()
    fetchHeroes(hero, function(data){
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
            console.log(str)
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


//fetch superheroes
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

