//Opening popup
export const openModalWindow = (modalWindow) => {
    modalWindow.classList.add("popup_opened");
    document.addEventListener("keydown", closeModalWindowByKey);
}

export const closeModalWindow = (modalWindow) => {
    modalWindow.classList.remove("popup_opened");
    document.removeEventListener("keydown", closeModalWindowByKey);
}

function closeModalWindowByKey(evt) {
    if (evt.key === "Escape") {
        const popupOpened = document.querySelector(".popup_opened");
        closeModalWindow(popupOpened);
    }
}