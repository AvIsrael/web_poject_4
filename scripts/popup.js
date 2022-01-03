let btnEdit = document.querySelector(".profile__button-unusual")
let popUp = document.querySelector(".popup");
let btnCancel = document.querySelector(".popup__button");
let currentName = document.querySelector(".profile__hero");
let currentRole = document.querySelector(".profile__role");
let formElement = document.querySelector("#formElement");

    function handleProfileFormSubmit(evt) {
        evt.preventDefault();
            let nameInput = document.querySelector("#name");
            let jobInput = document.querySelector("#about");
        currentName.textContent = nameInput.value;
        currentRole.textContent = jobInput.value;
        popUp.classList.remove("popup_opened");
    }

formElement.addEventListener('submit', handleProfileFormSubmit);
function setInitValue() {
    popUp.classList.add("popup_opened");
    let nameInput = document.querySelector("#name");
    let jobInput = document.querySelector("#about");
    nameInput.value = currentName.textContent;
    jobInput.value = currentRole.textContent;
}

btnCancel.addEventListener("click", () => {
    popUp.classList.remove("popup_opened");
})

btnEdit.addEventListener('click', setInitValue);