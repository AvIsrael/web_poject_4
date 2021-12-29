let btnEdit = document.querySelector(".profile__button-unusual")
let popUp = document.querySelector(".popup");
btnEdit.addEventListener("click", () => {
    popUp.classList.add("popup_opened");
})




let btnCancel = document.querySelector(".popup__button")
 btnCancel.addEventListener("click", () => {
     popUp.classList.remove("popup_opened");
})
