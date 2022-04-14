import { NavSection } from "./navSection.js"
import {Ui} from "./ui.js"

type StateCard = {
    opened:boolean
}

export class Card extends Ui{
    readonly card:HTMLElement
    private readonly button:HTMLElement

    private state:StateCard = {opened:false}

    private readonly minWidth:number = 35
    private readonly maxWidth:number = 90
    private currentSize = this.minWidth
    

    constructor(card:HTMLElement){
        super()
        this.card = card
        this.button = this.card.querySelector(".close")
    }
    
    public openCard(){
      if(this.state["opened"]===false){
        this.currentSize = this.maxWidth
        this.generateUiForOpenCard()
        this.setupState()
      }
    }

    public closeCard(){
        if(this.state["opened"]===true){
            NavSection.closeAboutProject()
            this.currentSize = this.minWidth
            this.setupState()
            this.generateUiForCloseCard()
          }
    }

    public getState():StateCard{
        return this.state
    }


    private generateUiForOpenCard(){
        Ui.addHiddenCards(this.card)
        this.card.style.width = `${this.maxWidth}%`
        this.button.classList.remove("none")
    }

    private generateUiForCloseCard(){
        Ui.removeHiddenCards(this.card)
        this.card.style.width = `${this.minWidth}%`
        this.button.classList.add("none")
    }
    
    private setupState(){
        if(this.currentSize===this.maxWidth) this.state["opened"] = true
        else this.state["opened"] = false 
    }  
}