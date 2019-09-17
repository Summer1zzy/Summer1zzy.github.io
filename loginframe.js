document.onreadystatechange = function(){
    let a = document.getElementsByClassName('account-form-area-code-label')[0],
        b = document.getElementsByClassName('account-form-area-code-choose')[0],
        c = document.getElementsByClassName('account-form-area-code-choose-cls')[0];

    a.onclick = function(){
        b.style.display = 'block';
    };
    c.onclick = function(){
        b.style.display = 'none';
    }
};