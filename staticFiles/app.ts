import {Card} from "./card.js"

const nodeCards:NodeListOf<HTMLElement>= document.querySelectorAll(".card")

function getobjectCards():Card[]{
    const cards:Card[] = []
    for(let i = 0;i<nodeCards.length;i++){
        cards.push(new Card(nodeCards[i]))
    }
    return cards
}

export const cards = getobjectCards()

const closeButtons = document.querySelectorAll(".close")

for(let i = 0;i<nodeCards.length;i++){
    cards[i].card.addEventListener("click",()=>clickOnCard(cards[i]))
    closeButtons[i].addEventListener("click",(event)=>clickOnCloseButton(event,cards[i]))
}

function clickOnCard(card:Card){
    card.openCard()
}

function clickOnCloseButton(event:Event,card: Card){
    event.stopPropagation()
    card.closeCard()
}

