

const btnEdit = document.querySelector(".profile__button-unusual")
const popUp = document.querySelector(".popup");
const btnCancel = document.querySelector(".popup__button");
const currentName = document.querySelector(".profile__hero");
const currentRole = document.querySelector(".profile__role");
const formElement = document.querySelector("#formElement");
const btnAdd = document.querySelector(".profile__button");
const firstInput = document.querySelector("#input1");
const secondInput = document.querySelector("#input2");
const nameHeading = document.querySelector(".popup__title");
let windowType;

function handleProfileFormSubmit(evt) {
        evt.preventDefault();
        if (windowType) {
            createNewCards();
        } else {
            currentName.textContent = firstInput.value;
            currentRole.textContent = secondInput.value;
        }
        popUp.classList.remove("popup_opened");
    }

formElement.addEventListener('submit', handleProfileFormSubmit);
function setInitValue() {
    console.log(windowType);
    popUp.classList.add("popup_opened");
    if (windowType) {
        createFormCards();
    } else {
        editName();
    }
}

function editName() {
    firstInput.value = currentName.textContent;
    secondInput.value = currentRole.textContent;
    nameHeading.textContent = "Edit profile";
}

function createNewCards() {
    console.log(firstInput.value, secondInput.value);
}

function createFormCards() {
    firstInput.value = "";
    secondInput.value = "";
    nameHeading.textContent = "New place";
    firstInput.placeholder = "Title";
    secondInput.placeholder = "Image link";

}


btnCancel.addEventListener("click", () => {
    popUp.classList.remove("popup_opened");
})

btnEdit.addEventListener('click', () => {
    windowType = 0;
    setInitValue()});
btnAdd.addEventListener('click', () => {
    windowType = 1;
    setInitValue()});

