import { cards } from "./app.js";
import { Ui } from "./ui.js";
export class MainSection extends Ui {
    static openAboutProject() {
        cards[4].card.classList.remove("MainSectionNone");
    }
    static closeAboutProject() {
        cards[4].card.classList.add("MainSectionNone");
    }
    static getBackHome() {
        Ui.setAllCardsToBack();
    }
}
//# sourceMappingURL=navSection.js.map