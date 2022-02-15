"use strict";
var KebapStore;
(function (KebapStore) {
    class Moveable {
        constructor(_position) {
            this.position = _position;
            this.velocity = new KebapStore.Vector(0, 0);
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
        }
    }
    KebapStore.Moveable = Moveable;
})(KebapStore || (KebapStore = {}));
//# sourceMappingURL=Moveable.js.map