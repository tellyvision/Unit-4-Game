$(document).ready(function() {

    //Set Global Variables Here
    var userChar = "";

    $("#game").hide()
    $("#stage").show()

    //Set Functions Here

    //Call Functions Here

    $("#stage").on("click", ".char", function character(){
        //hides stage, sets game 
        $("#stage").hide()
        $("#game").show()
        //set character to clicked
        $("#userChar").html(this);
        //$("#userChar").remove(attr("href"))
        //sets remaining characters as enemyChar
        $(".chars").appendTo("#enemyChar")

        $("#userChar").removeClass("charImg")
    })



})
