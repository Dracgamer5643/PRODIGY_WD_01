let submit = document.querySelector('.btn');
let name = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');
let element = document.querySelector('.elements2');
let bur = document.querySelector('.bur');

function clearInputValue(idName) {
    var input = document.getElementById(idName);
    if (input) {
        input.value = "";
    } else {
        console.error("Element with ID '" + idName + "' not found");
    }
}

function navbar(){

    if (element.style.display == "block"){
        element.style.display = "none";
        bur.classList.remove("fi-rr-cross");
        bur.classList.add("fi-rr-menu-burger");
    }

    else{
        element.style.display = "block";
        element.style.textAlign = "center";
        element.style.backgroundColor = "black";
        bur.classList.add("fi-rr-cross");
        bur.classList.remove("fi-rr-menu-burger");
    }
}

function onSubmit(){
    alert('Message Send to ADI Game-IMDB By ' + name.value);
    name.value = 'Name';
    email.value = 'Email';
    message.value = 'Message';
}