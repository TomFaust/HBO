class StartScreem{

    game = document.getElementsByTagName('game')[0] as HTMLElement
    background = document.createElement('background')

    constructor(){
        if(!localStorage.getItem('language')){
            localStorage.setItem('language','dutch')
        }

        this.background.style.backgroundImage = "url(assets/startScreen.png)"
        this.game.appendChild(this.background)

        let start = document.createElement('startgame')
        this.game.appendChild(start)
        let text = document.createElement("text")
        this.game.appendChild(text)
        text.innerHTML = "HR INTROGAME"
        text.style.transform = `translate(40vw, 80vh)`
        text.style.color = `white`
        text.style.position = `absolute`
        text.style.fontSize = `5vmin`

        let text2 = document.createElement("text")
        this.game.appendChild(text2)

        if(localStorage.getItem('language') == 'dutch'){
            text2.style.transform = `translate(41vw, 85.5vh)`
        }
        else{
            text2.style.transform = `translate(41vw, 85.5vh)`
        }
        text2.style.color = `white`
        text2.style.position = `absolute`
        text2.style.fontSize = `2.5vmin`
        text2.innerHTML = new Languages()[localStorage.getItem('language')][77]

        start.addEventListener('click',()=>{
            this.game.innerHTML = ""
            new Info()
        })
    }

}

window.addEventListener('load',() => new StartScreem())