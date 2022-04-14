import { NavSection } from "./navSection.js";
import { Ui } from "./ui.js";
export class Card extends Ui {
    constructor(card) {
        super();
        this.state = { opened: false };
        this.minWidth = 35;
        this.maxWidth = 90;
        this.currentSize = this.minWidth;
        this.card = card;
        this.button = this.card.querySelector(".close");
    }
    openCard() {
        if (this.state["opened"] === false) {
            this.currentSize = this.maxWidth;
            this.generateUiForOpenCard();
            this.setupState();
        }
    }
    closeCard() {
        if (this.state["opened"] === true) {
            NavSection.closeAboutProject();
            this.currentSize = this.minWidth;
            this.setupState();
            this.generateUiForCloseCard();
        }
    }
    getState() {
        return this.state;
    }
    generateUiForOpenCard() {
        Ui.addHiddenCards(this.card);
        this.card.style.width = `${this.maxWidth}%`;
        this.button.classList.remove("none");
    }
    generateUiForCloseCard() {
        Ui.removeHiddenCards(this.card);
        this.card.style.width = `${this.minWidth}%`;
        this.button.classList.add("none");
    }
    setupState() {
        if (this.currentSize === this.maxWidth)
            this.state["opened"] = true;
        else
            this.state["opened"] = false;
    }
}
//# sourceMappingURL=card.js.map