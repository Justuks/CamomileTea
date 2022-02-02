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

let questions = [{
        question1: "What ship's left-hand side is called?",
        a: 'Aft',
        b: 'Port',
        c: 'Starboard'
    },
    {
        question2: "Nautical mile in km?",
        a: 3,
        b: 1.6,
        c: 1.85
    },
    {
        question3: "How many degrees does a compass have?",
        a: 360,
        b: 180,
        c: 90
    }

]