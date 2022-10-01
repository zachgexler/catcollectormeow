function getCharacter() {
    inptCharacter = document.getElementById().value;

    let url = "https://www.dnd5eapi.co/api/";
    url = url + inptCountry;
}

$(document).ready(function () {
    
    $("#submit").click(function () {
        // API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other. Each time you use an app like Facebook, send an instant message, or check the weather on your phone, you're using an API.
        inptCharacter = document.getElementById().value;

        let url = "https://www.dnd5eapi.co/api/";
       

       

        let name = document.getElementById("name");
        let desc= document.getElementById("desc");
        let components = document.getElementById("components");

        
        $.ajax(settings).done(function (response) {
            console.log(response["Character"]);
            name.innerHTML = response["Character Name"];
            desc.innerHTML = response["Description"];
            components.innerHTML = response["Components"]


        });
     
        $("#country").fadeOut(7000);
        $("#gas-price").fadeOut(7000);
        $("#diesel-price").fadeOut(7000);

    });
});
