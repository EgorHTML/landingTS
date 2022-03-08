import {cards} from "./app.js"
export class Ui{
    static addHiddenCards(card){
        cards.forEach((element)=>{
            if(element.card.id!=card.id){
                element.card.classList.add("none")
            }
        })
    }

    static removeHiddenCards(card){
        cards.forEach((element)=>{
            if(element.card.id!=card.id){
                element.card.classList.remove("none")
            }
        })
    }
}