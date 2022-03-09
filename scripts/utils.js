import {formElementEditValidator, formWindowEdit, formWindowViewer, viewPlaceName, viewPlaceImg,
    currentName, currentRole, nameInput, jobInput} from "./index.js";

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

export const openImagePreview = (text, link) => {
    openModalWindow(formWindowViewer);
    viewPlaceName.innerText = text;
    viewPlaceImg.src = link;
    viewPlaceImg.alt = `Photo of ${text}`;
}

const closeOverlay = (evt) => {
    if (evt.target.classList.contains('popup')) {
        closeModalWindow(evt.target);
    }
}

export const closeModalWindowByKey = (evt) => {
    if (evt.key === "Escape") {
        const popupOpened = document.querySelector(".popup_opened");
        closeModalWindow(popupOpened);
    }
}


export const handleProfileFormSubmit = (evt) => {
    evt.preventDefault();
    currentName.textContent = nameInput.value;
    currentRole.textContent = jobInput.value;
    closeModalWindow(formWindowEdit);
}

export const openEditProfilePopup = () => {
    formElementEditValidator.resetWholeForm();
    openModalWindow(formWindowEdit);
    nameInput.value = currentName.textContent;
    jobInput.value = currentRole.textContent;
}