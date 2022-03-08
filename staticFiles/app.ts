import {Card} from "./card.js"
import {MainSection} from "./navSection.js"
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

export const project = document.querySelector("li")

project.addEventListener("click",()=>{
    MainSection.getBackHome()
    clickOnCard(cards[4])
})

function clickOnCard(card:Card){
    if(card.card.id==="4") MainSection.openAboutProject()  
     card.openCard()
}

function clickOnCloseButton(event:Event,card: Card){
    if(card.card.id==="4") MainSection.closeAboutProject()
    event.stopPropagation()
    card.closeCard()
}

const home = document.querySelectorAll("li")[1]

home.addEventListener("click",()=>MainSection.getBackHome())