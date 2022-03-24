export default class Section {
    constructor({items, renderer}, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    addItem(name, link) {
        const card = this._renderer(name, link);
        this._container.prepend(card);
    }

    renderItems() {
        this._items.forEach((item) => {
            this.addItem(item.name, item.link);
        });
    }
}
