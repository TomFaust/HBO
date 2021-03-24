class Act3{

    game = document.getElementsByTagName("game")[0]
    bg:HTMLElement = document.createElement("videoBackground")
    video = (<HTMLAudioElement>document.createElement("video"))


    constructor(){
        
        let playButton = document.createElement("button")

        this.bg.style.backgroundColor = "black"
        this.game.appendChild(this.bg)
        this.game.appendChild(this.video)
        this.game.appendChild(playButton)

        playButton.style.width = `100vw`
        playButton.style.height = `100vh`
        playButton.style.opacity = `0`
        playButton.addEventListener("click", () => this.togglePlay())

        this.video.src = 'assets/Akte3/startAct3.mp4'
        this.video.autoplay = true
        this.video.controls = false
        //this.video.playbackRate = 16
        this.video.onended = function() {
            let game = document.getElementsByTagName("game")[0]
            game.innerHTML = ""
            let background = document.createElement("backgroundAct3")
            game.appendChild(background)
            if (localStorage.getItem("language") == "english"){
                background.style.backgroundImage = `url(assets/Akte3/act3Eng.png)`
            }
            new popupStory(new Languages()[localStorage.getItem('language')][68] , 25, 30 , 50)

            let button1 = document.createElement("button")
            let button2 = document.createElement("button")
            let button3 = document.createElement("button")
            let button4 = document.createElement("button")
            let button5 = document.createElement("button")
            let button6 = document.createElement("button")
            let button7 = document.createElement("button")
            let button8 = document.createElement("button")

            game.appendChild(button1)
            game.appendChild(button2)
            if (localStorage.getItem("language") == "dutch"){
                game.appendChild(button3)
            }
            game.appendChild(button4)
            game.appendChild(button5)
            game.appendChild(button6)
            game.appendChild(button7)
            game.appendChild(button8)

            button1.style.width = `7.2vw`
            button1.style.height = `14.4vh`
            button1.style.transform = `translate(31vw, 31.8vh)`
            button1.style.opacity = `0`
            button1.addEventListener("click" , function(){
                let popup = document.createElement("popup")
                let game = document.getElementsByTagName("game")[0]
                game.appendChild(popup)
                popup.style.backgroundImage = `url(assets/PRODUCTION/PRODUCTION/ASSETS/map.png)`
                popup.style.backgroundSize = `100% 100%`
                popup.style.backgroundRepeat = `no-repeat`
                popup.style.width = `80vw`
                popup.style.height = `80vh`
                popup.style.transform = `translate(10vw, 10vh)`
                popup.style.position = `absolute`
                popup.style.boxShadow = `rgba(0,0,0,0.25) 20px 20px`
                popup.style.borderRadius = `15px`

                let mapArea = document.createElement("mapArea")
                game.appendChild(mapArea)
                mapArea.style.width = `80vw`
                mapArea.style.height = `80vh`
                mapArea.style.transform = `translate(10vw, 10vh)`
                mapArea.style.zIndex = `2`
                mapArea.style.position = `absolute`

                let pin1 = document.createElement("pin")
                let pin2 = document.createElement("pin")
                let pin3 = document.createElement("pin")
                let pin4 = document.createElement("pin")
                let pin5 = document.createElement("pin")
                let pin6 = document.createElement("pin")
                let pin7 = document.createElement("pin")
                let pin8 = document.createElement("pin")
                let pin9 = document.createElement("pin")
                let pin10 = document.createElement("pin")
                let pin11 = document.createElement("pin")
                let pin12 = document.createElement("pin")
                let pin13 = document.createElement("pin")

                mapArea.appendChild(pin1)
                mapArea.appendChild(pin2)
                mapArea.appendChild(pin3)
                mapArea.appendChild(pin4)
                mapArea.appendChild(pin5)
                mapArea.appendChild(pin6)
                mapArea.appendChild(pin7)
                mapArea.appendChild(pin8)
                mapArea.appendChild(pin9)
                mapArea.appendChild(pin10)
                mapArea.appendChild(pin11)
                mapArea.appendChild(pin12)
                mapArea.appendChild(pin13)

                let url1 = "url(assets/Akte3/Hofpleinfontein.jpg)"
                let url2 = "url(assets/Akte3/RotterdamCS.jpg)"
                let url3 = "url(assets/Akte3/Feyenoordstadion.jpg)"
                let url4 = "url(assets/Akte3/KunstwerkBelichaamdeEenheid.jpg)"
                let url5 = "url(assets/Akte3/Erasmusbrug.jpg)"
                let url6 = "url(assets/Akte3/StationBlaak.jpg)"
                let url7 = "url(assets/Akte3/ErasmusMC.jpg)"
                let url8 = "url(assets/Akte3/Binnenrotte.jpg)"
                let url9 = "url(assets/Akte3/markthal.jpg)"
                let url10 = "url(assets/Akte3/CentraleBibliotheek.jpg)"
                let url11 = "url(assets/Akte3/Beurstraverse.jpg)"
                let url12 = "url(assets/Akte3/Blaaktoren.jpg)"
                let url13 = "url(assets/Akte3/KunstwerkDeGestileerdeBloem.jpg)"

                

                let text1 = new Languages()[localStorage.getItem('language')][20]
                let text2 = new Languages()[localStorage.getItem('language')][21]
                let text3 = new Languages()[localStorage.getItem('language')][22]
                let text4 = new Languages()[localStorage.getItem('language')][23]
                let text5 = new Languages()[localStorage.getItem('language')][24]
                let text6 = new Languages()[localStorage.getItem('language')][25]
                let text7 = new Languages()[localStorage.getItem('language')][26]
                let text8 = new Languages()[localStorage.getItem('language')][27]
                let text9 = new Languages()[localStorage.getItem('language')][28]
                let text10 = new Languages()[localStorage.getItem('language')][29]
                let text11 = new Languages()[localStorage.getItem('language')][30]
                let text12 = new Languages()[localStorage.getItem('language')][31]
                let text13 = new Languages()[localStorage.getItem('language')][32]
                
                pin1.style.transform = `translate(30.5vw, 35.7vh)`
                pin1.style.zIndex = `3`
                pin1.addEventListener("mouseover", function(){
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    let pinPopupImage = document.createElement("pinPopupImage")
                    pinPopup.appendChild(pinPopupImage)
                    pinPopupImage.style.backgroundImage = `${url1}`

                    pinPopup.style.transform = `translate(6vw, -7vh)`
                    pinPopup.innerHTML += text1
                })
                pin1.addEventListener("mouseout", function(){
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

                pin2.style.transform = `translate(26.2vw, 34.8vh)`
                pin2.style.zIndex = `3`
                pin2.addEventListener("mouseover", function(){
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    let pinPopupImage = document.createElement("pinPopupImage")
                    pinPopup.appendChild(pinPopupImage)
                    pinPopupImage.style.backgroundImage = `${url2}`

                    pinPopup.style.transform = `translate(1vw, -5vh)`
                    pinPopup.innerHTML += text2
                })
                pin2.addEventListener("mouseout", function(){
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

                pin3.style.transform = `translate(50.3vw, 75.7vh)`
                pin3.style.zIndex = `3`
                pin3.addEventListener("mouseover", function(){
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    let pinPopupImage = document.createElement("pinPopupImage")
                    pinPopup.appendChild(pinPopupImage)
                    pinPopupImage.style.backgroundImage = `${url3}`

                    pinPopup.style.transform = `translate(20vw, 37vh)`
                    pinPopup.innerHTML += text3
                })
                pin3.addEventListener("mouseout", function(){
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

                pin4.style.transform = `translate(28.3vw, 36.7vh)`
                pin4.style.zIndex = `3`
                pin4.addEventListener("mouseover", function(){
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    let pinPopupImage = document.createElement("pinPopupImage")
                    pinPopup.appendChild(pinPopupImage)
                    pinPopupImage.style.backgroundImage = `${url4}`

                    pinPopup.style.transform = `translate(4vw, -3vh)`
                    pinPopup.innerHTML += text4
                })
                pin4.addEventListener("mouseout", function(){
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

                pin5.style.transform = `translate(34.3vw, 56.7vh)`
                pin5.style.zIndex = `3`
                pin5.addEventListener("mouseover", function(){
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    let pinPopupImage = document.createElement("pinPopupImage")
                    pinPopup.appendChild(pinPopupImage)
                    pinPopupImage.style.backgroundImage = `${url5}`

                    pinPopup.style.transform = `translate(10vw, 18vh)`
                    pinPopup.innerHTML += text5
                })
                pin5.addEventListener("mouseout", function(){
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

                pin6.style.transform = `translate(35.6vw, 42vh)`
                pin6.style.zIndex = `3`
                pin6.addEventListener("mouseover", function(){
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    let pinPopupImage = document.createElement("pinPopupImage")
                    pinPopup.appendChild(pinPopupImage)
                    pinPopupImage.style.backgroundImage = `${url6}`

                    pinPopup.style.transform = `translate(11vw, 2.7vh)`
                    pinPopup.innerHTML += text6
                })
                pin6.addEventListener("mouseout", function(){
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

                pin7.style.transform = `translate(25.8vw, 55.1vh)`
                pin7.style.zIndex = `3`
                pin7.addEventListener("mouseover", function(){
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    let pinPopupImage = document.createElement("pinPopupImage")
                    pinPopup.appendChild(pinPopupImage)
                    pinPopupImage.style.backgroundImage = `${url7}`

                    pinPopup.style.transform = `translate(1vw, 16vh)`
                    pinPopup.innerHTML += text7
                })
                pin7.addEventListener("mouseout", function(){
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

                pin8.style.transform = `translate(34.3vw, 37.9vh)`
                pin8.style.zIndex = `3`
                pin8.addEventListener("mouseover", function(){
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    let pinPopupImage = document.createElement("pinPopupImage")
                    pinPopup.appendChild(pinPopupImage)
                    pinPopupImage.style.backgroundImage = `${url8}`

                    pinPopup.style.transform = `translate(10vw, 0.3vh)`
                    pinPopup.innerHTML += text8
                })
                pin8.addEventListener("mouseout", function(){
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

                pin9.style.transform = `translate(32.2vw, 39.2vh)`
                pin9.style.zIndex = `3`
                pin9.addEventListener("mouseover", function(){
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    let pinPopupImage = document.createElement("pinPopupImage")
                    pinPopup.appendChild(pinPopupImage)
                    pinPopupImage.style.backgroundImage = `${url9}`

                    pinPopup.style.transform = `translate(15vw, 0.2vh)`
                    pinPopup.innerHTML += text9
                })
                pin9.addEventListener("mouseout", function(){
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

                pin10.style.transform = `translate(36.5vw, 39.2vh)`
                pin10.style.zIndex = `3`
                pin10.addEventListener("mouseover", function(){
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    let pinPopupImage = document.createElement("pinPopupImage")
                    pinPopup.appendChild(pinPopupImage)
                    pinPopupImage.style.backgroundImage = `${url10}`

                    pinPopup.style.transform = `translate(15vw, 0.7vh)`
                    pinPopup.innerHTML += text10
                })
                pin10.addEventListener("mouseout", function(){
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

                pin11.style.transform = `translate(30.4vw, 41.3vh)`
                pin11.style.zIndex = `3`
                pin11.addEventListener("mouseover", function(){
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    let pinPopupImage = document.createElement("pinPopupImage")
                    pinPopup.appendChild(pinPopupImage)
                    pinPopupImage.style.backgroundImage = `${url11}`

                    pinPopup.style.transform = `translate(7vw, 5vh)`
                    pinPopup.innerHTML += text11
                })
                pin11.addEventListener("mouseout", function(){
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

                pin12.style.transform = `translate(33.8vw, 41.7vh)`
                pin12.style.zIndex = `3`
                pin12.addEventListener("mouseover", function(){
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    let pinPopupImage = document.createElement("pinPopupImage")
                    pinPopup.appendChild(pinPopupImage)
                    pinPopupImage.style.backgroundImage = `${url12}`

                    pinPopup.style.transform = `translate(10vw, 5vh)`
                    pinPopup.innerHTML += text12
                })
                pin12.addEventListener("mouseout", function(){
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

                pin13.style.transform = `translate(31.7vw, 43.6vh)`
                pin13.style.zIndex = `3`
                pin13.addEventListener("mouseover", function(){
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    let pinPopupImage = document.createElement("pinPopupImage")
                    pinPopup.appendChild(pinPopupImage)
                    pinPopupImage.style.backgroundImage = `${url13}`

                    pinPopup.style.transform = `translate(8vw, 6vh)`
                    pinPopup.innerHTML += text13
                })
                pin13.addEventListener("mouseout", function(){
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

                let button = document.createElement("button")
                game.appendChild(button)
                button.style.width = `100vw`
                button.style.height = `100vh`
                button.style.opacity = `0`
                button.style.zIndex = `1`
                button.style.position = `absolute`
                button.addEventListener("click", function(){
                    popup.remove()
                    button.remove()
                    mapArea.remove()
                })

                let char1 = document.createElement("char")
                let char2 = document.createElement("char")
                let char3 = document.createElement("char")
                let char4 = document.createElement("char")
                let char5 = document.createElement("char")
                if (localStorage.getItem("language") == "dutch"){
                    mapArea.appendChild(char1)
                    mapArea.appendChild(char2)
                    mapArea.appendChild(char3)
                    mapArea.appendChild(char4)
                    mapArea.appendChild(char5)
                }
                char1.style.backgroundImage = `url(assets/Akte3/cees.png)`
                char1.style.backgroundSize = `100% 100%`
                char1.style.width = `3.5vw`
                char1.style.height = `14vh`
                char1.style.position = `absolute`
                char1.style.transform = `translate(42.5vw, 33vh)`
                char1.addEventListener("mouseover", function(){
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    pinPopup.style.transform = `translate(15vw, 15vh)`
                    pinPopup.innerHTML += new Languages()[localStorage.getItem('language')][33]
                    pinPopup.style.paddingTop = `1vh`
                    
                })
                char1.addEventListener("mouseout", function(){
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

                char2.style.backgroundImage = `url(assets/Akte3/werner.png)`
                char2.style.backgroundSize = `100% 100%`
                char2.style.width = `3.5vw`
                char2.style.height = `14vh`
                char2.style.position = `absolute`
                char2.style.transform = `translate(29.5vw, 50vh)`
                char2.addEventListener("mouseover", function(){
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    pinPopup.style.transform = `translate(6vw, 30vh)`
                    pinPopup.innerHTML += new Languages()[localStorage.getItem('language')][37]
                    pinPopup.style.paddingTop = `1vh`
                    
                })
                char2.addEventListener("mouseout", function(){
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

                let line1 = document.createElement("line")
                let line2 = document.createElement("line")

                if (localStorage.getItem("language") == "dutch"){
                    mapArea.appendChild(line1)
                    mapArea.appendChild(line2)
                }
                line1.style.width = `6.5vw`
                line1.style.transform = `translate(23vw, 45vh) rotate(10deg)`
                line1.style.zIndex = `3`

                line2.style.width = `2vw`
                line2.style.transform = `translate(29.2vw, 48.7vh) rotate(43deg)`
                line2.style.zIndex = `3`

                char3.style.backgroundImage = `url(assets/Akte3/loes.png)`
                char3.style.backgroundSize = `100% 100%`
                char3.style.width = `3.5vw`
                char3.style.height = `14vh`
                char3.style.position = `absolute`
                char3.style.transform = `translate(37.6vw, 40.3vh)`
                char3.addEventListener("mouseover", function(){
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    pinPopup.style.transform = `translate(14vw, 22vh)`
                    pinPopup.innerHTML += new Languages()[localStorage.getItem('language')][35]
                    pinPopup.style.paddingTop = `1vh`
                    
                })
                char3.addEventListener("mouseout", function(){
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

                char4.style.backgroundImage = `url(assets/Akte3/donna.png)`
                char4.style.backgroundSize = `100% 100%`
                char4.style.width = `3.5vw`
                char4.style.height = `14vh`
                char4.style.position = `absolute`
                char4.style.transform = `translate(40.5vw, 39vh)`
                char4.addEventListener("mouseover", function(){
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    pinPopup.style.transform = `translate(16vw, 23vh)`
                    pinPopup.innerHTML += new Languages()[localStorage.getItem('language')][36]
                    pinPopup.style.paddingTop = `1vh`
                   
                })
                char4.addEventListener("mouseout", function(){
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

                char5.style.backgroundImage = `url(assets/Akte3/zoe.png)`
                char5.style.backgroundSize = `100% 100%`
                char5.style.width = `3.5vw`
                char5.style.height = `14vh`
                char5.style.position = `absolute`
                char5.style.transform = `translate(20.5vw, 42vh)`
                char5.addEventListener("mouseover", function(){
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    pinPopup.style.transform = `translate(0vw, 24vh)`
                    pinPopup.innerHTML += new Languages()[localStorage.getItem('language')][34]
                    pinPopup.style.paddingTop = `1vh`
                    
                })
                char5.addEventListener("mouseout", function(){
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

            })

                let correct1 :number = 0
                let correct2 :number = 0
                let correct3 :number = 0
                let correct4 :number = 0


            button2.style.width = `11.5vw`
            button2.style.height = `14.3vh`
            button2.style.transform = `translate(44.4vw, 37.6vh)`
            button2.style.opacity = `0`
            button2.addEventListener("click" , function(){
                let game = document.getElementsByTagName("game")[0]
                let popup = document.createElement("popup")
                game.appendChild(popup)
                popup.style.backgroundImage = `url(assets/PRODUCTION/PRODUCTION/ASSETS/notebook_open.png)`
                popup.style.zIndex = `2`
                popup.style.width = `90vw`
                popup.style.height = `90vh`
                popup.style.backgroundSize = `100% 100%`
                popup.style.backgroundRepeat = `no-repeat`
                popup.style.transform = `translate(5vw, 5vh)`
                popup.style.position = `absolute`


                let button = document.createElement("button")
                game.appendChild(button)
                button.style.width = `100vw`
                button.style.height = `100vh`
                button.style.opacity = `0`
                button.style.zIndex = `1`
                button.style.position = `absolute`
                button.addEventListener("click", function(){
                    let note1 = (<HTMLInputElement>document.getElementById("note1")).value.toLowerCase()
                    let note2 = (<HTMLInputElement>document.getElementById("note2")).value.toLowerCase()
                    let note3 = (<HTMLInputElement>document.getElementById("note3")).value.toLowerCase()
                    let note4 = (<HTMLInputElement>document.getElementById("note4")).value.toLowerCase()

                    localStorage.setItem(`note1Save`, note1)
                    localStorage.setItem(`note2Save`, note2)
                    localStorage.setItem(`note3Save`, note3)
                    localStorage.setItem(`note4Save`, note4)

                    button.remove()
                    popup.remove()
                    
                })

                let text1 = document.createElement("question")
                let text2 = document.createElement("question")
                let text3 = document.createElement("question")
                let text4 = document.createElement("question")

                let input1 = document.createElement("input")
                let input2 = document.createElement("input")
                let input3 = document.createElement("input")
                let input4 = document.createElement("input")

                popup.appendChild(text1)
                popup.appendChild(text2)
                popup.appendChild(text3)
                popup.appendChild(text4)

                popup.appendChild(input1)
                popup.appendChild(input2)
                popup.appendChild(input3)
                popup.appendChild(input4)
               
                

                let input1Text = localStorage.getItem(`note1Save`)
                let input2Text = localStorage.getItem(`note2Save`)
                let input3Text = localStorage.getItem(`note3Save`)
                let input4Text = localStorage.getItem(`note4Save`)

                text1.style.width = `25vw`
                text1.style.height = `2vh`
                text1.style.transform = `translate(12.3vw, 6vh)`
                text1.style.fontSize = `2.5vh`
                text1.style.position = `absolute`
                text1.innerHTML = new Languages()[localStorage.getItem('language')][38]

                input1.style.width = `24.5vw`
                input1.style.height = `3vh`
                input1.style.transform = `translate(12.5vw, 11.5vh)`
                input1.style.position = `absolute`
                input1.style.border = `none`
                input1.style.fontSize = `2.5vh`
                input1.style.borderBottom = `dashed 2px`
                input1.style.backgroundColor = `transparent`
                input1.value = input1Text!
                input1.id = "note1"

                text2.style.width = `28vw`
                text2.style.height = `2vh`
                text2.style.transform = `translate(12.3vw, 22.5vh)`
                text2.style.fontSize = `2.5vh`
                text2.style.position = `absolute`
                text2.innerHTML = new Languages()[localStorage.getItem('language')][39]

                input2.style.width = `24.5vw`
                input2.style.height = `3vh`
                input2.style.transform = `translate(12.5vw, 28.5vh)`
                input2.style.position = `absolute`
                input2.style.border = `none`
                input2.style.fontSize = `2.5vh`
                input2.style.borderBottom = `dashed 2px`
                input2.style.backgroundColor = `transparent`
                input2.value = input2Text!
                input2.id = "note2"

                text3.style.width = `25vw`
                text3.style.height = `2vh`
                text3.style.transform = `translate(12.3vw, 39.8vh)`
                text3.style.fontSize = `2.5vh`
                text3.style.position = `absolute`
                text3.innerHTML = new Languages()[localStorage.getItem('language')][41]

                input3.style.width = `24.5vw`
                input3.style.height = `3vh`
                input3.style.transform = `translate(12.5vw, 45.8vh)`
                input3.style.position = `absolute`
                input3.style.border = `none`
                input3.style.fontSize = `2.5vh`
                input3.style.borderBottom = `dashed 2px`
                input3.style.backgroundColor = `transparent`
                input3.value = input3Text!
                input3.id = "note3"

                text4.style.width = `25vw`
                text4.style.height = `auto`
                text4.style.transform = `translate(12.3vw, 51.1vh)`
                text4.style.lineHeight = `39pt`
                text4.style.fontSize = `2.5vh`
                text4.style.position = `absolute`
                if (localStorage.getItem("language") == "dutch") {
                    text4.innerHTML = new Languages()[localStorage.getItem('language')][40]
                }

                input4.style.width = `24.5vw`
                input4.style.height = `3vh`
                input4.style.transform = `translate(12.5vw, 68.8vh)`
                input4.style.position = `absolute`
                input4.style.border = `none`
                input4.style.fontSize = `2.5vh`
                input4.style.borderBottom = `dashed 2px`
                input4.style.backgroundColor = `transparent`
                input4.value = input4Text!
                input4.id = "note4"
                if (localStorage.getItem("language") == "english") {
                    input4.style.display = `none`
                }

                if (correct1 == 1){
                    input1.style.color = `green`
                    input1.style.borderColor = `black`
                }

                if (correct2 == 1){
                    input2.style.color = `green`
                    input2.style.borderColor = `black`
                }

                if (correct3 == 1){
                    input3.style.color = `green`
                    input3.style.borderColor = `black`
                }

                if (correct4 == 1){
                    input4.style.color = `green`
                    input4.style.borderColor = `black`
                }

                input1.addEventListener("keyup", function(){
                    let note1 = (<HTMLInputElement>document.getElementById("note1")).value.toLowerCase()
                    if (localStorage.getItem("language") == "dutch"){
                        if (note1 == "rotterdam staat te springen" || note1 == "rotterdamstaattespringen"){
                            input1.style.color = `green`
                            input1.style.borderColor = `black`
                            correct1 = 1
                        }
                        else{
                            input1.style.color =`black`
                            correct1 = 0
                        }
                    }
                    else{
                        if (note1 == "rotterdam your student city" || note1 == "rotterdamyourstudentcity" || note1 == "rotterdam your studentcity"){
                            input1.style.color = `green`
                            input1.style.borderColor = `black`
                            correct1 = 1
                        }
                        else{
                            input1.style.color =`black`
                            correct1 = 0
                        }
                    }
                })

                input2.addEventListener("keyup", function(){
                    let note2 = (<HTMLInputElement>document.getElementById("note2")).value.toLowerCase()

                    if (note2 == `5`){
                        input2.style.color = `green`
                        input2.style.borderColor = `black`
                        correct2 = 1
                    }
                    else{
                        input2.style.color =`black`
                        correct2 = 0
                    }
                })

                input3.addEventListener("keyup", function(){
                    let note3 = (<HTMLInputElement>document.getElementById("note3")).value.toLowerCase()

                    if (note3 == "24,20" || note3 == "24.20"){
                        input3.style.color = `green`
                        input3.style.borderColor = `black`
                        correct3 = 1
                    }
                    else{
                        input3.style.color =`black`
                        correct3 = 0
                    }
                    
                })

                input4.addEventListener("keyup", function(){
                    let note4 = (<HTMLInputElement>document.getElementById("note4")).value.toLowerCase()
                    if (localStorage.getItem("language") == "dutch"){
                        if (note4 == "word lid" || note4 == "wordlid"){
                            input4.style.color = `green`
                            input4.style.borderColor = `black`
                            correct4 = 1
                        }
                        else{
                            input4.style.color =`black`
                            correct4 = 0
                        }
                    }
                })
                popup.addEventListener("keyup", function(){
                    let note1 = (<HTMLInputElement>document.getElementById("note1")).value.toLowerCase()
                    let note2 = (<HTMLInputElement>document.getElementById("note2")).value.toLowerCase()
                    let note3 = (<HTMLInputElement>document.getElementById("note3")).value.toLowerCase()
                    let note4 = (<HTMLInputElement>document.getElementById("note4")).value.toLowerCase()

                    localStorage.setItem(`note1Save`, note1)
                    localStorage.setItem(`note2Save`, note2)
                    localStorage.setItem(`note3Save`, note3)
                    localStorage.setItem(`note4Save`, note4)

                    if (localStorage.getItem("language") == "dutch"){
                        if((note1 == "rotterdam staat te springen" || note1 == "rotterdamstaattespringen") && note2 == "5" && (note3 == "24,20" || note3 == "24.20") && (note4 == "word lid" || note4 == "wordlid")){
                            game.innerHTML = ""
                            new Ending
                        }
                    }
                    else{
                        if((note1 == "rotterdam your student city" || note1 == "rotterdamyourstudentcity" || note1 == "rotterdam your studentcity") && note2 == "5" && (note3 == "24,20" || note3 == "24.20") ){
                            game.innerHTML = ""
                            new Ending
                        }
                    }
                })


            })

            button3.style.width = `16.3vw`
            button3.style.height = `17.9vh`
            button3.style.transform = `translate(68.7vw, 54.4vh)`
            button3.style.opacity = `0`
            button3.addEventListener("click" , function(){

                var winNav = window.navigator;
                let vendorName = winNav.vendor;
                let isIEedge = winNav.userAgent.indexOf("Edge") > -1;
                let isIOSChrome = winNav.userAgent.match("CriOS");

                if (isIOSChrome) {
                // is Google Chrome on IOS
                } else if(                
                vendorName === "Google Inc." &&
                isIEedge === false
                ) {
                // is Google Chrome
                let pdf = document.createElement("object")
                game.appendChild(pdf)
                pdf.data = `assets/Akte3/RKvVboekje2020.pdf`
                pdf.type = `application/pdf`
                pdf.width = `50%`
                pdf.height = `75%`
                pdf.style.zIndex = `1`
                pdf.style.position = `absolute`
                pdf.style.transform = `translate(25vw, 10vh)`
                pdf.style.boxShadow = `rgba(0,0,0,0.5) 15px 15px`
                let button = document.createElement("button")
                game.appendChild(button)

                button.style.width = `100vw`
                button.style.height = `100vh`
                button.style.position = `absolute`
                button.style.zIndex = `0`
                button.style.opacity = `0`
                button.addEventListener("click", function(){
                    button.remove()
                    pdf.remove()
                })
                } else { 
                // not Google Chrome 
                let win = window.open("assets/Akte3/RKvVboekje2020.pdf")
                win!.focus()
                }
            })

            button4.style.width = `10.5vw`
            button4.style.height = `11vh`
            button4.style.transform = `translate(27.5vw, 65.9vh)`
            button4.style.opacity = `0`
            button4.addEventListener("click" , function(){
                let card = document.getElementById("card")
                if (card){
                    card.style.display = `block`
                    let button = document.createElement("button")
                    game.appendChild(button)

                    button.style.zIndex = `1`
                    button.style.width = `100vw`
                    button.style.height = `100vh`
                    button.style.opacity = `0`
                    button.style.position = `absolute`
                    button.addEventListener("click", function(){
                        let card = document.getElementById("card")
                        card!.style.display = `none`
                        button.remove()
                })
                }
                else {

                let game = document.getElementsByTagName("game")[0]
                let popup = document.createElement("popup")

                game.appendChild(popup)

                popup.style.backgroundImage = `url(assets/Akte3/woordzoeker.png)`
                popup.style.backgroundRepeat = `no-repeat`
                popup.style.backgroundSize = `100% 100%`
                popup.style.width = `90vw`
                popup.style.height = `90vh`
                popup.style.position = `absolute`
                popup.style.zIndex = `2`
                popup.style.transform = `translate(5vw, 5vh)`
                popup.style.borderRadius = `20px`
                popup.style.boxShadow = `rgba(0,0,0,0.25) 20px 20px`
                popup.id = "card"

                let words = document.createElement("words")

                popup.appendChild(words)
                if (localStorage.getItem("language") == "dutch"){
                   words.style.backgroundImage = `url(assets/Akte3/wordsDutch.png)`
                }
                else {
                    words.style.backgroundImage = `url(assets/Akte3/wordsEng.png)`
                }
                words.style.backgroundRepeat = `no-repeat`
                words.style.backgroundSize = `100% 100%`
                words.style.width = `42vw`
                words.style.height = `81vh`
                words.style.position = `absolute`
                words.style.transform = `translate(5vw, 4vh)`
                

                let button = document.createElement("button")
                game.appendChild(button)

                button.style.zIndex = `1`
                button.style.width = `100vw`
                button.style.height = `100vh`
                button.style.opacity = `0`
                button.style.position = `absolute`
                button.addEventListener("click", function(){
                    popup.style.display = `none`
                    button.remove()
                })

                let text = document.createElement("text")
                popup.appendChild(text)
                
                text.style.fontSize = `2.5vh`
                text.style.transform = `translate(50.5vw, 13vh)`
                text.style.position = `absolute`
                text.style.width = `35vw`
                text.style.height = `10vh`
                text.innerHTML = new Languages()[localStorage.getItem('language')][42]
                
                popup.addEventListener("click", function(event){
                    let dot = document.createElement("dot")
                    popup.appendChild(dot)

                    let x = ((event.clientX / innerWidth) * 100)
                    let y = ((event.clientY / innerHeight) * 100)
                    dot.addEventListener("click",function(event){
                        dot.remove()
                        event.stopPropagation()
                    })
                    dot.style.transform = `translate(${x - 5.75}vw, ${y - 6.5}vh)`
                    dot.style.width = `1.5vw`
                    dot.style.height = `3vh`
                    dot.style.backgroundColor = `red`
                    dot.style.borderRadius = `50%`
                    dot.style.position = `absolute`
                    dot.style.zIndex = `3`
                    dot.style.opacity = `0.3`

                })
                }
            })

            button5.style.width = `8vw`
            button5.style.height = `9.1vh`
            button5.style.transform = `translate(46.8vw, 56.8vh)`
            button5.style.opacity = `0`
            button5.addEventListener("click" , function(){
                let popup = document.createElement("popup")
                let game = document.getElementsByTagName("game")[0]
                game.appendChild(popup)

                popup.style.backgroundImage = `url(assets/Akte3/Rotterdampas.png)`
                popup.style.backgroundSize = `100% 100%`
                popup.style.width = `30vw`
                popup.style.height = `30vh`
                popup.style.transform = `translate(35vw, 35vh)`
                popup.style.position = `absolute`
                popup.style.zIndex = `2`

                let button = document.createElement("button")
                game.appendChild(button)

                button.style.width = `100vw`
                button.style.height = `100vh`
                button.style.position = `absolute`
                button.style.opacity = `0`
                button.style.zIndex = `1`
                button.addEventListener("click", function(){
                    button.remove()
                    popup.remove()
                })
            })

            button6.style.width = `12.4vw`
            button6.style.height = `3.7vh`
            button6.style.transform = `translate(62.6vw, 72vh)`
            button6.style.opacity = `0`
            button6.addEventListener("click" , function(){
                if (localStorage.getItem('language') == 'dutch'){
                    //let win = window.open("https://www.youtube.com/watch?v=MN_YVac75Yc&feature=emb_logo")
                    //win!.focus()
                    let game = document.getElementsByTagName("game")[0]
                    let iframe = document.createElement("iframe")
                    game.appendChild(iframe)
                    iframe.style.width = `560px`
                    iframe.style.height = `315px`
                    iframe.style.left = `35vw`
                    iframe.style.top = `30vh`
                    iframe.style.position = `absolute`
                    iframe.style.zIndex = `3`
                    iframe.src = `https://www.youtube.com/embed/MN_YVac75Yc`

                    let button = document.createElement("button")
                    game.appendChild(button)
                    button.style.width = `100vw`
                    button.style.height = `100vh`
                    button.style.position = `absolute`
                    button.style.zIndex = `2`
                    button.style.opacity = `0`

                    button.addEventListener("click", function(){
                        iframe.remove()
                        button.remove()
                    })
                    }

                else {
                    let win = window.open("https://rotterdamstaatomjoutespringen.nl/english/")
                    win!.focus()
                }
            })

            button7.style.width = `14.3vw`
            button7.style.height = `15vh`
            button7.style.transform = `translate(15.2vw, 59vh)`
            button7.style.opacity = `0`
            button7.addEventListener("click", function(){
                let popup = document.createElement("popup")
                let game = document.getElementsByTagName("game")[0]
                let button = document.createElement("button")

                game.appendChild(button)
                game.appendChild(popup)

                button.style.width = `100vw`
                button.style.height = `100vh`
                button.style.position = `absolute`
                button.style.zIndex = `1`
                button.style.opacity = `0`
                button.addEventListener("click", function(){
                    button.remove()
                    popup.remove()
                })

                if (localStorage.getItem("language") == "dutch"){
                    popup.style.backgroundImage = `url(assets/Akte3/vidiVici.png)`
                }
                else{
                    popup.style.backgroundImage = `url(assets/Akte3/risa.png)`
                }
                popup.style.backgroundSize = `100% 100%`
                popup.style.width = `50vw`
                popup.style.height = `auto`
                popup.style.transform = `translate(25vw, 10vh)`
                popup.style.position = `absolute`
                popup.style.zIndex = `2`
                popup.style.paddingTop = `8vh`
                popup.style.paddingBottom = `1vh`
                popup.style.paddingLeft = `1vw`
                popup.style.paddingRight = `1vw`
                popup.style.boxShadow = `rgba(0, 0, 0, 0.5) 15px 15px`
                popup.style.fontSize = `1.2rem`


                popup.innerHTML += new Languages()[localStorage.getItem('language')][43]

            })

            button8.style.width = `5.9vw`
            button8.style.height = `11.7vh`
            button8.style.transform =  `translate(64.8vw, 34.1vh)`
            button8.style.opacity = `0`
            button8.style.zIndex = `-1`
            button8.addEventListener("click", function(){
                let game = document.getElementsByTagName("game")[0]
                let popup = document.createElement("pinPopup")
                let button = document.createElement("button")
                game.appendChild(button)
                game.appendChild(popup)
                let audio = (<HTMLAudioElement>document.createElement("audio"))
                let audioCheck = document.getElementsByTagName("audio")[0]
                if (audioCheck == null){
                    popup.appendChild(audio)
                    if (localStorage.getItem("language") == "dutch") {
                        audio.src = `assets/Akte3/Audio.mp3`
                    }
                    else{
                        audio.src = `assets/Akte3/audioEng.mp3`
                    }
                    audio.autoplay = true
                    audio.controls = true
                    audio.style.width = `100%`
                    audio.style.paddingBottom = `1vh`
                }
                popup.style.zIndex = `2`
                popup.style.paddingTop = `1vh`
                popup.style.transform = `translate(35vw, 43vh)`
                popup.innerHTML += new Languages()[localStorage.getItem('language')][44]

                button.style.width = `100vw`
                button.style.height = `100vh`
                button.style.position = `absolute`
                button.style.zIndex = `1`
                button.style.opacity = `0`
                button.addEventListener("click", function(){
                    button.remove()
                    popup.remove()
                })
                
            })
            }
    }

    togglePlay() {
        if (this.video.paused) {
            this.video.play()
        }
        else {
            this.video.pause()
        }
    }

}