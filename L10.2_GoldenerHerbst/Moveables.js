"use strict";
var GoldenerHerbst;
(function (GoldenerHerbst) {
    class Moveables {
        constructor(_position) {
            //position
            if (_position)
                this.position = _position.copy();
            else
                this.position = new GoldenerHerbst.Vector(0, 0);
            this.velocity = new GoldenerHerbst.Vector(0, 0); //Geschwindigkeit
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += GoldenerHerbst.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += GoldenerHerbst.crc2.canvas.height;
            if (this.position.x > GoldenerHerbst.crc2.canvas.width)
                this.position.x -= GoldenerHerbst.crc2.canvas.width;
            if (this.position.y > GoldenerHerbst.crc2.canvas.height)
                this.position.y -= GoldenerHerbst.crc2.canvas.height;
        }
        draw() {
            console.log("move");
        }
    }
    GoldenerHerbst.Moveables = Moveables;
})(GoldenerHerbst || (GoldenerHerbst = {}));
//# sourceMappingURL=Moveables.js.map