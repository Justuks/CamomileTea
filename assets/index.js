document.getElementById('press').onclick = function () {
    document.getElementById('header-text').innerHTML = 'Please, complete your test below.'
    document.getElementById('game-container').style.visibility = 'visible'
}
//above here is my code to make appear - dissapear elements on main page


//starting to arrange variables for the game form

let question1 = 'Port'
let question2 = 1.85
let question3 = 360
let count = 0
console.log(question1)

function outcome() {
    if (question1 == 'Port') {
        count++;
    }
    if (question2 == 1.85) {
        count++;
    }
    if (question3 == 360) {
        count++;
    }
    console.log(count)
    if (count === 3) {
        document.getElementById('header-text').innerHTML = 'Congratulations, turn on ignition and input required data.'
    } else {
        document.getElementById('header-text').innerHTML = 'No succsess, back to the drawing board.'
    }

}