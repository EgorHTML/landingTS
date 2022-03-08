import {cards} from "./app.js"


export class Ui{
    protected static addHiddenCards(card){
        cards.forEach((element)=>{
            if(element.card.id!=card.id){
                element.card.classList.add("none")
            }
        })
    }

    protected static removeHiddenCards(card){
        cards.forEach((element)=>{
            if(element.card.id!=card.id){
                element.card.classList.remove("none")
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

