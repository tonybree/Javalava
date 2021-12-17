"use strict";
var L09_GoldenerHerbst;
(function (L09_GoldenerHerbst) {
    class Moveables {
        constructor(_position, _velocity) {
            this.position = new L09_GoldenerHerbst.Vector(_position.x, _position.y);
            this.velocity = new L09_GoldenerHerbst.Vector(_position.x, _position.y);
        }
        move(_timeslice) {
            let offset = new L09_GoldenerHerbst.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x = L09_GoldenerHerbst.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y = L09_GoldenerHerbst.crc2.canvas.height;
            if (this.position.x > L09_GoldenerHerbst.crc2.canvas.width)
                this.position.x -= L09_GoldenerHerbst.crc2.canvas.width;
            if (this.position.y > L09_GoldenerHerbst.crc2.canvas.height)
                this.position.y -= L09_GoldenerHerbst.crc2.canvas.height;
        }
        draw() {
            console.log("I like to move it, move it...");
        }
    }
    L09_GoldenerHerbst.Moveables = Moveables;
})(L09_GoldenerHerbst || (L09_GoldenerHerbst = {}));
//# sourceMappingURL=moveables.js.map