class popupStory{
    
    bg : HTMLElement = document.createElement('popupbackground')
    field : HTMLElement = document.createElement('popup')
    game = document.getElementsByTagName('game')[0]
    constructor(text: string, posX:number,posY:number,width:number){
        this.game.appendChild(this.bg)
        this.game.appendChild(this.field)

        
        this.bg.style.position = "absolute"
        this.bg.style.backgroundColor = "black"
        this.bg.style.width = "100vw"
        this.bg.style.height = "100vh"
        this.bg.style.zIndex = "5"
        this.bg.style.opacity = "0.7"
        this.field.innerText = text
        this.field.style.position = "absolute"
        this.field.style.overflow = "hidden"
        this.field.style.transform = "translate("+posX+"vw,"+posY+"vh)"
        this.field.style.width = width.toString() + "vw"
        this.field.style.height = "auto"
        this.field.style.borderRadius = "20px"
        this.field.style.backgroundColor = "#ffb911"
        this.field.style.fontSize = "2vw"
        this.field.style.zIndex = "6"
        this.field.style.padding = "0.5vw"
        this.field.style.boxShadow = "0.3vw 1vh"
        this.field.addEventListener("click",()=>{
            this.field.remove()
            this.bg.remove()
        })
        this.bg.addEventListener("click",()=>{
            this.field.remove()
            this.bg.remove()
        })
    }
}