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
        this.description = this.card.querySelector(".description");
        this.title = this.card.querySelector("h2");
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
        this.toggleNoneStyle([this.button, this.description, this.title]);
    }
    generateUiForCloseCard() {
        Ui.removeHiddenCards(this.card);
        this.card.style.width = `${this.minWidth}%`;
        this.toggleNoneStyle([this.button, this.description, this.title]);
    }
    setupState() {
        if (this.currentSize === this.maxWidth)
            this.state["opened"] = true;
        else
            this.state["opened"] = false;
    }
    toggleNoneStyle(elements) {
        if (elements instanceof HTMLElement) {
            elements.classList.toggle("none");
        }
        else if (Array.isArray(elements)) {
            elements.forEach((element) => {
                element.classList.toggle("none");
            });
        }
    }
}
//# sourceMappingURL=card.js.map