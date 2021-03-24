class CenterPopup{

    constructor(title:string,message:string,open:string){
            let popup = document.createElement('onlinePopup')
    
            let popupTitle = document.createElement('popupTitle')
            popupTitle.innerHTML = title
    
            let popupMessage = document.createElement('popupMessage')
            popupMessage.innerHTML = message
            popupMessage.style.textAlign = `left`
    
            let doorgaan = document.createElement('button')
            doorgaan.classList.add("popupButton")
            doorgaan.innerHTML = new Languages()[localStorage.getItem('language')][11]
    
            doorgaan.addEventListener('click',()=>{
    
                if(open == 'doorgaan' || open == 'Continue'){
                    let popup = document.createElement("onlinePopup")
                    let game = document.getElementsByTagName("game")[0]
                    game.appendChild(popup)
                    popup.innerHTML = new Languages()[localStorage.getItem('language')][71]

                    let input = document.createElement("input")
                    popup.appendChild(input)

                    let button = document.createElement("button")
                    popup.appendChild(button)

                    button.innerHTML = new Languages()[localStorage.getItem('language')][52]

                    input.style.width = `80%`
                    input.style.height = `3vh`
                    input.addEventListener("keyup", function(){
                    localStorage.setItem("teamSlogan", input.value)
                })

                button.addEventListener("click", function(){
                    if (localStorage.getItem("teamName") == null){
                        button.innerHTML = new Languages()[localStorage.getItem('language')][72]
                    }
                    else{
                        document.getElementsByTagName("game")[0].innerHTML = ""
                        new Pause(2,'Act3')
                    }
                })
                }
                else if(open !== ''){
                    window.open(open, '_blank');
                }
                
                popup.remove()

            })
    
            popup.appendChild(doorgaan)
            popup.appendChild(popupTitle)
            popup.appendChild(popupMessage)
    
            let game = document.getElementsByTagName("game")[0]
            game.appendChild(popup) 
    }

}