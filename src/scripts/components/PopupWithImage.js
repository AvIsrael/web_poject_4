import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(modalWindow) {
        super(modalWindow);
        this._imageZoom = this._popupElement.querySelector(".popup__viewer-image");
        this._imageZoomTitle = this._popupElement.querySelector(".popup__viewer-text");
    }

    open(name, link) {
        super.open();
        this._imageZoom.src = link;
        this._imageZoom.alt = `Photo of ${name}`;
        this._imageZoomTitle.textContent = name;
    }
}