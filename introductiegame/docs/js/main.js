var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Act1 = (function () {
    function Act1() {
        this.input1 = document.createElement("input");
        this.input2 = document.createElement("input");
        this.input3 = document.createElement("input");
        this.button1 = document.createElement("button");
        this.input1Save = "";
        this.input2Save = "";
        this.input3Save = "";
        this.popupSave = false;
        this.createAnswerScreen();
        sessionStorage.setItem("index1", "0");
        sessionStorage.setItem("index2", "0");
        sessionStorage.setItem("index3", "0");
    }
    Act1.prototype.createAnswerScreen = function () {
        var _this = this;
        var game = document.getElementsByTagName("game")[0];
        var background = document.createElement("backgroundact1");
        var location = localStorage.getItem('location');
        background.style.backgroundImage = "url(assets/PRODUCTION/PRODUCTION/ASSETS/" + location + "_door.jpg)";
        game.appendChild(background);
        var banner = document.createElement('banner');
        game.appendChild(banner);
        var act1Box = document.createElement('act1Box');
        act1Box.innerHTML = new Languages()[localStorage.getItem('language')][8];
        game.appendChild(act1Box);
        game.appendChild(this.input1);
        this.input1.classList.add('inputShape');
        this.input1.style.transform = "translate(26vw, 39.2vh)";
        this.input1.value = this.input1Save;
        this.input1.id = "input1";
        this.input1.style.display = "none";
        game.appendChild(this.input2);
        this.input2.classList.add('inputShape');
        this.input2.style.transform = "translate(42.7vw, 39.2vh)";
        this.input2.value = this.input2Save;
        this.input2.id = "input2";
        this.input2.style.display = "none";
        game.appendChild(this.input3);
        this.input3.classList.add('inputShape');
        this.input3.style.transform = "translate(59.2vw, 39.2vh)";
        this.input3.value = this.input3Save;
        this.input3.id = "input3";
        this.input3.style.display = "none";
        var img1 = document.createElement('img');
        img1.src = "assets/Akte 1/vormen/klaver.png";
        img1.classList.add('vorm1');
        img1.id = "img1";
        game.appendChild(img1);
        var images1 = ["assets/Akte 1/vormen/driehoek.png", "assets/Akte 1/vormen/hart.png", "assets/Akte 1/vormen/cirkel.png", "assets/Akte 1/vormen/kroon.png", "assets/Akte 1/vormen/maan.png", "assets/Akte 1/vormen/ruiten.png", "assets/Akte 1/vormen/schoppen.png", "assets/Akte 1/vormen/ster.png", "assets/Akte 1/vormen/vierkant.png", "assets/Akte 1/vormen/klaver.png"];
        var index1 = 0;
        img1.addEventListener("click", function () {
            img1.src = images1[index1];
            index1 = (index1 === images1.length - 1) ? 0 : index1 + 1;
            var index1ToString = "" + index1;
            sessionStorage.setItem("index1", index1ToString);
        });
        var img2 = document.createElement('img');
        img2.src = "assets/Akte 1/vormen/driehoek.png";
        img2.classList.add('vorm2');
        img2.id = "img2";
        game.appendChild(img2);
        var images2 = ["assets/Akte 1/vormen/cirkel.png", "assets/Akte 1/vormen/hart.png", "assets/Akte 1/vormen/klaver.png", "assets/Akte 1/vormen/kroon.png", "assets/Akte 1/vormen/maan.png", "assets/Akte 1/vormen/ruiten.png", "assets/Akte 1/vormen/schoppen.png", "assets/Akte 1/vormen/ster.png", "assets/Akte 1/vormen/vierkant.png", "assets/Akte 1/vormen/driehoek.png"];
        var index2 = 0;
        img2.addEventListener("click", function () {
            img2.src = images2[index2];
            index2 = (index2 === images2.length - 1) ? 0 : index2 + 1;
            var index2ToString = "" + index2;
            sessionStorage.setItem("index2", index2ToString);
        });
        var img3 = document.createElement('img');
        img3.src = "assets/Akte 1/vormen/cirkel.png";
        img3.classList.add('vorm3');
        img3.id = "img3";
        game.appendChild(img3);
        var images3 = ["assets/Akte 1/vormen/driehoek.png", "assets/Akte 1/vormen/hart.png", "assets/Akte 1/vormen/klaver.png", "assets/Akte 1/vormen/kroon.png", "assets/Akte 1/vormen/maan.png", "assets/Akte 1/vormen/ruiten.png", "assets/Akte 1/vormen/schoppen.png", "assets/Akte 1/vormen/ster.png", "assets/Akte 1/vormen/vierkant.png", "assets/Akte 1/vormen/cirkel.png"];
        var index3 = 0;
        img3.addEventListener("click", function () {
            img3.src = images3[index3];
            index3 = (index3 === images3.length - 1) ? 0 : index3 + 1;
            var index3ToString = "" + index3;
            sessionStorage.setItem("index3", index3ToString);
        });
        game.appendChild(this.button1);
        this.button1.style.width = "15.1vw";
        this.button1.style.height = "7.5vh";
        this.button1.style.transform = "translate(52.5vw, 56vh)";
        this.button1.innerHTML = new Languages()[localStorage.getItem('language')][9];
        this.button1.classList.add('verzenden');
        this.button1.addEventListener("click", function () { return _this.shapeCheck(); });
        var button2 = document.createElement("button");
        game.appendChild(button2);
        button2.style.height = "7.5vh";
        button2.style.width = "15.1vw";
        button2.style.transform = "translate(30vw, 56vh)";
        button2.classList.add('verzenden');
        button2.innerHTML = new Languages()[localStorage.getItem('language')][10];
        button2.addEventListener("click", function () { return _this.searchOnline(); });
        var button3 = document.createElement("button");
        game.appendChild(button3);
        button3.style.width = "9vw";
        button3.style.height = "7.6vh";
        button3.style.transform = "translate(91vw, 0vh)";
        button3.style.opacity = "0";
        button3.addEventListener("click", function () { return _this.searchOnline(); });
    };
    Act1.prototype.shapeCheck = function () {
        var shape1 = sessionStorage.getItem("index1");
        var shape2 = sessionStorage.getItem("index2");
        var shape3 = sessionStorage.getItem("index3");
        if (shape1 == "3" && shape2 == "9" && shape3 == "1") {
            var popup_1 = document.createElement("onlinePopup");
            var game = document.getElementsByTagName("game")[0];
            game.appendChild(popup_1);
            popup_1.innerHTML = new Languages()[localStorage.getItem('language')][69];
            var input_1 = document.createElement("input");
            popup_1.appendChild(input_1);
            var button_1 = document.createElement("button");
            popup_1.appendChild(button_1);
            button_1.innerHTML = new Languages()[localStorage.getItem('language')][52];
            input_1.style.width = "80%";
            input_1.style.height = "3vh";
            input_1.addEventListener("keyup", function () {
                localStorage.setItem("teamName", input_1.value);
            });
            button_1.addEventListener("click", function () {
                if (localStorage.getItem("teamName") == null) {
                    button_1.innerHTML = new Languages()[localStorage.getItem('language')][70];
                }
                else {
                    document.getElementsByTagName("game")[0].innerHTML = "";
                    new Pause(1, 'EnterBuilding');
                }
            });
        }
        else {
            var game = document.getElementsByTagName('game')[0];
            var inputs_1 = document.getElementsByTagName('img');
            for (var index = 0; index < inputs_1.length; index++) {
                inputs_1[index].style.border = 'solid 3px red';
            }
            var wrong_1 = document.createElement('wrong');
            wrong_1.innerHTML = new Languages()[localStorage.getItem('language')][14];
            game.appendChild(wrong_1);
            setTimeout(function () {
                for (var index = 0; index < inputs_1.length; index++) {
                    inputs_1[index].style.border = '';
                    wrong_1.remove();
                }
            }, 2000);
        }
    };
    Act1.prototype.searchOnline = function () {
        var _this = this;
        this.input1Save = document.getElementById("input1").value;
        this.input2Save = document.getElementById("input2").value;
        this.input3Save = document.getElementById("input3").value;
        document.getElementsByTagName("game")[0].innerHTML = "";
        var background = document.createElement("backgroundOnline");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(background);
        if (localStorage.getItem("language") == "english") {
            background.style.backgroundImage = "url(assets/floormapEn.png)";
        }
        var banner = document.createElement('banner');
        game.appendChild(banner);
        if (this.popupSave == false) {
            new CenterPopup(new Languages()[localStorage.getItem('language')][12], new Languages()[localStorage.getItem('language')][13], '');
            this.popupSave = true;
        }
        var button1 = document.createElement("button");
        var button2 = document.createElement("button");
        var button3 = document.createElement("button");
        var button4 = document.createElement("button");
        var button5 = document.createElement("button");
        var button6 = document.createElement("button");
        var button7 = document.createElement("button");
        var button8 = document.createElement("button");
        var button9 = document.createElement("button");
        game.appendChild(button1);
        game.appendChild(button2);
        game.appendChild(button3);
        game.appendChild(button4);
        game.appendChild(button5);
        game.appendChild(button6);
        game.appendChild(button7);
        game.appendChild(button8);
        game.appendChild(button9);
        button1.style.width = "16.6vw";
        button1.style.height = "77.1vh";
        button1.style.transform = "translate(11.2vw, 10.8vh)";
        button1.style.opacity = "0";
        button1.addEventListener("click", function () { return _this.webmail(); });
        button2.style.width = "23.4vw";
        button2.style.height = "15.4vh";
        button2.style.transform = "translate(29.6vw, 72.9vh)";
        button2.style.opacity = "0";
        button2.addEventListener("click", function () { return _this.rooster(); });
        button3.style.width = "11.2vw";
        button3.style.height = "34.5vh";
        button3.style.transform = "translate(54.6vw, 10.6vh)";
        button3.style.opacity = "0";
        button3.addEventListener("click", function () { return _this.studentenServiceCenter(); });
        button4.style.width = "17.3vw";
        button4.style.height = "22.6vh";
        button4.style.transform = "translate(58.8vw, 65.5vh)";
        button4.style.opacity = "0";
        button4.addEventListener("click", function () { return _this.studentenpas(); });
        button5.style.width = "10.9vw";
        button5.style.height = "77.5vh";
        button5.style.transform = "translate(78vw, 10.7vh)";
        button5.style.opacity = "0";
        button5.addEventListener("click", function () { return _this.lms(); });
        button6.style.width = "9vw";
        button6.style.height = "8.5vh";
        button6.style.transform = "translate(91vw, 0vh)";
        button6.style.opacity = "0";
        button6.addEventListener("click", function () { return _this.goBack(); });
        button7.style.width = "8.9vw";
        button7.style.height = "22.7vh";
        button7.style.transform = "translate(67.4vw, 10.7vh)";
        button7.style.opacity = "0";
        button7.addEventListener("click", function () { return _this.osiris(); });
        button8.style.width = "10.9vw";
        button8.style.height = "46vh";
        button8.style.transform = "translate(42.1vw, 10.7vh)";
        button8.style.opacity = "0";
        button8.addEventListener("click", function () { return _this.library(); });
        button9.style.width = "10.9vw";
        button9.style.height = "46vh";
        button9.style.transform = "translate(29.6vw, 10.7vh)";
        button9.style.opacity = "0";
        button9.addEventListener("click", function () { return _this.app(); });
    };
    Act1.prototype.webmail = function () {
        window.open('https://webmail.hr.nl', '_blank');
    };
    Act1.prototype.osiris = function () {
        window.open('osiris.html', '_blank');
    };
    Act1.prototype.rooster = function () {
        new CenterPopup(new Languages()[localStorage.getItem('language')][15], new Languages()[localStorage.getItem('language')][16], 'https://hint.hr.nl/nl/HR/Studie/roosters-en-cijfers/Lesrooster/');
    };
    Act1.prototype.studentenServiceCenter = function () {
        if (localStorage.getItem('language') == 'dutch') {
            new CenterPopup(new Languages()[localStorage.getItem('language')][17], new Languages()[localStorage.getItem('language')][18], 'https://hint.hr.nl/nl/HR/Studie/Studenten-Service-Center/contact-intro-game/?ticket=ST-8256325-afrgd0alCe3y9MWc7In5PdmV1MXNE42FUsq-20');
        }
        else if (localStorage.getItem('language') == 'english') {
            new CenterPopup(new Languages()[localStorage.getItem('language')][17], new Languages()[localStorage.getItem('language')][18], 'https://hint.hr.nl/nl/HR/Studie/Studenten-Service-Center/contact-intro-game/ENG/');
        }
    };
    Act1.prototype.studentenpas = function () {
        var game = document.getElementsByTagName("game")[0];
        var img = document.createElement('img');
        img.src = "assets/studentenpas.png";
        img.classList.add('studentenPas');
        game.appendChild(img);
        img.addEventListener("click", function () {
            button.style.display = "none";
            game.removeChild(img);
            button.remove();
        });
        img.style.position = "absolute";
        var button = document.createElement("button");
        game.appendChild(button);
        button.style.width = "20.3vw";
        button.style.height = "18vh";
        button.style.transform = "translate(61.2vw, 63.8vh)";
        button.style.opacity = "0";
        button.addEventListener("click", function () {
            button.style.display = "none";
            game.removeChild(img);
            button.remove();
        });
    };
    Act1.prototype.lms = function () {
        var _this = this;
        document.getElementsByTagName("game")[0].innerHTML = "";
        var background = document.createElement("backgroundOnline");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(background);
        if (localStorage.getItem("language") == "english") {
            background.style.backgroundImage = "url(assets/floormapEn.png)";
        }
        var banner = document.createElement('banner');
        game.appendChild(banner);
        var button1 = document.createElement("button");
        var button2 = document.createElement("button");
        var button3 = document.createElement("button");
        var button4 = document.createElement("button");
        var button5 = document.createElement("button");
        var button6 = document.createElement("button");
        var button7 = document.createElement("button");
        var button8 = document.createElement("button");
        var button9 = document.createElement("button");
        game.appendChild(button1);
        game.appendChild(button2);
        game.appendChild(button3);
        game.appendChild(button4);
        game.appendChild(button5);
        game.appendChild(button6);
        game.appendChild(button7);
        game.appendChild(button8);
        game.appendChild(button9);
        button1.style.width = "16.6vw";
        button1.style.height = "77.1vh";
        button1.style.transform = "translate(11.2vw, 10.8vh)";
        button1.style.opacity = "0";
        button1.addEventListener("click", function () { return _this.webmail(); });
        button2.style.width = "23.4vw";
        button2.style.height = "15.4vh";
        button2.style.transform = "translate(29.6vw, 72.9vh)";
        button2.style.opacity = "0";
        button2.addEventListener("click", function () { return _this.rooster(); });
        button3.style.width = "11.2vw";
        button3.style.height = "34.5vh";
        button3.style.transform = "translate(54.6vw, 10.6vh)";
        button3.style.opacity = "0";
        button3.addEventListener("click", function () { return _this.studentenServiceCenter(); });
        button4.style.width = "17.3vw";
        button4.style.height = "22.6vh";
        button4.style.transform = "translate(58.8vw, 65.5vh)";
        button4.style.opacity = "0";
        button4.addEventListener("click", function () { return _this.studentenpas(); });
        button5.style.width = "10.9vw";
        button5.style.height = "77.5vh";
        button5.style.transform = "translate(78vw, 10.7vh)";
        button5.style.opacity = "0";
        button5.addEventListener("click", function () { return _this.lms(); });
        button6.style.width = "9vw";
        button6.style.height = "8.5vh";
        button6.style.transform = "translate(91vw, 0vh)";
        button6.style.opacity = "0";
        button6.addEventListener("click", function () { return _this.goBack(); });
        button7.style.width = "8.9vw";
        button7.style.height = "22.7vh";
        button7.style.transform = "translate(67.4vw, 10.7vh)";
        button7.style.opacity = "0";
        button7.addEventListener("click", function () { return _this.osiris(); });
        button8.style.width = "10.9vw";
        button8.style.height = "46vh";
        button8.style.transform = "translate(42.1vw, 10.7vh)";
        button8.style.opacity = "0";
        button8.addEventListener("click", function () { return _this.library(); });
        button9.style.width = "10.9vw";
        button9.style.height = "46vh";
        button9.style.transform = "translate(29.6vw, 10.7vh)";
        button9.style.opacity = "0";
        button9.addEventListener("click", function () { return _this.app(); });
        new CenterPopup('Cum laude', new Languages()[localStorage.getItem('language')][19], 'https://lms.hr.nl');
        var button = document.getElementsByClassName("popupButton")[0];
        button.style.top = "85%";
    };
    Act1.prototype.library = function () {
        if (localStorage.getItem("language") == "dutch") {
            window.open('https://www.hogeschoolrotterdam.nl/voorlichting/voorzieningen/mediatheek/newsitem/welkom-studenten/190679/', '_blank');
        }
        else {
            window.open("https://www.rotterdamuas.com/study-information/practical-information/facilities/library/", "_blank");
        }
    };
    Act1.prototype.app = function () {
        var _this = this;
        document.getElementsByTagName("game")[0].innerHTML = "";
        var background = document.createElement("backgroundOnline");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(background);
        if (localStorage.getItem("language") == "english") {
            background.style.backgroundImage = "url(assets/floormapEn.png)";
        }
        var banner = document.createElement('banner');
        game.appendChild(banner);
        var button1 = document.createElement("button");
        var button2 = document.createElement("button");
        var button3 = document.createElement("button");
        var button4 = document.createElement("button");
        var button5 = document.createElement("button");
        var button6 = document.createElement("button");
        var button7 = document.createElement("button");
        var button8 = document.createElement("button");
        var button9 = document.createElement("button");
        game.appendChild(button1);
        game.appendChild(button2);
        game.appendChild(button3);
        game.appendChild(button4);
        game.appendChild(button5);
        game.appendChild(button6);
        game.appendChild(button7);
        game.appendChild(button8);
        game.appendChild(button9);
        button1.style.width = "16.6vw";
        button1.style.height = "77.1vh";
        button1.style.transform = "translate(11.2vw, 10.8vh)";
        button1.style.opacity = "0";
        button1.addEventListener("click", function () { return _this.webmail(); });
        button2.style.width = "23.4vw";
        button2.style.height = "15.4vh";
        button2.style.transform = "translate(29.6vw, 72.9vh)";
        button2.style.opacity = "0";
        button2.addEventListener("click", function () { return _this.rooster(); });
        button3.style.width = "11.2vw";
        button3.style.height = "34.5vh";
        button3.style.transform = "translate(54.6vw, 10.6vh)";
        button3.style.opacity = "0";
        button3.addEventListener("click", function () { return _this.studentenServiceCenter(); });
        button4.style.width = "17.3vw";
        button4.style.height = "22.6vh";
        button4.style.transform = "translate(58.8vw, 65.5vh)";
        button4.style.opacity = "0";
        button4.addEventListener("click", function () { return _this.studentenpas(); });
        button5.style.width = "10.9vw";
        button5.style.height = "77.5vh";
        button5.style.transform = "translate(78vw, 10.7vh)";
        button5.style.opacity = "0";
        button5.addEventListener("click", function () { return _this.lms(); });
        button6.style.width = "9vw";
        button6.style.height = "8.5vh";
        button6.style.transform = "translate(91vw, 0vh)";
        button6.style.opacity = "0";
        button6.addEventListener("click", function () { return _this.goBack(); });
        button7.style.width = "8.9vw";
        button7.style.height = "22.7vh";
        button7.style.transform = "translate(67.4vw, 10.7vh)";
        button7.style.opacity = "0";
        button7.addEventListener("click", function () { return _this.osiris(); });
        button8.style.width = "10.9vw";
        button8.style.height = "46vh";
        button8.style.transform = "translate(42.1vw, 10.7vh)";
        button8.style.opacity = "0";
        button8.addEventListener("click", function () { return _this.library(); });
        button9.style.width = "10.9vw";
        button9.style.height = "46vh";
        button9.style.transform = "translate(29.6vw, 10.7vh)";
        button9.style.opacity = "0";
        button9.addEventListener("click", function () { return _this.app(); });
        new CenterPopup(new Languages()[localStorage.getItem('language')][83], new Languages()[localStorage.getItem('language')][84], '');
        var button = document.getElementsByClassName("popupButton")[0];
        button.style.top = "85%";
    };
    Act1.prototype.goBack = function () {
        document.getElementsByTagName("game")[0].innerHTML = "";
        this.createAnswerScreen();
    };
    return Act1;
}());
var Act2 = (function () {
    function Act2() {
        this.game = document.getElementsByTagName("game")[0];
        this.doorName1 = document.createElement("doorName");
        this.doorName2 = document.createElement("doorName");
        this.doorName3 = document.createElement("doorName");
        this.doorName4 = document.createElement("doorName");
        this.doorName5 = document.createElement("doorName");
        this.input1 = document.createElement("input");
        this.input2 = document.createElement("input");
        this.input3 = document.createElement("input");
        this.input4 = document.createElement("input");
        this.input5 = document.createElement("input");
        this.number1 = "number1";
        this.number2 = "number2";
        this.number3 = "number3";
        this.number4 = "number4";
        this.number5 = "number5";
        var background = document.createElement("backgroundact2");
        this.game.appendChild(background);
        this.createFolderItems();
        this.levelSelect();
        this.codeInput();
        this.codeEind();
        this.doorNames();
        this.setHint();
        new hint;
    }
    Act2.prototype.doorNames = function () {
        this.game.appendChild(this.doorName1);
        this.game.appendChild(this.doorName2);
        this.game.appendChild(this.doorName3);
        this.game.appendChild(this.doorName4);
        this.game.appendChild(this.doorName5);
        this.doorName1.style.width = '11.77vw';
        this.doorName1.style.height = '3.65vh';
        this.doorName1.style.transform = "translate(4.75vw, 27.5vh)";
        this.doorName1.style.textAlign = 'center';
        this.doorName2.style.paddingTop = '1.5vh';
        this.doorName1.style.fontSize = "1vw";
        this.doorName1.style.pointerEvents = "none";
        this.doorName1.innerHTML = new Languages()[localStorage.getItem('language')][46];
        this.doorName2.style.width = '11.77vw';
        this.doorName2.style.height = '3.65vh';
        this.doorName2.style.transform = "translate(24.67vw, 27vh)";
        this.doorName2.style.textAlign = 'center';
        this.doorName2.style.paddingTop = '0.8vh';
        this.doorName2.style.fontSize = "1vw";
        this.doorName2.style.pointerEvents = "none";
        this.doorName2.innerHTML = "Peercoach";
        this.doorName3.style.width = '11.77vw';
        this.doorName3.style.height = '3.65vh';
        this.doorName3.style.transform = "translate(44.36vw, 27vh)";
        this.doorName3.style.textAlign = 'center';
        this.doorName3.style.paddingTop = '0.8vh';
        this.doorName3.style.fontSize = "1vw";
        this.doorName3.style.pointerEvents = "none";
        this.doorName3.innerHTML = new Languages()[localStorage.getItem('language')][85];
        this.doorName4.style.width = '11.77vw';
        this.doorName4.style.height = '3.65vh';
        this.doorName4.style.transform = "translate(64.26vw, 27vh)";
        this.doorName4.style.textAlign = 'center';
        this.doorName4.style.paddingTop = '0.8vh';
        this.doorName4.style.fontSize = "1vw";
        this.doorName4.style.pointerEvents = "none";
        this.doorName4.innerHTML = new Languages()[localStorage.getItem('language')][47];
        this.doorName5.style.width = '11.77vw';
        this.doorName5.style.height = '3.65vh';
        this.doorName5.style.transform = "translate(84vw, 26.8vh)";
        this.doorName5.style.textAlign = 'center';
        this.doorName5.style.paddingTop = '1.3vh';
        this.doorName5.style.fontSize = "0.8vw";
        this.doorName5.style.pointerEvents = "none";
        this.doorName5.innerHTML = new Languages()[localStorage.getItem('language')][86];
    };
    Act2.prototype.codeInput = function () {
        var _this = this;
        this.game.appendChild(this.input1);
        this.input1.style.width = "2.6vw";
        this.input1.style.height = "5.7vh";
        this.input1.style.transform = "translate(8.7vw, 35.45vh)";
        this.input1.style.border = "thick solid #A9A9A9";
        this.input1.style.fontSize = "2.5vw";
        this.input1.maxLength = 1;
        this.input1.style.paddingLeft = "0.8vw";
        this.input1.style.fontFamily = "Arial Black";
        this.input1.style.textTransform = "uppercase";
        this.input1.value = localStorage.getItem(this.number1);
        this.input1.id = "input1";
        this.input1.addEventListener("keyup", function () {
            _this.localStorageUpdate();
            _this.codeEind();
        });
        this.game.appendChild(this.input2);
        this.input2.style.width = "2.6vw";
        this.input2.style.height = "5.7vh";
        this.input2.style.transform = "translate(28.6vw, 35.45vh)";
        this.input2.style.border = "thick solid #A9A9A9";
        this.input2.style.fontSize = "2.5vw";
        this.input2.maxLength = 1;
        this.input2.style.paddingLeft = "0.8vw";
        this.input2.style.fontFamily = "Arial Black";
        this.input2.style.textTransform = "uppercase";
        this.input2.value = localStorage.getItem(this.number2);
        this.input2.id = "input2";
        this.input2.addEventListener("keyup", function () {
            _this.localStorageUpdate();
            _this.codeEind();
        });
        this.game.appendChild(this.input3);
        this.input3.style.width = "2.8vw";
        this.input3.style.height = "5.7vh";
        this.input3.style.transform = "translate(48.2vw, 35.45vh)";
        this.input3.style.border = "thick solid #A9A9A9";
        this.input3.style.fontSize = "2.5vw";
        this.input3.maxLength = 1;
        this.input3.style.paddingLeft = "0.6vw";
        this.input3.style.fontFamily = "Arial Black";
        this.input3.style.textTransform = "uppercase";
        this.input3.value = localStorage.getItem(this.number3);
        this.input3.id = "input3";
        this.input3.addEventListener("keyup", function () {
            _this.localStorageUpdate();
            _this.codeEind();
        });
        this.game.appendChild(this.input4);
        this.input4.style.width = "2.8vw";
        this.input4.style.height = "5.7vh";
        this.input4.style.transform = "translate(68vw, 35.45vh)";
        this.input4.style.border = "thick solid #A9A9A9";
        this.input4.style.fontSize = "2.5vw";
        this.input4.maxLength = 1;
        this.input4.style.paddingLeft = "0.6vw";
        this.input4.style.fontFamily = "Arial Black";
        this.input4.style.textTransform = "uppercase";
        this.input4.value = localStorage.getItem(this.number4);
        this.input4.id = "input4";
        this.input4.addEventListener("keyup", function () {
            _this.localStorageUpdate();
            _this.codeEind();
        });
        this.game.appendChild(this.input5);
        this.input5.style.width = "2.6vw";
        this.input5.style.height = "5.7vh";
        this.input5.style.transform = "translate(88vw, 35.45vh)";
        this.input5.style.border = "thick solid #A9A9A9";
        this.input5.style.fontSize = "2.5vw";
        this.input5.maxLength = 1;
        this.input5.style.paddingLeft = "0.8vw";
        this.input5.style.fontFamily = "Arial Black";
        this.input5.style.textTransform = "uppercase";
        this.input5.value = localStorage.getItem(this.number5);
        this.input5.id = "input5";
        this.input5.addEventListener("keyup", function () {
            _this.localStorageUpdate();
            _this.codeEind();
        });
    };
    Act2.prototype.localStorageUpdate = function () {
        localStorage.setItem(this.number1, document.getElementById("input1").value);
        localStorage.setItem(this.number2, document.getElementById("input2").value);
        localStorage.setItem(this.number3, document.getElementById("input3").value);
        localStorage.setItem(this.number4, document.getElementById("input4").value);
        localStorage.setItem(this.number5, document.getElementById("input5").value);
    };
    Act2.prototype.setHint = function () {
        new popup(new Languages()[localStorage.getItem('language')][48], 5, 84, 10);
        new popupStory(new Languages()[localStorage.getItem('language')][49], 30, 30, 40);
    };
    Act2.prototype.codeEind = function () {
        var codeString = document.getElementById("input1").value +
            document.getElementById("input2").value +
            document.getElementById("input3").value +
            document.getElementById("input4").value +
            document.getElementById("input5").value;
        if (codeString.toLowerCase() == "dbnve" || codeString.toLowerCase() == "dbnkn") {
            this.input1.style.border = "thick solid #00FF00";
            this.input2.style.border = "thick solid #00FF00";
            this.input3.style.border = "thick solid #00FF00";
            this.input4.style.border = "thick solid #00FF00";
            this.input5.style.border = "thick solid #00FF00";
            new CenterPopup(new Languages()[localStorage.getItem('language')][50], new Languages()[localStorage.getItem('language')][51], new Languages()[localStorage.getItem('language')][52]);
        }
        else {
            this.input1.style.border = "thick solid #FF0000";
            this.input2.style.border = "thick solid #FF0000";
            this.input3.style.border = "thick solid #FF0000";
            this.input4.style.border = "thick solid #FF0000";
            this.input5.style.border = "thick solid #FF0000";
        }
    };
    Act2.prototype.makeLevelIcon = function (posX, posY, width, height) {
        this.classroomIcon = document.createElement('classroom');
        this.game.appendChild(this.classroomIcon);
        this.classroomIcon.style.transform = "translate(" + posX + "vw," + posY + "vh)";
        this.classroomIcon.style.width = width + "vw";
        this.classroomIcon.style.height = height + "vh";
    };
    Act2.prototype.levelSelect = function () {
        this.makeLevelIcon(4, 25, 13, 43);
        this.classroomIcon.addEventListener("click", function () {
            document.getElementsByTagName("game")[0].innerHTML = "";
            if (localStorage.getItem('language') == 'english') {
                new Act2Room1Eng;
            }
            else {
                new Act2Room1;
            }
        });
        this.makeLevelIcon(24, 25, 13, 43);
        this.classroomIcon.addEventListener("click", function () {
            document.getElementsByTagName("game")[0].innerHTML = "";
            new Act2Room2;
        });
        this.makeLevelIcon(43.5, 25, 13, 43);
        this.classroomIcon.addEventListener("click", function () {
            document.getElementsByTagName("game")[0].innerHTML = "";
            if (localStorage.getItem('language') == 'english') {
                new Act2Room3Eng;
            }
            else {
                new Act2Room3;
            }
        });
        this.makeLevelIcon(63.8, 25, 13, 43);
        this.classroomIcon.addEventListener("click", function () {
            document.getElementsByTagName("game")[0].innerHTML = "";
            if (localStorage.getItem('language') == 'english') {
                new Act2Room4Eng;
            }
            else {
                new Act2Room4;
            }
        });
        this.makeLevelIcon(83.5, 25, 13, 43);
        this.classroomIcon.addEventListener("click", function () {
            document.getElementsByTagName("game")[0].innerHTML = "";
            if (localStorage.getItem('language') == 'english') {
                new Act2Room5Eng;
            }
            else {
                new Act2Room5;
            }
        });
    };
    Act2.prototype.createFolderItems = function () {
        var _this = this;
        this.folderBackground = document.createElement("folderbackground");
        this.folderItem1 = document.createElement("folderitem");
        this.folderItem2 = document.createElement("folderitem");
        this.folderItem3 = document.createElement("folderitem");
        this.folderItem4 = document.createElement("folderitem");
        this.folderItem5 = document.createElement("folderitem");
        this.folderItem6 = document.createElement("folderitem");
        this.game.appendChild(this.folderItem1);
        this.game.appendChild(this.folderItem2);
        this.game.appendChild(this.folderItem3);
        this.game.appendChild(this.folderItem4);
        this.game.appendChild(this.folderItem5);
        this.game.appendChild(this.folderItem6);
        this.folderBackground.style.backgroundColor = "black";
        this.folderBackground.style.opacity = "0.8";
        this.folderBackground.style.zIndex = "15";
        this.folderItem1.style.backgroundImage = 'url(assets/PRODUCTION/PRODUCTION/ASSETS/flyer_getallen.png)';
        this.folderItem1.style.transform = "translate(20vw,72vh)";
        this.folderItem1.style.width = '8.3vw';
        this.folderItem1.style.height = '8.3vh';
        this.folderItem1.addEventListener("click", function () {
            _this.game.appendChild(_this.folderBackground);
            new Act2folder1;
        });
        this.folderItem2.style.backgroundImage = 'url(assets/PRODUCTION/PRODUCTION/ASSETS/flyer_studie.png)';
        this.folderItem2.style.transform = "translate(44vw,87vh)";
        this.folderItem2.style.width = '12vw';
        this.folderItem2.style.height = '12vh';
        this.folderItem2.addEventListener("click", function () {
            _this.game.appendChild(_this.folderBackground);
            if (localStorage.getItem('language') == 'english') {
                new Act2folder2Eng;
            }
            else {
                new Act2folder2;
            }
        });
        this.folderItem3.style.backgroundImage = 'url(assets/PRODUCTION/PRODUCTION/ASSETS/flyer_solliciteren.png)';
        this.folderItem3.style.transform = "translate(60vw,70vh)";
        this.folderItem3.style.width = '8vw';
        this.folderItem3.style.height = '8vh';
        this.folderItem3.addEventListener("click", function () {
            _this.game.appendChild(_this.folderBackground);
            if (localStorage.getItem('language') == 'english') {
                new Act2folder3Eng;
            }
            else {
                new Act2folder3;
            }
        });
        this.folderItem4.style.backgroundImage = 'url(assets/PRODUCTION/PRODUCTION/ASSETS/flyer_coia.png)';
        this.folderItem4.style.transform = "translate(3vw,83vh)";
        this.folderItem4.style.width = '10vw';
        this.folderItem4.style.height = '10vh';
        this.folderItem4.addEventListener("click", function () {
            _this.game.appendChild(_this.folderBackground);
            new Act2folder4;
        });
        this.folderItem5.style.backgroundImage = 'url(assets/PRODUCTION/PRODUCTION/ASSETS/flyer_morsecode.png)';
        this.folderItem5.style.transform = "translate(80vw,78vh)";
        this.folderItem5.style.width = '10vw';
        this.folderItem5.style.height = '10vh';
        this.folderItem5.addEventListener("click", function () {
            _this.game.appendChild(_this.folderBackground);
            new Act2folder5;
        });
        this.folderItem6.style.backgroundImage = 'url(assets/Akte2/Postervormen&kleuren.jpg)';
        this.folderItem6.style.transform = "translate(58.1vw,30vh)";
        this.folderItem6.style.width = '4.45vw';
        this.folderItem6.style.height = '11.6vh';
        this.folderItem6.addEventListener("click", function () {
            _this.game.appendChild(_this.folderBackground);
            new Act2folder6;
        });
    };
    return Act2;
}());
var folders = (function () {
    function folders() {
        this.game = document.getElementsByTagName('game')[0];
        this.folder = document.createElement("openfolder");
        this.createFolder();
    }
    folders.prototype.createFolder = function () {
        var _this = this;
        this.folder.style.width = '100vw';
        this.folder.style.height = '100vh';
        this.game.appendChild(this.folder);
        this.folder.addEventListener("click", function () {
            var folderBG = document.getElementsByTagName('folderbackground')[0];
            folderBG.remove();
            _this.folder.remove();
        });
    };
    return folders;
}());
var Act2folder1 = (function (_super) {
    __extends(Act2folder1, _super);
    function Act2folder1() {
        var _this = _super.call(this) || this;
        _this.folder.style.backgroundImage = 'url(assets/Akte2/Flyer1getallen.jpg)';
        _this.folder.style.height = "60vh";
        _this.folder.style.marginTop = "20vh";
        return _this;
    }
    return Act2folder1;
}(folders));
var Act2folder2 = (function (_super) {
    __extends(Act2folder2, _super);
    function Act2folder2() {
        var _this = _super.call(this) || this;
        _this.folder.style.backgroundImage = 'url(assets/Akte2/Flyer2HulpbijStudie.jpg)';
        return _this;
    }
    return Act2folder2;
}(folders));
var Act2folder2Eng = (function (_super) {
    __extends(Act2folder2Eng, _super);
    function Act2folder2Eng() {
        var _this = _super.call(this) || this;
        _this.folder.style.backgroundImage = 'url(assets/Akte2/Flyer2StudyHelpENG.jpg)';
        return _this;
    }
    return Act2folder2Eng;
}(folders));
var Act2folder3 = (function (_super) {
    __extends(Act2folder3, _super);
    function Act2folder3() {
        var _this = _super.call(this) || this;
        _this.folder.style.backgroundImage = 'url(assets/Akte2/Flyer3WorkshopSolliciteren.jpg)';
        return _this;
    }
    return Act2folder3;
}(folders));
var Act2folder3Eng = (function (_super) {
    __extends(Act2folder3Eng, _super);
    function Act2folder3Eng() {
        var _this = _super.call(this) || this;
        _this.folder.style.backgroundImage = 'url(assets/Akte2/Flyer3WorkshopJobinterviewENG.jpg)';
        return _this;
    }
    return Act2folder3Eng;
}(folders));
var Act2folder4 = (function (_super) {
    __extends(Act2folder4, _super);
    function Act2folder4() {
        var _this = _super.call(this) || this;
        _this.folder.style.backgroundImage = 'url(assets/Akte2/Flyer4COIAinfo.png)';
        return _this;
    }
    return Act2folder4;
}(folders));
var Act2folder5 = (function (_super) {
    __extends(Act2folder5, _super);
    function Act2folder5() {
        var _this = _super.call(this) || this;
        _this.folder.style.backgroundImage = 'url(assets/Akte2/Flyer5MorseCodeAlfabet.jpg)';
        _this.folder.style.height = "60vh";
        _this.folder.style.marginTop = "20vh";
        return _this;
    }
    return Act2folder5;
}(folders));
var Act2folder6 = (function (_super) {
    __extends(Act2folder6, _super);
    function Act2folder6() {
        var _this = _super.call(this) || this;
        _this.folder.style.backgroundImage = 'url(assets/Akte2/Postervormen&kleuren.jpg)';
        return _this;
    }
    return Act2folder6;
}(folders));
var Act2Room1 = (function () {
    function Act2Room1() {
        this.game = document.getElementsByTagName('game')[0];
        this.bg = document.createElement("act2background");
        this.openInNewTab("https://hint.hr.nl/nl/HR/Studie/hulp-bij-studie/vertrouwenspersoon-introgame/?ticket=ST-7561117-asFVoii1iQmlJNL9MKZ3jK4u9c0lwEYAbd5-20");
        new Act2;
    }
    Act2Room1.prototype.openInNewTab = function (url) {
        var win = window.open(url, '_blank');
        win.focus();
    };
    return Act2Room1;
}());
var Act2Room1Eng = (function () {
    function Act2Room1Eng() {
        this.game = document.getElementsByTagName('game')[0];
        this.bg = document.createElement("act2background");
        this.openInNewTab("https://hint.hr.nl/nl/HR/english/study-information/study-help/Confidential-counsellor-introgame/?ticket=ST-25825-0rpbSWBnN9PAyE0xqiqmpyoN4HiTB01bV0s-20");
        new Act2;
    }
    Act2Room1Eng.prototype.openInNewTab = function (url) {
        var win = window.open(url, '_blank');
        win.focus();
    };
    return Act2Room1Eng;
}());
var Act2Room2 = (function () {
    function Act2Room2() {
        this.game = document.getElementsByTagName('game')[0];
        this.bg = document.createElement("videoBackground");
        this.video = document.createElement("video");
        this.bg.style.backgroundColor = "black";
        this.game.appendChild(this.bg);
        this.game.appendChild(this.video);
        this.video.src = 'assets/Akte2/peerfull-720.mp4';
        this.video.autoplay = true;
        this.video.controls = true;
        this.video.onended = function () {
            var vid = document.getElementsByTagName("video")[0];
            var bg = document.getElementsByTagName("videoBackground")[0];
            vid.remove();
            bg.remove();
            new Act2;
        };
    }
    return Act2Room2;
}());
var Act2Room3 = (function () {
    function Act2Room3() {
        this.game = document.getElementsByTagName('game')[0];
        this.bg = document.createElement("act2background");
        this.openInNewTab("https://hint.hr.nl/nl/HR/Studie/hulp-bij-studie/studieloopbaancoach-slc-introgame/");
        new Act2;
    }
    Act2Room3.prototype.openInNewTab = function (url) {
        var win = window.open(url, '_blank');
        win.focus();
    };
    return Act2Room3;
}());
var Act2Room3Eng = (function () {
    function Act2Room3Eng() {
        this.game = document.getElementsByTagName('game')[0];
        this.bg = document.createElement("act2background");
        this.openInNewTab("https://hint.hr.nl/nl/HR/english/study-information/study-help/study-coach-introgame");
        new Act2;
    }
    Act2Room3Eng.prototype.openInNewTab = function (url) {
        var win = window.open(url, '_blank');
        win.focus();
    };
    return Act2Room3Eng;
}());
var Act2Room4 = (function () {
    function Act2Room4() {
        var _this = this;
        this.game = document.getElementsByTagName('game')[0];
        this.bg = document.createElement("videoBackground");
        this.video = document.createElement("video");
        this.signin = document.createElement("signin");
        this.bg.style.backgroundColor = "black";
        this.game.appendChild(this.bg);
        this.game.appendChild(this.video);
        this.game.appendChild(this.signin);
        this.video.src = 'assets/Akte2/decaanfull-720.mp4';
        this.video.autoplay = true;
        this.video.controls = true;
        this.signin.style.width = "15vw";
        this.signin.style.height = "auto";
        this.signin.style.transform = "translate(8vw,80vh)";
        this.signin.style.backgroundColor = "#ffb911";
        this.signin.style.borderRadius = "20px";
        this.signin.style.display = "table-cell";
        this.signin.style.fontSize = "18px";
        this.signin.style.textAlign = 'center';
        this.signin.style.paddingTop = '0.5vh';
        this.signin.style.cursor = "pointer";
        this.signin.innerText = new Languages()[localStorage.getItem('language')][45];
        this.signin.addEventListener("click", function () {
            _this.openInNewTab("https://hint.hr.nl/nl/HR/Studie/hulp-bij-studie/Afspraak-maken-decaan-introgame/");
        });
        this.video.onended = function () {
            var vid = document.getElementsByTagName("video")[0];
            var bg = document.getElementsByTagName("videoBackground")[0];
            var signin = document.getElementsByTagName("signin")[0];
            vid.remove();
            bg.remove();
            signin.remove();
            new Act2;
        };
    }
    Act2Room4.prototype.openInNewTab = function (url) {
        var win = window.open(url, '_blank');
        win.focus();
    };
    return Act2Room4;
}());
var Act2Room4Eng = (function () {
    function Act2Room4Eng() {
        var _this = this;
        this.game = document.getElementsByTagName('game')[0];
        this.bg = document.createElement("videoBackground");
        this.video = document.createElement("video");
        this.signin = document.createElement("signin");
        this.bg.style.backgroundColor = "black";
        this.game.appendChild(this.bg);
        this.game.appendChild(this.video);
        this.game.appendChild(this.signin);
        this.video.src = 'assets/Akte2/decaanfull-720.mp4';
        this.video.autoplay = true;
        this.video.controls = true;
        this.signin.style.width = "15vw";
        this.signin.style.height = "auto";
        this.signin.style.transform = "translate(8vw,80vh)";
        this.signin.style.backgroundColor = "#ffb911";
        this.signin.style.borderRadius = "20px";
        this.signin.style.display = "table-cell";
        this.signin.style.fontSize = "18px";
        this.signin.style.textAlign = 'center';
        this.signin.style.paddingTop = '0.5vh';
        this.signin.style.cursor = "pointer";
        this.signin.innerText = new Languages()[localStorage.getItem('language')][45];
        this.signin.addEventListener("click", function () {
            _this.openInNewTab("https://hint.hr.nl/nl/HR/english/study-information/study-help/Appointment-student-counsellor-introgame");
        });
        this.video.onended = function () {
            var vid = document.getElementsByTagName("video")[0];
            var bg = document.getElementsByTagName("videoBackground")[0];
            var signin = document.getElementsByTagName("signin")[0];
            vid.remove();
            bg.remove();
            signin.remove();
            new Act2;
        };
    }
    Act2Room4Eng.prototype.openInNewTab = function (url) {
        var win = window.open(url, '_blank');
        win.focus();
    };
    return Act2Room4Eng;
}());
var Act2Room4s1 = (function () {
    function Act2Room4s1() {
        var _this = this;
        this.game = document.getElementsByTagName('game')[0];
        this.bg = document.createElement("videoBackground");
        this.video = document.createElement("video");
        this.signin = document.createElement("signin");
        this.bg.style.backgroundColor = "black";
        this.game.appendChild(this.bg);
        this.game.appendChild(this.video);
        this.game.appendChild(this.signin);
        this.video.src = 'assets/Akte2/decaan2.mp4';
        this.video.autoplay = true;
        this.video.controls = true;
        this.signin.style.width = "15vw";
        this.signin.style.height = "2.8";
        this.signin.style.transform = "translate(8vw,80vh)";
        this.signin.style.backgroundColor = "#ffb911";
        this.signin.style.borderRadius = "20px";
        this.signin.style.display = "table-cell";
        this.signin.style.fontSize = "18px";
        this.signin.style.textAlign = 'center';
        this.signin.style.padding = '1vh';
        this.signin.style.cursor = "pointer";
        this.signin.innerText = new Languages()[localStorage.getItem('language')][45];
        this.signin.addEventListener("click", function () {
            _this.openInNewTab("https://hint.hr.nl/nl/HR/Studie/hulp-bij-studie/Afspraak-maken-decaan-introgame/");
        });
        this.video.onended = function () {
            var vid = document.getElementsByTagName("video")[0];
            var bg = document.getElementsByTagName("videoBackground")[0];
            var signin = document.getElementsByTagName("signin")[0];
            vid.remove();
            bg.remove();
            signin.remove();
            new Act2;
        };
    }
    Act2Room4s1.prototype.openInNewTab = function (url) {
        var win = window.open(url, '_blank');
        win.focus();
    };
    return Act2Room4s1;
}());
var Act2Room5 = (function () {
    function Act2Room5() {
        this.game = document.getElementsByTagName('game')[0];
        this.bg = document.createElement("act2background");
        this.openInNewTab("https://hint.hr.nl/nl/HR/Studie/hulp-bij-studie/Studentenwelzijnsadviseurs-introgame/");
        new Act2;
    }
    Act2Room5.prototype.openInNewTab = function (url) {
        var win = window.open(url, '_blank');
        win.focus();
    };
    return Act2Room5;
}());
var Act2Room5Eng = (function () {
    function Act2Room5Eng() {
        this.game = document.getElementsByTagName('game')[0];
        this.bg = document.createElement("act2background");
        this.openInNewTab("https://hint.hr.nl/nl/HR/english/study-information/study-help/Student-Welfare-Advisors-Introgame/");
        new Act2;
    }
    Act2Room5Eng.prototype.openInNewTab = function (url) {
        var win = window.open(url, '_blank');
        win.focus();
    };
    return Act2Room5Eng;
}());
var Act3 = (function () {
    function Act3() {
        var _this = this;
        this.game = document.getElementsByTagName("game")[0];
        this.bg = document.createElement("videoBackground");
        this.video = document.createElement("video");
        var playButton = document.createElement("button");
        this.bg.style.backgroundColor = "black";
        this.game.appendChild(this.bg);
        this.game.appendChild(this.video);
        this.game.appendChild(playButton);
        playButton.style.width = "100vw";
        playButton.style.height = "100vh";
        playButton.style.opacity = "0";
        playButton.addEventListener("click", function () { return _this.togglePlay(); });
        this.video.src = 'assets/Akte3/startAct3.mp4';
        this.video.autoplay = true;
        this.video.controls = false;
        this.video.onended = function () {
            var game = document.getElementsByTagName("game")[0];
            game.innerHTML = "";
            var background = document.createElement("backgroundAct3");
            game.appendChild(background);
            if (localStorage.getItem("language") == "english") {
                background.style.backgroundImage = "url(assets/Akte3/act3Eng.png)";
            }
            new popupStory(new Languages()[localStorage.getItem('language')][68], 25, 30, 50);
            var button1 = document.createElement("button");
            var button2 = document.createElement("button");
            var button3 = document.createElement("button");
            var button4 = document.createElement("button");
            var button5 = document.createElement("button");
            var button6 = document.createElement("button");
            var button7 = document.createElement("button");
            var button8 = document.createElement("button");
            game.appendChild(button1);
            game.appendChild(button2);
            if (localStorage.getItem("language") == "dutch") {
                game.appendChild(button3);
            }
            game.appendChild(button4);
            game.appendChild(button5);
            game.appendChild(button6);
            game.appendChild(button7);
            game.appendChild(button8);
            button1.style.width = "7.2vw";
            button1.style.height = "14.4vh";
            button1.style.transform = "translate(31vw, 31.8vh)";
            button1.style.opacity = "0";
            button1.addEventListener("click", function () {
                var popup = document.createElement("popup");
                var game = document.getElementsByTagName("game")[0];
                game.appendChild(popup);
                popup.style.backgroundImage = "url(assets/PRODUCTION/PRODUCTION/ASSETS/map.png)";
                popup.style.backgroundSize = "100% 100%";
                popup.style.backgroundRepeat = "no-repeat";
                popup.style.width = "80vw";
                popup.style.height = "80vh";
                popup.style.transform = "translate(10vw, 10vh)";
                popup.style.position = "absolute";
                popup.style.boxShadow = "rgba(0,0,0,0.25) 20px 20px";
                popup.style.borderRadius = "15px";
                var mapArea = document.createElement("mapArea");
                game.appendChild(mapArea);
                mapArea.style.width = "80vw";
                mapArea.style.height = "80vh";
                mapArea.style.transform = "translate(10vw, 10vh)";
                mapArea.style.zIndex = "2";
                mapArea.style.position = "absolute";
                var pin1 = document.createElement("pin");
                var pin2 = document.createElement("pin");
                var pin3 = document.createElement("pin");
                var pin4 = document.createElement("pin");
                var pin5 = document.createElement("pin");
                var pin6 = document.createElement("pin");
                var pin7 = document.createElement("pin");
                var pin8 = document.createElement("pin");
                var pin9 = document.createElement("pin");
                var pin10 = document.createElement("pin");
                var pin11 = document.createElement("pin");
                var pin12 = document.createElement("pin");
                var pin13 = document.createElement("pin");
                mapArea.appendChild(pin1);
                mapArea.appendChild(pin2);
                mapArea.appendChild(pin3);
                mapArea.appendChild(pin4);
                mapArea.appendChild(pin5);
                mapArea.appendChild(pin6);
                mapArea.appendChild(pin7);
                mapArea.appendChild(pin8);
                mapArea.appendChild(pin9);
                mapArea.appendChild(pin10);
                mapArea.appendChild(pin11);
                mapArea.appendChild(pin12);
                mapArea.appendChild(pin13);
                var url1 = "url(assets/Akte3/Hofpleinfontein.jpg)";
                var url2 = "url(assets/Akte3/RotterdamCS.jpg)";
                var url3 = "url(assets/Akte3/Feyenoordstadion.jpg)";
                var url4 = "url(assets/Akte3/KunstwerkBelichaamdeEenheid.jpg)";
                var url5 = "url(assets/Akte3/Erasmusbrug.jpg)";
                var url6 = "url(assets/Akte3/StationBlaak.jpg)";
                var url7 = "url(assets/Akte3/ErasmusMC.jpg)";
                var url8 = "url(assets/Akte3/Binnenrotte.jpg)";
                var url9 = "url(assets/Akte3/markthal.jpg)";
                var url10 = "url(assets/Akte3/CentraleBibliotheek.jpg)";
                var url11 = "url(assets/Akte3/Beurstraverse.jpg)";
                var url12 = "url(assets/Akte3/Blaaktoren.jpg)";
                var url13 = "url(assets/Akte3/KunstwerkDeGestileerdeBloem.jpg)";
                var text1 = new Languages()[localStorage.getItem('language')][20];
                var text2 = new Languages()[localStorage.getItem('language')][21];
                var text3 = new Languages()[localStorage.getItem('language')][22];
                var text4 = new Languages()[localStorage.getItem('language')][23];
                var text5 = new Languages()[localStorage.getItem('language')][24];
                var text6 = new Languages()[localStorage.getItem('language')][25];
                var text7 = new Languages()[localStorage.getItem('language')][26];
                var text8 = new Languages()[localStorage.getItem('language')][27];
                var text9 = new Languages()[localStorage.getItem('language')][28];
                var text10 = new Languages()[localStorage.getItem('language')][29];
                var text11 = new Languages()[localStorage.getItem('language')][30];
                var text12 = new Languages()[localStorage.getItem('language')][31];
                var text13 = new Languages()[localStorage.getItem('language')][32];
                pin1.style.transform = "translate(30.5vw, 35.7vh)";
                pin1.style.zIndex = "3";
                pin1.addEventListener("mouseover", function () {
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url1;
                    pinPopup.style.transform = "translate(6vw, -7vh)";
                    pinPopup.innerHTML += text1;
                });
                pin1.addEventListener("mouseout", function () {
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                pin2.style.transform = "translate(26.2vw, 34.8vh)";
                pin2.style.zIndex = "3";
                pin2.addEventListener("mouseover", function () {
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url2;
                    pinPopup.style.transform = "translate(1vw, -5vh)";
                    pinPopup.innerHTML += text2;
                });
                pin2.addEventListener("mouseout", function () {
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                pin3.style.transform = "translate(50.3vw, 75.7vh)";
                pin3.style.zIndex = "3";
                pin3.addEventListener("mouseover", function () {
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url3;
                    pinPopup.style.transform = "translate(20vw, 37vh)";
                    pinPopup.innerHTML += text3;
                });
                pin3.addEventListener("mouseout", function () {
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                pin4.style.transform = "translate(28.3vw, 36.7vh)";
                pin4.style.zIndex = "3";
                pin4.addEventListener("mouseover", function () {
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url4;
                    pinPopup.style.transform = "translate(4vw, -3vh)";
                    pinPopup.innerHTML += text4;
                });
                pin4.addEventListener("mouseout", function () {
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                pin5.style.transform = "translate(34.3vw, 56.7vh)";
                pin5.style.zIndex = "3";
                pin5.addEventListener("mouseover", function () {
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url5;
                    pinPopup.style.transform = "translate(10vw, 18vh)";
                    pinPopup.innerHTML += text5;
                });
                pin5.addEventListener("mouseout", function () {
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                pin6.style.transform = "translate(35.6vw, 42vh)";
                pin6.style.zIndex = "3";
                pin6.addEventListener("mouseover", function () {
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url6;
                    pinPopup.style.transform = "translate(11vw, 2.7vh)";
                    pinPopup.innerHTML += text6;
                });
                pin6.addEventListener("mouseout", function () {
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                pin7.style.transform = "translate(25.8vw, 55.1vh)";
                pin7.style.zIndex = "3";
                pin7.addEventListener("mouseover", function () {
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url7;
                    pinPopup.style.transform = "translate(1vw, 16vh)";
                    pinPopup.innerHTML += text7;
                });
                pin7.addEventListener("mouseout", function () {
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                pin8.style.transform = "translate(34.3vw, 37.9vh)";
                pin8.style.zIndex = "3";
                pin8.addEventListener("mouseover", function () {
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url8;
                    pinPopup.style.transform = "translate(10vw, 0.3vh)";
                    pinPopup.innerHTML += text8;
                });
                pin8.addEventListener("mouseout", function () {
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                pin9.style.transform = "translate(32.2vw, 39.2vh)";
                pin9.style.zIndex = "3";
                pin9.addEventListener("mouseover", function () {
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url9;
                    pinPopup.style.transform = "translate(15vw, 0.2vh)";
                    pinPopup.innerHTML += text9;
                });
                pin9.addEventListener("mouseout", function () {
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                pin10.style.transform = "translate(36.5vw, 39.2vh)";
                pin10.style.zIndex = "3";
                pin10.addEventListener("mouseover", function () {
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url10;
                    pinPopup.style.transform = "translate(15vw, 0.7vh)";
                    pinPopup.innerHTML += text10;
                });
                pin10.addEventListener("mouseout", function () {
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                pin11.style.transform = "translate(30.4vw, 41.3vh)";
                pin11.style.zIndex = "3";
                pin11.addEventListener("mouseover", function () {
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url11;
                    pinPopup.style.transform = "translate(7vw, 5vh)";
                    pinPopup.innerHTML += text11;
                });
                pin11.addEventListener("mouseout", function () {
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                pin12.style.transform = "translate(33.8vw, 41.7vh)";
                pin12.style.zIndex = "3";
                pin12.addEventListener("mouseover", function () {
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url12;
                    pinPopup.style.transform = "translate(10vw, 5vh)";
                    pinPopup.innerHTML += text12;
                });
                pin12.addEventListener("mouseout", function () {
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                pin13.style.transform = "translate(31.7vw, 43.6vh)";
                pin13.style.zIndex = "3";
                pin13.addEventListener("mouseover", function () {
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url13;
                    pinPopup.style.transform = "translate(8vw, 6vh)";
                    pinPopup.innerHTML += text13;
                });
                pin13.addEventListener("mouseout", function () {
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                var button = document.createElement("button");
                game.appendChild(button);
                button.style.width = "100vw";
                button.style.height = "100vh";
                button.style.opacity = "0";
                button.style.zIndex = "1";
                button.style.position = "absolute";
                button.addEventListener("click", function () {
                    popup.remove();
                    button.remove();
                    mapArea.remove();
                });
                var char1 = document.createElement("char");
                var char2 = document.createElement("char");
                var char3 = document.createElement("char");
                var char4 = document.createElement("char");
                var char5 = document.createElement("char");
                if (localStorage.getItem("language") == "dutch") {
                    mapArea.appendChild(char1);
                    mapArea.appendChild(char2);
                    mapArea.appendChild(char3);
                    mapArea.appendChild(char4);
                    mapArea.appendChild(char5);
                }
                char1.style.backgroundImage = "url(assets/Akte3/cees.png)";
                char1.style.backgroundSize = "100% 100%";
                char1.style.width = "3.5vw";
                char1.style.height = "14vh";
                char1.style.position = "absolute";
                char1.style.transform = "translate(42.5vw, 33vh)";
                char1.addEventListener("mouseover", function () {
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    pinPopup.style.transform = "translate(15vw, 15vh)";
                    pinPopup.innerHTML += new Languages()[localStorage.getItem('language')][33];
                    pinPopup.style.paddingTop = "1vh";
                });
                char1.addEventListener("mouseout", function () {
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                char2.style.backgroundImage = "url(assets/Akte3/werner.png)";
                char2.style.backgroundSize = "100% 100%";
                char2.style.width = "3.5vw";
                char2.style.height = "14vh";
                char2.style.position = "absolute";
                char2.style.transform = "translate(29.5vw, 50vh)";
                char2.addEventListener("mouseover", function () {
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    pinPopup.style.transform = "translate(6vw, 30vh)";
                    pinPopup.innerHTML += new Languages()[localStorage.getItem('language')][37];
                    pinPopup.style.paddingTop = "1vh";
                });
                char2.addEventListener("mouseout", function () {
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                var line1 = document.createElement("line");
                var line2 = document.createElement("line");
                if (localStorage.getItem("language") == "dutch") {
                    mapArea.appendChild(line1);
                    mapArea.appendChild(line2);
                }
                line1.style.width = "6.5vw";
                line1.style.transform = "translate(23vw, 45vh) rotate(10deg)";
                line1.style.zIndex = "3";
                line2.style.width = "2vw";
                line2.style.transform = "translate(29.2vw, 48.7vh) rotate(43deg)";
                line2.style.zIndex = "3";
                char3.style.backgroundImage = "url(assets/Akte3/loes.png)";
                char3.style.backgroundSize = "100% 100%";
                char3.style.width = "3.5vw";
                char3.style.height = "14vh";
                char3.style.position = "absolute";
                char3.style.transform = "translate(37.6vw, 40.3vh)";
                char3.addEventListener("mouseover", function () {
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    pinPopup.style.transform = "translate(14vw, 22vh)";
                    pinPopup.innerHTML += new Languages()[localStorage.getItem('language')][35];
                    pinPopup.style.paddingTop = "1vh";
                });
                char3.addEventListener("mouseout", function () {
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                char4.style.backgroundImage = "url(assets/Akte3/donna.png)";
                char4.style.backgroundSize = "100% 100%";
                char4.style.width = "3.5vw";
                char4.style.height = "14vh";
                char4.style.position = "absolute";
                char4.style.transform = "translate(40.5vw, 39vh)";
                char4.addEventListener("mouseover", function () {
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    pinPopup.style.transform = "translate(16vw, 23vh)";
                    pinPopup.innerHTML += new Languages()[localStorage.getItem('language')][36];
                    pinPopup.style.paddingTop = "1vh";
                });
                char4.addEventListener("mouseout", function () {
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                char5.style.backgroundImage = "url(assets/Akte3/zoe.png)";
                char5.style.backgroundSize = "100% 100%";
                char5.style.width = "3.5vw";
                char5.style.height = "14vh";
                char5.style.position = "absolute";
                char5.style.transform = "translate(20.5vw, 42vh)";
                char5.addEventListener("mouseover", function () {
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    pinPopup.style.transform = "translate(0vw, 24vh)";
                    pinPopup.innerHTML += new Languages()[localStorage.getItem('language')][34];
                    pinPopup.style.paddingTop = "1vh";
                });
                char5.addEventListener("mouseout", function () {
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
            });
            var correct1 = 0;
            var correct2 = 0;
            var correct3 = 0;
            var correct4 = 0;
            button2.style.width = "11.5vw";
            button2.style.height = "14.3vh";
            button2.style.transform = "translate(44.4vw, 37.6vh)";
            button2.style.opacity = "0";
            button2.addEventListener("click", function () {
                var game = document.getElementsByTagName("game")[0];
                var popup = document.createElement("popup");
                game.appendChild(popup);
                popup.style.backgroundImage = "url(assets/PRODUCTION/PRODUCTION/ASSETS/notebook_open.png)";
                popup.style.zIndex = "2";
                popup.style.width = "90vw";
                popup.style.height = "90vh";
                popup.style.backgroundSize = "100% 100%";
                popup.style.backgroundRepeat = "no-repeat";
                popup.style.transform = "translate(5vw, 5vh)";
                popup.style.position = "absolute";
                var button = document.createElement("button");
                game.appendChild(button);
                button.style.width = "100vw";
                button.style.height = "100vh";
                button.style.opacity = "0";
                button.style.zIndex = "1";
                button.style.position = "absolute";
                button.addEventListener("click", function () {
                    var note1 = document.getElementById("note1").value.toLowerCase();
                    var note2 = document.getElementById("note2").value.toLowerCase();
                    var note3 = document.getElementById("note3").value.toLowerCase();
                    var note4 = document.getElementById("note4").value.toLowerCase();
                    localStorage.setItem("note1Save", note1);
                    localStorage.setItem("note2Save", note2);
                    localStorage.setItem("note3Save", note3);
                    localStorage.setItem("note4Save", note4);
                    button.remove();
                    popup.remove();
                });
                var text1 = document.createElement("question");
                var text2 = document.createElement("question");
                var text3 = document.createElement("question");
                var text4 = document.createElement("question");
                var input1 = document.createElement("input");
                var input2 = document.createElement("input");
                var input3 = document.createElement("input");
                var input4 = document.createElement("input");
                popup.appendChild(text1);
                popup.appendChild(text2);
                popup.appendChild(text3);
                popup.appendChild(text4);
                popup.appendChild(input1);
                popup.appendChild(input2);
                popup.appendChild(input3);
                popup.appendChild(input4);
                var input1Text = localStorage.getItem("note1Save");
                var input2Text = localStorage.getItem("note2Save");
                var input3Text = localStorage.getItem("note3Save");
                var input4Text = localStorage.getItem("note4Save");
                text1.style.width = "25vw";
                text1.style.height = "2vh";
                text1.style.transform = "translate(12.3vw, 6vh)";
                text1.style.fontSize = "2.5vh";
                text1.style.position = "absolute";
                text1.innerHTML = new Languages()[localStorage.getItem('language')][38];
                input1.style.width = "24.5vw";
                input1.style.height = "3vh";
                input1.style.transform = "translate(12.5vw, 11.5vh)";
                input1.style.position = "absolute";
                input1.style.border = "none";
                input1.style.fontSize = "2.5vh";
                input1.style.borderBottom = "dashed 2px";
                input1.style.backgroundColor = "transparent";
                input1.value = input1Text;
                input1.id = "note1";
                text2.style.width = "28vw";
                text2.style.height = "2vh";
                text2.style.transform = "translate(12.3vw, 22.5vh)";
                text2.style.fontSize = "2.5vh";
                text2.style.position = "absolute";
                text2.innerHTML = new Languages()[localStorage.getItem('language')][39];
                input2.style.width = "24.5vw";
                input2.style.height = "3vh";
                input2.style.transform = "translate(12.5vw, 28.5vh)";
                input2.style.position = "absolute";
                input2.style.border = "none";
                input2.style.fontSize = "2.5vh";
                input2.style.borderBottom = "dashed 2px";
                input2.style.backgroundColor = "transparent";
                input2.value = input2Text;
                input2.id = "note2";
                text3.style.width = "25vw";
                text3.style.height = "2vh";
                text3.style.transform = "translate(12.3vw, 39.8vh)";
                text3.style.fontSize = "2.5vh";
                text3.style.position = "absolute";
                text3.innerHTML = new Languages()[localStorage.getItem('language')][41];
                input3.style.width = "24.5vw";
                input3.style.height = "3vh";
                input3.style.transform = "translate(12.5vw, 45.8vh)";
                input3.style.position = "absolute";
                input3.style.border = "none";
                input3.style.fontSize = "2.5vh";
                input3.style.borderBottom = "dashed 2px";
                input3.style.backgroundColor = "transparent";
                input3.value = input3Text;
                input3.id = "note3";
                text4.style.width = "25vw";
                text4.style.height = "auto";
                text4.style.transform = "translate(12.3vw, 51.1vh)";
                text4.style.lineHeight = "39pt";
                text4.style.fontSize = "2.5vh";
                text4.style.position = "absolute";
                if (localStorage.getItem("language") == "dutch") {
                    text4.innerHTML = new Languages()[localStorage.getItem('language')][40];
                }
                input4.style.width = "24.5vw";
                input4.style.height = "3vh";
                input4.style.transform = "translate(12.5vw, 68.8vh)";
                input4.style.position = "absolute";
                input4.style.border = "none";
                input4.style.fontSize = "2.5vh";
                input4.style.borderBottom = "dashed 2px";
                input4.style.backgroundColor = "transparent";
                input4.value = input4Text;
                input4.id = "note4";
                if (localStorage.getItem("language") == "english") {
                    input4.style.display = "none";
                }
                if (correct1 == 1) {
                    input1.style.color = "green";
                    input1.style.borderColor = "black";
                }
                if (correct2 == 1) {
                    input2.style.color = "green";
                    input2.style.borderColor = "black";
                }
                if (correct3 == 1) {
                    input3.style.color = "green";
                    input3.style.borderColor = "black";
                }
                if (correct4 == 1) {
                    input4.style.color = "green";
                    input4.style.borderColor = "black";
                }
                input1.addEventListener("keyup", function () {
                    var note1 = document.getElementById("note1").value.toLowerCase();
                    if (localStorage.getItem("language") == "dutch") {
                        if (note1 == "rotterdam staat te springen" || note1 == "rotterdamstaattespringen") {
                            input1.style.color = "green";
                            input1.style.borderColor = "black";
                            correct1 = 1;
                        }
                        else {
                            input1.style.color = "black";
                            correct1 = 0;
                        }
                    }
                    else {
                        if (note1 == "rotterdam your student city" || note1 == "rotterdamyourstudentcity" || note1 == "rotterdam your studentcity") {
                            input1.style.color = "green";
                            input1.style.borderColor = "black";
                            correct1 = 1;
                        }
                        else {
                            input1.style.color = "black";
                            correct1 = 0;
                        }
                    }
                });
                input2.addEventListener("keyup", function () {
                    var note2 = document.getElementById("note2").value.toLowerCase();
                    if (note2 == "5") {
                        input2.style.color = "green";
                        input2.style.borderColor = "black";
                        correct2 = 1;
                    }
                    else {
                        input2.style.color = "black";
                        correct2 = 0;
                    }
                });
                input3.addEventListener("keyup", function () {
                    var note3 = document.getElementById("note3").value.toLowerCase();
                    if (note3 == "24,20" || note3 == "24.20") {
                        input3.style.color = "green";
                        input3.style.borderColor = "black";
                        correct3 = 1;
                    }
                    else {
                        input3.style.color = "black";
                        correct3 = 0;
                    }
                });
                input4.addEventListener("keyup", function () {
                    var note4 = document.getElementById("note4").value.toLowerCase();
                    if (localStorage.getItem("language") == "dutch") {
                        if (note4 == "word lid" || note4 == "wordlid") {
                            input4.style.color = "green";
                            input4.style.borderColor = "black";
                            correct4 = 1;
                        }
                        else {
                            input4.style.color = "black";
                            correct4 = 0;
                        }
                    }
                });
                popup.addEventListener("keyup", function () {
                    var note1 = document.getElementById("note1").value.toLowerCase();
                    var note2 = document.getElementById("note2").value.toLowerCase();
                    var note3 = document.getElementById("note3").value.toLowerCase();
                    var note4 = document.getElementById("note4").value.toLowerCase();
                    localStorage.setItem("note1Save", note1);
                    localStorage.setItem("note2Save", note2);
                    localStorage.setItem("note3Save", note3);
                    localStorage.setItem("note4Save", note4);
                    if (localStorage.getItem("language") == "dutch") {
                        if ((note1 == "rotterdam staat te springen" || note1 == "rotterdamstaattespringen") && note2 == "5" && (note3 == "24,20" || note3 == "24.20") && (note4 == "word lid" || note4 == "wordlid")) {
                            game.innerHTML = "";
                            new Ending;
                        }
                    }
                    else {
                        if ((note1 == "rotterdam your student city" || note1 == "rotterdamyourstudentcity" || note1 == "rotterdam your studentcity") && note2 == "5" && (note3 == "24,20" || note3 == "24.20")) {
                            game.innerHTML = "";
                            new Ending;
                        }
                    }
                });
            });
            button3.style.width = "16.3vw";
            button3.style.height = "17.9vh";
            button3.style.transform = "translate(68.7vw, 54.4vh)";
            button3.style.opacity = "0";
            button3.addEventListener("click", function () {
                var winNav = window.navigator;
                var vendorName = winNav.vendor;
                var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
                var isIOSChrome = winNav.userAgent.match("CriOS");
                if (isIOSChrome) {
                }
                else if (vendorName === "Google Inc." &&
                    isIEedge === false) {
                    var pdf_1 = document.createElement("object");
                    game.appendChild(pdf_1);
                    pdf_1.data = "assets/Akte3/RKvVboekje2020.pdf";
                    pdf_1.type = "application/pdf";
                    pdf_1.width = "50%";
                    pdf_1.height = "75%";
                    pdf_1.style.zIndex = "1";
                    pdf_1.style.position = "absolute";
                    pdf_1.style.transform = "translate(25vw, 10vh)";
                    pdf_1.style.boxShadow = "rgba(0,0,0,0.5) 15px 15px";
                    var button_2 = document.createElement("button");
                    game.appendChild(button_2);
                    button_2.style.width = "100vw";
                    button_2.style.height = "100vh";
                    button_2.style.position = "absolute";
                    button_2.style.zIndex = "0";
                    button_2.style.opacity = "0";
                    button_2.addEventListener("click", function () {
                        button_2.remove();
                        pdf_1.remove();
                    });
                }
                else {
                    var win = window.open("assets/Akte3/RKvVboekje2020.pdf");
                    win.focus();
                }
            });
            button4.style.width = "10.5vw";
            button4.style.height = "11vh";
            button4.style.transform = "translate(27.5vw, 65.9vh)";
            button4.style.opacity = "0";
            button4.addEventListener("click", function () {
                var card = document.getElementById("card");
                if (card) {
                    card.style.display = "block";
                    var button_3 = document.createElement("button");
                    game.appendChild(button_3);
                    button_3.style.zIndex = "1";
                    button_3.style.width = "100vw";
                    button_3.style.height = "100vh";
                    button_3.style.opacity = "0";
                    button_3.style.position = "absolute";
                    button_3.addEventListener("click", function () {
                        var card = document.getElementById("card");
                        card.style.display = "none";
                        button_3.remove();
                    });
                }
                else {
                    var game_1 = document.getElementsByTagName("game")[0];
                    var popup_2 = document.createElement("popup");
                    game_1.appendChild(popup_2);
                    popup_2.style.backgroundImage = "url(assets/Akte3/woordzoeker.png)";
                    popup_2.style.backgroundRepeat = "no-repeat";
                    popup_2.style.backgroundSize = "100% 100%";
                    popup_2.style.width = "90vw";
                    popup_2.style.height = "90vh";
                    popup_2.style.position = "absolute";
                    popup_2.style.zIndex = "2";
                    popup_2.style.transform = "translate(5vw, 5vh)";
                    popup_2.style.borderRadius = "20px";
                    popup_2.style.boxShadow = "rgba(0,0,0,0.25) 20px 20px";
                    popup_2.id = "card";
                    var words = document.createElement("words");
                    popup_2.appendChild(words);
                    if (localStorage.getItem("language") == "dutch") {
                        words.style.backgroundImage = "url(assets/Akte3/wordsDutch.png)";
                    }
                    else {
                        words.style.backgroundImage = "url(assets/Akte3/wordsEng.png)";
                    }
                    words.style.backgroundRepeat = "no-repeat";
                    words.style.backgroundSize = "100% 100%";
                    words.style.width = "42vw";
                    words.style.height = "81vh";
                    words.style.position = "absolute";
                    words.style.transform = "translate(5vw, 4vh)";
                    var button_4 = document.createElement("button");
                    game_1.appendChild(button_4);
                    button_4.style.zIndex = "1";
                    button_4.style.width = "100vw";
                    button_4.style.height = "100vh";
                    button_4.style.opacity = "0";
                    button_4.style.position = "absolute";
                    button_4.addEventListener("click", function () {
                        popup_2.style.display = "none";
                        button_4.remove();
                    });
                    var text = document.createElement("text");
                    popup_2.appendChild(text);
                    text.style.fontSize = "2.5vh";
                    text.style.transform = "translate(50.5vw, 13vh)";
                    text.style.position = "absolute";
                    text.style.width = "35vw";
                    text.style.height = "10vh";
                    text.innerHTML = new Languages()[localStorage.getItem('language')][42];
                    popup_2.addEventListener("click", function (event) {
                        var dot = document.createElement("dot");
                        popup_2.appendChild(dot);
                        var x = ((event.clientX / innerWidth) * 100);
                        var y = ((event.clientY / innerHeight) * 100);
                        dot.addEventListener("click", function (event) {
                            dot.remove();
                            event.stopPropagation();
                        });
                        dot.style.transform = "translate(" + (x - 5.75) + "vw, " + (y - 6.5) + "vh)";
                        dot.style.width = "1.5vw";
                        dot.style.height = "3vh";
                        dot.style.backgroundColor = "red";
                        dot.style.borderRadius = "50%";
                        dot.style.position = "absolute";
                        dot.style.zIndex = "3";
                        dot.style.opacity = "0.3";
                    });
                }
            });
            button5.style.width = "8vw";
            button5.style.height = "9.1vh";
            button5.style.transform = "translate(46.8vw, 56.8vh)";
            button5.style.opacity = "0";
            button5.addEventListener("click", function () {
                var popup = document.createElement("popup");
                var game = document.getElementsByTagName("game")[0];
                game.appendChild(popup);
                popup.style.backgroundImage = "url(assets/Akte3/Rotterdampas.png)";
                popup.style.backgroundSize = "100% 100%";
                popup.style.width = "30vw";
                popup.style.height = "30vh";
                popup.style.transform = "translate(35vw, 35vh)";
                popup.style.position = "absolute";
                popup.style.zIndex = "2";
                var button = document.createElement("button");
                game.appendChild(button);
                button.style.width = "100vw";
                button.style.height = "100vh";
                button.style.position = "absolute";
                button.style.opacity = "0";
                button.style.zIndex = "1";
                button.addEventListener("click", function () {
                    button.remove();
                    popup.remove();
                });
            });
            button6.style.width = "12.4vw";
            button6.style.height = "3.7vh";
            button6.style.transform = "translate(62.6vw, 72vh)";
            button6.style.opacity = "0";
            button6.addEventListener("click", function () {
                if (localStorage.getItem('language') == 'dutch') {
                    var game_2 = document.getElementsByTagName("game")[0];
                    var iframe_1 = document.createElement("iframe");
                    game_2.appendChild(iframe_1);
                    iframe_1.style.width = "560px";
                    iframe_1.style.height = "315px";
                    iframe_1.style.left = "35vw";
                    iframe_1.style.top = "30vh";
                    iframe_1.style.position = "absolute";
                    iframe_1.style.zIndex = "3";
                    iframe_1.src = "https://www.youtube.com/embed/MN_YVac75Yc";
                    var button_5 = document.createElement("button");
                    game_2.appendChild(button_5);
                    button_5.style.width = "100vw";
                    button_5.style.height = "100vh";
                    button_5.style.position = "absolute";
                    button_5.style.zIndex = "2";
                    button_5.style.opacity = "0";
                    button_5.addEventListener("click", function () {
                        iframe_1.remove();
                        button_5.remove();
                    });
                }
                else {
                    var win = window.open("https://rotterdamstaatomjoutespringen.nl/english/");
                    win.focus();
                }
            });
            button7.style.width = "14.3vw";
            button7.style.height = "15vh";
            button7.style.transform = "translate(15.2vw, 59vh)";
            button7.style.opacity = "0";
            button7.addEventListener("click", function () {
                var popup = document.createElement("popup");
                var game = document.getElementsByTagName("game")[0];
                var button = document.createElement("button");
                game.appendChild(button);
                game.appendChild(popup);
                button.style.width = "100vw";
                button.style.height = "100vh";
                button.style.position = "absolute";
                button.style.zIndex = "1";
                button.style.opacity = "0";
                button.addEventListener("click", function () {
                    button.remove();
                    popup.remove();
                });
                if (localStorage.getItem("language") == "dutch") {
                    popup.style.backgroundImage = "url(assets/Akte3/vidiVici.png)";
                }
                else {
                    popup.style.backgroundImage = "url(assets/Akte3/risa.png)";
                }
                popup.style.backgroundSize = "100% 100%";
                popup.style.width = "50vw";
                popup.style.height = "auto";
                popup.style.transform = "translate(25vw, 10vh)";
                popup.style.position = "absolute";
                popup.style.zIndex = "2";
                popup.style.paddingTop = "8vh";
                popup.style.paddingBottom = "1vh";
                popup.style.paddingLeft = "1vw";
                popup.style.paddingRight = "1vw";
                popup.style.boxShadow = "rgba(0, 0, 0, 0.5) 15px 15px";
                popup.style.fontSize = "1.2rem";
                popup.innerHTML += new Languages()[localStorage.getItem('language')][43];
            });
            button8.style.width = "5.9vw";
            button8.style.height = "11.7vh";
            button8.style.transform = "translate(64.8vw, 34.1vh)";
            button8.style.opacity = "0";
            button8.style.zIndex = "-1";
            button8.addEventListener("click", function () {
                var game = document.getElementsByTagName("game")[0];
                var popup = document.createElement("pinPopup");
                var button = document.createElement("button");
                game.appendChild(button);
                game.appendChild(popup);
                var audio = document.createElement("audio");
                var audioCheck = document.getElementsByTagName("audio")[0];
                if (audioCheck == null) {
                    popup.appendChild(audio);
                    if (localStorage.getItem("language") == "dutch") {
                        audio.src = "assets/Akte3/Audio.mp3";
                    }
                    else {
                        audio.src = "assets/Akte3/audioEng.mp3";
                    }
                    audio.autoplay = true;
                    audio.controls = true;
                    audio.style.width = "100%";
                    audio.style.paddingBottom = "1vh";
                }
                popup.style.zIndex = "2";
                popup.style.paddingTop = "1vh";
                popup.style.transform = "translate(35vw, 43vh)";
                popup.innerHTML += new Languages()[localStorage.getItem('language')][44];
                button.style.width = "100vw";
                button.style.height = "100vh";
                button.style.position = "absolute";
                button.style.zIndex = "1";
                button.style.opacity = "0";
                button.addEventListener("click", function () {
                    button.remove();
                    popup.remove();
                });
            });
        };
    }
    Act3.prototype.togglePlay = function () {
        if (this.video.paused) {
            this.video.play();
        }
        else {
            this.video.pause();
        }
    };
    return Act3;
}());
var CenterPopup = (function () {
    function CenterPopup(title, message, open) {
        var popup = document.createElement('onlinePopup');
        var popupTitle = document.createElement('popupTitle');
        popupTitle.innerHTML = title;
        var popupMessage = document.createElement('popupMessage');
        popupMessage.innerHTML = message;
        popupMessage.style.textAlign = "left";
        var doorgaan = document.createElement('button');
        doorgaan.classList.add("popupButton");
        doorgaan.innerHTML = new Languages()[localStorage.getItem('language')][11];
        doorgaan.addEventListener('click', function () {
            if (open == 'doorgaan' || open == 'Continue') {
                var popup_3 = document.createElement("onlinePopup");
                var game_3 = document.getElementsByTagName("game")[0];
                game_3.appendChild(popup_3);
                popup_3.innerHTML = new Languages()[localStorage.getItem('language')][71];
                var input_2 = document.createElement("input");
                popup_3.appendChild(input_2);
                var button_6 = document.createElement("button");
                popup_3.appendChild(button_6);
                button_6.innerHTML = new Languages()[localStorage.getItem('language')][52];
                input_2.style.width = "80%";
                input_2.style.height = "3vh";
                input_2.addEventListener("keyup", function () {
                    localStorage.setItem("teamSlogan", input_2.value);
                });
                button_6.addEventListener("click", function () {
                    if (localStorage.getItem("teamName") == null) {
                        button_6.innerHTML = new Languages()[localStorage.getItem('language')][72];
                    }
                    else {
                        document.getElementsByTagName("game")[0].innerHTML = "";
                        new Pause(2, 'Act3');
                    }
                });
            }
            else if (open !== '') {
                window.open(open, '_blank');
            }
            popup.remove();
        });
        popup.appendChild(doorgaan);
        popup.appendChild(popupTitle);
        popup.appendChild(popupMessage);
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(popup);
    }
    return CenterPopup;
}());
var Ending = (function () {
    function Ending() {
        this.makeSweater = true;
        new Timer().endTimer();
        var bg = document.createElement("backgroundEnd");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(bg);
        window.addEventListener("beforeprint", function () {
            title.style.fontSize = "7vh";
            popup.style.position = 'absolute';
            subTitle.style.fontSize = "1.1rem";
            if (localStorage.getItem('education') == 'International Business' || localStorage.getItem('education') == 'Master Consultancy and Entrepeneurship' || localStorage.getItem('education') == 'Master in Supply Chain Management' || localStorage.getItem('education') == 'Foundation Programme' || localStorage.getItem('education') == 'Chemie' || localStorage.getItem('education') == 'Chemische Technologie' || localStorage.getItem('education') == 'Creative Media and Game Technologies' || localStorage.getItem('education') == 'Informatica' || localStorage.getItem('education') == 'Civiele Techniek' || localStorage.getItem('education') == 'Logistics Management (bachelor)' || localStorage.getItem('education') == 'Finance & Control' || localStorage.getItem('education') == 'Deeltijd - Finance & Control' || localStorage.getItem('education') == 'Biologie en Medisch Laboratoriumonderzoek' || localStorage.getItem('education') == 'CE: Creative Marketing & Sales' || localStorage.getItem('education') == 'Finance, Tax and Advice') {
                subTitle.innerHTML = new Languages()[localStorage.getItem('language')][73];
            }
            else {
                subTitle.innerHTML = new Languages()[localStorage.getItem('language')][75];
            }
            button.remove();
        });
        window.addEventListener("afterprint", function () {
            new Ending;
        });
        bg.style.backgroundImage = "url(assets/Akte3/Binnenrotte.jpg)";
        bg.style.backgroundSize = "100% 100%";
        bg.style.backgroundRepeat = "no-repeat";
        bg.style.width = "100vw";
        bg.style.height = "100vh";
        bg.style.position = "absolute";
        var popup = document.createElement("endPopup");
        game.appendChild(popup);
        var title = document.createElement('youWon');
        title.innerHTML = new Languages()[localStorage.getItem('language')][74];
        popup.appendChild(title);
        var subTitle = document.createElement('subtitle');
        if (localStorage.getItem('education') == 'International Business' || localStorage.getItem('education') == 'Master Consultancy and Entrepeneurship' || localStorage.getItem('education') == 'Master in Supply Chain Management' || localStorage.getItem('education') == 'Foundation Programme' || localStorage.getItem('education') == 'Chemie' || localStorage.getItem('education') == 'Chemische Technologie' || localStorage.getItem('education') == 'Creative Media and Game Technologies' || localStorage.getItem('education') == 'Informatica' || localStorage.getItem('education') == 'Civiele Techniek' || localStorage.getItem('education') == 'Logistics Management (bachelor)' || localStorage.getItem('education') == 'Finance & Control' || localStorage.getItem('education') == 'Deeltijd - Finance & Control' || localStorage.getItem('education') == 'Biologie en Medisch Laboratoriumonderzoek' || localStorage.getItem('education') == 'CE: Creative Marketing & Sales' || localStorage.getItem('education') == 'Finance, Tax and Advice') {
            subTitle.innerHTML = new Languages()[localStorage.getItem('language')][88];
        }
        else {
            subTitle.innerHTML = new Languages()[localStorage.getItem('language')][87];
        }
        popup.appendChild(subTitle);
        var score = document.createElement('finalScore');
        var duration = parseInt(new Timer().score());
        var hours = Math.floor(duration / 3600);
        var minutes = Math.floor(duration % 3600 / 60);
        var seconds = Math.floor(duration % 3600 % 60);
        var scoreInMin = hours + ":" + minutes + ":" + seconds;
        score.innerHTML += scoreInMin;
        popup.appendChild(score);
        var button = document.createElement("button");
        popup.appendChild(button);
        button.innerHTML += new Languages()[localStorage.getItem('language')][76];
        button.addEventListener("click", function () {
            window.print();
        });
    }
    return Ending;
}());
var EnterBuilding = (function () {
    function EnterBuilding() {
        var _this = this;
        this.game = document.getElementsByTagName('game')[0];
        this.bge = document.createElement("backgroundenter");
        this.i = 0;
        this.setBackground();
        this.game.appendChild(this.bge);
        this.bge.addEventListener("mousedown", function () { return _this.setBackground(); });
        this.game.appendChild(this.bge);
    }
    EnterBuilding.prototype.setBackground = function () {
        if (this.i == 0) {
            this.bge.style.backgroundImage = 'url(assets/IMG_20200708_123510.jpg)';
        }
        else if (this.i == 1) {
            this.bge.style.backgroundImage = 'url(assets/IMG_20200708_123018.jpg)';
        }
        else if (this.i == 2) {
            this.bge.remove();
            new Act2();
        }
        this.i++;
    };
    return EnterBuilding;
}());
var Game = (function () {
    function Game() {
        var game = document.getElementsByTagName("game")[0];
        var button1 = document.createElement("button");
        game.appendChild(button1);
        button1.style.width = "10vw";
        button1.style.height = "10vh";
        button1.style.transform = "translate(90vw, 10vh)";
        button1.innerHTML = "act2";
        button1.onclick = this.buttonPress1;
        var button2 = document.createElement("button");
        game.appendChild(button2);
        button2.style.width = "10vw";
        button2.style.height = "10vh";
        button2.style.transform = "translate(90vw, 25vh)";
        button2.innerHTML = "gert";
        button2.onclick = this.buttonPress2;
        var button4 = document.createElement("button");
        game.appendChild(button4);
        button4.style.width = "10vw";
        button4.style.height = "10vh";
        button4.style.transform = "translate(80vw, 50vh)";
        button4.innerHTML = "luuk";
        button4.onclick = this.buttonPress4;
        var button5 = document.createElement("button");
        game.appendChild(button5);
        button5.style.width = "10vw";
        button5.style.height = "10vh";
        button5.style.transform = "translate(90vw, 50vh)";
        button5.innerHTML = "luuk eind";
        button5.onclick = this.buttonPress5;
    }
    Game.prototype.buttonPress1 = function () {
        document.getElementsByTagName("game")[0].innerHTML = "";
        new Act3();
    };
    Game.prototype.buttonPress2 = function () {
        document.getElementsByTagName("game")[0].innerHTML = "";
        new tobuilding();
    };
    Game.prototype.buttonPress4 = function () {
        document.getElementsByTagName("game")[0].innerHTML = "";
        new EnterBuilding();
    };
    Game.prototype.buttonPress5 = function () {
        document.getElementsByTagName("game")[0].innerHTML = "";
        new Ending();
    };
    return Game;
}());
var hint = (function () {
    function hint() {
        var _this = this;
        this.game = document.getElementsByTagName('game')[0];
        this.hint1 = document.createElement("hinticon");
        this.hint2 = document.createElement("hinticon");
        this.hint3 = document.createElement("hinticon");
        this.hint4 = document.createElement("hinticon");
        this.hintbox1 = document.createElement("hintbox");
        this.hintbox2 = document.createElement("hintbox");
        this.hintbox3 = document.createElement("hintbox");
        this.hintbox4 = document.createElement("hintbox");
        this.text1 = document.createElement("text");
        this.text2 = document.createElement("text");
        this.text3 = document.createElement("text");
        this.text4 = document.createElement("text");
        this.game.appendChild(this.text1);
        this.game.appendChild(this.text2);
        this.game.appendChild(this.text3);
        this.game.appendChild(this.text4);
        this.text1.style.position = "absolute";
        this.text2.style.position = "absolute";
        this.text3.style.position = "absolute";
        this.text4.style.position = "absolute";
        this.text1.innerHTML = "Hint1";
        this.text2.innerHTML = "Hint2";
        this.text3.innerHTML = "Hint3";
        this.text4.innerHTML = "Hint4";
        this.text1.style.transform = "translateX(2.5vw)";
        this.text2.style.transform = "translateX(10vw)";
        this.text3.style.transform = "translateX(17.5vw)";
        this.text4.style.transform = "translateX(25vw)";
        this.game.appendChild(this.hint1);
        this.game.appendChild(this.hint2);
        this.game.appendChild(this.hint3);
        this.game.appendChild(this.hint4);
        this.game.appendChild(this.hintbox1);
        this.game.appendChild(this.hintbox2);
        this.game.appendChild(this.hintbox3);
        this.game.appendChild(this.hintbox4);
        this.hint1.style.width = "7vw";
        this.hint1.style.height = "7vh";
        this.hintbox1.style.width = "7vw";
        this.hintbox1.style.height = "7vh";
        this.hint1.addEventListener("click", function () {
            new popup(new Languages()[localStorage.getItem('language')][53], 20, 45, 20);
            _this.hint1.remove();
        });
        this.hintbox1.addEventListener("click", function () {
            new popup(new Languages()[localStorage.getItem('language')][54], 0, 7, 20);
            _this.hintbox1.remove();
            _this.hint1.style.backgroundImage = 'url(assets/Akte2/envelope_open.png)';
            _this.text1.remove();
        });
        this.hint2.style.width = "7vw";
        this.hint2.style.height = "7vh";
        this.hint2.style.transform = "translateX(7.5vw)";
        this.hintbox2.style.width = "7vw";
        this.hintbox2.style.height = "7vh";
        this.hintbox2.style.transform = "translateX(7.5vw)";
        this.hint2.addEventListener("click", function () {
            new popup(new Languages()[localStorage.getItem('language')][55], 59, 45, 20);
            _this.hint2.remove();
        });
        this.hintbox2.addEventListener("click", function () {
            new popup(new Languages()[localStorage.getItem('language')][56], 7, 7, 20);
            _this.hintbox2.remove();
            _this.hint2.style.backgroundImage = 'url(assets/Akte2/envelope_open.png)';
            _this.text2.remove();
        });
        this.hint3.style.width = "7vw";
        this.hint3.style.height = "7vh";
        this.hint3.style.transform = "translateX(15vw)";
        this.hintbox3.style.width = "7vw";
        this.hintbox3.style.height = "7vh";
        this.hintbox3.style.transform = "translateX(15vw)";
        this.hint3.addEventListener("click", function () {
            new popup(new Languages()[localStorage.getItem('language')][57], 82, 45, 15);
            _this.hint3.remove();
        });
        this.hintbox3.addEventListener("click", function () {
            new popup(new Languages()[localStorage.getItem('language')][58], 14, 7, 20);
            _this.hintbox3.remove();
            _this.hint3.style.backgroundImage = 'url(assets/Akte2/envelope_open.png)';
            _this.text3.remove();
        });
        this.hint4.style.width = "7vw";
        this.hint4.style.height = "7vh";
        this.hint4.style.transform = "translateX(22.5vw)";
        this.hintbox4.style.width = "7vw";
        this.hintbox4.style.height = "7vh";
        this.hintbox4.style.transform = "translateX(22.5vw)";
        this.hint4.addEventListener("click", function () {
            new popup(new Languages()[localStorage.getItem('language')][66], 28, 90, 44);
            _this.hint4.remove();
        });
        this.hintbox4.addEventListener("click", function () {
            new popup(new Languages()[localStorage.getItem('language')][67], 21, 7, 20);
            _this.hintbox4.remove();
            _this.hint4.style.backgroundImage = 'url(assets/Akte2/envelope_open.png)';
            _this.text4.remove();
        });
    }
    return hint;
}());
var Info = (function () {
    function Info() {
        this.makeTexts();
        this.makeButtons();
        this.makeBackground();
    }
    Info.prototype.makeBackground = function () {
        var game = document.getElementsByTagName("game")[0];
        var bg = document.createElement("bg");
        game.appendChild(bg);
        bg.style.backgroundImage = "url(assets/Akte3/Binnenrotte.jpg)";
        bg.style.backgroundRepeat = "no-repeat";
        bg.style.backgroundSize = "100% 100%";
        bg.style.position = "absolute";
        bg.style.width = "100vw";
        bg.style.height = "100vh";
        bg.style.zIndex = "-1";
    };
    Info.prototype.makeTexts = function () {
        var game = document.getElementsByTagName("game")[0];
        var text1 = document.createElement("text");
        var text2 = document.createElement("text");
        game.appendChild(text1);
        game.appendChild(text2);
        var heading1 = document.createElement("text");
        var heading2 = document.createElement("text");
        game.appendChild(heading1);
        game.appendChild(heading2);
        heading1.innerHTML = "Welkom";
        heading2.innerHTML = "Welcome";
        heading1.style.position = "absolute";
        heading2.style.position = "absolute";
        heading1.style.width = "auto";
        heading2.style.width = "auto";
        heading1.style.transform = "translate(8vw, 5vh)";
        heading2.style.transform = "translate(58vw, 5vh)";
        heading1.style.fontSize = "5vh";
        heading2.style.fontSize = "5vh";
        heading1.style.width = "30vw";
        heading2.style.width = "30vw";
        heading1.style.textAlign = "center";
        heading2.style.textAlign = "center";
        heading1.style.backgroundColor = "#ffb911";
        heading2.style.backgroundColor = "#ffb911";
        heading1.style.borderRadius = "20px";
        heading2.style.borderRadius = "20px";
        heading1.style.padding = "2vh 2vw 2vh 2vw";
        heading2.style.padding = "2vh 2vw 2vh 2vw";
        text1.innerHTML = new Languages()["dutch"][80];
        text2.innerHTML = new Languages()["english"][80];
        text1.style.position = "absolute";
        text2.style.position = "absolute";
        text1.style.width = "40vw";
        text2.style.width = "40vw";
        text1.style.height = "auto";
        text2.style.height = "auto";
        text1.style.fontSize = "3.5vh";
        text2.style.fontSize = "3.5vh";
        text1.style.transform = "translate(3vw, 16vh)";
        text2.style.transform = "translate(53vw, 16vh)";
        text1.style.backgroundColor = "#ffb911";
        text2.style.backgroundColor = "#ffb911";
        text1.style.borderRadius = "20px";
        text2.style.borderRadius = "20px";
        text1.style.padding = "2vh 2vw 2vh 2vw";
        text2.style.padding = "2vh 2vw 2vh 2vw";
    };
    Info.prototype.makeButtons = function () {
        var game = document.getElementsByTagName("game")[0];
        var dutch = document.createElement("button");
        game.appendChild(dutch);
        dutch.innerHTML = "Play";
        dutch.style.position = "absolute";
        dutch.style.transform = "translate(42vw, 85vh)";
        dutch.style.backgroundColor = "#ffb911";
        dutch.style.border = "solid black 3px";
        dutch.style.fontWeight = "bolder";
        dutch.style.borderRadius = "3px";
        dutch.style.cursor = "pointer";
        dutch.style.padding = "2vh 2vw 2vh 2vw";
        dutch.style.fontSize = "2rem";
        dutch.style.width = "16vw";
        dutch.style.height = "10vh";
        dutch.addEventListener("click", function () {
            game.innerHTML = "";
            localStorage.setItem('language', 'dutch');
            new LocatieSelectie();
            new Timer().startTimer();
        });
    };
    return Info;
}());
var Languages = (function () {
    function Languages() {
        this.english = ["In order to start, we need to know what study program you are taking. Please select your study program from this list",
            "Choose education",
            "Choose language",
            "Hogeschool Rotterdam is spread out over the city. More than 15 locations. Can you find the location for your study program?",
            "<b>Correct!</b>This is the location of your study program.<br>",
            "Click here</a>for more information about this location.</p>",
            "Try again",
            "Go inside",
            "You found the location. Unfortunately, the door is still locked. Fortunately, many things are arranged online at the university. Take a look around there first and maybe you will find there the 3 shapes that make up the key together.",
            "Send",
            "Look online for shapes",
            "Continue",
            "Welcome to your online floorplan",
            "Maybe it\u2019s a good idea to send an email to the Student Service Centre (check the online floorplan to find the webform) about the key. Make sure to look for clues on shapes along the way.",
            "This answer is incorrect. Try again.",
            "Schedule",
            "Click continue to see the schedule",
            "Student Service Centre",
            "Access to RUAS starts with your enrolment. You probably have taken all the necessary steps for your admission, right? If you still have any questions about enrolment, tuition fees etc, please contact the Student Service Centre via HINT or visit their office at Rochussenstraat 198. They might be able to help you find the key you are looking for. Send them a message (and don't forget to check your student mail).",
            "CumLaude Learning is the digital learning environment where you can find important information regarding your classes, and hand in your assignments for example. You log in with your studentnumber and password. You will be linked automatically to your classes, also when you enroll for a different study program. Are you not linked correctly? Contact your study programs institute.</br></br></br>*  Most study programs work with CumLaude Learning, but some work with other systems, like Canvas or Brightspace. In this game we will show you how CumLaude works. These systems work practically the same.",
            "Hofplein Fountain</br> This fountain in the middle of traffic square \u2018Hofplein\u2019 was presented to the city by shipping company Van Ommeren when the company existed 100 years. The fountain is nicknamed FLIPSPUIT (Flip\u2019s fountainhead) after Philip (Flip) van Ommeren.</br>The fountain has become the place where the people of Rotterdam celebrate their big successes, like the championship of Feyenoord or a victorious game by the Dutch national soccerteam. Supporters tend to jump into the fountain to celebrate.",
            "Central Station</br> The current station was officially opened on March 13 2014 by king Willem-Alexander. The design of the station won multiple international awards. The locals, however, gave is a less flattering name. It made them think of the aluminium tray in which they serve their infamous fast food invention: KAPSALON (dish with shawarma, fries and cheese).",
            "Feyenoord Stadium</br> Not one, not two, but three professional soccer clubs represent the city of Rotterdam. Feyenoord Stadium is located on the south bank. Supporters lovingly call it the \u2018KUIP\u2019 (the tub), because that\u2019s what is looks like from a bird\u2019s eye view. ",
            "Corporate Entity (sculpture)</br> This artwork used to adorn the entrance of one of the locations of the Rotterdam University of Applied Sciences (Location Museumpark), then headquarters of Unilever. When the multinational moved to a new building the sculpture, often referred to as SCHROOTHOOP (heap of scrap), moved with them.",
            "Erasmus Bridge</br> The inhabitants of Rotterdam invented more than 20 nicknames for their beloved iconic bridge. The ZWAAN (the swan) is the most common one.",
            "Blaak Station</br> The architect was asked to make sure travelers would easily find their way to entrance of the underground train and subway station. That resulted in a remarkable construction that shows some likeness with a flying saucer. Others recognize a withered sunflower or\u2026and you need some more imagination for this one: a FLUITKETEL (tea kettle).",
            "Erasmus Medical Centre</br> Several smaller hospitals and clinics merged with the faculty of medicine of the Erasmus University to become the Erasmus Medical Centre. When you look at it from a distance it looks like a big, white, square tower. Some call it the refrigerator or KOELKAST.",
            "Binnenrotte Square</br> A market with fresh produce is held every Tuesday and Saturday. This square also hosts many events during the year. Archeological excavations on this spot have found the earliest settlements on the riverside of the Rotte, the beginning of Rotterdam. The Binnenrotte is a big open space. That gave it its nickname LANDINGSBAAN (airport runway).",
            "Market Hall</br> This paradise of fresh products, delicacies and food stands sees a lot of tourists, many of whom come to see one thing: the ceiling. The immense artwork gave the building its nickname SIXTIJNSE KAPEL (Sixteen Chapel) ",
            "Central Library</br> The remarkeble yellow tubes on the outside of this building make people think more of a GASFABRIEK (gas factory) than a library. Like many other buildings in town the exterior of the building is decorated with a quote form a famous inhabitant, the humanist thinker Desiderius Erasmus: \u201CHeel de aarde is je vaderland\u201D (The whole world is your homeland). You can visit the Erasmus Experience to learn more about him. ",
            "Beurstraverse</br> A shopping alley below streetlevel that crosses the Coolsingel. Nobody knows its real name. People just call it the KOOPGOOT (buying gutter)\u2026",
            "Blaak Tower</br> Residential towel near Blaak Station. Do you understand why people call it the Pencil (POTLOOD)?",
            "Stylized Flower (Sculpture)</br> This originally nameless artwork was a gift of the Bijenkorf (Mall) to the city. It was later given the title \u2018Stylized Flower\u2019. Some locals just call it the \u2018Thing\u2019 of, more original: the traincrash (SPOORWEGONGELUK) ",
            "My name is Cees Jansen. At a student association you'll make friends for life. Each association has their own culture. Our association is the oldest of Rotterdam and has existed for over a hundred years!",
            "We organise the best parties in our society. I also have a very fun club with which I study and do all kinds of things. During the introduction associations go through the entire city to promote themselves for first years. I will now head out to my own society \uD83D\uDE09. Love, Zo\u00EB",
            "Hi, I am Loes. I like studying together with an association. Of course I also have joined to relax, get to know people, etc. Studying en being a member go hand in hand. Well, I'm off to \"Koinoonia\"",
            "Hey, I am Donna. I am also a member at an association. As a student association we are also committed to social projects. And you learn a lot by organising the events and through commisions. A really good addition to my time as a student.",
            "NSR is the biggest christian association in Rotterdam. We are located on the Eendrachtsplein. Compared to all RKvV-associations we are the youngest. Yet we've existed since 1987! We combine friendship, insight and conviviality. Stop by to get to know us! Greetings, Werner",
            "Question 1: \"icon of Rotterdam\"",
            "Question 2: \"Time for a party\"",
            "Question 4: \"RKVV\"",
            "Question 3: \"A round?\"",
            "Click on the card to put a dot on the card, click on the dot to remove it. Eventually the outcome must be entered in the notebook!</br>",
            "Fancy a party? Sure, but\u2026do you have the time?</br></br>Now that you're a student you will be busy studying. Do you even have time to do something fun?</br></br>Imagine: You go to bed at eleven o'clock and wake at seven to go back to school. On the weekends you usually go to bed a little later, but you're total sleep is as long as usual. You have 0:45 hours of travel time to school, and you need half an hour to get dressed and eat breakfast. You have classes from Monday to Thursday from 8:30 to 10:10 and you have another class from 12:10 to 13:50. On Friday you have the same lessons, but those are taught online through Microsoft Teams. Apart from your classes you spend 4 hours per schoolday to study. You usually do this efficiently in between classes, so you have more free time at night and during the weekend. You make your own food: this takes half an hour and you finish dinner in 20 minutes. Each week you also work 14 hours in a coffee bar in town. You talk to your parents (or grandpa/grandma/aunts) on the phone for about 30 mins each week.\u202FOh, and you spend about one and a half hour each day on social media...</br></br>How much time do you have left to relax?</br></br>On avarage ... hours a day.",
            "How much money do I have left for a round?",
            "Make an appointment here",
            "Counselor",
            "Student Counsellor",
            "Put the right color with the right person.",
            "Need help? Talk to someone about it! You need to be here: Help with study. Hogeschool Rotterdam offers all kinds of one-on-one guidance and help. But...all doors are locked. Crack the lettercode to open all doors, so you can use all our guidance!",
            "The puzzle is solved",
            "Here comes the peer coach!",
            "Continue",
            "sometimes it's not about what you can hear, but about what you can see",
            "Are you sure you want to use hint 1? This hint will help you with the puzzle for the 'Peercoach' door, but als gives minus points for your score. (less points is better) \n \n this pop-up will only show once. Next time you click on the envelope the hint will be used.",
            "Read the confirmation mail for your cellular appointment with Sara Vonk again diligently.",
            "Are you sure you want to use hint 2? This hint will help you with the puzzle for the 'Dean' door, but als gives minus points for your score. (less points is better) \n \n this pop-up will only show once. Next time you click on the envelope the hint will be used.",
            "Interviews are a numbers game sometimes.",
            "Are you sure you want to use hint 3? This hint will help you with the puzzle for the 'Student aan zet' door, but als gives minus points for your score. (less points is better) \n \n this pop-up will only show once. Next time you click on the envelope the hint will be used.",
            "<b>Incorrect!</b>This is not the location of your study program.<br>",
            "Congratulations",
            "You passed this level",
            "You can now take a break<br>Durig this break you will not be timed<br>Press the button to begin act ",
            "Start level ",
            "Click on the door to go inside.",
            "Entrance",
            "Link the number of corners of the shapes on the poster to the flyer Study Help.",
            "Are you sure you want to use hint 4? This hint helps with the final puzzle, but also adds extra points to your score. (less points is better) \n \n this pop-up comes only once. The hint will be used the next time you click on the envelope.",
            "You will explore the city and student life. What do you already know about the most important Rotterdam icons? Where can you exercise as a student? Do you actually have time for a party or a fun association besides your studies? Keep track of your findings in the notebook!",
            "Wow, great job. You are starting to become a real team. Give your team a name to increase your teamspirit!",
            "Enter a name",
            "Wow " + localStorage.getItem("teamName") + ", you have gotten really far already. What makes your team so special? Come up with an appropriate team slogan!",
            "Enter a slogan",
            "Step 1: select \"Destination\"in the menu and set it to \"save as PDF\".<br>Step 2: go to \"More settings\" / \"Options\" and tick the box \"background graphics\".<br>Step 3: click on the \"Save\" button.<br>Step 4: Make a design for a sweater and hand it in to cumLaude together with the screenshot.<br>Slogan: " + localStorage.getItem("teamSlogan") + "</br>" + localStorage.getItem("teamName") + ": Your score is:<br>",
            "Congratulations " + localStorage.getItem("teamName") + "!",
            "Step 1: select \"Destination\"in the menu and set it to \"save as PDF\".<br>Step 2: go to \"More settings\" / \"Options\" and tick the box \"background graphics\".<br>Step 3: click on the \"Save\" button.<br>Step 4: hand in the screenshot in cumLaude.<br>Slogan: " + localStorage.getItem("teamSlogan") + "</br>" + localStorage.getItem("teamName") + ": Your score is:<br>",
            "Click here to save your score",
            "The key to your student experience",
            "Tips & tricks",
            "\u2022 This game is about speed, problem-solving abilities and creativity. The faster you complete the game, the better. But: do pay attention to the information given to you. You might need it later in the game (or during your studies, of course).</br></br>\u2022 In the game you\u2019ll find extra clues to help you. They look like little envelopes. Using them will add 5 minutes to your time, though. So think wisely before you open them.</br></br>\u2022 Work together. By now you probably started a videocall on MS Teams. If not, start one now and invite your team members. It\u2019s important to communicate. Share your ideas, intuitions and possible answers with the team. This way you'll get the best result. In MS Teams you can use \u2018screen share\u2019 so everybody can look at the same screen. But maybe all members want to go to introgame.hr.nl separately so they can all have a look simultaniously. Find out what works for your team! In short: work together to tackle the assignments efficiently!</br></br>\u2022 The game has three parts. Between each part you can pause for a break. Make sure you don\u2019t close the game! During breaks the time will also be paused.</br></br>Enjoy the Introgame and have a great time at RUAS!",
            "You\u2019re about to start your studies at Rotterdam University of Applied Sciences. As a new student you will get loads of new information, you\u2019ll get to know a lot of new people and maybe even have to explore a new city. In this game we would like to introduce you to some basic aspects of studying at RUAS. Things like where to find your schedule and who to turn to when you have a question or need some help. Also, did you know that Rotterdam is a great city for students? We will show you!</br></br> Do not use the resfresh (or BACK) button of your browser or you willl have to start from the beginning!",
            "Library",
            "The text for the library hasnt been given yet.",
            "My RUAS is your personal assistant!",
            "The \u2018My RUAS\u201D app will help you organise your studies better. Simply because you will have the most important information about your studies at your fingertips. It\u2019s so easy and will make your life more relaxed.</br></br>In My RUAS you\u2019ll find:</br>exam results</br>calendar</br>notifications, emails and Teams chats</br>teachers\u2019 contact details</br>progress</br>registrations for exams and courses</br>\u2026. and more to come!</br></br>Download the \u2018Rotterdam UAS\u2019 app on your device in your app store or check out the web application: https://my.rotterdamuas.com",
            "Study coach",
            "Student welfare advisor",
            "You solved all the puzzles. You demonstrated you really deserve your slogan \u201C" + localStorage.getItem("teamSlogan") + "\u201D.</br></br>Save this page as PDF using the button below. Hand it in through <a href=\"http://lms.hr.nl\" target=\"_blank\" style=\"display: inline\">CumLaude</a> in the elective course \u2018Key to Succes\u2019. NB: Only your teamcaptain will be able to login. Upload the file in the assignment you find in the course.</br>your score is:</br>",
            "You solved all the puzzles. You demonstrated you really deserve your slogan \u201C" + localStorage.getItem("teamSlogan") + "\u201D.</br> It\u2019s now time for the very last assignments:</br>\u2022Save this page as PDF using the button below</br>\u2022Make a design for a team sweater that shows your team name and slogan (you may still adjust it if you prefer). You only have to design a printed logo (size A4). Choose whatever program or application you like. Make sure to save it as a PDF file. (Tip: don\u2019t make the design too complicated)</br></br>On the basis of these two assignments the staff of your introduction program will decide on the winner. The winning team will receive their self-designed sweaters. The design will be printed on red hooded sweaters.</br></br>Hand in both the screenshot and the design for your sweaters through <a href=\"http://lms.hr.nl\" target=\"_blank\" style=\"display: inline\">CumLaude</a> in the elective course \u2018Key to Succes\u2019. Only your teamcaptain will be able te login. Upload both documents in the assignment you find in the course.</br>Your score is:"
        ];
        this.dutch = ["Om van start te gaan moeten we weten aan welke opleiding jij deel neemt. Kies uit deze lijst jouw opleiding </br></br>In order to start, we need to know what study program you are taking. Please select your study program from this list",
            "Kies opleiding / Choose education",
            "Kies taal",
            "Hogeschool Rotterdam zit verspreid over de stad. Meer dan 15 locaties op zowel Noord als Zuid. Welke locatie is jullie thuishaven?",
            "<b>Correct!</b>Dit is de locatie van jouw opleiding.<br>",
            "Klik hier</a>voor meer informatie over deze locattie</p>",
            "Probeer opnieuw",
            "Loop naar binnen",
            "Jullie hebben de locatie gevonden. Helaas blijkt de deur nog op slot te zitten... Dat schiet natuurlijk niet op! Gelukkig zijn veel zaken op de hogeschool online geregeld. Kijk daar eerst eens rond en misschien vinden jullie daar de 3 vormen die samen de sleutel maken.",
            "Verzenden",
            "Zoek online naar vormen",
            "Doorgaan",
            "Welkom op jullie online plattegrond",
            "Misschien is het handig om even een mailtje te sturen naar het studenten service center (zie de plattegrond om bij het webform te komen) over de sleutel. Zorg dat je gaandeweg de hints in de gaten houdt over mogelijke vormen.",
            "Dit antwoord is onjuist. Probeer het nog een keer.",
            "Rooster",
            "Klik op doorgaan om je rooster te zien",
            "Student Service Center",
            "Toegang tot de hogeschool begint natuurlijk bij je inschrijving. Als het goed is, hebben jullie dat allemaal geregeld. Heb je toch nog vragen over je inschrijving, collegegeld etc., neem dan contact op met het Studenten Service Center. Dat kan via HINT of bij hun balie op Rochussenstraat 198. Misschien dat ze je nu ook wel kunnen helpen met de zoektocht naar de sleutel. Stuur ze snel een berichtje (en hou je studentenmail in de gaten).",
            "CumLaude Learning is de digitale leeromgeving waar je de belangrijkste informatie over je vakken vindt en bijvoorbeeld opdrachten kan inleveren. Je logt op CumLaude in met je eigen studentnummer en wachtwoord. Je wordt automatisch aan jouw vakken gekoppeld, eventueel na inschrijving voor een (keuze-) vak via Osiris. Kan je niet in een bepaald vak op CumLaude, neem dan contact op met de bedrijfsbureau van jouw opleiding.</br></br></br>*  De meeste opleidingen werken met CumLaude Learning, maar sommige opleidingen werken met andere systemen, zoals Canvas of Brightspace. In deze game laten we je zien hoe CumLaude werkt. In de praktijk werken die systemen bijna hetzelfde.",
            "De Hofpleinfontein</br> Midden in het verkeersplein Hofplein staat een grote fontein. Deze Hofpleinfontein werd in 1939 aan de stad Rotterdam geschonken door de\u202Frederij Van Ommeren\u202Fdie zijn honderjarige bestaan vierde. De fontein wordt in de volksmond ook wel de\u202FFlipspuit\u202Fgenoemd, verwijzend naar Philippus \"Flip\" van Ommeren. Door de centrale ligging, pal naast de Coolsingel, is het een plaats geworden waar grote successen worden gevierd van voetbalclub\u202FFeyenoord\u202Fen het\u202FNederlands voetbalelftal. Bij die overwinningen\u202Fspringen en feesten supporters in de fontein.",
            "Rotterdam Centraal Station</br> Het huidige stationsgebouw, gelegen aan het\u202FStationsplein, werd op 13 maart 2014 officieel geopend door koning\u202FWillem-Alexander.\u202FHet ontwerp verwierf meerdere internationale prijzen. Maar Rotterdammers hebben hun stationsgebouw zoals gewoonlijk een minder flatteuze bijnaam gegeven!",
            "Feyenoordstadion</br> \"Ga je mee naar het stadion, naar de club van Rood en Wit.\" Dit stadion is beter bekend onder de naam \u2026\u2026\u2026.",
            "'De Belichaamde Eenheid'</br> Dit kunstwerk stond ooit bij de ingang van een van de locaties van Hogeschool Rotterdam (Museumpark Hoogbouw); destijds het hoofdkantoor van Unilever. Bij de verhuizing naar de Weena is het kunstwerk meeverhuisd.",
            "Erasmusbrug</br> De Erasmusbrug is een verhaal apart en heeft wel meer dan 20 bijnamen, waaronder \u2018de Zwaan\u2019, \u2018de Harp\u2019 en 'de Wipkip\u2019. Toch is \u2018de Zwaan\u2019 de meest gebruikte bijnaam.",
            "Station Blaak</br> De opdracht die de architect had bij het ontwerpen van het station was dat er voldoende ori\u00EBntatiepunten moesten zijn voor de reizigers. Dit is ook de reden dat de architect een opvallende constructie boven de grond maakte, zodat het station meteen opvalt en te herkennen is. Het ontwerp lijkt een beetje op een vliegende schotel. Veel mensen noemen het ook een verwelkte zonnebloem of fluitketel. Voor die laatste bijnaam moet je wel iets meer fantasie hebben.. ",
            "Erasmus Medische Centrum</br> Op 1 juni 2002 fuseerden het Dijkzigtziekenhuis, het Sophia Kinderziekenhuis, de Daniel den Hoedkliniek en de \"Faculteit der Geneeskunde en Gezondheidswetenschappen\" van de Erasmus Universiteit Rotterdam tot het huidige Erasmus MC. \u201CGroot, wit, vierkant\u2026. Ik begrijp het wel\u201D zei een Rotterdammer over de bijnaam van dit gebouw.",
            "Binnenrotte</br> Hier wordt op dinsdag en zaterdag markt gehouden. Daarnaast wordt het plein ook veelvuldig gebruikt voor evenementen. Opgravingen hebben aangetoond dat de vroegste nederzettingen aan de rivier de Rotte hier het begin van de stad Rotterdam hebben ingeluid. De Binnenrotte is een grote, open ruimte en daar is ook de bijnaam \u2018Landingsbaan\u2019 van afgeleid.",
            "Markthal</br> Deze koophemel herbergt delicatessen, verse producten, allerlei eettentjes, een supermarkt en slijterij. Toch komen de meeste toeristen voor iets anders. Camera\u2019s klikken onafgebroken en zijn allemaal gericht op het plafond van de iconische Markthal. Rotterdammers spreken trots over hun \u2018Sixtijnse Kapel\u2019.",
            "Centrale Bibliotheek</br> Aan de opvallende gele buizen aan de buitenkant van dit gebouw dankt de bibliotheek haar bijnaam. Waar doet het jou aan denken? Net als meer gebouwen in Rotterdam, draagt de bibliotheek een citaat van een beroemde Rotterdammer op de gevel: \u201CHeel de aarde is je vaderland\u201D schreef niemand minder dan Desiderius Erasmus. Bezoek ook is de Erasmus Experience in de bibliotheek als je meer over deze grote denker wil leren.",
            "Beurstraverse</br> Deze verdiepte winkelstraat loopt onder de Coolsingel door. De onhandige trappen ogen misschien mooi, maar lopen voor geen meter! Grote ketens hebben hier allemaal een plek.",
            "De Blaaktoren Woontoren.</br> Voor Rotterdammers beter bekend als het 'potlood'.",
            "'De gestileerde bloem'</br> Dit naamloze kunstwerk is een geschenk van de Bijenkorf aan de stad Rotterdam. Het heeft later de titel \u2018de gestileerde bloem\u2019 gekregen. Sommige Rotterdammers noemen het gewoonweg \u2018het ding\u2019. Anderen zien er een spoorwegongeluk in.",
            "Mijn naam is Cees Jansen. Bij een studentenvereniging maak je vrienden voor het leven. Elke vereniging heeft een eigen cultuur. Onze vereniging is de oudste van Rotterdam en bestaat al meer dan 100 jaar!",
            "Bij ons op de soci\u00EBteit organiseren we de mooiste feesten. Ook heb ik een hele leuke club waarmee ik samen studeer en allerlei dingen onderneem. Tijdens de introductie gaan verenigingen trouwens de hele stad door om zichzelf te promoten onder eerstejaars. Ik ga zo maar weer eens naar mijn eigen soci\u00EBteit \uD83D\uDE09. Liefs, Zo\u00EB ",
            "Hi, Ik ben Loes. Ik vind het leuk om samen op de vereniging te studeren. Natuurlijk kom ik er ook om te ontspannen, mensen te leren kennen, etc. Studeren en lid zijn gaat goed samen. Nou, ik ga maar weer eens. Op naar \"Koinoonia\".",
            "Hoi, ik ben Donna. Ook ik ben lid bij een vereniging. Als studentenvereniging zetten we ons ook in voor maatschappelijke projecten. En je leert veel door commissies en het organiseren van evenementen. Echt een goede aanvulling op mijn studententijd.",
            "NSR is de grootste christelijke vereniging van Rotterdam. We zitten op het Eendrachtsplein. Van alle RKvV-verenigingen zijn we de jongste. Toch bestaan we al weer sinds 1987! We combineren vriendschap, verdieping en gezelligheid. Kom eens langs om kennis te maken! Groetjes, Werner",
            "Vraag 1: \"Rotterdamse icoon\"",
            "Vraag 2: \"Tijd voor een feestje\"",
            "Vraag 4: \"De leden van de </br>studentenverenigingen zeggen</br>samen:\"",
            "Vraag 3: \"Rondje?\"",
            "Klik op de aansichtkaart om een stip te zetten, klik op de stip om deze weer weg te halen. Uiteindelijk komt er een uitkomst vul deze in in het notitieboekje!</br>",
            "Zin in een feestje? Maar heb ik daar wel tijd voor? Nu je student wordt zal je het razend druk gaat krijgen met je studie. Heb je eigenlijk nog wel tijd om iets leuks te doen? Je wil toch ook een beetje genieten van je studententijd? Hoe doen andere studenten dat eigenlijk?\n                    </br>Stel: Je gaat om elf uur naar bed en je staat om zeven uur weer op om naar de hogeschool te gaan. In het weekend ga je vaak wat later naar bed, maar slaap je ook net zoveel uit. Je hebt 0:45 uur reistijd van huis naar school, een half uur om aan te kleden en te eten 's ochtend. Op school heb je van maandag t/m donderdag les van 8.30 uur tot 10:10 uur en je hebt les 12:10 tot 13.50 uur. Vrijdag heb je ook les, maar die volg je online via Teams. Naast je lessen besteed je nog 4 uur per dag aan huiswerk. Dat doe je vaak effici\u00EBnt tussen de lessen door, hoef je minder 's avonds en in het weekend te doen. Je kookt je eigen eten, kost een half uurtje en tja, binnen 20 minuten heb je dat op. Per week werk je gemiddeld 14 uur in een leuk koffietentje in de stad. Je wilt het eigenlijk niet, maar aan social media ben je bijna anderhalf uur per dag kwijt. Oh ja, en je belt natuurlijk elke week een keer met je ouders (of oma/opa/tante) voor zo'n 30 min. \n                    </br></br>Hoeveel tijd hou jij over voor ontspanning?\n                    </br></br>Gemiddeld ... uur per dag.",
            "Hoeveel geld houd ik over voor een rondje?",
            "Maak hier een afspraak",
            "Vertrouwenspersoon",
            "Decaan",
            "Zoek de juiste kleur bij de juiste persoon.",
            "Hulp nodig? Blijf (er) niet (mee) rondlopen! Hier moet je zijn: Hulp bij studie. De hogeschool biedt allerlei vormen van een-op-een begeleiding en ondersteuning. Maar....alle deuren zitten op slot. Kraak de lettercode om alle deuren te openen, zodat je gebruik kunt maken van al onze begeleiding!",
            "De puzzel is opgelost",
            "Daar komt de peercoach",
            "doorgaan",
            "Soms gaat het niet om wat je hoort, maar om wat je ziet",
            "Weet je zeker dat je hint 1 wilt gebruiken? Deze hint helpt bij de puzzel van de 'Peercoach' deur, maar telt ook extra punten op bij je score. (minder punten is beter) \n \n deze pop-up komt maar 1 keer. De volgende keer dat je op de envelop klikt wordt de hint gebruikt.\"",
            "Lees de bevestiging mail van je telefonische afspraak met Sara Vonk nog eens zorgvuldig door.",
            "Weet je zeker dat je hint 2 wilt gebruiken? Deze hint helpt bij de puzzel van de 'Decaan' deur, maar telt ook extra punten op bij je score. (minder punten is beter) \n \n deze pop-up komt maar 1 keer. De volgende keer dat je op de envelop klikt wordt de hint gebruikt.",
            "Solliciteren is soms een numbers game.",
            "Weet je zeker dat je hint 3 wilt gebruiken? Deze hint helpt bij de puzzel van de 'Student aan zet' deur, maar telt ook extra punten op bij je score. (minder punten is beter) \n \n deze pop-up komt maar 1 keer. De volgende keer dat je op de envelop klikt wordt de hint gebruikt.",
            "<b>Incorrect!</b>Dit is niet de locatie van jouw opleiding<br>",
            "Gefeliciteerd",
            "Je hebt dit level gehaald",
            "Je kunt nu even pauze nemen<br>Tijdens de pauze staat de tijd stil<br>Druk op de knop om te beginnen met akte ",
            "Begin level ",
            "Klik op de deur om naar binnen te gaan.",
            "Ingang",
            "Link het aantal hoeken van de vormen op de poster aan de flyer Hulp bij Studie.",
            "Weet je zeker dat je hint 4 wilt gebruiken? Deze hint helpt bij de eind puzzel, maar telt ook extra punten op bij je score. (minder punten is beter) \n \n deze pop-up komt maar 1 keer. De volgende keer dat je op de envelop klikt wordt de hint gebruikt.\"",
            "Jullie gaan de stad en het studentenleven verkennen. Wat weten jullie al over de belangrijkste Rotterdamse iconen? Waar kan je als student sporten? Heb je eigenlijk wel tijd voor een feestje of een leuke vereniging naast je studie? Hou je bevindingen bij in het notitieboekje!",
            "Wow, goed gedaan. Jullie beginnen al echt een team te worden. Verzin een naam voor jullie team om de teamspirit te vergroten!",
            "Vul een naam in",
            "Wow " + localStorage.getItem("teamName") + ", jullie zijn nu echt al een heel eind. Wat maakt jullie team eigenlijk zo bijzonder? Verzin een toepasselijke teamslogan!",
            "Vul een slogan in",
            "stap 1: Selecteer het \"Destination\" menu en klik vervolgens op \"save as PDF\".<br>stap 2: Vink onder \"More settings\" / \"Options\" het \"background graphics vinkje aan.<br>stap 3: klik op het \"Save\" knopje.<br>stap 4: Maak een ontwerp voor een trui en lever deze samen met de screenshot in op cumLaude.<br>Slogan: " + localStorage.getItem("teamSlogan") + "</br>" + localStorage.getItem("teamName") + ": jullie score is:<br>",
            "Gefeliciteerd " + localStorage.getItem("teamName") + "!",
            "stap 1: Selecteer het \"Destination\" menu en klik vervolgens op \"save as PDF\".<br>stap 2: Vink onder \"More settings\" / \"Options\" het \"background graphics vinkje aan.<br>stap 3: klik op het \"Save\" knopje.<br>stap 4: Lever deze screenshot in via cumLaude.<br>Slogan: " + localStorage.getItem("teamSlogan") + "</br>" + localStorage.getItem("teamName") + ": jullie score is:<br>",
            "Klik hier voor een uitdraai van jullie score",
            "De sleutel tot jouw studententijd",
            "Tips & tricks",
            "\u2022 Het draait in het spel om snelheid, oplossend vermogen en creativiteit. Hoe sneller jullie het spel uitspelen, hoe beter. Maar: let wel goed op welke informatie je krijgt toegespeeld\u2026 je zou dat zomaar eens nodig kunnen hebben op een later moment in het spel (en natuurlijk tijdens je studie ;-) )</br></br>\u2022 Tijdens het spel kan je gebruik maken van hints. Het gebruik van de hints kost je echter tijd. Hoe minder hints jullie nodig hebben, hoe beter!</br></br>\u2022 Werk samen. Als het goed is zijn jullie inmiddels als groep een videogesprek gestart in MS Teams. Zorg dat je goed communiceert. Deel je idee\u00EBn, vermoedens en mogelijke antwoorden hardop met elkaar. Zo kom je samen tot het beste resultaat. In MS Teams kan je ervoor kiezen om je scherm te delen met de andere mensen in de groep. Dan kijkt iedereen naar hetzelfde scherm. Daarnaast is het natuurlijk ook mogelijk om allemaal individueel via de link https://introgame.hr.nl  het spel te doorlopen. Op die manier kan iedereen mee op zoek naar antwoorden. Kortom, bundel je krachten en verdeel de taken slim!</br></br>\u2022 Het spel bestaat uit 3 delen. Tussen de delen kan je wel even pauzeren, maar sluit het spel niet af. Tijdens jullie pauze loopt de tijd niet verder door.</br></br>En nu op naar een geweldige studententijd!</br>Veel speelplezier!",
            "Jullie staan aan het begin van jullie studie aan Hogeschool Rotterdam. En dat begin gaat gepaard met een heleboel nieuwe informatie, nieuwe mensen en misschien zelfs een nieuwe stad! In deze game laten we jullie vast een beetje ontdekken hoe het op de hogeschool geregeld is. Waar vind je bijvoorbeeld je rooster? Bij wie kan je terecht als je met een vraag of probleem zit? En wist je dat Rotterdam ook echt een leuke studentenstad is? Ook daar laten we je graag een beetje mee kennismaken.</br></br> Gebruik niet de resfresh- of terugknop van je browser. Dan moet je helemaal terug naar het begin! ",
            "Mediatheek",
            "de tekst voor de mediatheek is nog niet gegeven.",
            "Mijn HR is jouw personal assistant!",
            "De \u2018Mijn HR\u2019 app helpt je om je studie slimmer te organiseren. Gewoon omdat je de belangrijkste informatie over jou en je studie voortaan altijd bij de hand hebt. Dat is erg makkelijk en je leven als student wordt er een stukje relaxter van.</br></br>In Mijn HR vind je jouw:</br>studieresultaten</br>agenda</br>mededelingen, mails en chats</br>contactgevens van docenten</br>voortgang</br>inschrijvingen</br>\u2026.. en steeds meer!</br></br>Download de Hogeschool Rotterdam app op je telefoon of ga naar mijn.hr.nl",
            "Studieloopbaancoach",
            "studententenwelzijnsadviseurs",
            "Jullie hebben alle puzzels opgelost. Jullie hebben jullie slogan \u201C" + localStorage.getItem("teamSlogan") + "\u201D echt eer aan gedaan.</br></br>Sla deze pagina op als PDF via de knop hieronder en lever deze in via <a href=\"http://lms.hr.nl\" target=\"_blank\" style=\"display: inline\">CumLaude</a> in het keuzevak \u2018Sleutel van Succes\u2019. Let op: alleen jullie teamcaptain kan erin. Upload het bestand via de \u2018inleveropdracht\u2019.</br> jullie score is:</br>",
            "Jullie hebben alle puzzels opgelost. Jullie hebben jullie slogan \u201C" + localStorage.getItem("teamSlogan") + "\u201D echt eer aan gedaan.</br></br>Tijd voor de allerlaatste opdrachten:</br>\u2022Sla deze pagina op als PDF via de knop hieronder;</br><b>\u2022Maak een ontwerp voor een teamtrui met daarin jullie teamnaam en slogan.</b> Je hoeft alleen de opdruk (A4-formaat) te ontwerpen. Je mag zelf kiezen met welk programma je hiervoor aan de slag gaat. Sla dit bestand op als PDF. (Tip: maak het ontwerp niet t\u00E9 ingewikkeld!)</br></br>Op basis van deze twee opdrachten zal de opleiding een winnaar bekend maken. Dit team ontvangt hun eigen ontworpen teamtrui! Het ontwerp wordt gedrukt op een rode capuchontrui.</br></br>Lever het screenshot en het ontwerp voor de trui in via <a href=\"http://lms.hr.nl\" target=\"_blank\" style=\"display: inline\">CumLaude</a> in het keuzevak \u2018Sleutel van Succes\u2019. Let op: alleen jullie teamcaptain kan daarin. Upload de bestanden via de \u2018inleveropdracht\u2019.</br> Jullie score is:</br>"
        ];
    }
    return Languages;
}());
var LocatieSelectie = (function () {
    function LocatieSelectie() {
        this.background = document.createElement('backgroundLocation');
        this.game = document.getElementsByTagName('game')[0];
        this.educations = new Locations().collective;
        this.background.style.backgroundImage = "url(assets/PRODUCTION/PRODUCTION/ASSETS/map.png";
        this.game.appendChild(this.background);
        this.educationSetter();
        this.language();
    }
    LocatieSelectie.prototype.goBack = function () {
        this.game.innerHTML = "";
        new LocatieSelectie();
    };
    LocatieSelectie.prototype.language = function () {
        var _this = this;
        var language = document.createElement('languagePicker');
        var dutch = document.createElement('button');
        dutch.innerHTML = 'Nederlands';
        var english = document.createElement('button');
        english.innerHTML = 'English';
        document.getElementsByTagName('educationsetter')[0].appendChild(language);
        if (localStorage.getItem('language') == 'dutch') {
            dutch.style.backgroundColor = '#ff9c23';
        }
        if (localStorage.getItem('language') == 'english') {
            english.style.backgroundColor = '#ff9c23';
        }
        dutch.addEventListener('click', function () {
            localStorage.setItem('language', 'dutch');
            dutch.style.backgroundColor = '#ff9c23';
            english.style.backgroundColor = '';
            _this.goBack();
        });
        english.addEventListener('click', function () {
            localStorage.setItem('language', 'english');
            english.style.backgroundColor = '#ff9c23';
            dutch.style.backgroundColor = '';
            _this.goBack();
        });
    };
    LocatieSelectie.prototype.educationSetter = function () {
        var _this = this;
        this.educationSet = document.createElement('educationsetter');
        this.game.appendChild(this.educationSet);
        this.educationSet.innerHTML = new Languages()[localStorage.getItem('language')][0];
        this.educationSelect = document.createElement('select');
        var allEducations = new Array();
        for (var index1 = 0; index1 < this.educations.length; index1++) {
            for (var index2 = 0; index2 < this.educations[index1].opleidingen.length; index2++) {
                allEducations.push(this.educations[index1].opleidingen[index2]);
            }
        }
        allEducations = allEducations.sort();
        for (var education in allEducations) {
            var addToDrop = document.createElement('option');
            addToDrop.value = allEducations[education];
            addToDrop.innerHTML = allEducations[education];
            this.educationSelect.appendChild(addToDrop);
        }
        this.educationSet.appendChild(this.educationSelect);
        var thisLocation = document.createElement('button');
        thisLocation.innerHTML = new Languages()[localStorage.getItem('language')][1];
        thisLocation.addEventListener('click', function () { return _this.saveEducation(); });
        this.educationSet.appendChild(thisLocation);
    };
    LocatieSelectie.prototype.saveEducation = function () {
        var education = document.getElementsByTagName('select')[0].value;
        localStorage.setItem('education', education);
        this.locationPicker();
    };
    LocatieSelectie.prototype.locationPicker = function () {
        var _this = this;
        var back = document.createElement("button");
        back.id = 'backToLocatie';
        back.addEventListener('click', function () { return _this.goBack(); });
        this.game.appendChild(back);
        var map = document.createElement('map');
        this.game.appendChild(map);
        this.background.style.backgroundImage = "url(assets/akte_1_map@0.75x.png)";
        this.background.style.backgroundSize = "100% 100%";
        if (localStorage.getItem("education") == "International Business for Asia" || localStorage.getItem("education") == "International Business & Languages" || localStorage.getItem("education") == "International Business & Management" || localStorage.getItem("education") == "International Business & Supply Chain Management" || localStorage.getItem("education") == "Master Consultancy and Entrepeneurship" || localStorage.getItem("education") == "Master in Supply Chain Management" || localStorage.getItem("education") == "Foundation Programme" || localStorage.getItem("education") == "International Business") {
            localStorage.setItem("language", "english");
        }
        new CenterPopup(new Languages()[localStorage.getItem('language')][78], new Languages()[localStorage.getItem('language')][79], "");
        var popup = document.getElementsByTagName("onlinePopup")[0];
        popup.style.top = "5vh";
        popup.style.width = "50vw";
        popup.style.left = "22vw";
        var button = document.getElementsByClassName("popupButton")[0];
        button.style.top = "85%";
        this.educationSet.remove();
        var locationTekst = document.createElement('locationTekst');
        locationTekst.innerHTML = new Languages()[localStorage.getItem('language')][3];
        this.game.appendChild(locationTekst);
        this.locationMarker(34.3, 67.9, 'academieplein', 0);
        this.locationMarker(46.3, 57, 'blaak', 1);
        this.locationMarker(62.7, 61.5, 'kralingse_zoom', 2);
        this.locationMarker(33.9, 78.5, 'lloyd_straat', 3);
        this.locationMarker(64, 60, 'max_euwelaan', 4);
        this.locationMarker(37, 65, 'museumpark_hoogbouw', 5);
        this.locationMarker(38, 63, 'museumpark_laagbouw', 6);
        this.locationMarker(33, 72.5, 'pieter_de_hoogweg', 7);
        this.locationMarker(49, 73, 'posthumalaan', 8);
        this.locationMarker(15.7, 82, 'rdm_rotterdam', 9);
        this.locationMarker(35, 67, 'rochussenstraat', 10);
        this.locationMarker(46, 58, 'wijnhaven_61', 11);
        this.locationMarker(45, 58.4, 'wijnhaven_99', 12);
        this.locationMarker(44.4, 58.7, 'wijnhaven_103', 13);
        this.locationMarker(43.8, 59, 'wijnhaven_107', 14);
    };
    LocatieSelectie.prototype.locationMarker = function (x, y, location, index) {
        var _this = this;
        var marker = document.createElement('pin');
        this.game.appendChild(marker);
        marker.style.transform = "translate(" + x + "vw," + y + "vh)";
        marker.addEventListener('click', function () {
            var yourEducation = localStorage.getItem('education');
            if (localStorage.getItem("language") == "dutch") {
                if (_this.educations[index].opleidingen.indexOf(yourEducation) > -1) {
                    localStorage.setItem('location', _this.educations[index].location);
                    _this.popupLoc('correct', location, _this.educations[index].locatieInfo);
                }
                else {
                    _this.popupLoc('incorrect', location, _this.educations[index].locatieInfo);
                }
            }
            else {
                if (_this.educations[index].opleidingen.indexOf(yourEducation) > -1) {
                    localStorage.setItem('location', _this.educations[index].location);
                    _this.popupLoc('correct', location, _this.educations[index].locatieInfoEng);
                }
                else {
                    _this.popupLoc('incorrect', location, _this.educations[index].locatieInfoEng);
                }
            }
        });
    };
    LocatieSelectie.prototype.popupLoc = function (awnser, location, info) {
        if (document.getElementsByTagName('popupLocation')[0]) {
            document.getElementsByTagName('popupLocation')[0].remove();
        }
        var popupLocation = document.createElement('popupLocation');
        var locationImage = document.createElement('locationImage');
        this.game.appendChild(popupLocation);
        popupLocation.appendChild(locationImage);
        locationImage.style.backgroundImage = "url(assets/PRODUCTION/PRODUCTION/ASSETS/" + location + ".png)";
        if (awnser == 'correct') {
            popupLocation.innerHTML += new Languages()[localStorage.getItem('language')][4];
            popupLocation.innerHTML += "<p><a target='_blank' href='" + info + "'>" + new Languages()[localStorage.getItem('language')][5];
            var goto = document.createElement('button');
            popupLocation.appendChild(goto);
            goto.innerHTML = new Languages()[localStorage.getItem('language')][7];
            goto.addEventListener('click', function () {
                document.getElementsByTagName("game")[0].innerHTML = "";
                new tobuilding;
            });
        }
        else {
            popupLocation.innerHTML += new Languages()[localStorage.getItem('language')][59];
            popupLocation.innerHTML += "<p><a target='_blank' href='" + info + "'>" + new Languages()[localStorage.getItem('language')][5];
            var goto = document.createElement('button');
            popupLocation.appendChild(goto);
            goto.innerHTML = new Languages()[localStorage.getItem('language')][6];
            goto.addEventListener('click', function () {
                document.getElementsByTagName('popupLocation')[0].remove();
            });
        }
    };
    return LocatieSelectie;
}());
var Locations = (function () {
    function Locations() {
        this.academieplein = {
            location: "academieplein",
            opleidingen: [
                "Biologie en Medisch Laboratoriumonderzoek",
                "Bouwkunde",
                "Chemie",
                "Civiele Techniek",
                "Elektrotechniek",
                "Facility Management",
                "Logistics Management (bachelor)",
                "Ruimtelijke Ordening en Planologie",
                "Technische Bedrijfskunde",
                "Vastgoed en Makelaardij",
                "Watermanagement",
                "Werktuigbouwkunde"
            ],
            locatieInfo: "https://www.hogeschoolrotterdam.nl/hogeschool/locaties/academieplein/",
            locatieInfoEng: "https://www.rotterdamuas.com/about/locations/academieplein/"
        };
        this.blaak = {
            location: "blaak",
            opleidingen: [],
            locatieInfo: "https://www.hogeschoolrotterdam.nl/hogeschool/locaties/blaak/",
            locatieInfoEng: "https://www.rotterdamuas.com/about/locations/blaak/"
        };
        this.kralingse_zoom = {
            location: "kralingse_zoom",
            opleidingen: [
                "CE: Commerciële Economie",
                "CE: Creative Marketing & Sales",
                "CE: Global Marketing & Sales",
                "CE: Marketing of Social Business",
                "CE: Sportmarketing & Management",
                "Ondernemerschap & Retail Management (Bachelor)",
                "Bedrijfskunde",
                "Business IT & Management",
                "Human Resource Management",
                "Accountancy (Bachelor)",
                "Finance & Control",
                "Finance, Tax and Advice",
                "Deeltijd - Bedrijfskunde",
                "Deeltijd - Business IT & Management",
                "Deeltijd - Commerciële Economie",
                "Deeltijd - Finance & Control",
                "Deeltijd - Human Resource Management",
                "Master Consultancy and Entrepeneurship",
                "Master in Supply Chain Management",
                "Foundation Programme"
            ],
            locatieInfo: "https://www.hogeschoolrotterdam.nl/hogeschool/locaties/kralingse-zoom/",
            locatieInfoEng: "https://www.rotterdamuas.com/about/locations/kralingse-zoom/"
        };
        this.lloyd_straat = {
            location: "lloyd_straat",
            opleidingen: [
                "Chemische Technologie",
                "Logistics Engineering"
            ],
            locatieInfo: "https://www.hogeschoolrotterdam.nl/hogeschool/locaties/lloydstraat/",
            locatieInfoEng: "https://www.rotterdamuas.com/about/locations/lloydstraat/"
        };
        this.max_euwelaan = {
            location: "max_euwelaan",
            opleidingen: [],
            locatieInfo: "https://www.hogeschoolrotterdam.nl/hogeschool/locaties/max-euwelaan/",
            locatieInfoEng: "https://www.rotterdamuas.com/about/locations/max-euwelaan/"
        };
        this.museumpark_hoogbouw = {
            location: "museumpark_hoogbouw",
            opleidingen: [
                "Accountancy (Associate Degree)",
                "Arts & Crafts",
                "Crossmediale Communicatie",
                "Engineering",
                "ICT Service Management",
                "ICT Internet of Things",
                "Integraal Bouwmanagement",
                "Logistiek Management (Associate Degree)",
                "Maintenance & Mechanics",
                "Management in de Zorg",
                "Management",
                "Ondernemen (Associate Degree)",
                "Pedagogisch Educatief Professional",
                "Sales & Accountmanagement",
                "Sociaal Financiële Dienstverlening",
            ],
            locatieInfo: "https://www.hogeschoolrotterdam.nl/hogeschool/locaties/mp-hoogbouw/",
            locatieInfoEng: "https://www.rotterdamuas.com/about/locations/museumpark/"
        };
        this.museumpark_laagbouw = {
            location: "museumpark_laagbouw",
            opleidingen: [
                "Lerarenopleiding Aardrijkskunde",
                "Lerarenopleiding Algemene Economie en bedrijfseconomie",
                "Lerarenopleiding Biologie",
                "Lerarenopleiding Duits",
                "Lerarenopleiding Engels",
                "Lerarenopleiding Frans",
                "Lerarenopleiding Geschiedenis",
                "Lerarenopleiding Maatschappijleer",
                "Lerarenopleiding Natuurkunde",
                "Lerarenopleiding Nederlands",
                "Lerarenopleiding Technisch beroepsonderwijs",
                "Lerarenopleiding Wiskunde",
                "Social Work"
            ],
            locatieInfo: "https://www.hogeschoolrotterdam.nl/hogeschool/locaties/museumpark-laagbouw/",
            locatieInfoEng: "https://www.rotterdamuas.com/about/locations/museumpark/"
        };
        this.pieter_de_hoogweg = {
            location: "pieter_de_hoogbouw",
            opleidingen: [
                "Industrieel Product Ontwerpen",
                "Gezondheidszorg Technologie"
            ],
            locatieInfo: "https://www.hogeschoolrotterdam.nl/hogeschool/locaties/pieter-de-hoochweg/",
            locatieInfoEng: "https://www.rotterdamuas.com/about/locations/pieter-de-hoochweg/"
        };
        this.posthumalaan = {
            location: "posthumalaan",
            opleidingen: [
                "International Business"
            ],
            locatieInfo: "https://www.hogeschoolrotterdam.nl/hogeschool/locaties/posthumalaan/",
            locatieInfoEng: "https://www.rotterdamuas.com/about/locations/posthumalaan/"
        };
        this.rdm_rotterdam = {
            location: "rdm_rotterdam",
            opleidingen: [
                "Automotive",
            ],
            locatieInfo: "https://www.hogeschoolrotterdam.nl/hogeschool/locaties/rdm-campus/",
            locatieInfoEng: "https://www.rotterdamuas.com/about/locations/rdm-campus/"
        };
        this.rochussenstraat = {
            location: "rochussenstraat",
            opleidingen: [],
            locatieInfo: "https://www.hogeschoolrotterdam.nl/hogeschool/locaties/rochussenstraat/",
            locatieInfoEng: "https://www.rotterdamuas.com/about/locations/rochussenstraat/"
        };
        this.wijnhaven_61 = {
            location: "wijnhaven_61",
            opleidingen: [],
            locatieInfo: "https://www.hogeschoolrotterdam.nl/hogeschool/locaties/wijnhaven-61/",
            locatieInfoEng: "https://www.rotterdamuas.com/about/locations/wijnhaven-61/"
        };
        this.wijnhaven_99 = {
            location: "wijnhaven_99",
            opleidingen: [
                "Creative Media and Game Technologies"
            ],
            locatieInfo: "https://www.hogeschoolrotterdam.nl/hogeschool/locaties/wijnhaven-99/",
            locatieInfoEng: "https://www.rotterdamuas.com/about/locations/wijnhaven-99/"
        };
        this.wijnhaven_103 = {
            location: "wijnhaven_103",
            opleidingen: [],
            locatieInfo: "https://www.hogeschoolrotterdam.nl/hogeschool/locaties/wijnhaven-103/",
            locatieInfoEng: "https://www.rotterdamuas.com/about/locations/wijnhaven-103/"
        };
        this.wijnhaven_107 = {
            location: "wijnhaven_107",
            opleidingen: [
                "Communicatie",
                "Communication and Multimedia Design",
                "Informatica",
                "Technische Informatica"
            ],
            locatieInfo: "https://www.hogeschoolrotterdam.nl/hogeschool/locaties/wijnhaven-107/",
            locatieInfoEng: "https://www.rotterdamuas.com/about/locations/wijnhaven-107/"
        };
        this.collective = [this.academieplein, this.blaak, this.kralingse_zoom, this.lloyd_straat, this.max_euwelaan, this.museumpark_hoogbouw, this.museumpark_laagbouw, this.pieter_de_hoogweg, this.posthumalaan, this.rdm_rotterdam, this.rochussenstraat, this.wijnhaven_61, this.wijnhaven_99, this.wijnhaven_103, this.wijnhaven_107];
    }
    return Locations;
}());
var Osiris = (function () {
    function Osiris() {
        this.input1 = document.createElement("input");
        this.input1Save = "";
        this.button1 = document.createElement("button");
        this.button2 = document.createElement("button");
        this.button3 = document.createElement("button");
        this.button4 = document.createElement("button");
        this.button5 = document.createElement("button");
        this.button6 = document.createElement("button");
        this.button7 = document.createElement("button");
        this.extraButton = document.createElement("button");
        this.img = document.createElement('img');
        this.input2 = document.createElement("input");
        this.input2Save = "";
        this.createOsirisScreen();
    }
    Osiris.prototype.createOsirisScreen = function () {
        var _this = this;
        var game2 = document.getElementsByTagName("game2")[0];
        var background = document.createElement("backgroundact2");
        if (localStorage.getItem("language") == "english") {
            background.style.backgroundImage = "url(assets/Osiris_1Eng.png)";
        }
        else {
            background.style.backgroundImage = "url(assets/Osiris_1.png)";
        }
        game2.appendChild(background);
        game2.appendChild(this.input1);
        this.input1.style.width = "17.1vw";
        this.input1.style.height = "2vh";
        this.input1.style.background = "transparent";
        this.input1.style.border = "none";
        this.input1.style.transform = "translate(14.1vw, 21.1vh)";
        this.input1.style.fontSize = "17px";
        this.input1.style.paddingLeft = "0.4vw";
        this.input1.value = this.input1Save;
        this.input1.id = "input1";
        game2.appendChild(this.button1);
        this.button1.style.width = "6.6vw";
        this.button1.style.height = "3.3vh";
        this.button1.style.transform = "translate(14.1vw, 26.6vh)";
        this.button1.style.opacity = "0";
        this.button1.addEventListener("click", function () { return _this.loginCheck(); });
    };
    Osiris.prototype.loginCheck = function () {
        var shape1 = document.getElementById("input1").value;
        if (shape1 == "0200798") {
            this.login();
        }
        else {
        }
    };
    Osiris.prototype.login = function () {
        var _this = this;
        var game2 = document.getElementsByTagName("game2")[0];
        game2.removeChild(this.button1);
        game2.removeChild(this.input1);
        var background = document.createElement("backgroundact2");
        if (localStorage.getItem("language") == "english") {
            background.style.backgroundImage = "url(assets/Osiris_2Eng.png)";
        }
        else {
            background.style.backgroundImage = "url(assets/Osiris_2.png)";
        }
        game2.appendChild(background);
        game2.appendChild(this.button2);
        this.button2.style.width = "6.6vw";
        this.button2.style.height = "3.3vh";
        if (localStorage.getItem("language") == "english") {
            this.button2.style.transform = "translate(71.2vw, 8.4vh)";
        }
        else {
            this.button2.style.transform = "translate(68.7vw, 8.4vh)";
        }
        this.button2.style.opacity = "0";
        this.button2.addEventListener("click", function () { return _this.onderwijs(); });
        var myloc = new Image();
        myloc.useMap = "/assets/arrow.png";
        this.img.setAttribute('src', myloc.useMap);
        if (localStorage.getItem("language") == "english") {
            this.img.setAttribute('style', "height:5vh;width:2vw;transform:translate(73.5vw, 13.5vh);");
        }
        else {
            this.img.setAttribute('style', "height:5vh;width:2vw;transform:translate(71vw, 13.5vh);");
        }
        game2.appendChild(this.img);
    };
    Osiris.prototype.onderwijs = function () {
        var _this = this;
        var game2 = document.getElementsByTagName("game2")[0];
        game2.removeChild(this.img);
        game2.removeChild(this.button2);
        var background = document.createElement("backgroundact2");
        if (localStorage.getItem("language") == "english") {
            background.style.backgroundImage = "url(assets/Osiris_3Eng.png)";
        }
        else {
            background.style.backgroundImage = "url(assets/Osiris_3.png)";
        }
        game2.appendChild(background);
        game2.appendChild(this.input2);
        this.input2.style.width = "17.2vw";
        this.input2.style.height = "2.1vh";
        if (localStorage.getItem("language") == "english") {
            this.input2.style.transform = "translate(14.5vw, 31.2vh)";
        }
        else {
            this.input2.style.transform = "translate(13.9vw, 31.2vh)";
        }
        this.input2.style.fontSize = "17px";
        this.input2.style.paddingLeft = "0.4vw";
        this.input2.style.background = "transparent";
        this.input2.style.border = "none";
        this.input2.value = this.input2Save;
        this.input2.id = "input2";
        game2.appendChild(this.button7);
        this.button7.style.width = "4vw";
        this.button7.style.height = "2.5vh";
        this.button7.style.transform = "translate(1vw, 14vh)";
        this.button7.style.opacity = "0";
        this.button7.addEventListener("click", function () { return _this.keuzeCheck(); });
        game2.appendChild(this.button3);
        this.button3.style.width = "4vw";
        this.button3.style.height = "2.5vh";
        this.button3.style.transform = "translate(1vw, 86vh)";
        this.button3.style.opacity = "0";
        this.button3.addEventListener("click", function () { return _this.keuzeCheck(); });
    };
    Osiris.prototype.keuzeCheck = function () {
        var shape1 = document.getElementById("input2").value.toLowerCase();
        if (shape1 == "The Key to Success" || shape1 == "The key to success" || shape1 == "the key to success" || shape1 == "Sleutel tot succes" || shape1 == "sleutel tot succes" || shape1 == "sleutel" || shape1 == "Sleutel" || shape1 == "succes" || shape1 == "success" || shape1 == "sleutel tot" || shape1 == "Sleutel tot" || shape1 == "Sleutel succes" || shape1 == "sleutel succes" || shape1 == "key to success" || shape1 == "key success" || shape1 == "Key To success" || shape1 == "Key To Success" || shape1 == "Key to Success" || shape1 == "key" || shape1 == "Key" || shape1 == "key to" || shape1 == "Key to" || shape1 == "Key To" || shape1 == "key To") {
            this.keuzeRight();
        }
        else {
            this.keuzeWrong();
        }
    };
    Osiris.prototype.keuzeRight = function () {
        var _this = this;
        var game2 = document.getElementsByTagName("game2")[0];
        var background = document.createElement("backgroundact2");
        if (localStorage.getItem("language") == "english") {
            background.style.backgroundImage = "url(assets/Osiris_5Eng.png)";
            this.input2.style.transform = "translate(14.5vw, 31.2vh)";
            this.button3.style.transform = "translate(1vw, 86vh)";
        }
        else {
            background.style.backgroundImage = "url(assets/Osiris_5.png)";
        }
        game2.appendChild(background);
        game2.appendChild(this.button4);
        this.button4.style.width = "4vw";
        this.button4.style.height = "3vh";
        this.button4.style.transform = "translate(41.8vw, 37.8vh)";
        this.button4.style.opacity = "0";
        this.button4.addEventListener("click", function () { return _this.keuzevak(); });
    };
    Osiris.prototype.keuzeWrong = function () {
        var game2 = document.getElementsByTagName("game2")[0];
        var background = document.createElement("backgroundact2");
        if (localStorage.getItem("language") == "english") {
            background.style.backgroundImage = "url(assets/Osiris_4Eng.png)";
            this.button3.style.transform = "translate(1vw, 77.9vh)";
            this.input2.style.transform = "translate(14.5vw, 36.5vh)";
        }
        else {
            background.style.backgroundImage = "url(assets/Osiris_4.png)";
        }
        game2.appendChild(background);
    };
    Osiris.prototype.onderwijsAgain = function () {
        var _this = this;
        var game2 = document.getElementsByTagName("game2")[0];
        var background = document.createElement("backgroundact2");
        if (localStorage.getItem("language") == "english") {
            background.style.backgroundImage = "url(assets/Osiris_3Eng.png)";
        }
        else {
            background.style.backgroundImage = "url(assets/Osiris_3.png)";
        }
        game2.appendChild(background);
        game2.appendChild(this.input2);
        this.input2.style.width = "17.2vw";
        this.input2.style.transform = "translate(13.9vw, 30.8vh)";
        this.input2.style.fontSize = "17px";
        this.input2.style.paddingLeft = "0.4vw";
        this.input2.value = this.input2Save;
        this.input2.id = "input2";
        game2.appendChild(this.button3);
        this.button3.style.width = "4vw";
        this.button3.style.height = "2.5vh";
        this.button3.style.transform = "translate(1vw, 86vh)";
        this.button3.style.opacity = "0";
        this.button3.addEventListener("click", function () { return _this.keuzeCheck(); });
    };
    Osiris.prototype.keuzevak = function () {
        var _this = this;
        var game2 = document.getElementsByTagName("game2")[0];
        var background = document.createElement("backgroundact2");
        if (localStorage.getItem("language") == "english") {
            background.style.backgroundImage = "url(assets/Osiris_6Eng.png)";
        }
        else {
            background.style.backgroundImage = "url(assets/Osiris_6.png)";
        }
        game2.appendChild(background);
        game2.removeChild(this.input2);
        game2.removeChild(this.button4);
        game2.removeChild(this.button7);
        game2.removeChild(this.button3);
        game2.appendChild(this.button5);
        if (localStorage.getItem("language") == "english") {
            this.button5.style.width = "11.7vw";
            this.button5.style.transform = "translate(63vw, 18.5vh)";
        }
        else {
            this.button5.style.width = "10.5vw";
            this.button5.style.transform = "translate(64.5vw, 18.8vh)";
        }
        this.button5.style.height = "2vh";
        this.button5.style.opacity = "0";
        this.button5.addEventListener("click", function () { return _this.signIn(); });
    };
    Osiris.prototype.signIn = function () {
        var _this = this;
        var game2 = document.getElementsByTagName("game2")[0];
        var background = document.createElement("backgroundact2");
        if (localStorage.getItem("language") == "english") {
            background.style.backgroundImage = "url(assets/Osiris_7Eng.png)";
        }
        else {
            background.style.backgroundImage = "url(assets/Osiris_7.png)";
        }
        game2.appendChild(background);
        game2.appendChild(this.extraButton);
        this.extraButton.style.width = "5vw";
        this.extraButton.style.height = "2.5vh";
        this.extraButton.style.transform = "translate(6.5vw, 13.9vh)";
        this.extraButton.style.opacity = "0";
        this.extraButton.addEventListener("click", function () { return _this.definitief(); });
        game2.removeChild(this.button5);
        game2.appendChild(this.button6);
        this.button6.style.width = "5vw";
        this.button6.style.height = "2.5vh";
        this.button6.style.transform = "translate(6.5vw, 63.6vh)";
        this.button6.style.opacity = "0";
        this.button6.addEventListener("click", function () { return _this.definitief(); });
    };
    Osiris.prototype.definitief = function () {
        var game2 = document.getElementsByTagName("game2")[0];
        game2.removeChild(this.button6);
        game2.removeChild(this.extraButton);
        var background = document.createElement("backgroundact2");
        if (localStorage.getItem("language") == "english") {
            background.style.backgroundImage = "url(assets/Osiris_8Eng.png)";
        }
        else {
            background.style.backgroundImage = "url(assets/Osiris_8.png)";
        }
        game2.appendChild(background);
    };
    return Osiris;
}());
window.addEventListener("load", function () { return new Osiris(); });
var Pause = (function () {
    function Pause(act, next) {
        var _this = this;
        this.game = document.getElementsByTagName('game')[0];
        this.pauseTimer = new Timer();
        this.game.innerHTML = '';
        this.pauseTimer.startPause();
        var background = document.createElement('background');
        background.style.backgroundImage = "url(assets/PRODUCTION/PRODUCTION/ASSETS/pauze.jpg)";
        this.game.appendChild(background);
        var title = document.createElement('congratulations');
        var subTitle = document.createElement('akteGehaald');
        var message = document.createElement('pauseMessage');
        var nextButton = document.createElement('next');
        var extra = document.createElement('input');
        var extraText = document.createElement('extraText');
        title.innerHTML = new Languages()[localStorage.getItem('language')][60];
        subTitle.innerHTML = new Languages()[localStorage.getItem('language')][61];
        message.innerHTML = new Languages()[localStorage.getItem('language')][62] + (act + 1);
        nextButton.innerHTML = new Languages()[localStorage.getItem('language')][63] + (act + 1);
        this.game.appendChild(title);
        title.appendChild(subTitle);
        this.game.appendChild(message);
        message.appendChild(nextButton);
        if (localStorage.getItem("korting") == null) {
            if (localStorage.getItem('language') == 'dutch') {
                message.appendChild(extra);
            }
        }
        message.appendChild(extraText);
        extraText.style.width = "auto";
        extraText.style.height = "3.5vw";
        extraText.style.paddingTop = "1vh";
        extraText.style.top = "14.5vw";
        extraText.style.position = "absolute";
        if (localStorage.getItem("korting") == null) {
            extraText.innerHTML = "In het blad van Profielen zat een puzzel. Als je hier de oplossing invult krijgen jullie 20 minuten tijdwinst.";
        }
        extra.style.width = "15vw";
        extra.style.height = "3.5vw";
        extra.style.paddingTop = "1vh";
        extra.style.top = "20vw";
        extra.style.left = "9.5vw";
        extra.style.position = "absolute";
        extra.style.backgroundColor = "#ffffff";
        extra.style.fontSize = "1.5vw";
        extra.placeholder = "Antwoord";
        extra.style.borderRadius = "15px";
        extra.style.textAlign = "center";
        extra.id = "extra";
        extra.addEventListener("keyup", function () {
            if (document.getElementById("extra").value == "escapade") {
                new Timer().addBonus(300);
                extra.remove();
                localStorage.setItem("korting", "yes");
                extraText.innerHTML = "";
            }
        });
        setTimeout(function () {
            nextButton.style.filter = "grayscale(0%)";
            nextButton.style.cursor = "pointer";
            nextButton.addEventListener('click', function () {
                _this.pauseTimer.endPause();
                _this.game.innerHTML = '';
                eval("new " + next + "()");
            });
        }, 2000);
    }
    return Pause;
}());
var popup = (function () {
    function popup(text, posX, posY, width) {
        var _this = this;
        this.field = document.createElement('popup');
        this.game = document.getElementsByTagName('game')[0];
        this.game.appendChild(this.field);
        this.field.innerText = text;
        this.field.style.position = "absolute";
        this.field.style.overflow = "hidden";
        this.field.style.transform = "translate(" + posX + "vw," + posY + "vh)";
        this.field.style.width = width.toString() + "vw";
        this.field.style.height = "auto";
        this.field.style.borderRadius = "20px";
        this.field.style.backgroundColor = "#ffb911";
        this.field.style.fontSize = "1.2rem";
        this.field.style.zIndex = "2";
        this.field.style.padding = "0.5vw";
        this.field.style.boxShadow = "0.3vw 1vh";
        this.field.addEventListener("click", function () {
            _this.field.remove();
        });
    }
    return popup;
}());
var popupStory = (function () {
    function popupStory(text, posX, posY, width) {
        var _this = this;
        this.bg = document.createElement('popupbackground');
        this.field = document.createElement('popup');
        this.game = document.getElementsByTagName('game')[0];
        this.game.appendChild(this.bg);
        this.game.appendChild(this.field);
        this.bg.style.position = "absolute";
        this.bg.style.backgroundColor = "black";
        this.bg.style.width = "100vw";
        this.bg.style.height = "100vh";
        this.bg.style.zIndex = "5";
        this.bg.style.opacity = "0.7";
        this.field.innerText = text;
        this.field.style.position = "absolute";
        this.field.style.overflow = "hidden";
        this.field.style.transform = "translate(" + posX + "vw," + posY + "vh)";
        this.field.style.width = width.toString() + "vw";
        this.field.style.height = "auto";
        this.field.style.borderRadius = "20px";
        this.field.style.backgroundColor = "#ffb911";
        this.field.style.fontSize = "2vw";
        this.field.style.zIndex = "6";
        this.field.style.padding = "0.5vw";
        this.field.style.boxShadow = "0.3vw 1vh";
        this.field.addEventListener("click", function () {
            _this.field.remove();
            _this.bg.remove();
        });
        this.bg.addEventListener("click", function () {
            _this.field.remove();
            _this.bg.remove();
        });
    }
    return popupStory;
}());
var StartScreem = (function () {
    function StartScreem() {
        var _this = this;
        this.game = document.getElementsByTagName('game')[0];
        this.background = document.createElement('background');
        if (!localStorage.getItem('language')) {
            localStorage.setItem('language', 'dutch');
        }
        this.background.style.backgroundImage = "url(assets/startScreen.png)";
        this.game.appendChild(this.background);
        var start = document.createElement('startgame');
        this.game.appendChild(start);
        var text = document.createElement("text");
        this.game.appendChild(text);
        text.innerHTML = "HR INTROGAME";
        text.style.transform = "translate(40vw, 80vh)";
        text.style.color = "white";
        text.style.position = "absolute";
        text.style.fontSize = "5vmin";
        var text2 = document.createElement("text");
        this.game.appendChild(text2);
        if (localStorage.getItem('language') == 'dutch') {
            text2.style.transform = "translate(41vw, 85.5vh)";
        }
        else {
            text2.style.transform = "translate(41vw, 85.5vh)";
        }
        text2.style.color = "white";
        text2.style.position = "absolute";
        text2.style.fontSize = "2.5vmin";
        text2.innerHTML = new Languages()[localStorage.getItem('language')][77];
        start.addEventListener('click', function () {
            _this.game.innerHTML = "";
            new Info();
        });
    }
    return StartScreem;
}());
window.addEventListener('load', function () { return new StartScreem(); });
var Timer = (function () {
    function Timer() {
    }
    Timer.prototype.startTimer = function () {
        if (!localStorage.getItem('start')) {
            localStorage.setItem('start', new Date().getTime().toString());
        }
        if (!localStorage.getItem('pause')) {
            localStorage.setItem('pause', '0');
        }
        if (!localStorage.getItem('bonus')) {
            localStorage.setItem('bonus', '0');
        }
    };
    Timer.prototype.startPause = function () {
        this.pauseStart = new Date().getTime();
    };
    Timer.prototype.endPause = function () {
        this.pauseEnd = new Date().getTime();
        var currentPause = parseInt(localStorage.getItem('pause'));
        var thisPause = this.pauseEnd - this.pauseStart;
        var newPause = thisPause + currentPause;
        localStorage.setItem('pause', newPause.toString());
    };
    Timer.prototype.addBonus = function (point) {
        var currentBonus = parseInt(localStorage.getItem('bonus'));
        var newBonus = currentBonus + point;
        localStorage.setItem('bonus', newBonus.toString());
    };
    Timer.prototype.endTimer = function () {
        if (!localStorage.getItem('end')) {
            localStorage.setItem('end', new Date().getTime().toString());
        }
    };
    Timer.prototype.score = function () {
        var start = parseInt(localStorage.getItem('start'));
        var end = parseInt(localStorage.getItem('end'));
        var pause = parseInt(localStorage.getItem('pause'));
        var bonus = parseInt(localStorage.getItem('bonus'));
        var score = Math.floor((end - start - pause) / 1000) - bonus;
        if (!localStorage.getItem('finalScore')) {
            localStorage.setItem('finalScore', score.toString());
        }
        return localStorage.getItem('finalScore');
    };
    Timer.prototype.resetTimer = function () {
        localStorage.removeItem('start');
        localStorage.removeItem('end');
        localStorage.removeItem('pause');
        localStorage.removeItem('bonus');
    };
    return Timer;
}());
window.addEventListener('load', function () { return new Timer(); });
var tobuilding = (function () {
    function tobuilding() {
        var _this = this;
        this.game = document.getElementsByTagName('game')[0];
        this.bge = document.createElement("backgroundenter");
        this.i = 0;
        this.button1 = document.createElement("button");
        this.setBackground();
        this.game.appendChild(this.bge);
        this.game.appendChild(this.button1);
        this.button1.style.width = "20vw";
        this.button1.style.height = "26vh";
        this.button1.style.transform = "translate(48vw, 32vh)";
        this.button1.style.opacity = "0";
        this.button1.addEventListener("click", function () { return _this.setBackground(); });
        this.game.appendChild(this.bge);
    }
    tobuilding.prototype.setBackground = function () {
        if (this.i == 0) {
            this.bge.style.backgroundImage = 'url(assets/IMG_20200708_123510.jpg)';
            new CenterPopup(new Languages()[localStorage.getItem('language')][65], new Languages()[localStorage.getItem('language')][64], '');
        }
        else if (this.i == 1) {
            this.bge.remove();
            this.button1.remove();
            new Act1();
        }
        this.i++;
    };
    return tobuilding;
}());
//# sourceMappingURL=main.js.map