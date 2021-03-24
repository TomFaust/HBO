class popup{
    
    field : HTMLElement = document.createElement('popup')
    game = document.getElementsByTagName('game')[0]
    constructor(text: string, posX:number,posY:number,width:number){
        this.game.appendChild(this.field)
        this.field.innerText = text
        this.field.style.position = "absolute"
        this.field.style.overflow = "hidden"
        this.field.style.transform = "translate("+posX+"vw,"+posY+"vh)"
        this.field.style.width = width.toString() + "vw"
        this.field.style.height = "auto"
        this.field.style.borderRadius = "20px"
        this.field.style.backgroundColor = "#ffb911"
        this.field.style.fontSize = "1.2rem"
        this.field.style.zIndex = "2"
        this.field.style.padding = "0.5vw"
        this.field.style.boxShadow = "0.3vw 1vh"
        this.field.addEventListener("click",()=>{
            this.field.remove()
        })
    }
}