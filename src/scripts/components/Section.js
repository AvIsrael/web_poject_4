export default class Section {
    constructor({items, renderer}, containerSelector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    addItem(name, link) {
        console.log(name, link);
        const card = this._renderer(name, link);
        this._container.append(card);
    }

    renderItems() {
        this._renderedItems.forEach((item) => {
            this.addItem(item.name, item.link);
        });
    }
}
