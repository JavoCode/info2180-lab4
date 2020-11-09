window.onload = function () {
console.log("loaded");

$('#btn').on('click', function(){
    let hero = $('#search-input').val()
    console.log(hero)
    fetchHeroes(hero, function(data){
        alert(data)
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

