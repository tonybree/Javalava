/*
KebapStore
Tony Hild
MKB3
Matrikelnummer: 262501
*/

//Inspiration von Amelie Dell'Oro

namespace KebapStore {

    window.addEventListener("load", handleLoad);
    document.addEventListener("click", handleClick);

    export let orderDiv: HTMLDivElement;
    let canvas: HTMLCanvasElement;
    let body: HTMLBodyElement;
    export let crc2: CanvasRenderingContext2D;
    let KebapStore: ImageData;
    let workersAmount: number;
    let worker: Worker;
    let workers: Worker[] = [];
    let workersMood: boolean;
    let workersEndurance: number;
    let taskPrepare: Task;
    let taskDishes: Task;
    let customers: Customer[] = [];
    let customerMood: Customer;
    let customerEnter: Vector;
    let formData: FormData;
    let customerTempo: number;
    let ingredients: Ingredient[] = [];
    let backCapa: number;
    let frontCapa: number;
    let soldDishes: number = 0;
    let lastFrame: number;
    let dishType: DishType;

    

    export function getRandom(_min: number, _max: number): number {
        let random: number = (Math.random() * (_max - _min)) + _max;
        return (random);
    }


    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        let startButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#startButton");
        startButton.addEventListener("click", prepareGame);

    }

    function prepareGame(): void {
        formData = new FormData(document.forms[0]);
        workersAmount = Number(formData.get("workersAmount"));
        workersEndurance = Number(formData.get("workersEndurance")) * 500;
        customerTempo = (60 / Number(formData.get("customerTempo"))) * 500;
        backCapa = Number(formData.get("backCapa")) * 100;
        frontCapa = Number(formData.get("frontCapa")) * 100;

    }

    canvas = document.createElement("canvas");
    canvas.setAttribute("width", "1000");
    canvas.setAttribute("height", "600");
    body = <HTMLBodyElement>document.querySelector("body");
    let form: HTMLFormElement = <HTMLFormElement>document.querySelector("form");
    let startButton: HTMLBodyElement = <HTMLBodyElement>document.querySelector("startButton");
    let cancelButton: HTMLBodyElement = <HTMLBodyElement>document.querySelector("cancelButton");
    let handButton: HTMLBodyElement = <HTMLBodyElement>document.querySelector("handButton");
    body.removeChild(form);
    body.removeChild(startButton);
    body.appendChild(canvas);
    body.appendChild(cancelButton);
    body.appendChild(handButton);


    crc2 = canvas.getContext("2d")!;
    customerEnter = new Vector(60, 1000 + 50);

    drawKebapStore();
    KebapStore = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);

    canvas.addEventListener("click", handleClick);

    orderDiv = document.createElement("div");
    orderDiv.setAttribute("id", "oderDiv");
    body.appendChild(orderDiv);
    nextOrder([]);

    startGame();


    export function nextOrder(_order: string[]): void {
        orderDiv.innerHTML = "";
        let dishType: HTMLParagraphElement = document.createElement("p");
        dishType.innerHTML = "Order";
        orderDiv.appendChild(dishType);
        for (let ingredients of _order) {
            let toppings: HTMLParagraphElement = document.createElement("p");
            toppings.innerHTML = ingredients + " ,";
        }
    }

    function startGame(): void {
        lastFrame = performance.now();
        newCustomer();
        for (let i: number = 0; i < workersAmount; i++) {
            let workersAmount: Worker = new Worker(true);
            workers.push(workersAmount);
            if (i == 0) {
                worker.position = Task;
            }
            
        }
    }

    function handleClick(_event: MouseEvent): void {
        let object: HTMLElement = <HTMLElement>_event.target;
        let rect: DOMRect = object.getBoundingClientRect();
        let falafel: DishType.Falafel;
        let döner: DishType.Döner;
        let Yufka: DishType.Yufka;
        console.log("click Dish");
    }





    function drawKebapStore(): void {
        console.log("Test");

        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;

        //StoreFloor
        let pattern: CanvasRenderingContext2D = document.createElement("canvas").getContext("2d")!;

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

        crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat")!;
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        crc2.save();
        crc2.restore();


        crc2.beginPath();
        crc2.fillStyle = "grey";
        crc2.fill();
        crc2.fillRect(0, 0, 600, 120);      //Theke hinten
        crc2.fillRect(0, 240, 600, 120);    //Theke vorne
        crc2.fillRect(800, 0, 200, 600);    //Kühlschrank
        crc2.save();
        crc2.restore();


        //Servietten
        crc2.beginPath();
        crc2.fillStyle = "#EBEBEB";
        crc2.fillRect(440, 320, 40, 30);
        crc2.moveTo(440, 340);
        crc2.lineTo(480, 340);
        crc2.stroke();
        crc2.save();
        crc2.restore();


        //Kasse
        crc2.beginPath();
        crc2.fillStyle = "#151515";
        crc2.fillRect(490, 245, 100, 90);
        crc2.fillStyle = "#313131";
        crc2.fillRect(495, 300, 90, 30);      //Kasse Monitor
        crc2.fillStyle = "#9C9C9C";
        crc2.fillRect(495, 250, 40, 40);      //Kasse Tastatur
        crc2.save();
        crc2.restore();
        //horizontale Linien
        crc2.beginPath();
        crc2.lineWidth = 2;
        crc2.strokeStyle = "D1D1D1";
        crc2.moveTo(495, 260);
        crc2.lineTo(535, 260);
        crc2.moveTo(495, 275);
        crc2.lineTo(535, 275);
        //vertikale Linien
        crc2.moveTo(507, 250);
        crc2.lineTo(507, 290);
        crc2.moveTo(523, 250);
        crc2.lineTo(523, 290);
        crc2.stroke();
        crc2.save();
        crc2.restore();


        //Säbel
        crc2.beginPath();
        crc2.fillStyle = "#CBCBCB";
        crc2.moveTo(380, 40);
        crc2.lineTo(395, 40);
        crc2.lineTo(395, 80);
        crc2.lineTo(380, 80);
        crc2.closePath();
        crc2.fill();   
        crc2.save();
        crc2.restore();     

        crc2.beginPath();
        crc2.fillStyle = "black";
        crc2.fillRect(385, 80, 10, 30);     //Messergriff
        crc2.fillStyle = "#474747";
        crc2.fillRect(250, 30, 125, 80);    //Schneidebrett
        crc2.save();
        crc2.restore();



        //Dönerspieß
        crc2.beginPath();
        crc2.fillStyle = "#AE7B44";
        crc2.arc(75, 52, 50, 0, 2 * Math.PI);
        crc2.fill();
        //Dönergerät
        crc2.fillStyle = "#E6E6E6";
        crc2.fillRect(20, 0, 110, 20);
        crc2.fillRect(55, 20, 40, 50);
        crc2.save();
        crc2.restore();




        console.log("lets sketch vars");
        let falafel: Dish = new Dish(crc2, DishType.Falafel);
        let döner: Dish = new Dish(crc2, DishType.Döner);
        let yufka: Dish = new Dish(crc2, DishType.Yufka);
        console.log("lets sketch vars");

        let saladBack: Ingredient = new Ingredient(IngredientType.Salat, IngredientPositionType.Back, 100);
        let sauceBack: Ingredient = new Ingredient(IngredientType.Soße, IngredientPositionType.Back, 100);
        let onionBack: Ingredient = new Ingredient(IngredientType.Zwiebel, IngredientPositionType.Back, 100);
        let redkrautBack: Ingredient = new Ingredient(IngredientType.Rotkraut, IngredientPositionType.Back, 100);
        let tomatoBack: Ingredient = new Ingredient(IngredientType.Tomate, IngredientPositionType.Back, 100);
        console.log("lets sketch vars");

        let saladFront: Ingredient = new Ingredient(IngredientType.Salat, IngredientPositionType.Front, 100);
        let sauceFront: Ingredient = new Ingredient(IngredientType.Soße, IngredientPositionType.Front, 100);
        let onionFront: Ingredient = new Ingredient(IngredientType.Zwiebel, IngredientPositionType.Front, 100);
        let redkrautFront: Ingredient = new Ingredient(IngredientType.Rotkraut, IngredientPositionType.Front, 100);
        let tomatoFront: Ingredient = new Ingredient(IngredientType.Tomate, IngredientPositionType.Front, 100);
        console.log("lets sketch vars");



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


    function update(): void {
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (let customer of customers) {
            customer.move(1 / 80);
            customer.draw();
        }

        /*for (let worker of workers) {
            worker.move(1 / 80);
            worker.draw();
        }*/


    }
}

