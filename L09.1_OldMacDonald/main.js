"use strict";
var L9_OldMacDonald;
(function (L9_OldMacDonald) {
    let animals = [];
    let currentFood = {
        greens: 120,
        grains: 100,
        hay: 110
    };
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        loadAnimals();
        feedAnimals();
        currentFood.greens = 120;
        currentFood.grains = 100;
        currentFood.hay = 122;
        document.querySelector("#nextDay").addEventListener("click", foodForAnimal);
    }
    function loadAnimals() {
        let cow = new L9_OldMacDonald.Animal("cow", "hay", "moo", 10);
        let pig = new L9_OldMacDonald.Animal("pig", "grains", "oink", 12);
        let duck = new L9_OldMacDonald.Animal("duck", "greens", "quack", 4);
        let chicken = new L9_OldMacDonald.Animal("chicken", "grains", "cluck", 5);
        animals.push(cow);
        animals.push(pig);
        animals.push(duck);
        animals.push(chicken);
        let cowDiv = document.getElementById("cow");
        let pigDiv = document.getElementById("pig");
        let duckDiv = document.getElementById("duck");
        let chickenDiv = document.getElementById("chicken");
    }
    function feedAnimals() {
        let cowDiv = document.getElementById("cow");
        let pigDiv = document.getElementById("pig");
        let duckDiv = document.getElementById("duck");
        let chickenDiv = document.getElementById("chicken");
        cowDiv.innerHTML += "<br>" + animals[0].species + " ate " + animals[0].consumption + " kg of " + animals[0].food + "<br>" +
            "<br>" + "Old MacDonald had a farm, E-I-A-I-O, <br> And on his farm he had a " + animals[0].species + " E-I-A-I-O, <br> With a " + animals[0].sound + " " + animals[0].sound + " here and a " + animals[0].sound + " there a " + animals[0].sound + "<br> everywhere" + "<br>";
        pigDiv.innerHTML += "<br>" + animals[1].species + " ate " + animals[1].consumption + " kg of " + animals[1].food + "<br>" +
            "<br>" + "Old MacDonald had a farm, E-I-A-I-O, <br> And on his farm he had a " + animals[1].species + " E-I-A-I-O, <br> With a " + animals[1].sound + " " + animals[1].sound + " here and a " + animals[1].sound + " there a " + animals[1].sound + "<br> everywhere" + "<br>";
        duckDiv.innerHTML += "<br>" + animals[2].species + " ate " + animals[2].consumption + " kg of " + animals[2].food + "<br>" +
            "<br>" + "Old MacDonald had a farm, E-I-A-I-O, <br> And on his farm he had a " + animals[2].species + " E-I-A-I-O, <br> With a " + animals[2].sound + " " + animals[2].sound + " here and a " + animals[2].sound + " there a " + animals[2].sound + "<br> everywhere" + "<br>";
        chickenDiv.innerHTML += "<br>" + animals[3].species + " ate " + animals[3].consumption + " kg of " + animals[3].food + "<br>" +
            "<br>" + "Old MacDonald had a farm, E-I-A-I-O, <br> And on his farm he had a " + animals[3].species + " E-I-A-I-O, <br> With a " + animals[3].sound + " " + animals[3].sound + " here and a " + animals[3].sound + " there a " + animals[3].sound + "<br> everywhere" + "<br>";
        foodForAnimal();
    }
    function foodForAnimal() {
        currentFood.greens -= animals[0].consumption;
        currentFood.grains -= animals[1].consumption;
        currentFood.hay -= animals[2].consumption;
        for (const [key, foodAmount] of Object.entries(currentFood)) {
            if (foodAmount <= 0) {
                alert("Das Futter ist alle!");
                window.location.reload();
            }
        }
        let inventory = document.getElementById("inventory");
        inventory.innerHTML = "inventory:" + "<br>" + "<br>" +
            currentFood.greens + " kg greens " + "<br>" +
            currentFood.grains + " kg meat " + "<br>" +
            currentFood.hay + " kg fish " + "<br>";
    }
})(L9_OldMacDonald || (L9_OldMacDonald = {}));
//# sourceMappingURL=main.js.map