function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        var secilenID = document.getElementById('hata');
        if (secilenID.style.display == '') {
            secilenID.style.display = 'none';
        } else {
            secilenID.style.display = 'none';
        }
        return true;
    } else {
        var secilenID = document.getElementById('hata');
        if (secilenID.style.display == 'none') {
            secilenID.style.display = '';
        } else {
            secilenID.style.display = '';
        }
        return false;
    }
}