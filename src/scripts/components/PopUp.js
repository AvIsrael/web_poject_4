export default class Popup {
    constructor(modalWindow) {
        this._popupElement = document.querySelector(modalWindow);
    }

    open() {
        this._popupElement.classList.add("popup_opened");
        document.addEventListener("keydown", this._handleEscClose);
    }

    close() {
        this._popupElement.classList.remove("popup_opened");
        document.removeEventListener("keydown", this._handleEscClose);
    }

    _handleEscClose = (evt) => {
        if (evt.key === "Escape") {
            this.close();
        }
    };
//TODO move eventlistener to popup open & close and fix handle submit
    setEventListeners() {
        this._popupElement.addEventListener("mousedown", (evt) => {
            if (
                evt.target.classList.contains("popup_opened") ||
                evt.target.classList.contains("popup__button")
            ) {
                this.close();
            }
        });
    }
}
