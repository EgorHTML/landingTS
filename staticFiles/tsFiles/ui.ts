import {cards} from "./app.js"

type Style = {
    position?:string
    animation?:string
    animationDuration?:string
    animationFillMode?:string,
    animationDelay?:string
}

export class Ui{
    static textAdd:Style = {
        animation:"fromZeroOpacityToFull 2.5s forwards",
    }
    
    
    static stylesForOpenCard:Style = {
        position : "absolute",
        animation : "openCard 1s forwards"
    }

    static stylesForCloseCard:Style = {
        position : "static",
        animation : "closeCard 1s forwards"
        
    }

    protected static addHiddenCards(card:HTMLElement){
        this.addStyles(card,this.stylesForOpenCard)
        this.addStyles(card.querySelector(".text"),this.textAdd)

        cards.forEach(cardObject=>{
            if(cardObject.card.id!=card.id){
            cardObject.card.classList.add("noneCard")
            }
        })
    }

    protected static removeHiddenCards(card:HTMLElement){
        this.addStyles(card,this.stylesForCloseCard)

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

    protected static toggleNoneStyle(elements:HTMLElement|HTMLElement[]){
        if(elements instanceof HTMLElement){
            elements.classList.toggle("none")
        }else if(Array.isArray(elements)){
            elements.forEach((element)=>{
                element.classList.toggle("none")
            })
        }
    }

    protected static addStyles(card:HTMLElement, styles:Style){
        for (const iterator in styles) {
            if(iterator.includes("animation")){
                card.style.animation = styles[iterator]
            }else if(iterator.includes("position")){
                card.style.position = styles[iterator]
            }else if(iterator.includes("Delay")){
                card.style.animationDelay = styles[iterator]
            }
        }
    }
}



 

