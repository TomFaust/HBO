class Act2Room1{

    game = document.getElementsByTagName('game')[0]
    bg: HTMLElement = document.createElement("act2background")

    constructor(){
        this.openInNewTab("https://hint.hr.nl/nl/HR/Studie/hulp-bij-studie/vertrouwenspersoon-introgame/?ticket=ST-7561117-asFVoii1iQmlJNL9MKZ3jK4u9c0lwEYAbd5-20")
        new Act2
    }
    openInNewTab(url:string) {
        var win = window.open(url, '_blank');
        win!.focus();
      }
}