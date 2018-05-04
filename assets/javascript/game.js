$(document).ready(function() {

    //Set Global Variables Here
    var enemyHP;
    var userHP = 0
    var userAttack = 0
    var userAttackIncrease = 0 //will be half of starting # for userAttack
    var enemiesDefeated = 0
    var character = [
        {name: "Ryu",
            hp: 120,
            attack: 20,
            img:"assets/images/ryu.png"},
        {name: "Ken",
            hp:120,
            attack: 18,
            img:"assets/images/ken.png"},
        {name: "ChunLi",
            hp:130,
            attack: 10,
            img:"assets/images/chunli.png"},
        {name: "MBison",
            hp: 80,
            attack: 15,
            img:"assets/images/mbison.png"},
        {name: "Blanka",
            hp: 50,
            attack: 20,
            img: "assets/images/blanka.png"},
        {name: "Cammy",
            hp: 100,
            attack: 7,
            img:"assets/images/cammy.png"},
        {name: "Sakura", 
            hp: 80,
            attack: 12,
            img:"assets/images/sakura.png"}]

    var ryu = character[0]
    var ken = character[1]
    var chunli = character[2]
    var mbison = character[3]
    var blanka = character[4]
    var cammy = character[5]
    var sakura = character[6]

    console.log(ryu)

    $("#game").hide()
    $("#win").hide()
    $("#lose").hide()
    $("#stage").show()


    for (i=0; i<character.length; i++) {
    $('#charselect').append('<div id="'+i+'" class="col-md-auto char alive" href="#"><img class="charImg" src="'+character[i].img+'"><p>HP:'+character[i].hp+'</p><p>Attack:'+character[i].attack+'</p></div>')
    }

    $("#stage").on("click", ".char", function character(){
        //hides charselect, sets game 
        $("#stage").hide()
        $("#game").show()
        //set character to clicked
        $("#userChar").html(this);
        //$("#userChar").remove(attr("href"))
        //sets remaining characters as enemyChar
        $(".chars").appendTo("#enemyChar")
    })


//Add Attack= & HP= to char divs

//set userChar HP & Attack


//under charactercharselect function add:


//set enemy attack and hp


$("#enemyChar").on("click", "#2", function attack (){
    console.log(this)
    $(this).addClass("dead")
    $(this).removeClass("alive")
    enemiesDefeated++}

    //     if (userHP !== 0 && enemyHP >0) {
    //     $("#userChar").removeClass("alive").addClass("dead") //create .dead in CSS (greyed out maybe?)
    //     $("#lose").show() //create <div class="lose"> in html
    // }
    // if (enemiesDefeated === enemychar.length) {
    //     $("#win").show() //create <div class="win"> in html
    // }	
        
    )
})
