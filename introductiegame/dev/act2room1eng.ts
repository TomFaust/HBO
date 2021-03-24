class Act2Room1Eng{

    game = document.getElementsByTagName('game')[0]
    bg: HTMLElement = document.createElement("act2background")

    constructor(){
        this.openInNewTab("https://hint.hr.nl/nl/HR/english/study-information/study-help/Confidential-counsellor-introgame/?ticket=ST-25825-0rpbSWBnN9PAyE0xqiqmpyoN4HiTB01bV0s-20")
        new Act2
    }
    openInNewTab(url:string) {
        var win = window.open(url, '_blank');
        win!.focus();
      }
}