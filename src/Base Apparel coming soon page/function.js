function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        var text_id = document.getElementById('hata_text');
        if (text_id.style.display == '') {
            text_id.style.display = 'none';
        } else {
            text_id.style.display = 'none';
        }
        var icon_id = document.getElementById('hata_icon');
        if (icon_id.style.display == '') {
            icon_id.style.display = 'none';
        } else {
            icon_id.style.display = 'none';
        }
        var input_id = document.getElementById('input_border');
        input_id.style.border = '2px solid #e5d4d8';

        return true;
    } else {
        var text_id = document.getElementById('hata_text');
        if (text_id.style.display == 'none') {
            text_id.style.display = '';
        } else {
            text_id.style.display = '';
        }
        var icon_id = document.getElementById('hata_icon');
        if (icon_id.style.display == 'none') {
            icon_id.style.display = '';
        } else {
            icon_id.style.display = '';
        }
        var input_id = document.getElementById('input_border');
        input_id.style.border = '2px solid red';
        return false;
    }
}