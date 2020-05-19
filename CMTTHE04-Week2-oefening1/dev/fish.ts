class Fish {

    fish: HTMLElement
    
    constructor() {
        console.log("Fish was created!")
        this.fish = document.createElement('fish')
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.fish)

        this.fish.addEventListener("click", () => this.killFish())

        let x = Math.random() * (window.innerWidth - this.fish.clientWidth)
        let y = Math.random() * (window.innerHeight - this.fish.clientHeight)
        let color = Math.random() * 360

        this.fish.style.transform = `translate(${x}px, ${y}px)`
        this.fish.style.filter = `hue-rotate(${color}deg)`
    }

    killFish(){
        this.fish.classList.add("dead")
    }
}