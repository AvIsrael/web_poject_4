
const formWindowEdit = document.getElementById("popup-edit");
const formWindowAdd = document.getElementById("popup-add");
const formWindowViewer = document.getElementById("popup-viewer");

const btnEdit = document.querySelector(".profile__button-unusual");
const btnAdd = document.querySelector(".profile__button");

const currentName = document.querySelector(".profile__hero");
const currentRole = document.querySelector(".profile__role");

const formElementEdit = document.getElementById("formElementEdit");
const formElementAdd = document.getElementById("formElementAdd");

const nameInput = document.getElementById("name");
const jobInput = document.getElementById("about");
const titleInput = document.getElementById("title");
const imgInput = document.getElementById("image-link");
const viewPlaceName = formWindowViewer.querySelector(".popup__viewer-text");
const viewPlaceImg = formWindowViewer.querySelector(".popup__viewer-image");

const btnCancelEdit = formElementEdit.querySelector(".popup__button");
const btnCancelAdd = formWindowAdd.querySelector(".popup__button")
const btnCancelView = formWindowViewer.querySelector(".popup__button");

//Start of popup form for Edit btn
const handleProfileFormSubmit = (evt) => {
    evt.preventDefault();
    currentName.textContent = nameInput.value;
    currentRole.textContent = jobInput.value;
    formWindowEdit.classList.remove("popup_opened");
    }
formElementEdit.addEventListener('submit', handleProfileFormSubmit);

const setInitValueEdit = () => {
    formWindowEdit.classList.add("popup_opened");
    nameInput.value = currentName.textContent;
    jobInput.value = currentRole.textContent;
}

btnCancelEdit.addEventListener("click", () => {
   formWindowEdit.classList.remove("popup_opened");
});
btnEdit.addEventListener('click', setInitValueEdit);
//End of popup form for Edit btn

//Popup form for Add button
const handleProfileFormAdd = (evt) => {
    evt.preventDefault();
    addNewCard(titleInput.value, imgInput.value);
    formWindowAdd.classList.remove("popup_opened");
}
formElementAdd.addEventListener('submit', handleProfileFormAdd);

const setInitValueAdd = () => {
    formWindowAdd.classList.add("popup_opened");
    titleInput.value = "";
    imgInput.value = "";
}

btnCancelAdd.addEventListener('click', () =>{
    formWindowAdd.classList.remove("popup_opened");
});
btnAdd.addEventListener('click', setInitValueAdd);
//End of form Add button

//Popup Viewer
btnCancelView.addEventListener("click", () => {
    formWindowViewer.classList.remove("popup_opened");
});

const imageFullSize = (text, link) => {
    formWindowViewer.classList.add("popup_opened")
    viewPlaceName.innerText = text;
    viewPlaceImg.src = link;
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

const listElements = document.createElement("ul");
listElements.classList.add("elements__items");

const addNewCard = (name, link) => {
    const itemElement = document.createElement("li");
    itemElement.classList.add("elements__item");

    const imgElement = document.createElement("img");
    imgElement.classList.add("elements__grid-image");
    imgElement.src = link;
    itemElement.append(imgElement);
    imgElement.addEventListener('click', () => {
      imageFullSize(name, link);
    });

    const divElement = document.createElement("div");
    divElement.classList.add("elements__info");
    itemElement.append(divElement);

    const textElement = document.createElement("h2");
    textElement.classList.add("elements__description");
    const textInElement = document.createTextNode(name);
    textElement.append(textInElement);
    divElement.append(textElement);

    //Like button
    const btnElement = document.createElement("button");
    btnElement.classList.add("elements__button-heart");
    btnElement.type = `button`;
    btnElement.addEventListener('click', (evt) => {
        evt.target.classList.toggle("elements__button-heart_active");
    });
    divElement.append(btnElement);
    //Delete card button
    const delButton = document.createElement("button");
    delButton.classList.add("elements__button-delete");
    delButton.classList.add("button");
    delButton.type = `button`;
    delButton.addEventListener('click', (evt) => {
        const listItem = evt.target.closest(".elements__item");
        listItem.remove();
    });
    itemElement.append(delButton);
    listElements.append(itemElement);
}

//Creating content for each card
initialCards.forEach((item) => {
    addNewCard(item.name, item.link);
});
const sectionElements = document.querySelector(".elements");
sectionElements.append(listElements);
