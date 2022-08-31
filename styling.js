"use strict";
let string = "";
let temp = ""
let buttons = document.querySelectorAll('.button'); //querySelectorAll it will select all the buttons which is having a classes in it.
let sol = document.querySelectorAll('#solution');
let input = document.querySelector('input');
// let inuputs = document.querySelectorAll('#input-2');
Array.from(buttons).forEach((buttons) => {

    buttons.addEventListener('click', (e) => { // (e) is Event.
        if (e.target.innerHTML == '=') {
            if (string.length < 1)
                alert('You have pressed the = by mistakenly')
            else {
                temp = string
                try {
                    string = eval(string);
                    document.querySelector('input').value = string;

                } catch (error) {

                    document.querySelector('input').value = "Error";

                }

            }
        } else if (e.target.innerHTML == 'C') {

            string = document.querySelector('input').value;
            string = string.substr(0, string.length - 1)
            document.querySelector('input').value = string;

        } else if (e.target.innerHTML == 'AC') {
            string = "";
            document.querySelector('input').value = string;
        } else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }

    })
    input.addEventListener('keydown', (e) => {
        if (e.keyCode === 13) {
            console.log(e.target.value);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        } else if (e.keyCode < 13 && e.keyCode > 13) {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})