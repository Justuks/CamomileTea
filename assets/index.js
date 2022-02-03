document.getElementById('press').onclick = function () {
    document.getElementById('header-text').innerHTML = 'Please, complete your test below.'
    document.getElementById('game-container').style.visibility = 'visible'
}
//above here is my code to make appear - dissapear elements on main page


//starting to arrange variables for the game form

let question1 = document.getElementById('1').value
let question2 = document.getElementById('2').value
let question3 = document.getElementById('3').value
let count = 0

function result(){
    if(question1 == 'c'){
        count++;
    }
    if(question2 == 'b'){
        count++;
    }
    console.log(count)
    if(question3 == 'a'){
        count++;
    }
    if (count == 3){
        document.getElementById('header-text').innerHTML = 'Congratulations, turn on ignition and input required data.'
    }
    else{
        document.getElementById('header-text').innerHTML = 'No succsess, back to the drawing board.'
    }

}