import { cards } from "./app.js";
export class Ui {
    static addHiddenCards(card) {
        this.addStyles(card, this.stylesForOpenCard);
        cards.forEach(cardObject => {
            if (cardObject.card.id != card.id) {
                cardObject.card.classList.add("noneCard");
            }
        });
    }
    static removeHiddenCards(card) {
        this.addStyles(card, this.stylesForCloseCard);
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
    static toggleNoneStyle(elements) {
        if (elements instanceof HTMLElement) {
            elements.classList.toggle("none");
        }
        else if (Array.isArray(elements)) {
            elements.forEach((element) => {
                element.classList.toggle("none");
            });
        }
    }
    static addStyles(card, styles) {
        for (const iterator in styles) {
            if (iterator.includes("animation")) {
                card.style.animation = styles[iterator];
            }
            else if (iterator.includes("position")) {
                card.style.position = styles[iterator];
            }
        }
    }
}
Ui.stylesForOpenCard = {
    position: "absolute",
    animation: "openCard 1s forwards"
};
Ui.stylesForCloseCard = {
    position: "static",
    animation: "closeCard 1s forwards"
};
//# sourceMappingURL=ui.js.map