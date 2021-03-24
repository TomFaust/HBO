class Info{

    constructor(){
        this.makeTexts()
        this.makeButtons()
        this.makeBackground()
    }

    makeBackground(){
        let game = document.getElementsByTagName("game")[0]
        let bg = document.createElement("bg")
        game.appendChild(bg)
        bg.style.backgroundImage = `url(assets/Akte3/Binnenrotte.jpg)`
        bg.style.backgroundRepeat = `no-repeat`
        bg.style.backgroundSize = `100% 100%`
        bg.style.position = `absolute`
        bg.style.width = `100vw`
        bg.style.height = `100vh`
        bg.style.zIndex = `-1`
    }

    makeTexts(){
        let game = document.getElementsByTagName("game")[0]
        let text1 = document.createElement("text")
        let text2 = document.createElement("text")
        game.appendChild(text1)
        game.appendChild(text2)

        let heading1 = document.createElement("text")
        let heading2 = document.createElement("text")

        game.appendChild(heading1)
        game.appendChild(heading2)

        heading1.innerHTML = `Welkom`
        heading2.innerHTML = `Welcome`

        heading1.style.position = `absolute`
        heading2.style.position = `absolute`
        heading1.style.width = `auto`
        heading2.style.width = `auto`
        heading1.style.transform = `translate(8vw, 5vh)`
        heading2.style.transform = `translate(58vw, 5vh)`

        heading1.style.fontSize = `5vh`
        heading2.style.fontSize = `5vh`

        heading1.style.width = `30vw`
        heading2.style.width = `30vw`
        heading1.style.textAlign = `center`
        heading2.style.textAlign = `center`

        heading1.style.backgroundColor = `#ffb911`
        heading2.style.backgroundColor = `#ffb911`
        heading1.style.borderRadius = `20px`
        heading2.style.borderRadius = `20px`

        heading1.style.padding = `2vh 2vw 2vh 2vw`
        heading2.style.padding = `2vh 2vw 2vh 2vw`
        

        text1.innerHTML = new Languages()["dutch"][80]
        text2.innerHTML = new Languages()["english"][80]

        text1.style.position = `absolute`
        text2.style.position = `absolute`

        text1.style.width = `40vw`
        text2.style.width = `40vw`
        text1.style.height = `auto`
        text2.style.height = `auto`

        text1.style.fontSize = `3.5vh`
        text2.style.fontSize = `3.5vh`

        text1.style.transform = `translate(3vw, 16vh)`
        text2.style.transform = `translate(53vw, 16vh)`

        text1.style.backgroundColor = `#ffb911`
        text2.style.backgroundColor = `#ffb911`
        text1.style.borderRadius = `20px`
        text2.style.borderRadius = `20px`

        text1.style.padding = `2vh 2vw 2vh 2vw`
        text2.style.padding = `2vh 2vw 2vh 2vw`

    }

    makeButtons(){
        let game = document.getElementsByTagName("game")[0]
        let dutch = document.createElement("button")
        game.appendChild(dutch)
        dutch.innerHTML = `Play`

        dutch.style.position = `absolute`

        dutch.style.transform = `translate(42vw, 85vh)`

        dutch.style.backgroundColor = `#ffb911`
        dutch.style.border = `solid black 3px`
        dutch.style.fontWeight = `bolder`
        dutch.style.borderRadius = `3px`
        dutch.style.cursor = `pointer`
        dutch.style.padding = `2vh 2vw 2vh 2vw`
        dutch.style.fontSize = `2rem`
        dutch.style.width = `16vw`
        dutch.style.height = `10vh`

        dutch.addEventListener("click", function(){
            game.innerHTML = ""
            localStorage.setItem('language','dutch')
            new LocatieSelectie()
            new Timer().startTimer()
        })
    }
}