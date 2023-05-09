$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

let healthPoints = 100;
let attackPoints = 100;

function onReady() {
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM

    $('.arcane-scepter').on('click', arcaneBtn);
    $('.entangle').on('click' , entangleBtn);
    $('.dragon-blade').on('click' , dragonBtn);
    $('.star-fire').on('click' , starFireBtn);
}

function render(){
   $('.ap-text').text(attackPoints);
   $('.hp-text').text(healthPoints);
   freakyFungus();

};



function arcaneBtn(){

    
    attackPoints -= 12
    healthPoints -= 14

    if(attackPoints < 0){
        attackPoints = 0
    };
    if(healthPoints < 0){
        healthPoints = 0
    };
    render();
    
}

function entangleBtn() {
    attackPoints -= 23
    healthPoints -= 9

    if(attackPoints < 0){
        attackPoints = 0
    };
    if(healthPoints < 0){
        healthPoints = 0
    };

    render();
}

function dragonBtn() {
    attackPoints -= 38;
    healthPoints -= 47;

    if(attackPoints < 0){
        attackPoints = 0
    };
    if(healthPoints < 0){
        healthPoints = 0
    };

    render();
}

function starFireBtn() {
    attackPoints -= 33;
    healthPoints -= 25;

    if(attackPoints < 0){
        attackPoints = 0
    };
    if(healthPoints < 0){
        healthPoints = 0
    };

    render();
}

function freakyFungus() {
    if (healthPoints === 0){
        $('.freaky-fungus').removeClass('walk').addClass('dead');
    } else if(attackPoints === 0){
        $('.freaky-fungus').removeClass('walk').addClass('jump');
    };
    
    if(attackPoints === 0) 
    {$('.attack-btn').prop('disabled' , true)};

    render();

    
}

