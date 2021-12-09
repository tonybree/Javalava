namespace L9_OldMacDonald {


    export class Animal {
        species: string;
        food: string;
        sound: string;
        consumption: number;

        constructor(_species: string, _food: string, _sound: string, _consumption: number) {
            this.species = _species;
            this.food = _food;
            this.sound = _sound;
            this.consumption = _consumption;
        }
    }
}