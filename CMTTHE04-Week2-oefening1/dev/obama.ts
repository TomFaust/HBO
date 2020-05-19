class Obama {

    obama: HTMLElement
    
    constructor() {
        this.obama = document.createElement('obama')
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.obama)

        let x = Math.random() * (window.innerWidth - this.obama.clientWidth)
        let y = Math.random() * (window.innerHeight - this.obama.clientHeight)

        this.obama.style.transform = `translate(${x}px, ${y}px)`
    }

    killObama(){
        console.log("Aargh!")
    }
}