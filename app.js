let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let sciscors = document.querySelector("#sciscors");
let button = document.querySelector(".button");
let result = document.querySelector(".result");
let choice = document.querySelector(".choice");
let my_score_web = document.querySelector("#my_score");
let comp_score_web = document.querySelector("#comp_score");

let user_choice =""
let my_score = 0;
let computer_score = 0;

function comp_make_choice(){
    const choices = ["rock", "paper", "sciscors"];
    const index = Math.floor(Math.random()*3);
    return choices[index];
}

const lock_choice_effect = (node,node02,node03) =>{
    node.classList.add("image_selected");
    node02.classList.remove("image_selected");
    node03.classList.remove("image_selected");

    user_choice = node.getAttribute("id");
}

rock.addEventListener("click",() => lock_choice_effect(rock,paper,sciscors));
paper.addEventListener("click",() => lock_choice_effect(paper,rock,sciscors));
sciscors.addEventListener("click",() => lock_choice_effect(sciscors,rock,paper));

function check_winner(computer_move){
    if (user_choice != ""){
        if (user_choice == computer_move){
            result.innerText = "";
            result.innerText = "It is a draw !";
        }
    
        if (user_choice == "rock" && user_choice != computer_move){
            if (computer_move == "paper"){
                result.innerText = "You Lost !";
                computer_score++;
            }
            else {
                result.innerText = "You Won !";
                my_score++;
            }
        }
    
        if (user_choice == "paper" && user_choice != computer_move){
            if (computer_move == "sciscors"){
                result.innerText = "You Lost !";
                computer_score++;
            }
            else {
                result.innerText = "You Won !";
                my_score++;
            }
        }
    
        if (user_choice == "sciscors" && user_choice != computer_move){
            if (computer_move == "rock"){
                result.innerText = "You Lost !";
                computer_score++;
            }
            else {
                result.innerText = "You Won !";
                my_score++;
            }
        }
    }

    else{
        result.innerText = "Make a move bitch !";
    }
}

function update_score(){
    my_score_web.innerText = my_score;
    comp_score_web.innerText = computer_score;
}

function play(){
    let move = comp_make_choice();
    choice.innerText = move;
    check_winner(move);
    update_score();
}

button.addEventListener("click",()=>play());