//Opening popup
export const openModalWindow = (modalWindow) => {
    modalWindow.classList.add("popup_opened");
    document.addEventListener("keydown", closeModalWindowByKey);
    document.addEventListener('mousedown', closeOverlay);
}

export const closeModalWindow = (modalWindow) => {
    modalWindow.classList.remove("popup_opened");
    document.removeEventListener("keydown", closeModalWindowByKey);
    document.removeEventListener('mousedown', closeOverlay);
}

const closeOverlay = (evt) => {
    if (evt.target.classList.contains('popup')) {
        closeModalWindow(evt.target);
    }
}

function closeModalWindowByKey(evt) {
    if (evt.key === "Escape") {
        const popupOpened = document.querySelector(".popup_opened");
        closeModalWindow(popupOpened);
    }
}