const k = 3
const machine = new kNear(k)

const learn = document.querySelector("#learn")
learn.addEventListener("click",train)

const predict = document.querySelector("#predict")
predict.addEventListener("click",predictThis)

const identity = document.querySelector("#identity")

const start = document.querySelector("#start")
start.addEventListener("click",startPlay)

function train(){

    let learnThis = log.innerHTML
    let label = identity.value

    learnThis = learnThis.split(",").map(Number)
    let cleanUp = learnThis.pop()

    console.log(learnThis)

    machine.learn(learnThis, label)

}

// predicting
function predictThis(){

    let learnThis = log.innerHTML

    learnThis = learnThis.split(",").map(Number)
    let cleanUp = learnThis.pop()

    let prediction = machine.classify(learnThis)

    let show = ""

    switch (prediction) {
        case "rock":
            show = "👊"
            break;
        case "paper":
            show = "✋"
            break
        case "scissors":
            show = "✌️"
            break
    }

    document.querySelector("#result").innerHTML = show
}


function startPlay(){


    let area = document.querySelector("#play")

    area.innerHTML = "";

    //setup the field
    let timer = document.createElement("timer")
    let field = document.createElement("field")
    let you = document.createElement("you")
    let enemy = document.createElement("enemy")

    area.appendChild(timer)

    field.appendChild(you)
    field.innerHTML += "VS"
    field.appendChild(enemy)

    
    area.appendChild(field)

    myReq = window.setInterval(yourMove,5)
    //start counter

document.getElementsByTagName('timer')[0].innerHTML = "5"
    setTimeout(() => {
        document.getElementsByTagName('timer')[0].innerHTML = "4"
            setTimeout(() => {
                document.getElementsByTagName('timer')[0].innerHTML = "3"
                setTimeout(() => {
                    document.getElementsByTagName('timer')[0].innerHTML = "2"
                    setTimeout(() => {
                        yourMove()
                        document.getElementsByTagName('timer')[0].innerHTML = "1"
                        setTimeout(() => {
                            document.getElementsByTagName('timer')[0].innerHTML = "GO"

                            setTimeout(() => {
                                fight()
                                let rematch = document.createElement("rematch")
                                rematch.innerHTML = "Rematch"
                                rematch.addEventListener("click",startPlay)
                                area.appendChild(rematch)

                                clearInterval(myReq)
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
}

function fight(){
    let moves = ["rock","paper","scissors"]

    let enemyMove = moves[Math.floor(Math.random() * 3)]

    let learnThis = log.innerHTML

    learnThis = learnThis.split(",").map(Number)
    let cleanUp = learnThis.pop()

    let yourMove = machine.classify(learnThis)

    switch (enemyMove) {
        case "rock":
            document.getElementsByTagName("enemy")[0].innerHTML = "👊"
            break;
        case "paper":
            document.getElementsByTagName("enemy")[0].innerHTML = "✋"
            break
        case "scissors":
            document.getElementsByTagName("enemy")[0].innerHTML = "✌️"
            break
    }

    let result = 0
    
    switch (yourMove) {
        case "rock":
            document.getElementsByTagName("you")[0].innerHTML = "👊"
            
            switch(enemyMove){
                case "rock":
                    result = 0
                break;
                case "paper":
                    result = 2
                break
                case "scissors":
                    result = 1
                break
            }

            break;
        case "paper":
            document.getElementsByTagName("you")[0].innerHTML = "✋"

            switch(enemyMove){
                case "rock":
                    result = 1
                break;
                case "paper":
                    result = 0
                break
                case "scissors":
                    result = 2
                break
            }

            break
        case "scissors":
            document.getElementsByTagName("you")[0].innerHTML = "✌️"

            switch(enemyMove){
                case "rock":
                    result = 2
                break;
                case "paper":
                    result = 1
                break
                case "scissors":
                    result = 0
                break
            }

            break
    }

    let endings = ["Draw","Victory","Defeat"]

    document.getElementsByTagName('timer')[0].innerHTML = endings[result]

}


function yourMove(){
    console.log("checking")

    let learnThis = log.innerHTML

    learnThis = learnThis.split(",").map(Number)
    let cleanUp = learnThis.pop()

    let yourMove = machine.classify(learnThis)

    switch (yourMove) {
        case "rock":
            document.getElementsByTagName("you")[0].innerHTML = "👊"
            break;
        case "paper":
            document.getElementsByTagName("you")[0].innerHTML = "✋"
            break
        case "scissors":
            document.getElementsByTagName("you")[0].innerHTML = "✌️"
            break
    }
}

