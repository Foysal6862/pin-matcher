let notifySection1 = document.getElementById('match');
notifySection1.style.display = 'none';
let notifySection2 = document.getElementById('dont-match');
notifySection2.style.display = 'none';


    const generatePin = document.getElementById('generate-pin-btn');
    generatePin.addEventListener('click', function () {
    const randomNumber = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    const random = parseInt(randomNumber);
    document.getElementById('output-pin-generate').value = random;
})

function historyValue() {
    return document.getElementById('input-value').value;
}
function printHistory(num) {
    document.getElementById('input-value').value = num;
}
// printHistory(2323)

let number = document.getElementsByClassName('number');
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function() {
        let input = historyValue();
        input = input + this.id;
        printHistory(input);
    })
    
}
let operator = document.getElementsByClassName('operator');
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function() {
        if (this.id === 'clear') {
            printHistory('');
        }else if (this.id === 'backspace'){
            input = historyValue();
            input = input.substring(0, input.length - 1);
            printHistory(input);
        }
    })
    
}


let submit = document.getElementById('submit');
submit.addEventListener('click', function () {
    if ((document.getElementById('output-pin-generate').value) === (document.getElementById('input-value').value) ) {
        console.log('enter')
        document.getElementById('match').style.display = 'inherit';
    }
    else if (document.getElementById('output-pin-generate').value != document.getElementById('input-value').value ) {
        document.getElementById('dont-match').style.display = 'inherit';
    }
})