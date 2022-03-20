import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(modalWindow, handleFormSubmit) {
        super(modalWindow);
        this._handleFormSubmit = handleFormSubmit;
        this._popupForm = this._popupElement.querySelector(".popup__form");
        this._inputs = Array.from(
            this._popupForm.querySelectorAll(".popup__item")
        );
    }

    _getInputValues() {
        const inputValues = {};
        this._inputs.forEach((input) => {
            inputValues[input.name] = input.value;
        });
        return inputValues;
    }

    close() {
        super.close();
        this._popupForm.reset();
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener("submit", () =>
            this._handleFormSubmit(this._getInputValues())
        );
    }
}