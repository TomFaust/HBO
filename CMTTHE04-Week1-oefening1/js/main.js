// game element

let game = document.getElementsByTagName("game")[0]

function placeElement(){

    let i;
    for (i = 0; i < 100; i++) {

        // vis element
        let xFish = Math.floor(Math.random() * 100);
        let yFish = Math.floor(Math.random() * 100);
        let colorFish = Math.floor(Math.random() * 360);

        let fish = document.createElement("fish")
        fish.style.transform = `translate(${xFish}vw, ${yFish}vh )`
        fish.style.filter = `hue-rotate(${colorFish}deg)`

        game.appendChild(fish)
        fish.addEventListener('click',function(){
            fish.classList.add("dead")
        }
        )

        // bubble element
        let xBubble = Math.floor(Math.random() * 100);
        let yBubble = Math.floor(Math.random() * 100);

        let bubble = document.createElement("bubble")
        bubble.style.transform = `translate(${xBubble}vw, ${yBubble}vh )`
        game.appendChild(bubble)
        bubble.addEventListener('click',function(){
            bubble.remove()
        })
    }

}

placeElement()