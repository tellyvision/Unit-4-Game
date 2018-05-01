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
        $(this).removeClass("charImg")
        $("#userChar").html(this);
        //sets remaining characters as enemyChar
        $(".chars").appendTo("#enemyChar")
    })


})
