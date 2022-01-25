//for edit form
const btnEdit = document.querySelector(".profile__button-unusual");
const index = document.querySelector(".popup");
const currentName = document.querySelector(".profile__hero");
const currentRole = document.querySelector(".profile__role");
const formElement = document.querySelector("#formElement");
const nameInput = document.querySelector("#name");
const jobInput = document.querySelector("#about");
const btnCancel = document.querySelector(".popup__button");
const docBody = document.querySelector(".wrapper")

//Start of popup form for Edit btn
    function handleProfileFormSubmit(evt) {
        evt.preventDefault();
        currentName.textContent = nameInput.value;
        currentRole.textContent = jobInput.value;
        index.classList.remove("popup_opened");
    }

formElement.addEventListener('submit', handleProfileFormSubmit);
function setInitValue() {
    index.classList.add("popup_opened");
    nameInput.value = currentName.textContent;
    jobInput.value = currentRole.textContent;
}

btnCancel.addEventListener("click", () => {
    const index = document.querySelector(".popup");
    index.classList.remove("popup_opened");
});

btnEdit.addEventListener('click', setInitValue);
//End of popup form for Edit btn


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

//Creating content for each card
initialCards.forEach((item) => {
    const itemElement = document.createElement("li");
    itemElement.classList.add("elements__item");

    const imgElement = document.createElement("img");
    imgElement.classList.add("elements__grid-image");
    imgElement.src = item.link;
    itemElement.append(imgElement);

    const divElement = document.createElement("div");
    divElement.classList.add("elements__info");
    itemElement.append(divElement);

    const textElement = document.createElement("h2");
    textElement.classList.add("elements__description");
    const textInElement = document.createTextNode(item.name);
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
});
const sectionElements = document.querySelector(".elements");
sectionElements.append(listElements);

//Creating popup form and add
function addNewCard() {
    const formAdd = index.cloneNode(true);
    index.remove();
    formAdd.classList.add("popup_opened");
    docBody.append(formAdd);
    nameInput.value = "";
    jobInput.value = "";
    nameInput.placeholder = "Title";
    jobInput.placeholder = "Image link";
    changeFormValues("Add card");
}
const btnAdd = document.querySelector(".profile__button");
btnAdd.addEventListener('click', addNewCard);


function changeFormValues(header) {
    const popupHeader = document.querySelector(".popup__title");
    console.log(popupHeader);
    popupHeader.textContent = header;
}