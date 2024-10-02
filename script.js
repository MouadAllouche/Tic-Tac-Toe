const main = document.querySelector('main')
const result = document.getElementById('result')
const decision = document.getElementById('decision')
const player_01 = document.getElementById('player_01')
const player_02 = document.getElementById('player_02')
const playerOne = document.getElementById('playerOne')
const playerTwo = document.getElementById('playerTwo')
const start = document.getElementById('start')
const restart = document.getElementById('restart')
let P1, P2, started = false
let X = new Array()
let Y = new Array()
let used = new Array()
let turn = 0

function createtable(table) {
    table.innerHtml = ''
    let i = 1,
        j = 1
    for (let index = 0; index < 9; index++) {
        const casa = document.createElement('div')
        casa.classList.add('case')
        casa.id = String(i) + String(j)
        casa.addEventListener('click', () => {
            if (started) {
                if (used.includes(casa.id)) {
                    alert('used case')
                } else {
                    turn += 1
                    if (turn % 2 == 0) {
                        const img_X = document.createElement('img')
                        img_X.src = 'img/X-mark0.png'
                        casa.appendChild(img_X)
                        X.push(casa.id)
                        used.push(casa.id)
                    } else {
                        const img_O = document.createElement('img')
                        img_O.src = 'img/O-mark0.png'
                        casa.appendChild(img_O)
                        Y.push(casa.id)
                        used.push(casa.id)
                    }
                    if ((X.includes('11') && X.includes('12') && X.includes('13')) || (X.includes('21') && X.includes('22') && X.includes('23')) || (X.includes('31') && X.includes('32') && X.includes('33')) || (X.includes('11') && X.includes('21') && X.includes('31')) || (X.includes('12') && X.includes('22') && X.includes('32')) || (X.includes('13') && X.includes('23') && X.includes('33')) || (X.includes('11') && X.includes('22') && X.includes('33')) || (X.includes('31') && X.includes('22') && X.includes('13'))) {
                        result.innerText = P1 + ' wins!!'
                    } else if ((Y.includes('11') && Y.includes('12') && Y.includes('13')) || (Y.includes('21') && Y.includes('22') && Y.includes('23')) || (Y.includes('31') && Y.includes('32') && Y.includes('33')) || (Y.includes('11') && Y.includes('21') && Y.includes('31')) || (Y.includes('12') && Y.includes('22') && Y.includes('32')) || (Y.includes('13') && Y.includes('23') && Y.includes('33')) || (Y.includes('11') && Y.includes('22') && Y.includes('33')) || (Y.includes('31') && Y.includes('22') && Y.includes('13'))) {
                        result.innerText = P2 + ' wins!!'
                    } else if (used.length == 9) {
                        result.innerText = 'draw!!'
                    }
                }
            } else {
                alert('Please click the start button to start the game')
            }

        })
        table.appendChild(casa)
        if (j == 3) {
            j = 1
            i += 1
        } else {
            j += 1
        }
    }
}

createtable(main)

decision.addEventListener('click', () => {
    const number = Math.floor(Math.random() * 10)
    if (number > 5) {
        playerOne.innerText = player_01.value + ' : X'
        P1 = player_01.value
        playerTwo.innerText = player_02.value + ' : O'
        P2 = player_02.value
    } else {
        playerOne.innerText = player_02.value + ' : X'
        P1 = player_02.value
        playerTwo.innerText = player_01.value + ' : O'
        P2 = player_01.value
    }

})

start.addEventListener('click', () => {
    if (playerOne != null && playerTwo != null) {
        started = true
    } else {
        alert('You should enter names first')
    }
})

restart.addEventListener('click', () => {
    let i = 1,
        j = 1,
        actual
    for (let value of used) {
        const actual = document.getElementById(value)
        actual.innerHTML = ''
    }
    used = [], X = [], Y = []
    result.innerText = ''
})