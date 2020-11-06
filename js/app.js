window.onload = function () {
console.log("loaded");
/*fetchHeroes(function (data){
    console.log(data)
});*/
};


//fetch superheroes
function fetchHeroes(callback){
    $.ajax({
        url:" http://localhost/superheroes.php",
        type: "GET",
        success: function (data){
            callback(data)
        }
    })
}