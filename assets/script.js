//Реализация карусели
const wrapperOne = document.querySelector('.wrapper-1');
const leftButton = document.querySelector('.carousel-left');
const rightButton = document.querySelector('.carousel-right');
const imageContainer = document.querySelector('.image-container');


let track = 0;
let counter = 1;

const moveImagesLeft = function () {
    if (counter < imageContainer.childElementCount) {
        counter++;
        track = track - 100;
        wrapperOne.style.marginLeft = `${track}%`;
    }
}

const moveImagesRight = function () {
    if (counter > 1) {
        counter--;
        track = track + 100;
        wrapperOne.style.marginLeft = `${track}%`;
    }
    console.log("Right")
}

rightButton.addEventListener('click', () => {
    moveImagesLeft();
});

leftButton.addEventListener('click', () => {
    console.log("Left");
    moveImagesRight();

});


// Реализация заполнения и проверки формы
const form = document.forms.namedItem('user-form')
const name = document.getElementById('user-name')
const phone = document.getElementById('user-phone')
const email = document.getElementById('user-email')

form.addEventListener("focusin", (e) => {
    hidePopup()
})


form.addEventListener("input", (e) => {
    if (hasOnlyLettersAndSpaces(name.value)){
        // console.log("All ok")
        name.innerText = name.value;
    } else {
        // console.log("Не только буквы")
        name.value = name.value.slice(0, -1)
        name.innerText = name.value;
    }
})

let formOK = true;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formOK = true
    if (!name.value){
        formOK = false
        showPopup("pop-name")
    }

    if(!checkPhonePattern(phone.value)){
        formOK = false
        showPopup("pop-phone")
    }

    if(!checkEmail(email.value)){
        formOK = false
        showPopup("pop-email")
    }

    if (formOK){
        // Что-то делаем с данными
        alert("Форма заполнена верно")
    }
})


const hasOnlyLettersAndSpaces = (v) => {
    return /^[A-Za-zА-Яа-я\s]*$/.test(v)
}

const checkPhonePattern = (v) => {
    return /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm.test(v)
}

const checkEmail = (v) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)
}

function showPopup(elem) {
    let popup = document.getElementById(elem)
    popup.classList.toggle("show")
}

function hidePopup(){
    const popupElements = document.getElementsByClassName("popuptext")
    for (let elem of popupElements){
        elem.classList.remove("show")
    }
}
