class LocatieSelectie{

    background: HTMLElement = document.createElement('backgroundLocation')
    game: Element = document.getElementsByTagName('game')[0]
    educations =  new Locations().collective
    educationSet: HTMLElement
    currentLocation: any
    educationSelect: HTMLElement

    constructor(){
        this.background.style.backgroundImage = "url(assets/PRODUCTION/PRODUCTION/ASSETS/map.png"
        this.game.appendChild(this.background)
        this.educationSetter()
        this.language() 
    }

    goBack(){
        this.game.innerHTML= ""
        new LocatieSelectie()
    }


    language(){
        let language = document.createElement('languagePicker')
        //language.innerHTML = new Languages()[localStorage.getItem('language')][2]

        let dutch = document.createElement('button')
        dutch.innerHTML = 'Nederlands'
        //language.appendChild(dutch)
        let english = document.createElement('button')
        english.innerHTML = 'English'
        //language.appendChild(english)

        document.getElementsByTagName('educationsetter')[0].appendChild(language)

        if(localStorage.getItem('language') == 'dutch'){
            dutch.style.backgroundColor = '#ff9c23'
        }

        if(localStorage.getItem('language') == 'english'){
            english.style.backgroundColor = '#ff9c23'
        }

        dutch.addEventListener('click',()=>{
            localStorage.setItem('language','dutch')
            dutch.style.backgroundColor = '#ff9c23'
            english.style.backgroundColor = ''
            this.goBack()
        })

        english.addEventListener('click',()=>{
            localStorage.setItem('language','english')
            english.style.backgroundColor = '#ff9c23'
            dutch.style.backgroundColor = ''
            this.goBack()
        })


    }

    educationSetter(){
        this.educationSet = document.createElement('educationsetter')
        this.game.appendChild(this.educationSet)

        this.educationSet.innerHTML = new Languages()[localStorage.getItem('language')][0]

        this.educationSelect = document.createElement('select')

        let allEducations = new Array()

        for (let index1 = 0; index1 < this.educations.length; index1++) {

            for (let index2 = 0; index2 < this.educations[index1].opleidingen.length; index2++) {
                allEducations.push(this.educations[index1].opleidingen[index2])
            }
        
        }

        allEducations = allEducations.sort();

        for(let education in allEducations){
            let addToDrop = document.createElement('option')
            addToDrop.value =  allEducations[education]
            addToDrop.innerHTML =  allEducations[education]
            this.educationSelect.appendChild(addToDrop)
        }
           


        this.educationSet.appendChild(this.educationSelect)

        let thisLocation = document.createElement('button')
        thisLocation.innerHTML = new Languages()[localStorage.getItem('language')][1]
        thisLocation.addEventListener('click',() => this.saveEducation())

        this.educationSet.appendChild(thisLocation)
    }

    saveEducation(){
        let education = document.getElementsByTagName('select')[0].value
        localStorage.setItem('education',education)
        this.locationPicker()
    }

    locationPicker(){
        let back = document.createElement("button")
        back.id = 'backToLocatie'
        back.addEventListener('click',() => this.goBack())
        this.game.appendChild(back)

        let map = document.createElement('map')
        this.game.appendChild(map)

        this.background.style.backgroundImage = "url(assets/akte_1_map@0.75x.png)"
        this.background.style.backgroundSize = "100% 100%"

        // deze code is om de opleiding automatisch naar engels te zetten als dat nodig is.
        if (localStorage.getItem("education") == "International Business for Asia"||localStorage.getItem("education") == "International Business & Languages"||localStorage.getItem("education") == "International Business & Management"||localStorage.getItem("education") == "International Business & Supply Chain Management" || localStorage.getItem("education") == "Master Consultancy and Entrepeneurship" || localStorage.getItem("education") == "Master in Supply Chain Management" || localStorage.getItem("education") == "Foundation Programme" || localStorage.getItem("education") == "International Business"){
            localStorage.setItem("language", "english")
        }

        new CenterPopup(new Languages()[localStorage.getItem('language')][78],new Languages()[localStorage.getItem('language')][79],"")
        let popup = <HTMLElement>document.getElementsByTagName("onlinePopup")[0]
       
        popup.style.top = `5vh`
        popup.style.width = `50vw`
        popup.style.left = `22vw`
        let button = <HTMLElement>document.getElementsByClassName("popupButton")[0]
        button.style.top = `85%`

        this.educationSet.remove()

        let locationTekst = document.createElement('locationTekst')
        locationTekst.innerHTML = new Languages()[localStorage.getItem('language')][3]
        this.game.appendChild(locationTekst)

        this.locationMarker(34.3,67.9,'academieplein',0)
        this.locationMarker(46.3,57,'blaak',1)
        this.locationMarker(62.7,61.5,'kralingse_zoom',2)
        this.locationMarker(33.9,78.5,'lloyd_straat',3)
        this.locationMarker(64,60,'max_euwelaan',4)
        this.locationMarker(37,65,'museumpark_hoogbouw',5)
        this.locationMarker(38,63,'museumpark_laagbouw',6)
        this.locationMarker(33,72.5,'pieter_de_hoogweg',7)
        this.locationMarker(49,73,'posthumalaan',8)
        this.locationMarker(15.7,82,'rdm_rotterdam',9)
        this.locationMarker(35,67,'rochussenstraat',10)
        this.locationMarker(46,58,'wijnhaven_61',11)
        this.locationMarker(45,58.4,'wijnhaven_99',12)
        this.locationMarker(44.4,58.7,'wijnhaven_103',13)
        this.locationMarker(43.8,59,'wijnhaven_107',14)
    }

    locationMarker(x: number,y: number,location: string,index: number){
        let marker = document.createElement('pin')
        this.game.appendChild(marker)

        marker.style.transform = `translate(${x}vw,${y}vh)`

        marker.addEventListener('click',() =>{

            let yourEducation = localStorage.getItem('education')!

            if (localStorage.getItem("language") == "dutch"){
                if(this.educations[index].opleidingen.indexOf(yourEducation) > -1){
                        localStorage.setItem('location',this.educations[index].location)
                        this.popupLoc('correct',location,this.educations[index].locatieInfo)
                }else{
                        this.popupLoc('incorrect',location,this.educations[index].locatieInfo)
                } 
            }
            else{
                if(this.educations[index].opleidingen.indexOf(yourEducation) > -1){
                    localStorage.setItem('location',this.educations[index].location)
                    this.popupLoc('correct',location,this.educations[index].locatieInfoEng)
            }else{
                    this.popupLoc('incorrect',location,this.educations[index].locatieInfoEng)
            } 
            }
        })
    }

    popupLoc(awnser: string,location: string,info: string){

        if(document.getElementsByTagName('popupLocation')[0]){
            document.getElementsByTagName('popupLocation')[0].remove()
        }

        let popupLocation = document.createElement('popupLocation')
        let locationImage = document.createElement('locationImage')

        this.game.appendChild(popupLocation)
        popupLocation.appendChild(locationImage)

        locationImage.style.backgroundImage = `url(assets/PRODUCTION/PRODUCTION/ASSETS/${location}.png)`
            
        if(awnser == 'correct'){
            popupLocation.innerHTML +=  new Languages()[localStorage.getItem('language')][4]
            popupLocation.innerHTML += `<p><a target='_blank' href='${info}'>` + new Languages()[localStorage.getItem('language')][5]
            let goto = document.createElement('button')
            popupLocation.appendChild(goto)
            goto.innerHTML = new Languages()[localStorage.getItem('language')][7]
            
            goto.addEventListener('click', () =>{   
                document.getElementsByTagName("game")[0].innerHTML = ""
                new tobuilding
            }) 

        }else{
            
            popupLocation.innerHTML += new Languages()[localStorage.getItem('language')][59]
            popupLocation.innerHTML += `<p><a target='_blank' href='${info}'>` + new Languages()[localStorage.getItem('language')][5]
            let goto = document.createElement('button')
            popupLocation.appendChild(goto)
            goto.innerHTML = new Languages()[localStorage.getItem('language')][6]

            goto.addEventListener('click', () =>{ 
                document.getElementsByTagName('popupLocation')[0].remove()
            }) 
        }


        
    }
}

