namespace L09_GoldenerHerbst {
    
    window.addEventListener("load", handleLoad);

    let background: ImageData;    
    let imgData: ImageData;
    export let crc2: CanvasRenderingContext2D;
    export let golden: number = 0.62;
    export let horizon: number;
    export let leaves: Leaf [] = [];
    export let flowers: Flower [] = [];
    export let squirrels: Squirrel [] = [];




    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "white";
        crc2.strokeStyle = "grey";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        horizon = crc2.canvas.height * golden;
        

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);



        drawBackground();
        drawSun(new Vector(100, 50));
        let mountain1: Mountain = new Mountain (0, 400, 100, 400, "grey", "lightgrey");
        mountain1.draw(crc2);
        let mountain2: Mountain = new Mountain (0, 400, 100, 300, "grey", "grey");
        mountain2.draw(crc2);
        let pine1: Pine = new Pine (-30, -50, .6, .9);
        pine1.draw(crc2, horizon);
        let pine2: Pine = new Pine (-50, -90, .5, .7);
        pine2.draw(crc2, horizon);

        drawSquirrel();

        createLeaves(10);
        drawFlower();



    }

    function createLeaves (_nLeaves: number): void {
        let x: number = (0);
        let y: number = (100);
        let position: Vector = new Vector(x, y);
        let velocity: Vector = new Vector(x, y);

        for (let i: number = 0; i < Math.random() * 100; i++) {
            let leaf: Leaf = new Leaf(position, velocity);
            leaves.push(leaf);
        }
    }

    function update(): void {
        console.log("x wurde das Bild schon gemalt!");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(background, 0, 0);

        for (let leaf of leaves) {
            leaf.move(1 / 50);
            leaf.draw();
        }
    }

    function drawBackground(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(0.6, "darkorange");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.fillStyle = "HSL(105, 70%, 30%)";
        crc2.fillRect(0, 400, crc2.canvas.width, 200);
    }

    function drawSun (_position: Vector): void {
        let r1:  number = 25;
        let r2: number = 80;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSL(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");


        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore(); 
    }

    function generateRandomColor(): string {
        let r: number = Math.floor(Math.random() * 255);
        let g: number = Math.floor(Math.random() * 255);
        let b: number = Math.floor(Math.random() * 255);
        let color: string = "rgba(" + r + "," + g + "," + b + "," + 1 + ")";
        return color;
    }

    function drawFlower(): void {
        for (let i: number = 0; i < 10; i++) {
            let flower: Flower = new Flower (generateRandomColor());
            flowers.push(flower);
            flower.draw(crc2);
        }
    }
}
