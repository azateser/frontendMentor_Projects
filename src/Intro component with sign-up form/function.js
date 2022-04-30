let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let email = document.getElementById('email');
let password = document.getElementById('password');

let error_firstname = document.getElementById('error_firstname');
let error_lastname = document.getElementById('error_lastname');
let error_email = document.getElementById('error_email');
let error_password = document.getElementById('error_password');

function send() {
    if (firstname.value == '') {
        if (error_firstname.style.display == 'none') {
            error_firstname.style.display = '';
            firstname.style.border = '2px solid #FF7A7A';
        } else {
            error_firstname.style.display = '';
        }
    } else {
        if (error_firstname.style.display == '') {
            error_firstname.style.display = 'none';
            firstname.style.border = '2px solid #e5e7eb';
        } else {
            error_firstname.style.display = 'none';
        }
    }

    if (lastname.value == '') {
        if (error_lastname.style.display == 'none') {
            error_lastname.style.display = '';
            lastname.style.border = '2px solid #FF7A7A';
        } else {
            error_lastname.style.display = '';
        }
    } else {
        if (error_lastname.style.display == '') {
            error_lastname.style.display = 'none';
            lastname.style.border = '2px solid #e5e7eb';
        } else {
            error_lastname.style.display = 'none';
        }
    }

    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat) && email.value != '') {
        if (error_email.style.display == '') {
            error_email.style.display = 'none';
            email.style.border = '2px solid #e5e7eb';
        } else {
            error_email.style.display = 'none';
        }
    } else {
        if (error_email.style.display == 'none') {
            error_email.style.display = '';
            email.style.border = '2px solid #FF7A7A';
        } else {
            error_email.style.display = '';
        }
    }

    if (password.value == '') {
        if (error_password.style.display == 'none') {
            error_password.style.display = '';
            password.style.border = '2px solid #FF7A7A';
        } else {
            error_password.style.display = '';
        }
    } else {
        if (error_password.style.display == '') {
            error_password.style.display = 'none';
            password.style.border = '2px solid #e5e7eb';
        } else {
            error_password.style.display = 'none';
        }
    }
}