class Act1 {

    private input1 = document.createElement("input")
    private input2 = document.createElement("input")
    private input3 = document.createElement("input")

    private button1 = document.createElement("button")
    
    private input1Save :string = ""
    private input2Save :string = ""
    private input3Save :string = ""

    private popupSave :boolean = false

    constructor(){
        this.createAnswerScreen()
        sessionStorage.setItem("index1", "0")
        sessionStorage.setItem("index2", "0")
        sessionStorage.setItem("index3", "0")
    }

    createAnswerScreen(){
        let game = document.getElementsByTagName("game")[0]

        let background = document.createElement("backgroundact1")
        let location = localStorage.getItem('location')
        background.style.backgroundImage = `url(assets/PRODUCTION/PRODUCTION/ASSETS/${location}_door.jpg)`
        game.appendChild(background)

        let banner = document.createElement('banner')
        game.appendChild(banner)

        let act1Box = document.createElement('act1Box')
        act1Box.innerHTML = new Languages()[localStorage.getItem('language')][8]
        game.appendChild(act1Box)
        
        game.appendChild(this.input1)
        this.input1.classList.add('inputShape')
        this.input1.style.transform = `translate(26vw, 39.2vh)`
        this.input1.value = this.input1Save
        this.input1.id = "input1"
        this.input1.style.display = `none`

        game.appendChild(this.input2)
        this.input2.classList.add('inputShape')
        this.input2.style.transform = `translate(42.7vw, 39.2vh)`
        this.input2.value = this.input2Save
        this.input2.id = "input2"
        this.input2.style.display = `none`

        game.appendChild(this.input3)
        this.input3.classList.add('inputShape')
        this.input3.style.transform = `translate(59.2vw, 39.2vh)`
        this.input3.value = this.input3Save
        this.input3.id = "input3"
        this.input3.style.display = `none`

        var img1 = document.createElement('img')  
        img1.src = "assets/Akte 1/vormen/klaver.png";
        img1.classList.add('vorm1')  
        img1.id = "img1"
        game.appendChild(img1);

        let images1 = ["assets/Akte 1/vormen/driehoek.png", "assets/Akte 1/vormen/hart.png", "assets/Akte 1/vormen/cirkel.png", "assets/Akte 1/vormen/kroon.png", "assets/Akte 1/vormen/maan.png", "assets/Akte 1/vormen/ruiten.png", "assets/Akte 1/vormen/schoppen.png", "assets/Akte 1/vormen/ster.png", "assets/Akte 1/vormen/vierkant.png", "assets/Akte 1/vormen/klaver.png"];
        let index1 = 0;

        img1.addEventListener("click", function() {
            img1.src = images1[index1];
            index1 = (index1 === images1.length - 1) ? 0 : index1 + 1;
            let index1ToString = `${index1}`
            sessionStorage.setItem("index1", index1ToString)
        });

        var img2 = document.createElement('img')  
        img2.src = "assets/Akte 1/vormen/driehoek.png";
        img2.classList.add('vorm2')  
        img2.id = "img2"
        game.appendChild(img2);

        let images2 = ["assets/Akte 1/vormen/cirkel.png", "assets/Akte 1/vormen/hart.png", "assets/Akte 1/vormen/klaver.png", "assets/Akte 1/vormen/kroon.png", "assets/Akte 1/vormen/maan.png", "assets/Akte 1/vormen/ruiten.png", "assets/Akte 1/vormen/schoppen.png", "assets/Akte 1/vormen/ster.png", "assets/Akte 1/vormen/vierkant.png", "assets/Akte 1/vormen/driehoek.png"];
        let index2 = 0;

        img2.addEventListener("click", function() {
            img2.src = images2[index2];
            index2 = (index2 === images2.length - 1) ? 0 : index2 + 1;
            let index2ToString = `${index2}`
            sessionStorage.setItem("index2", index2ToString)
        });

        var img3 = document.createElement('img')  
        img3.src = "assets/Akte 1/vormen/cirkel.png";
        img3.classList.add('vorm3')  
        img3.id = "img3"
        game.appendChild(img3);

        let images3 = ["assets/Akte 1/vormen/driehoek.png", "assets/Akte 1/vormen/hart.png", "assets/Akte 1/vormen/klaver.png", "assets/Akte 1/vormen/kroon.png", "assets/Akte 1/vormen/maan.png", "assets/Akte 1/vormen/ruiten.png", "assets/Akte 1/vormen/schoppen.png", "assets/Akte 1/vormen/ster.png", "assets/Akte 1/vormen/vierkant.png", "assets/Akte 1/vormen/cirkel.png"];
        let index3 = 0;

        img3.addEventListener("click", function() {
            img3.src = images3[index3];
            index3 = (index3 === images3.length - 1) ? 0 : index3 + 1;
            let index3ToString = `${index3}`
            sessionStorage.setItem("index3", index3ToString)
        });

        game.appendChild(this.button1)
        this.button1.style.width = `15.1vw`
        this.button1.style.height = `7.5vh`
        this.button1.style.transform = `translate(52.5vw, 56vh)`
        this.button1.innerHTML = new Languages()[localStorage.getItem('language')][9]
        this.button1.classList.add('verzenden')
        this.button1.addEventListener("click" , () => this.shapeCheck())

        let button2 = document.createElement("button")
        game.appendChild(button2)
        button2.style.height = `7.5vh`
        button2.style.width = `15.1vw`
        button2.style.transform = `translate(30vw, 56vh)`
        button2.classList.add('verzenden')
        button2.innerHTML = new Languages()[localStorage.getItem('language')][10]
        button2.addEventListener("click" , () => this.searchOnline())

        let button3 = document.createElement("button")
        game.appendChild(button3)
        button3.style.width = `9vw`
        button3.style.height = `7.6vh`
        button3.style.transform = `translate(91vw, 0vh)`
        button3.style.opacity = `0`
        button3.addEventListener("click" , () => this.searchOnline())
    }

    shapeCheck() {
        let shape1 = sessionStorage.getItem("index1")
        let shape2 = sessionStorage.getItem("index2")
        let shape3 = sessionStorage.getItem("index3")
        if (shape1 == "3" && shape2 == "9" && shape3 == "1"){

            let popup = document.createElement("onlinePopup")
            let game = document.getElementsByTagName("game")[0]
            game.appendChild(popup)
            popup.innerHTML = new Languages()[localStorage.getItem('language')][69]

            let input = document.createElement("input")
            popup.appendChild(input)

            let button = document.createElement("button")
            popup.appendChild(button)

            button.innerHTML = new Languages()[localStorage.getItem('language')][52]

            input.style.width = `80%`
            input.style.height = `3vh`
            input.addEventListener("keyup", function(){
                localStorage.setItem("teamName", input.value)
            })

            button.addEventListener("click", function(){
                if (localStorage.getItem("teamName") == null){
                    button.innerHTML = new Languages()[localStorage.getItem('language')][70]
                }
                else{
                    document.getElementsByTagName("game")[0].innerHTML = ""
                    new Pause(1,'EnterBuilding')
                }
            })
            
        }
        else{

            let game = document.getElementsByTagName('game')[0]
            let inputs = document.getElementsByTagName('img')

            for (let index = 0; index < inputs.length; index++) {
                inputs[index].style.border = 'solid 3px red'
            }

            let wrong = document.createElement('wrong')
            wrong.innerHTML = new Languages()[localStorage.getItem('language')][14]

            game.appendChild(wrong)

            setTimeout(() => {
                for (let index = 0; index < inputs.length; index++) {
                    inputs[index].style.border = ''
                    wrong.remove()
                }
            }, 2000);
            
        }
    }

    searchOnline() {
        
        this.input1Save = (<HTMLInputElement>document.getElementById("input1")).value
        this.input2Save = (<HTMLInputElement>document.getElementById("input2")).value
        this.input3Save = (<HTMLInputElement>document.getElementById("input3")).value
        
        document.getElementsByTagName("game")[0].innerHTML = ""
        
        let background = document.createElement("backgroundOnline")
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(background)

        if(localStorage.getItem("language") == "english"){
            background.style.backgroundImage = `url(assets/floormapEn.png)`
        }

        let banner = document.createElement('banner')
        game.appendChild(banner)

        if(this.popupSave == false){
            new CenterPopup(new Languages()[localStorage.getItem('language')][12],new Languages()[localStorage.getItem('language')][13],'')
            this.popupSave = true;
        }

        let button1 = document.createElement("button")
        let button2 = document.createElement("button")
        let button3 = document.createElement("button")
        let button4 = document.createElement("button")
        let button5 = document.createElement("button")
        let button6 = document.createElement("button")
        let button7 = document.createElement("button")
        let button8 = document.createElement("button")
        let button9 = document.createElement("button")
        
        game.appendChild(button1)
        game.appendChild(button2)
        game.appendChild(button3)
        game.appendChild(button4)
        game.appendChild(button5)
        game.appendChild(button6)
        game.appendChild(button7)
        game.appendChild(button8)
        game.appendChild(button9)

        button1.style.width = `16.6vw`
        button1.style.height = `77.1vh`
        button1.style.transform = `translate(11.2vw, 10.8vh)`
        button1.style.opacity = `0`
        button1.addEventListener("click" , () => this.webmail())

        button2.style.width = `23.4vw`
        button2.style.height = `15.4vh`
        button2.style.transform = `translate(29.6vw, 72.9vh)`
        button2.style.opacity = `0`
        button2.addEventListener("click" , () => this.rooster())

        button3.style.width = `11.2vw`
        button3.style.height = `34.5vh`
        button3.style.transform = `translate(54.6vw, 10.6vh)`
        button3.style.opacity = `0`
        button3.addEventListener("click" , () => this.studentenServiceCenter())

        button4.style.width = `17.3vw`
        button4.style.height = `22.6vh`
        button4.style.transform = `translate(58.8vw, 65.5vh)`
        button4.style.opacity = `0`
        button4.addEventListener("click" , () => this.studentenpas())

        button5.style.width = `10.9vw`
        button5.style.height = `77.5vh`
        button5.style.transform = `translate(78vw, 10.7vh)`
        button5.style.opacity = `0`
        button5.addEventListener("click" , () => this.lms())

        button6.style.width = `9vw`
        button6.style.height = `8.5vh`
        button6.style.transform = `translate(91vw, 0vh)`
        button6.style.opacity = `0`
        button6.addEventListener("click" , () => this.goBack())

        button7.style.width = `8.9vw`
        button7.style.height = `22.7vh`
        button7.style.transform = `translate(67.4vw, 10.7vh)`
        button7.style.opacity = `0`
        button7.addEventListener("click" , () => this.osiris())

        button8.style.width = `10.9vw`
        button8.style.height = `46vh`
        button8.style.transform = `translate(42.1vw, 10.7vh)`
        button8.style.opacity = `0`
        button8.addEventListener("click" , () => this.library())

        button9.style.width = `10.9vw`
        button9.style.height = `46vh`
        button9.style.transform = `translate(29.6vw, 10.7vh)`
        button9.style.opacity = `0`
        button9.addEventListener("click" , () => this.app())

    }

    webmail(){
        window.open('https://webmail.hr.nl', '_blank');
    }

    osiris(){
        window.open('osiris.html', '_blank');
    }

    rooster(){
        new CenterPopup(new Languages()[localStorage.getItem('language')][15],new Languages()[localStorage.getItem('language')][16],'https://hint.hr.nl/nl/HR/Studie/roosters-en-cijfers/Lesrooster/')
    }

    studentenServiceCenter(){

        if(localStorage.getItem('language') == 'dutch'){
            new CenterPopup(new Languages()[localStorage.getItem('language')][17],new Languages()[localStorage.getItem('language')][18],'https://hint.hr.nl/nl/HR/Studie/Studenten-Service-Center/contact-intro-game/?ticket=ST-8256325-afrgd0alCe3y9MWc7In5PdmV1MXNE42FUsq-20')
        }else if(localStorage.getItem('language') == 'english'){
            new CenterPopup(new Languages()[localStorage.getItem('language')][17],new Languages()[localStorage.getItem('language')][18],'https://hint.hr.nl/nl/HR/Studie/Studenten-Service-Center/contact-intro-game/ENG/')
        }
    }

    studentenpas(){
        let game = document.getElementsByTagName("game")[0]
        
        var img = document.createElement('img')  
        img.src = "assets/studentenpas.png";
        img.classList.add('studentenPas')  
        game.appendChild(img);

        img.addEventListener("click" , function(){
            button.style.display = `none`
            game.removeChild(img);
            button.remove()
        })
        img.style.position = `absolute`

        let button = document.createElement("button")
        game.appendChild(button)

        button.style.width = `20.3vw`
        button.style.height = `18vh`
        button.style.transform = `translate(61.2vw, 63.8vh)`
        button.style.opacity = `0`

        button.addEventListener("click" , function(){
            button.style.display = `none`
            game.removeChild(img);
            button.remove()
        })
    }

    lms(){
        document.getElementsByTagName("game")[0].innerHTML = ""

        let background = document.createElement("backgroundOnline")
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(background)

        if(localStorage.getItem("language") == "english"){
            background.style.backgroundImage = `url(assets/floormapEn.png)`
        }

        let banner = document.createElement('banner')
        game.appendChild(banner)
        
        let button1 = document.createElement("button")
        let button2 = document.createElement("button")
        let button3 = document.createElement("button")
        let button4 = document.createElement("button")
        let button5 = document.createElement("button")
        let button6 = document.createElement("button")
        let button7 = document.createElement("button")
        let button8 = document.createElement("button")
        let button9 = document.createElement("button")
        
        game.appendChild(button1)
        game.appendChild(button2)
        game.appendChild(button3)
        game.appendChild(button4)
        game.appendChild(button5)
        game.appendChild(button6)
        game.appendChild(button7)
        game.appendChild(button8)
        game.appendChild(button9)

        button1.style.width = `16.6vw`
        button1.style.height = `77.1vh`
        button1.style.transform = `translate(11.2vw, 10.8vh)`
        button1.style.opacity = `0`
        button1.addEventListener("click" , () => this.webmail())

        button2.style.width = `23.4vw`
        button2.style.height = `15.4vh`
        button2.style.transform = `translate(29.6vw, 72.9vh)`
        button2.style.opacity = `0`
        button2.addEventListener("click" , () => this.rooster())

        button3.style.width = `11.2vw`
        button3.style.height = `34.5vh`
        button3.style.transform = `translate(54.6vw, 10.6vh)`
        button3.style.opacity = `0`
        button3.addEventListener("click" , () => this.studentenServiceCenter())

        button4.style.width = `17.3vw`
        button4.style.height = `22.6vh`
        button4.style.transform = `translate(58.8vw, 65.5vh)`
        button4.style.opacity = `0`
        button4.addEventListener("click" , () => this.studentenpas())

        button5.style.width = `10.9vw`
        button5.style.height = `77.5vh`
        button5.style.transform = `translate(78vw, 10.7vh)`
        button5.style.opacity = `0`
        button5.addEventListener("click" , () => this.lms())

        button6.style.width = `9vw`
        button6.style.height = `8.5vh`
        button6.style.transform = `translate(91vw, 0vh)`
        button6.style.opacity = `0`
        button6.addEventListener("click" , () => this.goBack())

        button7.style.width = `8.9vw`
        button7.style.height = `22.7vh`
        button7.style.transform = `translate(67.4vw, 10.7vh)`
        button7.style.opacity = `0`
        button7.addEventListener("click" , () => this.osiris())

        button8.style.width = `10.9vw`
        button8.style.height = `46vh`
        button8.style.transform = `translate(42.1vw, 10.7vh)`
        button8.style.opacity = `0`
        button8.addEventListener("click" , () => this.library())

        button9.style.width = `10.9vw`
        button9.style.height = `46vh`
        button9.style.transform = `translate(29.6vw, 10.7vh)`
        button9.style.opacity = `0`
        button9.addEventListener("click" , () => this.app())

        new CenterPopup('Cum laude',new Languages()[localStorage.getItem('language')][19],'https://lms.hr.nl')
        let button = <HTMLElement>document.getElementsByClassName("popupButton")[0]
        button.style.top = `85%`
    }

    library(){
        if (localStorage.getItem("language") == "dutch"){
            window.open('https://www.hogeschoolrotterdam.nl/voorlichting/voorzieningen/mediatheek/newsitem/welkom-studenten/190679/', '_blank')
        }
        else{
            window.open(`https://www.rotterdamuas.com/study-information/practical-information/facilities/library/`, `_blank`)
        }
    }

    app(){
        document.getElementsByTagName("game")[0].innerHTML = ""

        let background = document.createElement("backgroundOnline")
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(background)

        if(localStorage.getItem("language") == "english"){
            background.style.backgroundImage = `url(assets/floormapEn.png)`
        }

        let banner = document.createElement('banner')
        game.appendChild(banner)
        
        let button1 = document.createElement("button")
        let button2 = document.createElement("button")
        let button3 = document.createElement("button")
        let button4 = document.createElement("button")
        let button5 = document.createElement("button")
        let button6 = document.createElement("button")
        let button7 = document.createElement("button")
        let button8 = document.createElement("button")
        let button9 = document.createElement("button")
        
        game.appendChild(button1)
        game.appendChild(button2)
        game.appendChild(button3)
        game.appendChild(button4)
        game.appendChild(button5)
        game.appendChild(button6)
        game.appendChild(button7)
        game.appendChild(button8)
        game.appendChild(button9)

        button1.style.width = `16.6vw`
        button1.style.height = `77.1vh`
        button1.style.transform = `translate(11.2vw, 10.8vh)`
        button1.style.opacity = `0`
        button1.addEventListener("click" , () => this.webmail())

        button2.style.width = `23.4vw`
        button2.style.height = `15.4vh`
        button2.style.transform = `translate(29.6vw, 72.9vh)`
        button2.style.opacity = `0`
        button2.addEventListener("click" , () => this.rooster())

        button3.style.width = `11.2vw`
        button3.style.height = `34.5vh`
        button3.style.transform = `translate(54.6vw, 10.6vh)`
        button3.style.opacity = `0`
        button3.addEventListener("click" , () => this.studentenServiceCenter())

        button4.style.width = `17.3vw`
        button4.style.height = `22.6vh`
        button4.style.transform = `translate(58.8vw, 65.5vh)`
        button4.style.opacity = `0`
        button4.addEventListener("click" , () => this.studentenpas())

        button5.style.width = `10.9vw`
        button5.style.height = `77.5vh`
        button5.style.transform = `translate(78vw, 10.7vh)`
        button5.style.opacity = `0`
        button5.addEventListener("click" , () => this.lms())

        button6.style.width = `9vw`
        button6.style.height = `8.5vh`
        button6.style.transform = `translate(91vw, 0vh)`
        button6.style.opacity = `0`
        button6.addEventListener("click" , () => this.goBack())

        button7.style.width = `8.9vw`
        button7.style.height = `22.7vh`
        button7.style.transform = `translate(67.4vw, 10.7vh)`
        button7.style.opacity = `0`
        button7.addEventListener("click" , () => this.osiris())

        button8.style.width = `10.9vw`
        button8.style.height = `46vh`
        button8.style.transform = `translate(42.1vw, 10.7vh)`
        button8.style.opacity = `0`
        button8.addEventListener("click" , () => this.library())

        button9.style.width = `10.9vw`
        button9.style.height = `46vh`
        button9.style.transform = `translate(29.6vw, 10.7vh)`
        button9.style.opacity = `0`
        button9.addEventListener("click" , () => this.app())

        new CenterPopup(new Languages()[localStorage.getItem('language')][83],new Languages()[localStorage.getItem('language')][84],'')
        let button = <HTMLElement>document.getElementsByClassName("popupButton")[0]
        button.style.top = `85%`
    }

    goBack(){
        document.getElementsByTagName("game")[0].innerHTML = ""
        this.createAnswerScreen()
    }
}