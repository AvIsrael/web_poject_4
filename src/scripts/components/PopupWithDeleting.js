import Popup from "./Popup.js";

export class PopupWithDeleting extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._inputSubmit = this._popupElement.querySelector(".popup__button-sbmt");
    }

    setAction(action) {
        this._handleSubmit = action;
    }

    setEventListeners() {
        this._popupElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleSubmit();
        });
    }

    showMessageLoading() {
        this._inputSubmit.value = "Saving...";
    }

    hideMessageLoading() {
        this._inputSubmit.value = "Saved";
    }
}