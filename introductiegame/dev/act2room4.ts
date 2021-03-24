class Act2Room4{

    game = document.getElementsByTagName('game')[0]
    bg: HTMLElement = document.createElement("videoBackground")
    video = (<HTMLAudioElement>document.createElement("video"))
    signin = document.createElement("signin")

    constructor(){

        this.bg.style.backgroundColor = "black"
        this.game.appendChild(this.bg)
        this.game.appendChild(this.video)
        this.game.appendChild(this.signin)

        this.video.src = 'assets/Akte2/decaanfull-720.mp4'
        this.video.autoplay = true
        this.video.controls = true

        this.signin.style.width = "15vw"
        this.signin.style.height = "auto"
        this.signin.style.transform = "translate(8vw,80vh)"
        this.signin.style.backgroundColor = "#ffb911"
        this.signin.style.borderRadius = "20px"
        this.signin.style.display = "table-cell"
        this.signin.style.fontSize = "18px"
        this.signin.style.textAlign = 'center'
        this.signin.style.paddingTop = '0.5vh'
        this.signin.style.cursor = "pointer"
        this.signin.innerText = new Languages()[localStorage.getItem('language')][45]
        this.signin.addEventListener("click",()=>{
            this.openInNewTab("https://hint.hr.nl/nl/HR/Studie/hulp-bij-studie/Afspraak-maken-decaan-introgame/")
        })



        this.video.onended = function() {
             let vid = document.getElementsByTagName("video")[0]
             let bg = document.getElementsByTagName("videoBackground")[0]
             let signin = document.getElementsByTagName("signin")[0]
             vid.remove()
             bg.remove()
             signin.remove()
             new Act2
          };
    }
    openInNewTab(url:string) {
        var win = window.open(url, '_blank');
        win!.focus();
      }
}