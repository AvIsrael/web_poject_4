export const buttonEdit = document.querySelector(".profile__button-unusual");
export const buttonAdd = document.querySelector(".profile__button");
export const formElementEdit = document.getElementById("formElementEdit");
export const formElementAdd = document.getElementById("formElementAdd");
export const nameInput = document.getElementById("name");
export const jobInput = document.getElementById("about");

export const settingsValidator = {
    formSelector: ".popup__form",
    inputSelector: ".popup__item",
    submitButtonSelector: ".popup__button-sbmt",
    inactiveButtonClass: "popup__button-sbmt_disabled",
    inputErrorClass: "popup__item_type_error",
    errorClass: "popup__error_visible",
}

export const initialCards = [
    {
        name: "Yosemite Valley",
        link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
        name: "Lake Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
        name: "Bald Mountains",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
        name: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
        name: "Vanoise National Park",
        link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
    },
    {
        name: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
];