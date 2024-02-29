window.addEventListener("load", startScreen);


function startScreen(){
    hideAllScreens();
    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#start_shift_btn").addEventListener("click", start);
    document.querySelector("#how_to_axe_btn").addEventListener("click", howTo);
}

function howTo(){
    hideAllScreens();
    document.querySelector("#game_ui").classList.add("hide");
    document.querySelector("#game").classList.remove("hide");
    document.querySelector("#how_to_axe").classList.remove("hide");
    document.querySelector("#close_btn").addEventListener("click", startScreen);
}

function hideAllScreens(){
    document.querySelector("#game").classList.add("hide");
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#how_to_axe").classList.add("hide");
    document.querySelector("#game_over").classList.add("hide");
    document.querySelector("#game_complete").classList.add("hide");
}

// declare variables points and lives
let warnings, points;
let highScore = 0;

function start(){
    hideAllScreens();
    document.querySelector("#game").classList.remove("hide");
    document.querySelector("#game_ui").classList.remove("hide");

    // initialize points and lives
    warnings = 0;
    points = 0;

    // make sure all screens are hidden
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#how_to_axe").classList.add("hide");
    document.querySelector("#game_over").classList.add("hide");
    document.querySelector("#game_complete").classList.add("hide");

    // update UI with points
    updatePoints();
    updateWarnings();

    // Adding classes to bad containers (rise)
    document.querySelector("#s_container_1").classList.add("rise");
    document.querySelector("#i_container_1").classList.add("rise");
    document.querySelector("#s_container_2").classList.add("rise");
    document.querySelector("#i_container_2").classList.add("rise");
   
    // Adding classes to good containers (rise)
    document.querySelector("#e_container_1").classList.add("rise");
    document.querySelector("#e_container_2").classList.add("rise");

    // Adding restart bad containers 
    document.querySelector("#s_container_1").addEventListener("animationiteration", restartS1);
    document.querySelector("#i_container_1").addEventListener("animationiteration", restartI1);
    document.querySelector("#s_container_2").addEventListener("animationiteration", restartS2);
    document.querySelector("#i_container_2").addEventListener("animationiteration", restartI2);

    // Adding restart good containers
    document.querySelector("#e_container_1").addEventListener("animationiteration", restartE1);
    document.querySelector("#e_container_2").addEventListener("animationiteration", restartE2);

    // adding eventlisteners (mousedown) to objects bad container
    document.querySelector("#s_container_1").addEventListener("mousedown", hitS1);
    document.querySelector("#i_container_1").addEventListener("mousedown", hitI1);
    document.querySelector("#s_container_2").addEventListener("mousedown", hitS2);
    document.querySelector("#i_container_2").addEventListener("mousedown", hitI2);

    // adding eventlisteners (mousedown) to objects good container
    document.querySelector("#e_container_1").addEventListener("mousedown", hitE1);
    document.querySelector("#e_container_2").addEventListener("mousedown", hitE2);
    
    // adding eandom position
    let rndNum_S1 = generateRandomNumber();
    let newPos_S1 = "pos" + rndNum_S1;
    document.querySelector("#s_container_1").classList.add(newPos_S1);
    
    let rndNum_I1 = generateRandomNumber();
    let newPos_I1 = "pos" + rndNum_I1;
    document.querySelector("#i_container_1").classList.add(newPos_I1);
    
    let rndNum_E1 = generateRandomNumber();
    let newPos_E1 = "pos" + rndNum_E1;
    document.querySelector("#e_container_1").classList.add(newPos_E1);
    
    let rndNum_S2 = generateRandomNumber();
    let newPos_S2 = "pos" + rndNum_S2;
    document.querySelector("#s_container_2").classList.add(newPos_S2);
    
    let rndNum_I2 = generateRandomNumber();
    let newPos_I2 = "pos" + rndNum_I2;
    document.querySelector("#i_container_2").classList.add(newPos_I2);
    
    let rndNum_E2 = generateRandomNumber();
    let newPos_E2 = "pos" + rndNum_E2;
    document.querySelector("#e_container_2").classList.add(newPos_E2);

    //Starter timeren (ur-animationen)
    document.querySelector("#hour").classList.add("hour_animation");
    
    //Når animationen er færdig kaldes funktionen endGame()
    document.querySelector("#hour").addEventListener("animationend", endGame);
}

//Når animationen er færdig kaldes funktionen endGame()
document.querySelector("#hour").addEventListener("animationed", endGame);


// function for hitting S + I container
function hitS1(){
    document.querySelector("#s_container_1").classList.add("freeze");
    document.querySelector("#s_sprite_1").classList.add("hide");
    document.querySelector("#s_sprite_d_1").classList.add("fadeout");
    document.querySelector("#s_container_1").removeEventListener("mousedown", hitS1);
    addWarning();
    updateWarnings();
    document.querySelector("#s_container_1").addEventListener("animationend", restartS1);
}

function hitI1(){
    document.querySelector("#i_container_1").classList.add("freeze");
    document.querySelector("#i_sprite_1").classList.add("hide");
    document.querySelector("#i_sprite_d_1").classList.add("fadeout");
    document.querySelector("#i_container_1").removeEventListener("mousedown", hitI1);
    addWarning();
    updateWarnings();
    document.querySelector("#i_container_1").addEventListener("animationend", restartI1);
}

function hitS2(){
    document.querySelector("#s_container_2").classList.add("freeze");
    document.querySelector("#s_sprite_2").classList.add("hide");
    document.querySelector("#s_sprite_d_2").classList.add("fadeout");
    document.querySelector("#s_container_2").removeEventListener("mousedown", hitS2);
    addWarning();
    updateWarnings();
    document.querySelector("#s_container_2").addEventListener("animationend", restartS2);
}

function hitI2(){
    document.querySelector("#i_container_2").classList.add("freeze");
    document.querySelector("#i_sprite_2").classList.add("hide");
    document.querySelector("#i_sprite_d_2").classList.add("fadeout");
    document.querySelector("#i_container_2").removeEventListener("mousedown", hitI2);
    addWarning();
    updateWarnings();
    document.querySelector("#i_container_2").addEventListener("animationend", restartI2);
}

// function restart S + I container
function restartS1() {
    document.querySelector("#s_container_1").classList = "";
    document.querySelector("#s_sprite_1").classList = "";
    document.querySelector("#s_sprite_d_1").classList = "";
    document.querySelector("#s_container_1").removeEventListener("animationend", restartS1);
    let rndNum = generateRandomNumber();
    let newPos = "pos" + rndNum;
    document.querySelector("#s_container_1").offsetHeight;
    document.querySelector("#s_container_1").classList.add("rise");
    document.querySelector("#s_container_1").classList.add(newPos);
    document.querySelector("#s_container_1").addEventListener("mousedown", hitS1);
}

function restartI1() {
    document.querySelector("#i_container_1").classList = "";
    document.querySelector("#i_sprite_1").classList = "";
    document.querySelector("#i_sprite_d_1").classList = "";
    document.querySelector("#i_container_1").removeEventListener("animationend", restartI1);
    let rndNum = generateRandomNumber();
    let newPos = "pos" + rndNum;
    document.querySelector("#i_container_1").offsetHeight;
    document.querySelector("#i_container_1").classList.add("rise");
    document.querySelector("#i_container_1").classList.add(newPos);
    document.querySelector("#i_container_1").addEventListener("mousedown", hitI1);
}

function restartS2() {
    document.querySelector("#s_container_2").classList = "";
    document.querySelector("#s_sprite_2").classList = "";
    document.querySelector("#s_sprite_d_2").classList = "";
    document.querySelector("#s_container_2").removeEventListener("animationend", restartS2);
    let rndNum = generateRandomNumber();
    let newPos = "pos" + rndNum;
    document.querySelector("#s_container_2").offsetHeight;
    document.querySelector("#s_container_2").classList.add("rise");
    document.querySelector("#s_container_2").classList.add(newPos);
    document.querySelector("#s_container_2").addEventListener("mousedown", hitS2);
}

function restartI2() {
    document.querySelector("#i_container_2").classList = "";
    document.querySelector("#i_sprite_2").classList = "";
    document.querySelector("#i_sprite_d_2").classList = "";
    document.querySelector("#i_container_2").removeEventListener("animationend", restartI2);
    let rndNum = generateRandomNumber();
    let newPos = "pos" + rndNum;
    document.querySelector("#i_container_2").offsetHeight;
    document.querySelector("#i_container_2").classList.add("rise");
    document.querySelector("#i_container_2").classList.add(newPos);
    document.querySelector("#i_container_2").addEventListener("mousedown", hitI2);
}

// function for hitting E container
function hitE1(){
    document.querySelector("#e_container_1").classList.add("freeze");
    document.querySelector("#e_sprite_1").classList.add("hide");
    document.querySelector("#e_sprite_d_1").classList.add("fadeout");
    document.querySelector("#e_container_1").removeEventListener("mousedown", hitE1);
    addPoint();
    updatePoints();
    document.querySelector("#e_container_1").addEventListener("animationend", restartE1);
}

function hitE2(){
    document.querySelector("#e_container_2").classList.add("freeze");
    document.querySelector("#e_sprite_2").classList.add("hide");
    document.querySelector("#e_sprite_d_2").classList.add("fadeout");
    document.querySelector("#e_container_2").removeEventListener("mousedown", hitE2);
    addPoint();
    updatePoints();
    document.querySelector("#e_container_2").addEventListener("animationend", restartE2);
}

// function restart E container
function restartE1() {
    document.querySelector("#e_container_1").classList = "";
    document.querySelector("#e_sprite_1").classList = "";
    document.querySelector("#e_sprite_d_1").classList = "";
    document.querySelector("#e_container_1").removeEventListener("animationend", restartE1);
    let rndNum = generateRandomNumber();
    let newPos = "pos" + rndNum;
    document.querySelector("#e_container_1").offsetHeight;
    document.querySelector("#e_container_1").classList.add("rise");
    document.querySelector("#e_container_1").classList.add(newPos);
    document.querySelector("#e_container_1").addEventListener("mousedown", hitE1);
}

function restartE2() {
    document.querySelector("#e_container_2").classList = "";
    document.querySelector("#e_sprite_2").classList = "";
    document.querySelector("#e_sprite_d_2").classList = "";
    document.querySelector("#e_container_2").removeEventListener("animationend", restartE2);
    let rndNum = generateRandomNumber();
    let newPos = "pos" + rndNum;
    document.querySelector("#e_container_1").offsetHeight;
    document.querySelector("#e_container_2").classList.add("rise");
    document.querySelector("#e_container_2").classList.add(newPos);
    document.querySelector("#e_container_2").addEventListener("mousedown", hitE2);
}

// create a function that takes 1 argument (max value) and generates a random number
function generateRandomNumber() {
    let myNumber;
    myNumber = Math.floor(Math.random() * 9) + 1;
    return myNumber;
}

// function for adding point
function addPoint(){
    points = points +1;
    if (points ==8){
        document.querySelector("#boss_m_container").classList.add("move_m_boss")
    }
    if (points ==15){
        document.querySelector("#boss_r_container").classList.add("move_r_boss")
    }
    if (points ==20){
        document.querySelector("#boss_l_container").classList.add("move_l_boss")
    }
}

// function for printing point
function updatePoints(){
    document.querySelector("#score_board").textContent = points;
}

// function for adding warning
function addWarning(){
    warnings = warnings +1;
    if (warnings>2){
        endGame();
    }
}

// function for printing warning
function updateWarnings(){
    document.querySelector("#warning_board").textContent = warnings;
}

// function endGame()
function endGame(){
    document.querySelector("#hour").classList="";
    document.querySelector("#s_container_1").classList="";
    document.querySelector("#i_container_1").classList="";
    document.querySelector("#e_container_1").classList="";
    document.querySelector("#s_container_2").classList="";
    document.querySelector("#i_container_2").classList="";
    document.querySelector("#e_container_2").classList="";
    document.querySelector("#boss_l_container").classList="";
    document.querySelector("#boss_m_container").classList="";
    document.querySelector("#boss_r_container").classList="";
    document.querySelector("#game_ui").classList.add("hide");
    if (warnings > 2){
        document.querySelector("#game_over").classList.remove("hide");
        document.querySelector("#try_again_btn_1").addEventListener("click", start);
    }
    else if (points==0){
        document.querySelector("#game_over").classList.remove("hide");
        document.querySelector("#try_again_btn_1").addEventListener("click", start);
    }
    else if (points > highScore){
        document.querySelector("#game_complete").classList.remove("hide");
        document.querySelector("#points").textContent = points;
        highScore=points;
        document.querySelector("#high_score").textContent = highScore;
        document.querySelector("#try_again_btn_2").addEventListener("click", start);
    }
    else {
        document.querySelector("#game_complete").classList.remove("hide");
        document.querySelector("#points").textContent = points;
        document.querySelector("#high_score").textContent = highScore;
        document.querySelector("#try_again_btn_2").addEventListener("click", start);
    }
}
 