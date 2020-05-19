class Bubble {

    bubble:HTMLElement

    constructor() {
        this.bubble = document.createElement('bubble')
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.bubble)

        this.bubble.addEventListener("click", () => this.popBubble())

        let x = Math.random() * (window.innerWidth - this.bubble.clientWidth)
        let y = window.innerHeight - this.bubble.clientHeight
        this.bubble.style.transform = `translate(${x}px, ${y}px)`
    }

    popBubble() {
        this.bubble.remove()
    }
}


