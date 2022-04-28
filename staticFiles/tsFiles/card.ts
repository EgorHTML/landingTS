import { NavSection } from "./navSection.js"
import {Ui} from "./ui.js"

type StateCard = {
    opened:boolean
}

export class Card extends Ui{
    readonly card:HTMLElement
    private readonly button:HTMLElement
    private description:HTMLElement
    private title:HTMLElement

    private state:StateCard = {opened:false}

    constructor(card:HTMLElement){
        super()
        this.card = card
        this.button = this.card.querySelector(".close")
        this.description = this.card.querySelector(".description")
        this.title = this.card.querySelector("h2")
    }
    
    public openCard(id?:string){
      if(this.state["opened"]===false){
        if(id==="3"){
            window.open("https://google.com","_blank")
        }else{
            this.generateUiForOpenCard()
            this.setupState()
        }
      }
    }

    public closeCard(){
        if(this.state["opened"]===true){
            NavSection.closeAboutProject()
            this.generateUiForCloseCard()
            this.setupState()
          }
    }

    get getState():StateCard{
        return this.state
    }

    private generateUiForOpenCard(){
        Ui.addHiddenCards(this.card)
        Ui.toggleNoneStyle([this.button,this.description,this.title])
    }

    private generateUiForCloseCard(){
        Ui.removeHiddenCards(this.card)
        Ui.toggleNoneStyle([this.button,this.description,this.title])
    }
    
    private setupState(){
        this.state["opened"] = !this.state["opened"]
    }  
}