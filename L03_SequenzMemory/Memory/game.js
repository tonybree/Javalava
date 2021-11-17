"use strict";
var memory;
(function (memory) {
    window.addEventListener("load", handleLoad);
    let sequence;
    let word;
    let cardColor = "006400";
    let cardFont = "arial";
    let cardSize = "160px";
    let timeOut = 60;
    let rounds = 0;
    let showcase = document.createElement("span");
    function handleLoad(_event) {
        let slider = document.querySelector("input#amount");
        let backgroundColor = document.querySelector("input#backgroundColor");
        let font = document.querySelector("select#font");
        let cardColor = document.querySelector("input#cards");
        let time = document.querySelector("input#time");
        let begin = document.querySelector("#start");
        slider.addEventListener("input", changeSize);
        backgroundColor.addEventListener("input", changeBackground);
        font.addEventListener("input", changeFont);
        begin.addEventListener("click", load);
        cardColor.addEventListener("input", changeCardColor);
        time.addEventListener("input", timer);
    }
    function timer(_event) {
        let time = document.querySelector("#time");
        timeOut = Number(time.value);
    }
    function setAttributes() {
        showcase.setAttribute("style", "color:" + "; background:" + cardColor + "; height:" + cardSize + "; width:" + cardSize + "; font-Family:" + cardFont + "; display: inline-block; margin: 5px; text-align: center; line-height: 1; font-size: " + cardSize + "; vertical-align: middle");
        showcase.setAttribute("id", "showcase");
        showcase.innerHTML = " ";
    }
    function load(_event) {
        let codeWord = document.querySelector("#codename");
        let secCodeWord = codeWord.value.replace(/ /gi, "_");
        sequence = secCodeWord.split("");
        document.getElementById("settings").style.display = "none";
        startGame();
    }
    function changeSize(_event) {
        console.log(_event.target.value);
        cardSize = _event.target.value + "px";
        setAttributes();
    }
    function changeBackground(_event) {
        document.body.style.backgroundColor = _event.target.value;
        setAttributes();
    }
    function changeFont(_event) {
        cardFont = _event.target.value;
        setAttributes();
    }
    function changeCardColor(_event) {
        cardColor = _event.target.value;
        setAttributes();
    }
    function startGame() {
        word = sequence.slice();
        word.sort(() => Math.random() - 0.5);
        let game = document.createElement("div");
        document.body.appendChild(game);
        game.setAttribute("id", "game");
        for (let i = 0; i <= sequence.length - 1; i++) {
            let span = document.createElement("span");
            game.appendChild(span);
            span.classList.add("card");
            span.setAttribute("id", "span" + i);
            span.setAttribute("style", "color:" + "; background:" + cardColor + "; height:" + cardSize + "; width:" + cardSize + "; font-Family:" + cardFont + "; display: inline-block; margin: 5px; text-align: center; line-height: 1; font-size: " + cardSize + "; vertical-align: middle");
            span.innerHTML = word[i];
        }
        setAttributes();
        setTimeout(hideCards, sequence.length * 600);
    }
    function turnCard(_index) {
        if (rounds <= sequence.length) {
            if (document.getElementById("span" + _index).style.borderStyle == "solid") {
                console.log("Feld");
            }
            else if (document.getElementById("span" + _index).innerText == sequence[rounds]) {
                document.getElementById("span" + _index).style.fontSize = cardSize;
                document.getElementById("span" + _index).style.borderWidth = "thick";
                document.getElementById("span" + _index).style.borderStyle = "solid";
                rounds++;
            }
            else {
                hideCardsOnly();
            }
        }
        if (rounds == sequence.length) {
            clearInterval();
            setTimeout(() => {
                winner(_index);
            }, 10);
        }
    }
    function hideCards() {
        for (let i = 0; i <= sequence.length - 1; i++) {
            let chosen = document.querySelector("span#span" + i + ".card");
            chosen.style.fontSize = "0px";
        }
        let clock = document.createElement("p");
        document.getElementById("game").prepend(clock);
        clock.setAttribute("id", "clock");
        document.getElementById("clock").innerText = timeOut.toString() + "s";
        setInterval(updateTime, 1000);
        let card = document.querySelectorAll("span.card");
        for (let index = 0; index < card.length; index++) {
            card[index].addEventListener("click", function () {
                turnCard(index);
            }, false);
        }
    }
    function hideCardsOnly() {
        for (let i = 0; i <= sequence.length - 1; i++) {
            let chosen = document.querySelector("span#span" + i + ".card");
            chosen.style.fontSize = "0px";
            rounds = 0;
            document.getElementById("span" + i).style.borderStyle = "none";
        }
    }
    function updateTime() {
        if (timeOut == 0) {
            window.location.reload();
            alert("Du hast verloren...");
        }
        else {
            timeOut--;
            document.getElementById("clock").innerText = timeOut.toString() + "s";
        }
    }
    function winner(_index) {
        document.getElementById("span" + _index).style.fontSize = cardSize;
        document.getElementById("span" + _index).style.borderWidth = "thick";
        document.getElementById("span" + _index).style.borderStyle = "solid";
        window.location.reload();
        alert("Du hast gewonnen!");
    }
})(memory || (memory = {}));
//# sourceMappingURL=game.js.map