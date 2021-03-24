class hint{
    game = document.getElementsByTagName('game')[0]

    hint1: HTMLElement = document.createElement("hinticon")
    hint2: HTMLElement = document.createElement("hinticon")
    hint3: HTMLElement = document.createElement("hinticon")
    hint4: HTMLElement = document.createElement("hinticon")
    
    hintbox1 : HTMLElement = document.createElement("hintbox")
    hintbox2 : HTMLElement = document.createElement("hintbox")
    hintbox3 : HTMLElement = document.createElement("hintbox")
    hintbox4 : HTMLElement = document.createElement("hintbox")

    text1:HTMLElement = document.createElement("text")
    text2:HTMLElement = document.createElement("text")
    text3:HTMLElement = document.createElement("text")
    text4:HTMLElement = document.createElement("text")
    
    constructor(){
        this.game.appendChild(this.text1)
        this.game.appendChild(this.text2)
        this.game.appendChild(this.text3)
        this.game.appendChild(this.text4)

        this.text1.style.position = `absolute`
        this.text2.style.position = `absolute`
        this.text3.style.position = `absolute`
        this.text4.style.position = `absolute`

        this.text1.innerHTML = `Hint1`
        this.text2.innerHTML = `Hint2`
        this.text3.innerHTML = `Hint3`
        this.text4.innerHTML = `Hint4`

        this.text1.style.transform = `translateX(2.5vw)`
        this.text2.style.transform = `translateX(10vw)`
        this.text3.style.transform = `translateX(17.5vw)`
        this.text4.style.transform = `translateX(25vw)`

        this.game.appendChild(this.hint1)
        this.game.appendChild(this.hint2)
        this.game.appendChild(this.hint3)
        this.game.appendChild(this.hint4)

        this.game.appendChild(this.hintbox1)
        this.game.appendChild(this.hintbox2)
        this.game.appendChild(this.hintbox3)
        this.game.appendChild(this.hintbox4)


        this.hint1.style.width = "7vw"
        this.hint1.style.height = "7vh"

        this.hintbox1.style.width = "7vw"
        this.hintbox1.style.height = "7vh"

        this.hint1.addEventListener("click",()=>{
           
            new popup(new Languages()[localStorage.getItem('language')][53],20,45,20)
            this.hint1.remove()            
        })

        
        this.hintbox1.addEventListener("click",()=>{
            new popup(new Languages()[localStorage.getItem('language')][54],0,7,20)
            this.hintbox1.remove()
            this.hint1.style.backgroundImage = 'url(assets/Akte2/envelope_open.png)'
            this.text1.remove()
        })

        this.hint2.style.width = "7vw"
        this.hint2.style.height = "7vh"
        this.hint2.style.transform = "translateX(7.5vw)"

        this.hintbox2.style.width = "7vw"
        this.hintbox2.style.height = "7vh"
        this.hintbox2.style.transform = "translateX(7.5vw)"

        this.hint2.addEventListener("click",()=>{
           
            new popup(new Languages()[localStorage.getItem('language')][55],59,45,20)
            this.hint2.remove()
        })

        this.hintbox2.addEventListener("click",()=>{
            new popup(new Languages()[localStorage.getItem('language')][56],7,7,20)
            this.hintbox2.remove()
            this.hint2.style.backgroundImage = 'url(assets/Akte2/envelope_open.png)'
            this.text2.remove()
        })

        this.hint3.style.width = "7vw"
        this.hint3.style.height = "7vh"
        this.hint3.style.transform = "translateX(15vw)"

        this.hintbox3.style.width = "7vw"
        this.hintbox3.style.height = "7vh"
        this.hintbox3.style.transform = "translateX(15vw)"

        this.hint3.addEventListener("click",()=>{
           
            new popup(new Languages()[localStorage.getItem('language')][57],82,45,15)
            this.hint3.remove()
        })
        
        this.hintbox3.addEventListener("click",()=>{
            new popup(new Languages()[localStorage.getItem('language')][58],14,7,20)
            this.hintbox3.remove()
            this.hint3.style.backgroundImage = 'url(assets/Akte2/envelope_open.png)'
            this.text3.remove()
        })

        this.hint4.style.width = "7vw"
        this.hint4.style.height = "7vh"
        this.hint4.style.transform = "translateX(22.5vw)"

        this.hintbox4.style.width = "7vw"
        this.hintbox4.style.height = "7vh"
        this.hintbox4.style.transform = "translateX(22.5vw)"

        this.hint4.addEventListener("click",()=>{
            
            new popup(new Languages()[localStorage.getItem('language')][66],28,90,44)
            this.hint4.remove()
        })
        
        this.hintbox4.addEventListener("click",()=>{
            new popup(new Languages()[localStorage.getItem('language')][67],21,7,20)
            this.hintbox4.remove()
            this.hint4.style.backgroundImage = 'url(assets/Akte2/envelope_open.png)'
            this.text4.remove()
        })
        
    }
}