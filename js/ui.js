import { cards } from "./app.js";
export class Ui {
    static addHiddenCards(card) {
        cards.forEach((element) => {
            if (element.card.id != card.id) {
                element.card.classList.add("none");
            }
        });
    }
    static removeHiddenCards(card) {
        cards.forEach((element) => {
            if (element.card.id != card.id) {
                element.card.classList.remove("none");
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
//# sourceMappingURL=ui.js.map