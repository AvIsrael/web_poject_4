import {closeModalWindow, openModalWindow} from "./modalWindow.js";
import {formValidator} from "./validate.js";
const formWindowEdit = document.getElementById("popup-edit");
const formWindowAdd = document.getElementById("popup-add");
const formWindowViewer = document.getElementById("popup-viewer");
const buttonEdit = document.querySelector(".profile__button-unusual");
const buttonAdd = document.querySelector(".profile__button");
const currentName = document.querySelector(".profile__hero");
const currentRole = document.querySelector(".profile__role");
const formElementEdit = document.getElementById("formElementEdit");
const formElementAdd = document.getElementById("formElementAdd");
const nameInput = document.getElementById("name");
const jobInput = document.getElementById("about");
const titleInput = document.getElementById("title");
const imageInput = document.getElementById("image-link");
const viewPlaceName = formWindowViewer.querySelector(".popup__viewer-text");
const viewPlaceImg = formWindowViewer.querySelector(".popup__viewer-image");
const buttonCancelEdit = formElementEdit.querySelector(".popup__button");
const buttonCancelAdd = formWindowAdd.querySelector(".popup__button")
const buttonCancelView = formWindowViewer.querySelector(".popup__button");
const cardsContainer = document.querySelector(".elements__items");

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

formElementEdit.addEventListener('submit', handleProfileFormSubmit);

const openEditProfilePopup = () => {
    formElementEditValidator.resetWholeForm();
    openModalWindow(formWindowEdit);
    nameInput.value = currentName.textContent;
    jobInput.value = currentRole.textContent;
}

buttonCancelEdit.addEventListener("click", () => {
    closeModalWindow(formWindowEdit);
});
buttonEdit.addEventListener('click', openEditProfilePopup);

//Popup form for Add button
const handleAddCardFormSubmit = (evt) => {
    evt.preventDefault();
    formElementAddValidator.resetWholeForm();
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

const openImagePreview = (text, link) => {
    openModalWindow(formWindowViewer);
    viewPlaceName.innerText = text;
    viewPlaceImg.src = link;
    viewPlaceImg.alt = `Photo of ${text}`;
}

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
const cardTemplate = document.getElementById("card").content.querySelector(".elements__item");
const createNewCard = (name, link) => {
    const card = cardTemplate.cloneNode(true);
    const imageElement = card.querySelector(".elements__grid-image");
    imageElement.src = link;
    imageElement.alt = `Photo of ${name}`;
    imageElement.addEventListener('click', () => {
        openImagePreview(name, link);
    });

    const cardTitle = card.querySelector(".elements__description");
    cardTitle.textContent = name;

    const deleteButton = card.querySelector(".elements__button-delete");
    deleteButton.addEventListener('click', (evt) => {
        const listItem = evt.target.closest(".elements__item");
        listItem.remove();
    });

    const likeButton = card.querySelector(".elements__button-heart");
    likeButton.addEventListener('click', (evt) => {
        evt.target.classList.toggle("elements__button-heart_active");
    });

    return card;
}

const createInitialCards = () => {
    initialCards.forEach((item) => {
        cardsContainer.append(createNewCard(item.name, item.link));
    });
}
createInitialCards();

const formElementAddValidator = formValidator(formElementAdd, settingsValidator);
formElementAddValidator.enableValidation();

const formElementEditValidator = formValidator(formElementEdit, settingsValidator);
formElementEditValidator.enableValidation();
