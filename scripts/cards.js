const initialCards = [
    {
        name: "Yosemite Valley",
        link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
        name: "Lake Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
        name: "Bald Mountains",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
        name: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
        name: "Vanoise National Park",
        link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
    },
    {
        name: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
];

const listElements = document.createElement("ul");
listElements.classList.add("elements__items");


initialCards.forEach((item) => {
    const itemElement = document.createElement("li");
    itemElement.classList.add("elements__item");

    const imgElement = document.createElement("img");
    imgElement.classList.add("elements__grid-image");
    imgElement.src = item.link;
    itemElement.append(imgElement);

    const divElement = document.createElement("div");
    divElement.classList.add("elements__info");
    itemElement.append(divElement);

    const textElement = document.createElement("h2");
    textElement.classList.add("elements__description");
    const textInElement = document.createTextNode(item.name);
    textElement.append(textInElement);
    divElement.append(textElement);

    const btnElement = document.createElement("button");
    btnElement.classList.add("elements__button-heart");
    btnElement.type = `button`;
    btnElement.addEventListener('click', (evt) => {
        evt.target.classList.toggle("elements__button-heart_active");
    });
    divElement.append(btnElement);

    const delButton = document.createElement("button");
    delButton.classList.add("elements__button-delete");
    delButton.classList.add("button");
    delButton.type = `button`;
    delButton.addEventListener('click', (evt) => {
        const listItem = evt.target.closest(".elements__item");
        listItem.remove();
    });
    itemElement.append(delButton);


    listElements.append(itemElement);
});
const sectionElements = document.querySelector(".elements");
sectionElements.append(listElements);
console.log(listElements);