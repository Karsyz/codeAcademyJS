let userName = prompt("What is your name? or leave blank...")

userName ? alert(`Hello, ${userName}`) : alert('hello')

let userQuestion = prompt("What is your question?")

alert('Hard to say...')
alert('let\'s check')

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = ""

switch (randomNumber) {
    case 1:
        eightBall = 'It is certain'
            break;
    case 2:
        eightBall = 'It is decidedly so'
            break;
    case 3:
        eightBall = 'Reply hazy try again'
            break;
    case 4:
        eightBall = 'Cannot predict now'
            break;
    case 5:
        eightBall = 'Do not count on it'
            break;
    case 6:
        eightBall = 'My sources say no'
            break;
    case 7:
        eightBall = 'Outlook not so good'
            break;
    case 8:
        eightBall = 'Signs point to yes'
            break;
}

// if (randomNumber == 1) {
//     eightBall = 'It is certain'
// }else if (randomNumber == 2) {
//     eightBall = 'It is decidedly so'
// }else if (randomNumber == 3) {
//     eightBall = 'Reply hazy try again'
// }else if (randomNumber == 4) {
//     eightBall = 'Cannot predict now'
// }else if (randomNumber == 5) {
//     eightBall = 'Do not count on it'
// }else if (randomNumber == 6) {
//     eightBall = 'My sources say no'
// }else if (randomNumber == 7) {
//     eightBall = 'Outlook not so good'
// }else if (randomNumber == 8) {
//     eightBall = 'Signs point to yes'
// }

alert(eightBall)