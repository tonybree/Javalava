"use strict";
var L08_GenerativeKunst;
(function (L08_GenerativeKunst) {
    window.addEventListener("load", handleLoad);
    let crc2;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        let gradient = crc2.createLinearGradient(0, 20, 500, 80);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(.3, "#1F5948");
        gradient.addColorStop(1, "#82FFD8");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 800, 600);
        circle();
    }
    function circle() {
        for (let i = 0; i < 300; i++) {
            let red = Math.floor(Math.random() * 600);
            let green = Math.floor(Math.random() * 800);
            let blue = Math.floor(Math.random() * 600);
            crc2.beginPath();
            crc2.arc(Math.floor(Math.random() * (1000) + 3), Math.floor(Math.random() * (1000) + 5), Math.floor(Math.random() * (50) + 2), 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "rgb(" + red + ", " + green + "," + blue + ")";
            crc2.fill();
        }
        for (let i = 0; i < 50; i++) {
            let x = Math.random() * 800;
            let y = Math.random() * 600;
            drawTriangle(x, y);
        }
    }
    function drawTriangle(_x, _y) {
        for (let i = 0; i < 300; i++) {
            let red = Math.floor(Math.random() * 600);
            let green = Math.floor(Math.random() * 800);
            let blue = Math.floor(Math.random() * 600);
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x, _y + 50);
            crc2.lineTo(_x + 100, _y + 50);
            crc2.closePath();
            crc2.fillStyle = "rgb(" + red + ", " + green + "," + blue + ")";
            crc2.fill();
        }
    }
})(L08_GenerativeKunst || (L08_GenerativeKunst = {}));
//# sourceMappingURL=script.js.map