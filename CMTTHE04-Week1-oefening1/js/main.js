
// game element
let game = document.getElementsByTagName("game")[0]

function createFish(){
        let fish = document.createElement("fish")
        game.appendChild(fish)

        let xFish = Math.random() * (window.innerWidth - fish.clientWidth)
        let yFish = Math.random() * (window.innerHeight - fish.clientHeight)
        let colorFish = Math.random() * 360

        fish.style.transform = `translate(${xFish}px, ${yFish}px )`
        fish.style.filter = `hue-rotate(${colorFish}deg)`
        
        fish.addEventListener('click',onFishClick)
}

function createBubble(){
    // bubble element
    let bubble = document.createElement("bubble")
    game.appendChild(bubble)

    let xBubble = Math.random() * (window.innerWidth - bubble.clientWidth)
    let yBubble = Math.random() * (window.innerHeight - bubble.clientHeight)
    bubble.style.transform = `translate(${xBubble}px, ${yBubble}px )`
    
    bubble.addEventListener('click',onBubbleClick)
}

function onFishClick(event){
    event.target.classList.add("dead")
}

function onBubbleClick (event){
    event.target.remove()
}

    for (i = 0; i < 100; i++) {
        createBubble()
        createFish()
    }

