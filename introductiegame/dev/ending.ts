class Ending{
    
    makeSweater = true

    constructor(){
        new Timer().endTimer()

        let bg = document.createElement("backgroundEnd")
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(bg)

        window.addEventListener("beforeprint", function(){
            title.style.fontSize = "7vh"
            popup.style.position = 'absolute'
            subTitle.style.fontSize = "1.1rem"
            //hier de if-statement voor de opleidingen die WEL meedoen met de trui.
            if(localStorage.getItem('education') == 'International Business' || localStorage.getItem('education') == 'Master Consultancy and Entrepeneurship' || localStorage.getItem('education') == 'Master in Supply Chain Management' || localStorage.getItem('education') == 'Foundation Programme' || localStorage.getItem('education') == 'Chemie' || localStorage.getItem('education') == 'Chemische Technologie' || localStorage.getItem('education') == 'Creative Media and Game Technologies' || localStorage.getItem('education') == 'Informatica' || localStorage.getItem('education') == 'Civiele Techniek' || localStorage.getItem('education') == 'Logistics Management (bachelor)' || localStorage.getItem('education') == 'Finance & Control' || localStorage.getItem('education') == 'Deeltijd - Finance & Control' || localStorage.getItem('education') == 'Biologie en Medisch Laboratoriumonderzoek' || localStorage.getItem('education') == 'CE: Creative Marketing & Sales' || localStorage.getItem('education') == 'Finance, Tax and Advice'){
                subTitle.innerHTML = new Languages()[localStorage.getItem('language')][73]
            }
            else{
                subTitle.innerHTML = new Languages()[localStorage.getItem('language')][75]
            }
            button.remove()
        })

        window.addEventListener("afterprint", function(){
            new Ending
        })

        bg.style.backgroundImage = `url(assets/Akte3/Binnenrotte.jpg)`
        bg.style.backgroundSize = `100% 100%`
        bg.style.backgroundRepeat = `no-repeat`
        bg.style.width = `100vw`
        bg.style.height = `100vh`
        bg.style.position = `absolute`

        let popup = document.createElement("endPopup")
        game.appendChild(popup)

        

        let title = document.createElement('youWon')
        title.innerHTML = new Languages()[localStorage.getItem('language')][74]
        popup.appendChild(title)

        let subTitle = document.createElement('subtitle')

        //hier de if-statement voor de opleidingen die WEL meedoen met de trui.
        //dit wilden ze toch weer andersom
        if(localStorage.getItem('education') == 'International Business' || localStorage.getItem('education') == 'Master Consultancy and Entrepeneurship' || localStorage.getItem('education') == 'Master in Supply Chain Management' || localStorage.getItem('education') == 'Foundation Programme' || localStorage.getItem('education') == 'Chemie' || localStorage.getItem('education') == 'Chemische Technologie' || localStorage.getItem('education') == 'Creative Media and Game Technologies' || localStorage.getItem('education') == 'Informatica' || localStorage.getItem('education') == 'Civiele Techniek' || localStorage.getItem('education') == 'Logistics Management (bachelor)' || localStorage.getItem('education') == 'Finance & Control' || localStorage.getItem('education') == 'Deeltijd - Finance & Control' || localStorage.getItem('education') == 'Biologie en Medisch Laboratoriumonderzoek' || localStorage.getItem('education') == 'CE: Creative Marketing & Sales' || localStorage.getItem('education') == 'Finance, Tax and Advice'){
            subTitle.innerHTML = new Languages()[localStorage.getItem('language')][88]
        }
        else{
            subTitle.innerHTML = new Languages()[localStorage.getItem('language')][87]
        }

        popup.appendChild(subTitle)

        let score = document.createElement('finalScore')

        let duration = parseInt(new Timer().score())
        let hours = Math.floor(duration / 3600)
        let minutes = Math.floor(duration % 3600 / 60)
        let seconds = Math.floor(duration % 3600 % 60)
        let scoreInMin = `${hours}:${minutes}:${seconds}`
        score.innerHTML += scoreInMin
        popup.appendChild(score)
        
        let button = document.createElement("button")
        popup.appendChild(button)

        button.innerHTML += new Languages()[localStorage.getItem('language')][76]
        button.addEventListener("click", function(){
            window.print()
        })

    }
}