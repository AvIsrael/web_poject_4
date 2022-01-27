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
const cardContainer = document.querySelector(".elements__items");

//Opening popup
const openModalWindow = (modalWindow) => {
    modalWindow.classList.add("popup_opened");
}
//Closing popup
const closeModalWindow = (modalWindow) => {
    modalWindow.classList.remove("popup_opened");
}

const handleProfileFormSubmit = (evt) => {
    evt.preventDefault();
    currentName.textContent = nameInput.value;
    currentRole.textContent = jobInput.value;
    closeModalWindow(formWindowEdit);
}
formElementEdit.addEventListener('submit', handleProfileFormSubmit);

const openEditProfilePopup = () => {
    openModalWindow(formWindowEdit);
    nameInput.value = currentName.textContent;
    jobInput.value = currentRole.textContent;
}

buttonCancelEdit.addEventListener("click", () => {
    formWindowEdit.classList.remove("popup_opened");
});
buttonEdit.addEventListener('click', openEditProfilePopup);

//Popup form for Add button
const handleProfileFormAdd = (evt) => {
    evt.preventDefault();
    closeModalWindow(formWindowAdd);
    cardContainer.append(createNewCard(titleInput.value, imageInput.value));
}
formElementAdd.addEventListener('submit', handleProfileFormAdd);

const openAddCardPopup = () => {
    openModalWindow(formWindowAdd);
    formElementAdd.reset();
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
    viewPlaceImg.alt = text;
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
    const cloneCard = cardTemplate.cloneNode(true);
    const imageSource = cloneCard.querySelector(".elements__grid-image");
    imageSource.src = link;
    imageSource.alt = name;
    imageSource.addEventListener('click', () => {
        openImagePreview(name, link);
    });
    const cardTitle = cloneCard.querySelector(".elements__description");
    cardTitle.textContent = name;
    const deleteButton = cloneCard.querySelector(".elements__button-delete");
    deleteButton.addEventListener('click', (evt) => {
        const listItem = evt.target.closest(".elements__item");
        listItem.remove();
    });
    const likeButton = cloneCard.querySelector(".elements__button-heart");
    likeButton.addEventListener('click', (evt) => {
        evt.target.classList.toggle("elements__button-heart_active");
    });
    return cloneCard;
}
const cardGridAmount = () => {
    initialCards.forEach((item) => {
        cardContainer.append(createNewCard(item.name, item.link));
    });
}
cardGridAmount();