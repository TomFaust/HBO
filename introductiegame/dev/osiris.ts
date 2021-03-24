class Osiris {

    private input1 = document.createElement("input")
    private input1Save :string = ""

    private button1 = document.createElement("button")
    private button2 = document.createElement("button")
    private button3 = document.createElement("button")
    private button4 = document.createElement("button")
    private button5 = document.createElement("button")
    private button6 = document.createElement("button")
    private button7 = document.createElement("button")
    private extraButton = document.createElement("button")

    private img = document.createElement('img')

    private input2 = document.createElement("input")
    private input2Save :string = ""
    constructor(){
        this.createOsirisScreen()
    }

    createOsirisScreen(){
        let game2 = document.getElementsByTagName("game2")[0]

        let background = document.createElement("backgroundact2")
        if (localStorage.getItem("language") == "english"){
            background.style.backgroundImage = `url(assets/Osiris_1Eng.png)`
        }
        else{
            background.style.backgroundImage = `url(assets/Osiris_1.png)`
        }
        game2.appendChild(background)

        game2.appendChild(this.input1)
        this.input1.style.width = `17.1vw`
        this.input1.style.height = `2vh`
        this.input1.style.background = `transparent`
        this.input1.style.border = `none`
        this.input1.style.transform = `translate(14.1vw, 21.1vh)`
        // this.input1.style.borderRadius = `25px`
        this.input1.style.fontSize = `17px`
        this.input1.style.paddingLeft = `0.4vw`
        // this.input1.style.fontFamily = `Arial Black`
        // this.input1.style.textTransform = `uppercase`
        this.input1.value = this.input1Save
        this.input1.id = "input1"

        game2.appendChild(this.button1)
        this.button1.style.width = `6.6vw`
        this.button1.style.height = `3.3vh`
        this.button1.style.transform = `translate(14.1vw, 26.6vh)`
        this.button1.style.opacity = `0`
        this.button1.addEventListener("click" , () => this.loginCheck())
    }

    loginCheck() {
    
        let shape1 = (<HTMLInputElement>document.getElementById("input1")).value

        if (shape1 == "0200798"){
          
            this.login()
            // document.getElementsByTagName("game")[0].innerHTML = ""
            // new Pause(1,'EnterBuilding')
            
        }
        else{
       
        }
    }

    login(){
        let game2 = document.getElementsByTagName("game2")[0]

        game2.removeChild(this.button1)
        game2.removeChild(this.input1)

        let background = document.createElement("backgroundact2")
        if (localStorage.getItem("language") == "english"){
            background.style.backgroundImage = `url(assets/Osiris_2Eng.png)`
        }
        else{
            background.style.backgroundImage = `url(assets/Osiris_2.png)`
        }
        game2.appendChild(background)

        game2.appendChild(this.button2)
        this.button2.style.width = `6.6vw`
        this.button2.style.height = `3.3vh`
        if (localStorage.getItem("language") == "english"){
            this.button2.style.transform = `translate(71.2vw, 8.4vh)`
        }
        else{
            this.button2.style.transform = `translate(68.7vw, 8.4vh)`
        }
        this.button2.style.opacity = `0`
        this.button2.addEventListener("click" , () => this.onderwijs())

        var myloc = new Image();  
        myloc.useMap = "/assets/arrow.png";    
        this.img.setAttribute('src', myloc.useMap);  
        if (localStorage.getItem("language") == "english"){
            this.img.setAttribute('style', "height:5vh;width:2vw;transform:translate(73.5vw, 13.5vh);");
        }
        else{
            this.img.setAttribute('style', "height:5vh;width:2vw;transform:translate(71vw, 13.5vh);");
        } 
        game2.appendChild(this.img);
    }

    onderwijs(){
        let game2 = document.getElementsByTagName("game2")[0]

        game2.removeChild(this.img);
        game2.removeChild(this.button2);

        let background = document.createElement("backgroundact2")
        if (localStorage.getItem("language") == "english"){
            background.style.backgroundImage = `url(assets/Osiris_3Eng.png)`
        }
        else{
            background.style.backgroundImage = `url(assets/Osiris_3.png)`
        }
        game2.appendChild(background)

        game2.appendChild(this.input2)
        this.input2.style.width = `17.2vw`
        this.input2.style.height = `2.1vh`
        if (localStorage.getItem("language") == "english"){
            this.input2.style.transform = `translate(14.5vw, 31.2vh)`
        }
        else{
            this.input2.style.transform = `translate(13.9vw, 31.2vh)`
        }
        this.input2.style.fontSize = `17px`
        this.input2.style.paddingLeft = `0.4vw`
        this.input2.style.background = `transparent`
        this.input2.style.border = `none`
        this.input2.value = this.input2Save
        this.input2.id = "input2"

        game2.appendChild(this.button7)
        this.button7.style.width = `4vw`
        this.button7.style.height = `2.5vh`
        this.button7.style.transform = `translate(1vw, 14vh)`
        this.button7.style.opacity = `0`
        this.button7.addEventListener("click" , () => this.keuzeCheck())

        game2.appendChild(this.button3)
        this.button3.style.width = `4vw`
        this.button3.style.height = `2.5vh`
        this.button3.style.transform = `translate(1vw, 86vh)`
        this.button3.style.opacity = `0`
        this.button3.addEventListener("click" , () => this.keuzeCheck())
    }

    keuzeCheck() {
        
        let shape1 = (<HTMLInputElement>document.getElementById("input2")).value.toLowerCase()

        if (shape1 == "The Key to Success" ||shape1 == "The key to success" ||shape1 == "the key to success" ||shape1 == "Sleutel tot succes" || shape1 == "sleutel tot succes" || shape1 == "sleutel" || shape1 == "Sleutel" || shape1 == "succes" || shape1 == "success" || shape1 == "sleutel tot" || shape1 == "Sleutel tot" || shape1 == "Sleutel succes" || shape1 == "sleutel succes" || shape1 == "key to success" || shape1 == "key success" || shape1 == "Key To success" || shape1 == "Key To Success" || shape1 == "Key to Success" || shape1 == "key" || shape1 == "Key" || shape1 == "key to" || shape1 == "Key to" || shape1 == "Key To" || shape1 == "key To"){
            
            this.keuzeRight()            
        }
        else{
            
            this.keuzeWrong()
        }
    }

    keuzeRight(){
        let game2 = document.getElementsByTagName("game2")[0]

        let background = document.createElement("backgroundact2")
        if (localStorage.getItem("language") == "english"){
            background.style.backgroundImage = `url(assets/Osiris_5Eng.png)`
            this.input2.style.transform = `translate(14.5vw, 31.2vh)`
            this.button3.style.transform = `translate(1vw, 86vh)`
        }
        else{
            background.style.backgroundImage = `url(assets/Osiris_5.png)`
            
        }
        game2.appendChild(background)

        
        

        game2.appendChild(this.button4)
        this.button4.style.width = `4vw`
        this.button4.style.height = `3vh`
        this.button4.style.transform = `translate(41.8vw, 37.8vh)`
        this.button4.style.opacity = `0`
        this.button4.addEventListener("click" , () => this.keuzevak())
    }

    keuzeWrong(){
        let game2 = document.getElementsByTagName("game2")[0]

        let background = document.createElement("backgroundact2")
        if (localStorage.getItem("language") == "english"){
            background.style.backgroundImage = `url(assets/Osiris_4Eng.png)`
            this.button3.style.transform = `translate(1vw, 77.9vh)`
            this.input2.style.transform = `translate(14.5vw, 36.5vh)`
        }
        else{
            background.style.backgroundImage = `url(assets/Osiris_4.png)`
        }
        game2.appendChild(background)
    }

    onderwijsAgain(){
        let game2 = document.getElementsByTagName("game2")[0]

        let background = document.createElement("backgroundact2")
        if (localStorage.getItem("language") == "english"){
            background.style.backgroundImage = `url(assets/Osiris_3Eng.png)`
        }
        else{
            background.style.backgroundImage = `url(assets/Osiris_3.png)`
        }
        game2.appendChild(background)

        game2.appendChild(this.input2)
        this.input2.style.width = `17.2vw`
        // this.input1.style.height = `5.7vh`
        this.input2.style.transform = `translate(13.9vw, 30.8vh)`
        // this.input1.style.borderRadius = `25px`
        this.input2.style.fontSize = `17px`
        this.input2.style.paddingLeft = `0.4vw`
        // this.input1.style.fontFamily = `Arial Black`
        // this.input1.style.textTransform = `uppercase`
        this.input2.value = this.input2Save
        this.input2.id = "input2"

        game2.appendChild(this.button3)
        this.button3.style.width = `4vw`
        this.button3.style.height = `2.5vh`
        this.button3.style.transform = `translate(1vw, 86vh)`
        this.button3.style.opacity = `0`
        this.button3.addEventListener("click" , () => this.keuzeCheck())
    }

    keuzevak(){
        let game2 = document.getElementsByTagName("game2")[0]

        let background = document.createElement("backgroundact2")
        if (localStorage.getItem("language") == "english"){
            background.style.backgroundImage = `url(assets/Osiris_6Eng.png)`
        }
        else{
            background.style.backgroundImage = `url(assets/Osiris_6.png)`
        }
        game2.appendChild(background)

        game2.removeChild(this.input2)
        game2.removeChild(this.button4)
        game2.removeChild(this.button7)
        game2.removeChild(this.button3)

        game2.appendChild(this.button5)

        if (localStorage.getItem("language") == "english"){
            this.button5.style.width = `11.7vw`
            this.button5.style.transform = `translate(63vw, 18.5vh)`
        }
        else{
            this.button5.style.width = `10.5vw`
            this.button5.style.transform = `translate(64.5vw, 18.8vh)`
        }
        
        this.button5.style.height = `2vh`
        this.button5.style.opacity = `0`
        this.button5.addEventListener("click" , () => this.signIn())
    }

    signIn(){
        let game2 = document.getElementsByTagName("game2")[0]

        let background = document.createElement("backgroundact2")
        if (localStorage.getItem("language") == "english"){
            background.style.backgroundImage = `url(assets/Osiris_7Eng.png)`
        }
        else{
            background.style.backgroundImage = `url(assets/Osiris_7.png)`
        }
        game2.appendChild(background)
        game2.appendChild(this.extraButton)

        this.extraButton.style.width = `5vw`
        this.extraButton.style.height = `2.5vh`
        this.extraButton.style.transform = `translate(6.5vw, 13.9vh)`
        this.extraButton.style.opacity = `0`
        this.extraButton.addEventListener("click" , () => this.definitief())

        game2.removeChild(this.button5)

        game2.appendChild(this.button6)
        this.button6.style.width = `5vw`
        this.button6.style.height = `2.5vh`
        this.button6.style.transform = `translate(6.5vw, 63.6vh)`
        this.button6.style.opacity = `0`
        this.button6.addEventListener("click" , () => this.definitief())
    }

    definitief(){
        let game2 = document.getElementsByTagName("game2")[0]

        game2.removeChild(this.button6)
        game2.removeChild(this.extraButton)
        let background = document.createElement("backgroundact2")
        if (localStorage.getItem("language") == "english"){
            background.style.backgroundImage = `url(assets/Osiris_8Eng.png)`
        }
        else{
            background.style.backgroundImage = `url(assets/Osiris_8.png)`
        }
        game2.appendChild(background)
    }
}
window.addEventListener("load", () => new Osiris())