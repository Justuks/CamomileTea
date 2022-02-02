document.getElementById('press').onclick = function () {
    document.getElementById('header-text').innerHTML = 'Please, complete your test below.'
    document.getElementById('game-container').style.visibility = 'visible'
}
//above here is my code to make appear - dissapear elements on main page


//starting to arrange variables for the game
let aVariant = document.getElementById('a')
let bVariant = document.getElementById('b')
let cVariant = document.getElementById('c')
let nextBtn = document.getElementById('next')
let prevBtn = document.getElementById('previous')
let resetBtn = document.getElementById('reset')
let subBtn = document.getElementById('submit')
aVariant = 0
bVariant = 1
cVariant = 2

let question1 = {
        title: "What ship's left-hand side is called?",
        answers: ['Aft', 'Bow', 'Port'],
        correct: 2
    }
let question2 = {
        title: "Nautical mile in km?",
        answers: [3, 1.6, 1.85],
        correct: 2
    }
let question3 = {
        title: "How many degrees does a compass have?",
        answers: [360, 90, 123],
        correct: 0
    }
