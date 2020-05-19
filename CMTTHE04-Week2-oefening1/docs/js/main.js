"use strict";
var Bubble = (function () {
    function Bubble() {
        var _this = this;
        this.bubble = document.createElement('bubble');
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.bubble);
        this.bubble.addEventListener("click", function () { return _this.popBubble(); });
        var x = Math.random() * (window.innerWidth - this.bubble.clientWidth);
        var y = window.innerHeight - this.bubble.clientHeight;
        this.bubble.style.transform = "translate(" + x + "px, " + y + "px)";
    }
    Bubble.prototype.popBubble = function () {
        this.bubble.remove();
    };
    return Bubble;
}());
var Fish = (function () {
    function Fish() {
        var _this = this;
        console.log("Fish was created!");
        this.fish = document.createElement('fish');
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.fish);
        this.fish.addEventListener("click", function () { return _this.killFish(); });
        var x = Math.random() * (window.innerWidth - this.fish.clientWidth);
        var y = Math.random() * (window.innerHeight - this.fish.clientHeight);
        var color = Math.random() * 360;
        this.fish.style.transform = "translate(" + x + "px, " + y + "px)";
        this.fish.style.filter = "hue-rotate(" + color + "deg)";
    }
    Fish.prototype.killFish = function () {
        this.fish.classList.add("dead");
    };
    return Fish;
}());
var Game = (function () {
    function Game() {
        console.log("Game was created!");
        for (var i = 0; i < 100; i++) {
            var fish = new Fish();
            var bubble = new Bubble();
            var obama = new Obama();
        }
    }
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Obama = (function () {
    function Obama() {
        this.obama = document.createElement('obama');
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.obama);
        var x = Math.random() * (window.innerWidth - this.obama.clientWidth);
        var y = Math.random() * (window.innerHeight - this.obama.clientHeight);
        this.obama.style.transform = "translate(" + x + "px, " + y + "px)";
    }
    Obama.prototype.killObama = function () {
        console.log("Aargh!");
    };
    return Obama;
}());
//# sourceMappingURL=main.js.map