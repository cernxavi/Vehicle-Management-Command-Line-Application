import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
class Truck extends Vehicle {
    constructor(vin, color, make, model, year, weight, topSpeed, wheels, towingCapacity) {
        super();
        // Ensure that the wheels array has exactly 4 wheels, defaulting to 4 new ones if not.
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.wheels = wheels.length === 4 ? wheels : [new Wheel(17, "Michelin"), new Wheel(17, "Michelin"), new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
        this.towingCapacity = towingCapacity;
    }
    tow(vehicle) {
        const { make, model, weight } = vehicle;
        if (weight <= this.towingCapacity) {
            console.log(`The ${make} ${model} is being towed`);
        }
        else {
            console.log(`The ${make} ${model} is too heavy to be towed`);
        }
    }
    // No need for the `override` keyword here, just define the method as a regular method.
    printDetails() {
        super.printDetails();
        console.log(`
      VIN: ${this.vin}
      Make: ${this.make}
      Model: ${this.model}
      Year: ${this.year}
      Weight: ${this.weight} kg
      Top Speed: ${this.topSpeed} km/h
      Color: ${this.color}
      Towing Capacity: ${this.towingCapacity} kg
      Wheels: ${this.wheels.length} wheels
    `);
    }
}
export default Truck;
