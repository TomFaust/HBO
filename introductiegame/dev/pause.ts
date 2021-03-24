class Pause{

    game = document.getElementsByTagName('game')[0]
    pauseTimer = new Timer()

    constructor(act: number,next: string){
        this.game.innerHTML = ''

        this.pauseTimer.startPause()
        
        let background = document.createElement('background')
        background.style.backgroundImage = "url(assets/PRODUCTION/PRODUCTION/ASSETS/pauze.jpg)"

        this.game.appendChild(background)

        let title = document.createElement('congratulations')
        let subTitle = document.createElement('akteGehaald')
        let message = document.createElement('pauseMessage')
        let nextButton = document.createElement('next')
        let extra = document.createElement('input')
        let extraText = document.createElement('extraText')

        title.innerHTML = new Languages()[localStorage.getItem('language')][60]

        subTitle.innerHTML = new Languages()[localStorage.getItem('language')][61]

        message.innerHTML = new Languages()[localStorage.getItem('language')][62] + (act + 1) 

        nextButton.innerHTML = new Languages()[localStorage.getItem('language')][63] + (act + 1)

        this.game.appendChild(title)
        title.appendChild(subTitle)
        this.game.appendChild(message)
        message.appendChild(nextButton)
        if (localStorage.getItem("korting") == null){
            if (localStorage.getItem('language') == 'dutch'){
                message.appendChild(extra)
            }
        }
        
        message.appendChild(extraText)

        extraText.style.width="auto"
        extraText.style.height="3.5vw"
        extraText.style.paddingTop="1vh"
        extraText.style.top = "14.5vw"
        extraText.style.position = "absolute"
        if (localStorage.getItem("korting") == null){
            extraText.innerHTML = "In het blad van Profielen zat een puzzel. Als je hier de oplossing invult krijgen jullie 20 minuten tijdwinst."
        }
        extra.style.width="15vw"
        extra.style.height="3.5vw"
        extra.style.paddingTop="1vh"
        extra.style.top = "20vw"
        extra.style.left = "9.5vw"
        extra.style.position = "absolute"
        extra.style.backgroundColor = "#ffffff"
        extra.style.fontSize = "1.5vw"
        extra.placeholder = "Antwoord"
        extra.style.borderRadius = "15px"
        extra.style.textAlign = "center"
        extra.id = "extra"
        extra.addEventListener("keyup",()=>{
            if((<HTMLInputElement>document.getElementById("extra")).value == "escapade"){
                new Timer().addBonus(300)
                extra.remove()
                localStorage.setItem("korting", "yes")
                extraText.innerHTML = ""
            }
        })
        
        setTimeout(() => {
            nextButton.style.filter = "grayscale(0%)"
            nextButton.style.cursor= "pointer"
            nextButton.addEventListener('click',() =>{
                this.pauseTimer.endPause()
                this.game.innerHTML = ''
                eval(`new ${next}()`);
            })
        }, 2000);

        


    }

}
