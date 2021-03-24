class Game{

    constructor(){
        let game = document.getElementsByTagName("game")[0]
        let button1 = document.createElement("button")
        game.appendChild(button1)
        button1.style.width = `10vw`
        button1.style.height = `10vh`
        button1.style.transform = `translate(90vw, 10vh)`
        button1.innerHTML = `act2`
        button1.onclick = this.buttonPress1

        let button2 = document.createElement("button")
        game.appendChild(button2)
        button2.style.width = `10vw`
        button2.style.height = `10vh`
        button2.style.transform = `translate(90vw, 25vh)`
        button2.innerHTML = `gert`
        button2.onclick = this.buttonPress2


        let button4 = document.createElement("button")
        game.appendChild(button4)
        button4.style.width = `10vw`
        button4.style.height = `10vh`
        button4.style.transform = `translate(80vw, 50vh)`
        button4.innerHTML = `luuk`
        button4.onclick = this.buttonPress4

        let button5 = document.createElement("button")
        game.appendChild(button5)
        button5.style.width = `10vw`
        button5.style.height = `10vh`
        button5.style.transform = `translate(90vw, 50vh)`
        button5.innerHTML = `luuk eind`
        button5.onclick = this.buttonPress5
    }

    buttonPress1(){
        document.getElementsByTagName("game")[0].innerHTML = ""
        new Act3()
        
    }
    buttonPress2(){
        document.getElementsByTagName("game")[0].innerHTML = ""
        new tobuilding()
    }

    buttonPress4(){
        document.getElementsByTagName("game")[0].innerHTML = ""
        new EnterBuilding()
    }

    buttonPress5(){
        document.getElementsByTagName("game")[0].innerHTML = ""
        new Ending()
    }

    
}

//window.addEventListener("load", () => new Game())
