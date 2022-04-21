import { cards } from "./app.js";
import { Ui } from "./ui.js";
export class NavSection extends Ui {
    static openAboutProject() {
        cards[4].card.classList.remove("NavSectionNone");
    }
    static closeAboutProject() {
        cards[4].card.classList.add("NavSectionNone");
    }
    static openInstallCard() {
        window.open("https://google.com", '_blank');
        Ui.setAllCardsToBack();
        cards[3].openCard();
    }
    static getBackHome() {
        Ui.setAllCardsToBack();
    }
}
//# sourceMappingURL=navSection.js.map