class Act2{

    game = document.getElementsByTagName("game")[0]
    classroomIcon: HTMLElement

    folder : HTMLElement

    folderBackground : HTMLElement

    folderItem1 : HTMLElement
    folderItem2 : HTMLElement
    folderItem3 : HTMLElement
    folderItem4 : HTMLElement
    folderItem5 : HTMLElement
    folderItem6 : HTMLElement

    doorName1 = document.createElement("doorName")
    doorName2 = document.createElement("doorName")
    doorName3 = document.createElement("doorName")
    doorName4 = document.createElement("doorName")
    doorName5 = document.createElement("doorName")

    private input1 = document.createElement("input")
    private input2 = document.createElement("input")
    private input3 = document.createElement("input")
    private input4 = document.createElement("input")
    private input5 = document.createElement("input")

    number1 : string = "number1"
    number2 : string = "number2"
    number3 : string = "number3"
    number4 : string = "number4"
    number5 : string = "number5"
    
    constructor(){
        let background = document.createElement("backgroundact2")
        this.game.appendChild(background)
        this.createFolderItems()
        this.levelSelect()
        this.codeInput()
        this.codeEind()
        this.doorNames()
        this.setHint()

        new hint


    }
    doorNames(){
        this.game.appendChild(this.doorName1)
        this.game.appendChild(this.doorName2)
        this.game.appendChild(this.doorName3)
        this.game.appendChild(this.doorName4)
        this.game.appendChild(this.doorName5)

        this.doorName1.style.width = '11.77vw'
        this.doorName1.style.height = '3.65vh'
        this.doorName1.style.transform = `translate(4.75vw, 27.5vh)`
        this.doorName1.style.textAlign = 'center'
        this.doorName2.style.paddingTop = '1.5vh'
        this.doorName1.style.fontSize = `1vw`
        this.doorName1.style.pointerEvents = "none"
        this.doorName1.innerHTML = new Languages()[localStorage.getItem('language')][46]

        this.doorName2.style.width = '11.77vw'
        this.doorName2.style.height = '3.65vh'
        this.doorName2.style.transform = `translate(24.67vw, 27vh)`
        this.doorName2.style.textAlign = 'center'
        this.doorName2.style.paddingTop = '0.8vh'
        this.doorName2.style.fontSize = `1vw`
        this.doorName2.style.pointerEvents = "none"
        this.doorName2.innerHTML = "Peercoach"

        this.doorName3.style.width = '11.77vw'
        this.doorName3.style.height = '3.65vh'
        this.doorName3.style.transform = `translate(44.36vw, 27vh)`
        this.doorName3.style.textAlign = 'center'
        this.doorName3.style.paddingTop = '0.8vh'
        this.doorName3.style.fontSize = `1vw`
        this.doorName3.style.pointerEvents = "none"
        this.doorName3.innerHTML = new Languages()[localStorage.getItem('language')][85]

        this.doorName4.style.width = '11.77vw'
        this.doorName4.style.height = '3.65vh'
        this.doorName4.style.transform = `translate(64.26vw, 27vh)`
        this.doorName4.style.textAlign = 'center'
        this.doorName4.style.paddingTop = '0.8vh'
        this.doorName4.style.fontSize = `1vw`
        this.doorName4.style.pointerEvents = "none"
        this.doorName4.innerHTML = new Languages()[localStorage.getItem('language')][47]

        this.doorName5.style.width = '11.77vw'
        this.doorName5.style.height = '3.65vh'
        this.doorName5.style.transform = `translate(84vw, 26.8vh)`
        this.doorName5.style.textAlign = 'center'
        this.doorName5.style.paddingTop = '1.3vh'
        this.doorName5.style.fontSize = `0.8vw`
        this.doorName5.style.pointerEvents = "none"
        this.doorName5.innerHTML = new Languages()[localStorage.getItem('language')][86]
    }
    codeInput(){

        this.game.appendChild(this.input1)

        this.input1.style.width = `2.6vw`
        this.input1.style.height = `5.7vh`
        this.input1.style.transform = `translate(8.7vw, 35.45vh)`
        this.input1.style.border = "thick solid #A9A9A9"
        this.input1.style.fontSize = `2.5vw`
        this.input1.maxLength = 1
        this.input1.style.paddingLeft = `0.8vw`
        this.input1.style.fontFamily = `Arial Black`
        this.input1.style.textTransform = `uppercase`
        this.input1.value = localStorage.getItem(this.number1)!
        this.input1.id = "input1"
        this.input1.addEventListener("keyup",()=>{
            this.localStorageUpdate()
            this.codeEind()
        })

        this.game.appendChild(this.input2)

        this.input2.style.width = `2.6vw`
        this.input2.style.height = `5.7vh`
        this.input2.style.transform = `translate(28.6vw, 35.45vh)`
        this.input2.style.border = "thick solid #A9A9A9"
        this.input2.style.fontSize = `2.5vw`
        this.input2.maxLength = 1
        this.input2.style.paddingLeft = `0.8vw`
        this.input2.style.fontFamily = `Arial Black`
        this.input2.style.textTransform = `uppercase`
        this.input2.value = localStorage.getItem(this.number2)!
        this.input2.id = "input2"
        this.input2.addEventListener("keyup",()=>{
            this.localStorageUpdate()
            this.codeEind()
        })

        this.game.appendChild(this.input3)

        this.input3.style.width = `2.8vw`
        this.input3.style.height = `5.7vh`
        this.input3.style.transform = `translate(48.2vw, 35.45vh)`
        this.input3.style.border = "thick solid #A9A9A9"
        this.input3.style.fontSize = `2.5vw`
        this.input3.maxLength = 1
        this.input3.style.paddingLeft = `0.6vw`
        this.input3.style.fontFamily = `Arial Black`
        this.input3.style.textTransform = `uppercase`
        this.input3.value = localStorage.getItem(this.number3)!
        this.input3.id = "input3"
        this.input3.addEventListener("keyup",()=>{
            this.localStorageUpdate()
            this.codeEind()
        })

        this.game.appendChild(this.input4)

        this.input4.style.width = `2.8vw`
        this.input4.style.height = `5.7vh`
        this.input4.style.transform = `translate(68vw, 35.45vh)`
        this.input4.style.border = "thick solid #A9A9A9"
        this.input4.style.fontSize = `2.5vw`
        this.input4.maxLength = 1
        this.input4.style.paddingLeft = `0.6vw`
        this.input4.style.fontFamily = `Arial Black`
        this.input4.style.textTransform = `uppercase`
        this.input4.value = localStorage.getItem(this.number4)!
        this.input4.id = "input4"
        this.input4.addEventListener("keyup",()=>{
            this.localStorageUpdate()
            this.codeEind()
        })

    
        this.game.appendChild(this.input5)

        this.input5.style.width = `2.6vw`
        this.input5.style.height = `5.7vh`
        this.input5.style.transform = `translate(88vw, 35.45vh)`
        this.input5.style.border = "thick solid #A9A9A9"
        this.input5.style.fontSize = `2.5vw`
        this.input5.maxLength = 1
        this.input5.style.paddingLeft = `0.8vw`
        this.input5.style.fontFamily = `Arial Black`
        this.input5.style.textTransform = `uppercase`
        this.input5.value = localStorage.getItem(this.number5)!
        this.input5.id = "input5"
        this.input5.addEventListener("keyup",()=>{
            this.localStorageUpdate()
            this.codeEind()
        })
    }
    
    localStorageUpdate(){
        localStorage.setItem(this.number1, (<HTMLInputElement>document.getElementById("input1")).value)
        localStorage.setItem(this.number2, (<HTMLInputElement>document.getElementById("input2")).value)
        localStorage.setItem(this.number3, (<HTMLInputElement>document.getElementById("input3")).value)
        localStorage.setItem(this.number4, (<HTMLInputElement>document.getElementById("input4")).value)
        localStorage.setItem(this.number5, (<HTMLInputElement>document.getElementById("input5")).value)
    }
    setHint(){
        new popup(new Languages()[localStorage.getItem('language')][48],5,84,10)
        new popupStory(new Languages()[localStorage.getItem('language')][49],30,30,40)
    }

    

    codeEind(){
        let codeString = 
        (<HTMLInputElement>document.getElementById("input1")).value + 
        (<HTMLInputElement>document.getElementById("input2")).value +
        (<HTMLInputElement>document.getElementById("input3")).value + 
        (<HTMLInputElement>document.getElementById("input4")).value + 
        (<HTMLInputElement>document.getElementById("input5")).value

        if(codeString.toLowerCase() =="dbnve" || codeString.toLowerCase() == "dbnkn"){
            this.input1.style.border = "thick solid #00FF00"
            this.input2.style.border = "thick solid #00FF00"
            this.input3.style.border = "thick solid #00FF00"
            this.input4.style.border = "thick solid #00FF00"
            this.input5.style.border = "thick solid #00FF00"

            new CenterPopup(new Languages()[localStorage.getItem('language')][50],new Languages()[localStorage.getItem('language')][51],new Languages()[localStorage.getItem('language')][52])
            
        }else{
            this.input1.style.border = "thick solid #FF0000"
            this.input2.style.border = "thick solid #FF0000"
            this.input3.style.border = "thick solid #FF0000"
            this.input4.style.border = "thick solid #FF0000"
            this.input5.style.border = "thick solid #FF0000"
            
        }
    }
    
    makeLevelIcon(posX: number,posY: number,width: number,height: number){
        this.classroomIcon = document.createElement('classroom')
        this.game.appendChild(this.classroomIcon)

        this.classroomIcon.style.transform = `translate(${posX}vw,${posY}vh)`
        this.classroomIcon.style.width = `${width}vw`
        this.classroomIcon.style.height = `${height}vh`
    }

    levelSelect(){

        this.makeLevelIcon(4,25,13,43)
        this.classroomIcon.addEventListener("click",()=>{
            document.getElementsByTagName("game")[0].innerHTML = ""
            if(localStorage.getItem('language') == 'english'){
                new Act2Room1Eng
            }
            else{
                new Act2Room1
            }
        })
        this.makeLevelIcon(24,25,13,43)
        this.classroomIcon.addEventListener("click",()=>{
            document.getElementsByTagName("game")[0].innerHTML = ""
            new Act2Room2
        })
        this.makeLevelIcon(43.5,25,13,43)
        this.classroomIcon.addEventListener("click",()=>{
            document.getElementsByTagName("game")[0].innerHTML = ""
            if(localStorage.getItem('language') == 'english'){
                new Act2Room3Eng
            }
            else{
                new Act2Room3
            }
        })
        this.makeLevelIcon(63.8,25,13,43)
        this.classroomIcon.addEventListener("click",()=>{
            document.getElementsByTagName("game")[0].innerHTML = ""
            if(localStorage.getItem('language') == 'english'){
                new Act2Room4Eng
            }
            else{
                new Act2Room4
            }
        })
        this.makeLevelIcon(83.5,25,13,43)
        this.classroomIcon.addEventListener("click",()=>{
            document.getElementsByTagName("game")[0].innerHTML = ""
            if(localStorage.getItem('language') == 'english'){
                new Act2Room5Eng
            }
            else{
                new Act2Room5
            }
        })
    }

    createFolderItems(){

        this.folderBackground = document.createElement("folderbackground")
        
        this.folderItem1 = document.createElement("folderitem")
        this.folderItem2 = document.createElement("folderitem")
        this.folderItem3 = document.createElement("folderitem")
        this.folderItem4 = document.createElement("folderitem")
        this.folderItem5 = document.createElement("folderitem")
        this.folderItem6 = document.createElement("folderitem")

        this.game.appendChild(this.folderItem1)
        this.game.appendChild(this.folderItem2)
        this.game.appendChild(this.folderItem3)
        this.game.appendChild(this.folderItem4)
        this.game.appendChild(this.folderItem5)
        this.game.appendChild(this.folderItem6)

        this.folderBackground.style.backgroundColor = "black"
        this.folderBackground.style.opacity = "0.8"
        this.folderBackground.style.zIndex = "15"
        
        this.folderItem1.style.backgroundImage = 'url(assets/PRODUCTION/PRODUCTION/ASSETS/flyer_getallen.png)'
        this.folderItem1.style.transform = `translate(20vw,72vh)`
        this.folderItem1.style.width = '8.3vw'
        this.folderItem1.style.height = '8.3vh'
        this.folderItem1.addEventListener("click",()=>{
            this.game.appendChild(this.folderBackground)
            new Act2folder1
        })


        this.folderItem2.style.backgroundImage = 'url(assets/PRODUCTION/PRODUCTION/ASSETS/flyer_studie.png)'
        this.folderItem2.style.transform = `translate(44vw,87vh)`
        this.folderItem2.style.width = '12vw'
        this.folderItem2.style.height = '12vh'
        this.folderItem2.addEventListener("click",()=>{
            this.game.appendChild(this.folderBackground)
            if(localStorage.getItem('language') == 'english'){
                new Act2folder2Eng
            }
            else{
                new Act2folder2
            }
        })

        this.folderItem3.style.backgroundImage = 'url(assets/PRODUCTION/PRODUCTION/ASSETS/flyer_solliciteren.png)'
        this.folderItem3.style.transform = `translate(60vw,70vh)`
        this.folderItem3.style.width = '8vw'
        this.folderItem3.style.height = '8vh'
        this.folderItem3.addEventListener("click",()=>{
            this.game.appendChild(this.folderBackground)
            if(localStorage.getItem('language') == 'english'){
                new Act2folder3Eng
            }
            else{
                new Act2folder3
            }
        })

        this.folderItem4.style.backgroundImage = 'url(assets/PRODUCTION/PRODUCTION/ASSETS/flyer_coia.png)'
        this.folderItem4.style.transform = `translate(3vw,83vh)`
        this.folderItem4.style.width = '10vw'
        this.folderItem4.style.height = '10vh'
        this.folderItem4.addEventListener("click",()=>{
            this.game.appendChild(this.folderBackground)
            new Act2folder4
        })

        this.folderItem5.style.backgroundImage = 'url(assets/PRODUCTION/PRODUCTION/ASSETS/flyer_morsecode.png)'
        this.folderItem5.style.transform = `translate(80vw,78vh)`
        this.folderItem5.style.width = '10vw'
        this.folderItem5.style.height = '10vh'
        this.folderItem5.addEventListener("click",()=>{
            this.game.appendChild(this.folderBackground)
            new Act2folder5
        })

        this.folderItem6.style.backgroundImage = 'url(assets/Akte2/Postervormen&kleuren.jpg)'
        this.folderItem6.style.transform = `translate(58.1vw,30vh)`
        this.folderItem6.style.width = '4.45vw'
        this.folderItem6.style.height = '11.6vh'
        this.folderItem6.addEventListener("click",()=>{
            this.game.appendChild(this.folderBackground)
            new Act2folder6
        })
        
    }
}
class folders{
    
    game = document.getElementsByTagName('game')[0]
    folder: HTMLElement = document.createElement("openfolder")
    constructor(){
        this.createFolder()
    }
    createFolder(){
        this.folder.style.width = '100vw'
        this.folder.style.height = '100vh'
        this.game.appendChild(this.folder)
        this.folder.addEventListener("click",()=>{
            let folderBG = document.getElementsByTagName('folderbackground')[0]
            folderBG.remove()
            this.folder.remove()
        })
        
    }
}

class Act2folder1 extends folders{
    
    constructor(){
        super()
        this.folder.style.backgroundImage = 'url(assets/Akte2/Flyer1getallen.jpg)'
        this.folder.style.height = "60vh"
        this.folder.style.marginTop = "20vh"
    
    }
}
class Act2folder2 extends folders{

    constructor(){
        super()
        this.folder.style.backgroundImage = 'url(assets/Akte2/Flyer2HulpbijStudie.jpg)'
    }
}
class Act2folder2Eng extends folders{

    constructor(){
        super()
        this.folder.style.backgroundImage = 'url(assets/Akte2/Flyer2StudyHelpENG.jpg)'
    }
}
class Act2folder3 extends folders{

    constructor(){
        super()
        this.folder.style.backgroundImage = 'url(assets/Akte2/Flyer3WorkshopSolliciteren.jpg)'
    }
}
class Act2folder3Eng extends folders{

    constructor(){
        super()
        this.folder.style.backgroundImage = 'url(assets/Akte2/Flyer3WorkshopJobinterviewENG.jpg)'
    }
}
class Act2folder4 extends folders{

    constructor(){
        super()
        this.folder.style.backgroundImage = 'url(assets/Akte2/Flyer4COIAinfo.png)'
    }
}
class Act2folder5 extends folders{

    constructor(){
        super()
        this.folder.style.backgroundImage = 'url(assets/Akte2/Flyer5MorseCodeAlfabet.jpg)'
        this.folder.style.height = "60vh"
        this.folder.style.marginTop = "20vh"
    }
}
class Act2folder6 extends folders{

    constructor(){
        super()
        this.folder.style.backgroundImage = 'url(assets/Akte2/Postervormen&kleuren.jpg)'
    }
}