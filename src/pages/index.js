import FormValidator from "../scripts/components/FormValidator.js";
import Card from "../scripts/components/Card.js"
import Section from "../scripts/components/Section";
import "./index.css"
import {
    settingsValidator
} from "../scripts/utils/constants"
import PopupWithForm from "../scripts/components/PopupWithForms";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import UserInfo from "../scripts/components/UserInfo.js";
import Api from "../scripts/components/Api.js";
import {PopupWithDeleting} from "../scripts/components/PopupWithDeleting";

const buttonEdit = document.querySelector(".profile__button-unusual");
const buttonAdd = document.querySelector(".profile__button");
const formElementEdit = document.getElementById("formElementEdit");
const formElementAdd = document.getElementById("formElementAdd");
const formElementImage = document.getElementById("formElementImage");
const nameInput = document.getElementById("name");
const jobInput = document.getElementById("about");
const profileImageOverlay = document.querySelector(".profile__image-overlay")

const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/group-12", headers: {
        authorization: "cc8ab050-a9c0-4b6f-94ee-d21a7e05974a", "Content-Type": "application/json",
    },
});

const userInfo = new UserInfo({
    userNameSelector: ".profile__hero", userJobSelector: ".profile__role", avatarSelector: ".profile__avatar",
});


const editPopup = new PopupWithForm("#popup-edit", handleProfileFormSubmit, "Save");

const addCardPopup = new PopupWithForm("#popup-add", handleAddCardFormSubmit, "Create");

const imagePopup = new PopupWithImage("#popup-viewer");

const deletePopup = new PopupWithDeleting("#popup-delete");

const profileImagePopup = new PopupWithForm("#popup-profile-image", handleImageFormSubmit, "Save");

editPopup.setEventListeners();

addCardPopup.setEventListeners();

imagePopup.setEventListeners();

deletePopup.setEventListeners();

profileImagePopup.setEventListeners();

function handleProfileFormSubmit(dataUsers) {
    editPopup.showMessageLoading();
    api
        .editProfile(dataUsers)
        .then((res) => {
            userInfo.setUserInfo(res);
            editPopup.close();
        })
        .catch((err) => {
            console.log(`Error: ${err}`);
        })
        .finally(() => {
            editPopup.hideMessageLoading();
        });
}

function handleEditButton() {
    editPopup.open();
    const {name, about} = userInfo.getUserInfo();
    formElementEditValidator.resetWholeForm();
    nameInput.value = name;
    jobInput.value = about;

}

buttonEdit.addEventListener("click", handleEditButton);
export const formElementAddValidator = new FormValidator(settingsValidator, formElementAdd);
formElementAddValidator.enableValidation();

export const formElementEditValidator = new FormValidator(settingsValidator, formElementEdit);
formElementEditValidator.enableValidation();

export const formElementImageValidator = new FormValidator(settingsValidator, formElementImage);
formElementImageValidator.enableValidation();


function handleAddCardFormSubmit(dataImages) {
    addCardPopup.showMessageLoading();
    const data = {
        name: dataImages.title, link: dataImages['image-link'],
    };
    api
        .createCard(data)
        .then((res) => {
            cardList.addItem(res.name, res.link, res._id, res.owner._id, res.likes);
            addCardPopup.close();
        })
        .catch((err) => {
            console.log(`Error: ${err}`);
        })
        .finally(() => {
            addCardPopup.hideMessageLoading();
        });
}

function handleAddButton() {
    addCardPopup.open();
    formElementAddValidator.resetWholeForm();
}

buttonAdd.addEventListener("click", handleAddButton);

const cardList = new Section({
    renderer: (name, link, id, ownerId, likes) => {
        const card = new Card(name, link, id, ownerId, userId, likes, "#card", {
            handleCardClick: () => {
                imagePopup.open(name, link);
            }, handleDeleteCard: (id) => {
                deletePopup.open();
                deletePopup.setAction(() => {
                    deletePopup.showMessageLoading();
                    api
                        .deleteCard(id)
                        .then(() => {
                            card.removeCardFromDOM();
                            deletePopup.close();
                        })
                        .catch((err) => {
                            console.log(`Error: ${err}`);
                        })
                        .finally(() => {
                            deletePopup.hideMessageLoading();
                        });
                });
            }, handleLikeButton: (id) => {
                const isAlreadyLiked = card.isLiked();
                if (isAlreadyLiked) {
                    api
                        .unlikeCard(id)
                        .then((res) => {
                            card.handleLikeCard(res.likes);
                        })
                        .catch((err) => {
                            console.log(`Error: ${err}`);
                        });
                } else {
                    api
                        .likeCard(id)
                        .then((res) => {
                            card.handleLikeCard(res.likes);
                        })
                        .catch((err) => {
                            console.log(`Error: ${err}`);
                        });
                }
            },
        })
        return card.generateCard()
    }
}, ".elements__items");


let userId;
Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userData, cardData]) => {
        userId = userData._id;
        userInfo.setUserInfo({
            name: userData.name, about: userData.about,
        });
        userInfo.setAvatar({avatar: userData.avatar});
        cardList.renderItems(cardData.reverse());
    })
    .catch((err) => {
        console.log(`Error: ${err}`);
    });

function handleProfileImageClick() {
    profileImagePopup.open();
    formElementImageValidator.resetWholeForm();

}

profileImageOverlay.addEventListener("click", handleProfileImageClick);

function handleImageFormSubmit(userData) {
    profileImagePopup.showMessageLoading();
    api
        .editAvatar(userData)
        .then((res) => {
            userInfo.setAvatar(res);
            profileImagePopup.close();
        })
        .catch((err) => {
            console.log(`Error: ${err}`);
        })
        .finally(() => {
            profileImagePopup.hideMessageLoading();
        });
}