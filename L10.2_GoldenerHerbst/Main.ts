namespace GoldenerHerbst {   

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    export let golden: number = 0.62;


    let moveables: Moveables[] = [];
    let squirrels: Array<Squirrel> = [];

    function handleLoad(_event: Event): void {        
        
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "white";
        crc2.strokeStyle = "grey";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        golden = crc2.canvas.height * golden;


        let pine1: Tree = new Tree (-30, -50, .6, .9);
        pine1.draw();
        let pine2: Tree = new Tree (-50, -90, .5, .7);
        pine2.draw();

        console.log(moveables);

        let leafCount: number = 30;
        let leafColors: Array<string> = ["#eb6c00", "#f4da00", "#bd1800"];

        for (let i: number = 0; i < leafCount; i++) {
            let random: number = Math.floor(Math.random() * 4);
            let canvasRandomX: number = Math.random() * crc2.canvas.width;
            let canvasRandomY: number = Math.random() * crc2.canvas.height;

            let newLeaf: Leaf = new Leaf(new Vector(canvasRandomX, canvasRandomY), leafColors[random], random);
            
            moveables.push(newLeaf);
        }

        let squirrelCount: number = 5;
        let squirrelColors: Array<string> = ["#824f2b", "#5e3e14", "#4a300f"];

        for (let i: number = 0; i < squirrelCount; i++) {
            let random: number = Math.floor(Math.random() * 3);
            let canvasRandomX: number = Math.random() * crc2.canvas.width;
            let canvasRandomY: number = Math.random() * crc2.canvas.height + 500;

            let newSquirrel: Squirrel = new Squirrel(new Vector(canvasRandomX, canvasRandomY), squirrelColors[random]);
            
            squirrels.push(newSquirrel);
        }
    }

    function drawBackground(_x: number, _y: number): void {    

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(1, "darkorange");
        
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.fillStyle = "HSL(105, 70%, 30%)";
        crc2.fillRect(0, 400, crc2.canvas.width, 400);
    }

    function drawSun(_x: number, _y: number, _fillColor: string): void {
            let r1:  number = 25;
            let r2: number = 80;
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

            gradient.addColorStop(0, "HSL(60, 100%, 90%, 1)");
            gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
            gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");


            crc2.save();
            crc2.translate(100, 100);
            crc2.fillStyle = gradient;
            crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore(); 
        }

    function drawMountain(_x: number, _y: number, _min: number, _max: number): void {

            let stepMin: number = 30;
            let stepMax: number = 80;
            let x: number = 0;

            crc2.save();
            crc2.translate(_x, _y);

            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(0, -_max);
            
            do {
                
                x += stepMin + Math.random() * (stepMax - stepMin);
                let y: number = -_min - Math.random() * (_max - _min);
                
                crc2.lineTo(x, y);

            } while (x < crc2.canvas.width);

            crc2.lineTo (x, 0);
            crc2.closePath();

            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -stepMax);
            gradient.addColorStop(0, "grey");
            gradient.addColorStop(0.9, "lightgrey");
            
            crc2.fillStyle = gradient;
            crc2.fill();
            crc2.restore();

    }

    function update(): void {   

        drawBackground(0, 0);
        crc2.restore();
        crc2.save();

        drawSun(0, 300, "#f7fae1");
        crc2.restore();
        crc2.save();

        drawMountain(0, 400, 100, 300);
        crc2.restore();
        crc2.save();

        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }

        squirrels.forEach(squirrel => {
            squirrel.draw();
        });
    }   
        
    window.setInterval(update, 60);
    } 