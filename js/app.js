import { Card } from "./card.js";
import { NavSection } from "./navSection.js";
const nodeCards = document.querySelectorAll(".card");
function getobjectCards() {
    const cards = [];
    for (let i = 0; i < nodeCards.length; i++) {
        cards.push(new Card(nodeCards[i]));
    }
    return cards;
}
export const cards = getobjectCards();
const closeButtons = document.querySelectorAll(".close");
for (let i = 0; i < nodeCards.length; i++) {
    cards[i].card.addEventListener("click", () => clickOnCard(cards[i]));
    closeButtons[i].addEventListener("click", (event) => clickOnCloseButton(event, cards[i]));
}
const project = document.querySelector("[data-nav=Project]");
project.addEventListener("click", () => {
    NavSection.getBackHome();
    clickOnCard(cards[4]);
});
function clickOnCard(card) {
    const id = card.card.id;
    if (id === "4")
        NavSection.openAboutProject();
    card.openCard(id);
}
function clickOnCloseButton(event, card) {
    if (card.card.id === "4")
        NavSection.closeAboutProject();
    event.stopPropagation();
    card.closeCard();
}
const home = document.querySelector("[data-nav=Home]");
home.addEventListener("click", () => NavSection.getBackHome());
const installSection = document.querySelector("[data-nav=install]");
installSection.addEventListener("click", NavSection.openInstallCard);
//# sourceMappingURL=app.js.map