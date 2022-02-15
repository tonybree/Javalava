"use strict";
var KebapStore;
(function (KebapStore) {
    window.addEventListener("load", handleLoad);
    document.addEventListener("click", handleClick);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        KebapStore.crc2 = canvas.getContext("2d");
        drawKebapStore();
    }
    function drawKebapStore() {
        console.log("Test");
        let canvas = document.querySelector("canvas");
        //StoreFloor
        let pattern = document.createElement("canvas").getContext("2d");
        pattern.canvas.width = 120;
        pattern.canvas.height = 120;
        pattern.fillStyle = "white";
        pattern.strokeStyle = "#289FB9";
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(0, 0);
        pattern.lineTo(120, 0);
        pattern.lineTo(120, 120);
        pattern.lineTo(0, 120);
        pattern.closePath();
        pattern.stroke();
        KebapStore.crc2.fillStyle = KebapStore.crc2.createPattern(pattern.canvas, "repeat");
        KebapStore.crc2.fillRect(0, 0, canvas.width, canvas.height);
        KebapStore.crc2.save();
        KebapStore.crc2.restore();
        KebapStore.crc2.beginPath();
        KebapStore.crc2.fillStyle = "grey";
        KebapStore.crc2.fill();
        KebapStore.crc2.fillRect(0, 0, 600, 120); //Theke hinten
        KebapStore.crc2.fillRect(0, 240, 600, 120); //Theke vorne
        KebapStore.crc2.fillRect(800, 0, 200, 600); //Kühlschrank
        KebapStore.crc2.save();
        KebapStore.crc2.restore();
        //Servietten
        KebapStore.crc2.beginPath();
        KebapStore.crc2.fillStyle = "#EBEBEB";
        KebapStore.crc2.fillRect(440, 320, 40, 30);
        KebapStore.crc2.moveTo(440, 340);
        KebapStore.crc2.lineTo(480, 340);
        KebapStore.crc2.stroke();
        KebapStore.crc2.save();
        KebapStore.crc2.restore();
        //Kasse
        KebapStore.crc2.beginPath();
        KebapStore.crc2.fillStyle = "#151515";
        KebapStore.crc2.fillRect(490, 245, 100, 90);
        KebapStore.crc2.fillStyle = "#313131";
        KebapStore.crc2.fillRect(495, 300, 90, 30); //Kasse Monitor
        KebapStore.crc2.fillStyle = "#9C9C9C";
        KebapStore.crc2.fillRect(495, 250, 40, 40); //Kasse Tastatur
        KebapStore.crc2.save();
        KebapStore.crc2.restore();
        //horizontale Linien
        KebapStore.crc2.beginPath();
        KebapStore.crc2.lineWidth = 2;
        KebapStore.crc2.strokeStyle = "D1D1D1";
        KebapStore.crc2.moveTo(495, 260);
        KebapStore.crc2.lineTo(535, 260);
        KebapStore.crc2.moveTo(495, 275);
        KebapStore.crc2.lineTo(535, 275);
        //vertikale Linien
        KebapStore.crc2.moveTo(507, 250);
        KebapStore.crc2.lineTo(507, 290);
        KebapStore.crc2.moveTo(523, 250);
        KebapStore.crc2.lineTo(523, 290);
        KebapStore.crc2.stroke();
        KebapStore.crc2.save();
        KebapStore.crc2.restore();
        //Säbel
        KebapStore.crc2.beginPath();
        KebapStore.crc2.fillStyle = "#CBCBCB";
        KebapStore.crc2.moveTo(380, 40);
        KebapStore.crc2.lineTo(395, 40);
        KebapStore.crc2.lineTo(395, 80);
        KebapStore.crc2.lineTo(380, 80);
        KebapStore.crc2.closePath();
        KebapStore.crc2.fill();
        KebapStore.crc2.save();
        KebapStore.crc2.restore();
        KebapStore.crc2.beginPath();
        KebapStore.crc2.fillStyle = "black";
        KebapStore.crc2.fillRect(385, 80, 10, 30); //Messergriff
        KebapStore.crc2.fillStyle = "#474747";
        KebapStore.crc2.fillRect(250, 30, 125, 80); //Schneidebrett
        KebapStore.crc2.save();
        KebapStore.crc2.restore();
        //Dönerspieß
        KebapStore.crc2.beginPath();
        KebapStore.crc2.fillStyle = "#AE7B44";
        KebapStore.crc2.arc(75, 52, 50, 0, 2 * Math.PI);
        KebapStore.crc2.fill();
        //Dönergerät
        KebapStore.crc2.fillStyle = "#E6E6E6";
        KebapStore.crc2.fillRect(20, 0, 110, 20);
        KebapStore.crc2.fillRect(55, 20, 40, 50);
        KebapStore.crc2.save();
        KebapStore.crc2.restore();
        let customer = new KebapStore.Customer(false, KebapStore.Order);
        let order = new KebapStore.Order(KebapStore.Dish, KebapStore.IngredientType);
        customer.draw();
        order.draw();
        console.log("lets sketch vars");
    }
    function handleClick(_event) {
        let object = _event.target;
        let rect = object.getBoundingClientRect();
        let scaling = new KebapStore.Vector(KebapStore.crc2.canvas.height / rect.height, KebapStore.crc2.canvas.width / rect.width);
        let pointer = new KebapStore.Vector((_event.clientX - rect.left) * scaling.x, (_event.clientY - rect.top) * scaling.x);
        console.log("lets sketch vars");
        let falafel = new KebapStore.Dish(KebapStore.crc2, KebapStore.DishType.Falafel);
        let döner = new KebapStore.Dish(KebapStore.crc2, KebapStore.DishType.Döner);
        let yufka = new KebapStore.Dish(KebapStore.crc2, KebapStore.DishType.Yufka);
        console.log("lets sketch vars");
        let saladBack = new KebapStore.Ingredient(KebapStore.IngredientType.Salat, KebapStore.IngredientPositionType.Back);
        let sauceBack = new KebapStore.Ingredient(KebapStore.IngredientType.Soße, KebapStore.IngredientPositionType.Back);
        let onionBack = new KebapStore.Ingredient(KebapStore.IngredientType.Zwiebel, KebapStore.IngredientPositionType.Back);
        let redkrautBack = new KebapStore.Ingredient(KebapStore.IngredientType.Rotkraut, KebapStore.IngredientPositionType.Back);
        let tomatoBack = new KebapStore.Ingredient(KebapStore.IngredientType.Tomate, KebapStore.IngredientPositionType.Back);
        console.log("lets sketch vars");
        let saladFront = new KebapStore.Ingredient(KebapStore.IngredientType.Salat, KebapStore.IngredientPositionType.Front);
        let sauceFront = new KebapStore.Ingredient(KebapStore.IngredientType.Soße, KebapStore.IngredientPositionType.Front);
        let onionFront = new KebapStore.Ingredient(KebapStore.IngredientType.Zwiebel, KebapStore.IngredientPositionType.Front);
        let redkrautFront = new KebapStore.Ingredient(KebapStore.IngredientType.Rotkraut, KebapStore.IngredientPositionType.Front);
        let tomatoFront = new KebapStore.Ingredient(KebapStore.IngredientType.Tomate, KebapStore.IngredientPositionType.Front);
        console.log("lets sketch vars");
        let firstWorker = new KebapStore.Worker(KebapStore.crc2, true);
        let secondWorker = new KebapStore.Worker(KebapStore.crc2, true);
        firstWorker.draw();
        secondWorker.draw();
        falafel.draw();
        döner.draw();
        yufka.draw();
        saladBack.draw();
        sauceBack.draw();
        onionBack.draw();
        redkrautBack.draw();
        tomatoBack.draw();
        saladFront.draw();
        sauceFront.draw();
        onionFront.draw();
        redkrautFront.draw();
        tomatoFront.draw();
    }
    function calculateRandom(_min, _max) {
        let random = (Math.random() * (_max - _min)) + _min;
        return (random);
    }
    KebapStore.calculateRandom = calculateRandom;
})(KebapStore || (KebapStore = {}));
//# sourceMappingURL=Store.js.map