import { Card } from "./card.js";
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
function clickOnCard(card) {
    card.openCard();
}
function clickOnCloseButton(event, card) {
    event.stopPropagation();
    card.closeCard();
}
//# sourceMappingURL=app.js.map