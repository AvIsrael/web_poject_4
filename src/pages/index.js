import FormValidator from "../scripts/components/FormValidator.js";
import Card from "../scripts/components/Card.js"
import Section from "../scripts/components/Section";
import "./index.css"
import {
    initialCards,
    settingsValidator
} from "../scripts/utils/constants"
import PopupWithForm from "../scripts/components/PopupWithForms";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import UserInfo from "../scripts/components/UserInfo.js";

const buttonEdit = document.querySelector(".profile__button-unusual");
const buttonAdd = document.querySelector(".profile__button");
const formElementEdit = document.getElementById("formElementEdit");
const formElementAdd = document.getElementById("formElementAdd");
const nameInput = document.getElementById("name");
const jobInput = document.getElementById("about");

const userInfo = new UserInfo({
    userNameSelector: ".profile__hero",
    userJobSelector: ".profile__role",
});

const editPopup = new PopupWithForm(
    "#popup-edit",
    handleProfileFormSubmit
);

const addCardPopup = new PopupWithForm(
    "#popup-add",
    handleAddCardFormSubmit
);

const imagePopup = new PopupWithImage("#popup-viewer");

editPopup.setEventListeners();

addCardPopup.setEventListeners();

imagePopup.setEventListeners();

function handleProfileFormSubmit(dataUsers) {
    userInfo.setUserInfo(dataUsers);
    editPopup.close();
}

function handleEditButton() {
    editPopup.open();
    const {name, job} = userInfo.getUserInfo();
    formElementEditValidator.resetWholeForm();
    nameInput.value = name;
    jobInput.value = job;

}

buttonEdit.addEventListener("click", handleEditButton);


export const formElementAddValidator = new FormValidator(settingsValidator, formElementAdd);
formElementAddValidator.enableValidation();

export const formElementEditValidator = new FormValidator(settingsValidator, formElementEdit);
formElementEditValidator.enableValidation();


function handleAddCardFormSubmit(dataImages) {
    cardList.addItem(dataImages.title, dataImages['image-link']);
    addCardPopup.close();
}

function handleAddButton() {
    addCardPopup.open();
    formElementAddValidator.resetWholeForm();
}

buttonAdd.addEventListener("click", handleAddButton);

//Creating add new card function
const cardList = new Section(
    {
        items: initialCards,
        renderer: (name, link) =>
            new Card(name, link, "#card", () => (
                imagePopup.open(name, link)
            )).generateCard(),
    },
    ".elements__items"
);

cardList.renderItems();