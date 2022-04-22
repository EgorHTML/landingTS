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
    openCard(id) {
        if (this.state["opened"] === false) {
            if (id === "3") {
                window.open("https://google.com", "_blank");
            }
            else {
                this.currentSize = this.maxWidth;
                this.generateUiForOpenCard();
                this.setupState();
            }
        }
    }
    closeCard() {
        if (this.state["opened"] === true) {
            NavSection.closeAboutProject();
            this.currentSize = this.minWidth;
            this.generateUiForCloseCard();
            this.setupState();
        }
    }
    getState() {
        return this.state;
    }
    generateUiForOpenCard() {
        Ui.addHiddenCards(this.card);
        Ui.toggleNoneStyle([this.button, this.description, this.title]);
    }
    generateUiForCloseCard() {
        Ui.removeHiddenCards(this.card);
        Ui.toggleNoneStyle([this.button, this.description, this.title]);
    }
    setupState() {
        if (this.currentSize === this.maxWidth)
            this.state["opened"] = true;
        else
            this.state["opened"] = false;
    }
}
//# sourceMappingURL=card.js.map