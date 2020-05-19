class Game {
        
    constructor() {
        console.log("Game was created!")
        
        for(let i = 0; i < 100; i++){
        let fish : Fish = new Fish()
        let bubble : Bubble = new Bubble()
        let obama : Obama = new Obama()
        }
    }
} 

window.addEventListener("load", () => new Game())