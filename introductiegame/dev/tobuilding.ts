class tobuilding{

    protected game = document.getElementsByTagName('game')[0]
    bge: HTMLElement = document.createElement("backgroundenter")
    public i = 0;
    private button1 = document.createElement("button")

    constructor(){
        this.setBackground()
        this.game.appendChild(this.bge)
        // this.bge.addEventListener("mousedown", () => this.setBackground())

        this.game.appendChild(this.button1)
        this.button1.style.width = `20vw`
        this.button1.style.height = `26vh`
        this.button1.style.transform = `translate(48vw, 32vh)`
        this.button1.style.opacity = `0`
        this.button1.addEventListener("click" , () => this.setBackground())

        this.game.appendChild(this.bge)
    }

    setBackground(){

        if (this.i == 0){
            this.bge.style.backgroundImage = 'url(assets/IMG_20200708_123510.jpg)'
            new CenterPopup(new Languages()[localStorage.getItem('language')][65],new Languages()[localStorage.getItem('language')][64],'')
        }
        else if (this.i == 1){
            this.bge.remove()
            this.button1.remove()
            new Act1()
        }
        this.i++;
    }
}
