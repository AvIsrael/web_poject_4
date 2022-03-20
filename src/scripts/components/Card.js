export default class Card {
    constructor(name, link, cardSelector, handleCardClick) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content.querySelector(".elements__item")
            .cloneNode(true);
        return cardElement;
    }

    _setEventListeners() {
        this._element
            .querySelector(".elements__button-delete")
            .addEventListener("click", this._handleDeleteButton);
        this._element
            .querySelector(".elements__button-heart")
            .addEventListener("click", this._handleLikeButton);
        this._element
            .querySelector(".elements__grid-image")
            .addEventListener("click", () =>
                this._handleCardClick({name: this._name, src: this._link})
            );
    }

    _handleDeleteButton = () => {
        this._element.remove();
        this._element = null;
    };

    _handleLikeButton = () => {
        this._element
            .querySelector(".elements__button-heart")
            .classList.toggle("elements__button-heart_active");
    };

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        const cardImage = this._element.querySelector(".elements__grid-image");
        const cardName = this._element.querySelector(".elements__description");
        cardImage.src = this._link;
        cardImage.alt = `Photo of ${this._name}`;
        cardName.textContent = this._name;
        return this._element;
    }

}