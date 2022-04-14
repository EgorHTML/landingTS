import { cards } from "./app.js";
export class Ui {
    static addHiddenCards(card) {
        addStyles(card, stylesForOpenCard);
        cards.forEach(cardObject => {
            if (cardObject.card.id != card.id) {
                cardObject.card.classList.add("noneCard");
            }
        });
    }
    static removeHiddenCards(card) {
        addStyles(card, stylesForCloseCard);
        cards.forEach((element) => {
            if (element.card.id != card.id) {
                element.card.classList.remove("noneCard");
            }
        });
    }
    static setAllCardsToBack() {
        cards.forEach((card) => {
            if (card.getState().opened === true) {
                card.closeCard();
            }
        });
    }
}
const stylesForOpenCard = {
    position: "absolute",
    animation: "openCard 1s forwards"
};
const stylesForCloseCard = {
    position: "static",
    animation: "closeCard 1s forwards"
};
function addStyles(card, styles) {
    for (const iterator in styles) {
        if (iterator.includes("animation")) {
            card.style.animation = styles[iterator];
        }
        else if (iterator.includes("position")) {
            card.style.position = styles[iterator];
        }
    }
}
//# sourceMappingURL=ui.js.map