let firstname = document.getElementById('firstname').value;
let lastname = document.getElementById('lastname').value;
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;

let error_firstname = document.getElementById('error_firstname');
let error_lastname = document.getElementById('error_lastname');
let error_email = document.getElementById('error_email');
let error_password = document.getElementById('error_password');

function send() {
    if (firstname == '') {
        if (error_firstname.style.display == 'none') {
            error_firstname.style.display = '';
            console.log(error_firstname.style.display);
        } else {
            error_firstname.style.display = '';
            console.log(error_firstname.style.display);
        }
    }

    if (lastname == '') {
        if (error_lastname.style.display == 'none') {
            error_lastname.style.display = '';
            console.log(error_lastname.style.display);
        } else {
            error_lastname.style.display = '';
            console.log(error_lastname.style.display);
        }
    }

    if (email == '') {
        if (error_email.style.display == 'none') {
            error_email.style.display = '';
            console.log(error_email.style.display);
        } else {
            error_email.style.display = '';
            console.log(error_email.style.display);
        }
    }

    if (password == '') {
        if (error_password.style.display == 'none') {
            error_password.style.display = '';
            console.log(error_password.style.display);
        } else {
            error_password.style.display = '';
            console.log(error_password.style.display);
        }
    }
}