class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "BEEP!";
    }
    toString() {
        return `The vehicle is a + ${this.make} + ${this.model} from ${this.year}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheel = 4;
    }
}

class motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheel = 2;
    }
    revEngine() {
        return "VROOM!";
    }
}

class Garage extends Vehicle {
    constructor(){
        this.vehicles = [];
        this.capacity = 0;
    }
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
          return "Only vehicles are allowed in here!";
        }
        if (this.vehicles.length >= this.capacity) {
          return "Sorry, we're full.";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!";
      }
}