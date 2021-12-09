namespace L08_GoldenerHerbst  {
    
        export class Vector {
        public x: number;
        public y: number;

        constructor (_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }
        
        public scale (_factor: number): void {
            this.x = this.x * _factor;
            this.y = this.y * _factor;
        }
        
        public add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

        public set (_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }
        public fly (_minLength: number, _maxLength: number): void {
            let length: number = _minLength + Math.random() * (_maxLength - _minLength);
            let direction: number = Math.random() * 2 * Math.PI;

            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
    }
}