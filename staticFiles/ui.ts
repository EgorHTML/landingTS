import {cards} from "./app.js"

type Style = {
    position?:string
    animation?:string
    animationDuration?:string
    animationFillMode?:string
}

export class Ui{
    protected static addHiddenCards(card:HTMLElement){
        addStyles(card,stylesForOpenCard)

        cards.forEach(cardObject=>{
            if(cardObject.card.id!=card.id){
            cardObject.card.classList.add("noneCard")
            }
        })
    }

    protected static removeHiddenCards(card:HTMLElement){
        addStyles(card,stylesForCloseCard)

        cards.forEach((element)=>{
            if(element.card.id!=card.id){
                element.card.classList.remove("noneCard")
                
            }
        })
    }

    protected static setAllCardsToBack(){
        cards.forEach((card)=>{
            if(card.getState().opened===true){
                card.closeCard()
            }
        })
    }
}

const stylesForOpenCard:Style = {
    position : "absolute",
    animation : "openCard 1s forwards"
}

const stylesForCloseCard:Style = {
    position : "static",
    animation : "closeCard 1s forwards"
}

function addStyles(card:HTMLElement, styles:Style){
    for (const iterator in styles) {
        if(iterator.includes("animation")){
            card.style.animation = styles[iterator]
        }else if(iterator.includes("position")){
            card.style.position = styles[iterator]
        }
    }
}
