let user_score = 0;
let comp_score = 0;
const user_score_span = document.getElementById("userScore");
const comp_score_span = document.getElementById("compScore");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p1 = document.getElementById("p1");
const result_p2 = document.getElementById("p2");
const result_p3 = document.getElementById("p3");
const rock_div = document.getElementById("R");
const paper_div = document.getElementById("P");
const scissors_div = document.getElementById("S");

    // if user wins
function win(user,comp) { 
    user_score++;
    user_score_span.innerHTML = user_score;
    comp_score_span.innerHTML = comp_score;
    result_p1.innerHTML = "You chose " + user + ".";
    result_p2.innerHTML = "Computer chose " + comp + ".";
    result_p3.innerHTML = user + " beats " + comp + ". You Won!!";
}

    //if computer wins
function lose(user,comp) { 
    comp_score++;
    comp_score_span.innerHTML = comp_score;
    user_score_span.innerHTML = user_score;
    result_p1.innerHTML = "You chose " + user + ".";
    result_p2.innerHTML = "Computer chose " + comp + ".";
    result_p3.innerHTML = comp + " beats " + user + ". Comp Won!! You Lose";
}

    //if both choose same
function draw(user,comp) { 
    comp_score++;
    user_score++;
    comp_score_span.innerHTML = comp_score;
    user_score_span.innerHTML = user_score;
    result_p1.innerHTML = "You chose " + user + ".";
    result_p2.innerHTML = "Computer chose " + comp + ".";
    result_p3.innerHTML = "Its a tie!!";
}

// getting computer's choice
function getCompChoice () { 
    const choices = ['Rock','Paper','Scissor'];
    const random_choice = Math.floor ( Math.random () *3 );
    return choices [random_choice];
}

    // main function of the game
function game (user_choice) { 
    const comp_choice = getCompChoice();

        // concatenating user's and computer's choice  
    switch (user_choice+comp_choice) { 
        case "RockScissor":
        case "PaperRock":
        case "ScissorPaper":
            win(user_choice,comp_choice);
            break;
            
        case "ScissorRock":
        case "RockPaper":
        case "PaperScissor":
            lose(user_choice,comp_choice);
            break;

        case "RockRock":
        case "PaperPaper":
        case "ScissorScissor":
            draw(user_choice,comp_choice);
            break;
    }
}

    // getting user's choice
function getUserChoice(){ 
    rock_div.addEventListener('click',function(){
        game("Rock");
    })
    paper_div.addEventListener('click',function(){
        game("Paper");
    })
    scissors_div.addEventListener('click',function(){
        game("Scissor");
    })
}

getUserChoice();