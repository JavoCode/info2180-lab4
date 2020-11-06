window.onload = function () {
console.log("loaded");

$('#btn').on('click', function(){
    fetchHeroes(function(data){
        alert(data)
    });
});

};


//fetch superheroes
function fetchHeroes(callback){
    $.ajax({
        url:"http://localhost/superheroes.php",
        type: "GET",
        success: function (data){
            callback(data)
        }
    })
}

