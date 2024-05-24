class Car {}
    constructor(make, speed);{
        this.make = make;
        this.speed = speed; 
}
//Method for car acceleration
accelerate(amount);{
    this.speed += amount;
    console.log('${this.make} is traveling at ${this.speed} km/h');
}
//Method for car to brake
brake(amount);{
    this.speed -= amount; 
    if (this.speed < 0) this.speed = 0;
    console.log ('${this.make} is now traveling at ${this.speed} km/h');
}
//Accelerate method in Car class
class Car {}
constructor(initialSpeed = 0);{
    this.speed = initialSpeed;
}
accelerate ();{
this.speed +- 10;
console.log('New speed: ${this.speed} km/h');
}
//Brake method in Car class
class Car {}
constructor(speed =0);{
    this.speed = speed;
}
brake();{
    this.speed = Math.max(0, this.speed - 5); 
    console.log('New speed: ${this.speed} km/h');
}
//Define car class
class Car {
    constructor(make) {
        this.make = make;
        this.speed = 0;
    }
    accelerate(amount) {
        this.speed += amount;
        console.log ('${this.make} is accelerating. Speed: ${this.speed} km/h');
    }
    brake(amount) {
        this.speed -= amount;
        if (this.speed < 0) this.speed = 0;
        console.log('${this.make} is braking. Speed: $this.speed} km/h');
    }
}
class EV extends Car {
    constructor(make, charge) {
        super(make);
        this.charge = charge;
    }
}
getDetails();{
    return '${super,getDetails()} with ${this.charge}% battery charge';
}

chargeBattery(amount);{
    this.charge = Math.min(this.charge = amount, 100);
}

useBattery(amount);{
    this.charge = Math.max(this.charge - amount, 0);
}

class Ev {
    constructor(initialCharge) {
        this.batteryCharge = initialCharge;
    }
    
    chargeBattery(chargetTo) {
        this.batterycharge = chargeTo;
    }
    displayBatteryCharge() {
        console.log('Battery charge is at ${this.batteryCharge}%');
    }
    }

    accelerate();{
        this.speed += 20;
        this.charge -= 1;
        console.log('${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%');
    }

    class EV {
        constructor(maxSpeed, maxBattery) {
            this.speed - 0,
            this.battery = 100;
            this.maxSpeed = maxSpeed;
            this.maxBattery = maxBattery;
        }
        accelerate() {
            if (this.battery > 0) {
                this.speed += 20;
                this.battery -= 1;
                if (this.speed > this.maxSpeed) {
                    this.speed = this.maxSpeed;
                }
                console.log('Accelerated. Speed : ${this.speed} km/h, Battery: ${this.battery}%');
            } else {
                console.log('Battery is empty!');
            }
        }
        brake() {
            this.speed -= 10;
            if (this.speed < 0) {
                this.speed = 0;
            }
            console.log('Braked. Speed: ${this.speed} km/h, Battery: ${this.battery}%');
        }
        chargeBattery(amount) {
            this.battery += amount;
            if (this.battery > this.maxBattery) {
                this.battery = this.maxBattery;
            }
            console.log('Charged battery. Battery: ${this.battery}%');
        }
    }
    const tesla = new EV('Tesla', 120, 23);

console.log('Initial state:');
console.log('Speed: ${tesla.speed} km/h, Battery: ${tesla.battery}%');

console.log('Accelerating:');
tesla.accelerate();

console.log('Braking:');
tesla.brake();

console.log('Charging battery by 10%:');
tesla.chargeBattery(10);
