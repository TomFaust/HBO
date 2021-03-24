class Act2Room2{

    game = document.getElementsByTagName('game')[0]
    bg: HTMLElement = document.createElement("videoBackground")
    video = (<HTMLAudioElement>document.createElement("video"))

    constructor(){
        this.bg.style.backgroundColor = "black"
        this.game.appendChild(this.bg)
        this.game.appendChild(this.video)

        this.video.src = 'assets/Akte2/peerfull-720.mp4'
        this.video.autoplay = true
        this.video.controls = true
        this.video.onended = function() {
                let vid = document.getElementsByTagName("video")[0]
                let bg = document.getElementsByTagName("videoBackground")[0]
                vid.remove()
                bg.remove()
                new Act2
            };
    }
}