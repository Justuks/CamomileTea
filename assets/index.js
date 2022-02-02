document.getElementById('press').onclick = function(){
    document.getElementById('header-text').innerHTML = 'Please, complete your test below.'
    document.getElementById('game-container').style.visibility = 'visible'
}
//starting to arrange variables for the game
let aVariant = document.getElementById('a')
let bVariant = document.getElementById('b')
let cVariant = document.getElementById('c')
let nextBtn = document.getElementById('next')
let prevBtn = document.getElementById('previous')
let resetBtn = document.getElementById('reset')
let subBtn = document.getElementById('submit')