function getTemperature(){

    var ville =document.getElementById("ville").value;

    $.ajax({
        url: "http://localhost:8080/json",
        method: "GET",
        dataType:"json",
    }
    ).done(function(reponse){
        console.log(reponse);
        var meteo=reponse.main.temp;
        $("#temperature").html("Il fait "+meteo+" °C à "+ville);
    })
    .fail(function(reponse){
        console.log(reponse);
    });
}

