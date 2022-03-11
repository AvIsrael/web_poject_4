import {closeModalWindow, openModalWindow} from "./utils.js";
import {FormValidator} from "./FormValidate.js";
import {Card} from "./Card.js"

const formWindowEdit = document.getElementById("popup-edit");
const formWindowAdd = document.getElementById("popup-add");
const formWindowViewer = document.getElementById("popup-viewer");
const buttonEdit = document.querySelector(".profile__button-unusual");
const buttonAdd = document.querySelector(".profile__button");
const formElementEdit = document.getElementById("formElementEdit");
const formElementAdd = document.getElementById("formElementAdd");
const titleInput = document.getElementById("title");
const imageInput = document.getElementById("image-link");
const buttonCancelEdit = formElementEdit.querySelector(".popup__button");
const buttonCancelAdd = formWindowAdd.querySelector(".popup__button")
const buttonCancelView = formWindowViewer.querySelector(".popup__button");
const cardsContainer = document.querySelector(".elements__items");
const viewPlaceName = formWindowViewer.querySelector(".popup__viewer-text");
const viewPlaceImg = formWindowViewer.querySelector(".popup__viewer-image");
const currentName = document.querySelector(".profile__hero");
const currentRole = document.querySelector(".profile__role");
const nameInput = document.getElementById("name");
const jobInput = document.getElementById("about");

const settingsValidator = {
    formSelector: ".popup__form",
    inputSelector: ".popup__item",
    submitButtonSelector: ".popup__button-sbmt",
    inactiveButtonClass: "popup__button-sbmt_disabled",
    inputErrorClass: "popup__item_type_error",
    errorClass: "popup__error_visible",
}

const handleProfileFormSubmit = (evt) => {
    evt.preventDefault();
    currentName.textContent = nameInput.value;
    currentRole.textContent = jobInput.value;
    closeModalWindow(formWindowEdit);
}

const openEditProfilePopup = () => {
    formElementEditValidator.resetWholeForm();
    openModalWindow(formWindowEdit);
    nameInput.value = currentName.textContent;
    jobInput.value = currentRole.textContent;
}

const openImagePreview = (text, link) => {
    openModalWindow(formWindowViewer);
    viewPlaceName.innerText = text;
    viewPlaceImg.src = link;
    viewPlaceImg.alt = `Photo of ${text}`;
}

formElementEdit.addEventListener('submit', handleProfileFormSubmit);

buttonCancelEdit.addEventListener("click", () => {
    closeModalWindow(formWindowEdit);
});

buttonEdit.addEventListener('click', openEditProfilePopup);

//Popup form for Add button
const handleAddCardFormSubmit = (evt) => {
    evt.preventDefault();
    closeModalWindow(formWindowAdd);
    cardsContainer.prepend(createNewCard(titleInput.value, imageInput.value));
}
formElementAdd.addEventListener('submit', handleAddCardFormSubmit);

const openAddCardPopup = () => {
    openModalWindow(formWindowAdd);
    formElementAddValidator.resetWholeForm();
}

buttonCancelAdd.addEventListener('click', () => {
    closeModalWindow(formWindowAdd);
});
buttonAdd.addEventListener('click', openAddCardPopup);
//End of form Add button


//Popup Viewer
buttonCancelView.addEventListener("click", () => {
    closeModalWindow(formWindowViewer);
});


//Creating list items with JS
const initialCards = [
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

//Creating add new card function

const  createNewCard = (name, link) => {
    const card = new Card(name,link, "#card", () => (
        openImagePreview(name, link)
        ))
    return card.generateCard();
}

const createInitialCards = () => {
    initialCards.forEach((item) => {
        cardsContainer.append(createNewCard(item.name, item.link));
    });
}
createInitialCards();

// const formElementAddValidator = formValidator(formElementAdd, settingsValidator);
export const formElementAddValidator = new FormValidator(settingsValidator, formElementAdd);
formElementAddValidator.enableValidation();

export const formElementEditValidator = new FormValidator(settingsValidator, formElementEdit);
formElementEditValidator.enableValidation();