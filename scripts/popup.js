let btnEdit = document.querySelector(".profile__button-unusual")
let popUp = document.querySelector(".popup");
btnEdit.addEventListener("click", () => {
    popUp.classList.add("popup_opened");
})

let btnCancel = document.querySelector(".popup__button")
 btnCancel.addEventListener("click", () => {
     popUp.classList.remove("popup_opened");
})

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



btnEdit.addEventListener('click', setInitValue);
function setInitValue() {
    let nameInput = document.querySelector("#name");
    let jobInput = document.querySelector("#about");
    nameInput.value = currentName.textContent;
    jobInput.value = currentRole.textContent;
}
