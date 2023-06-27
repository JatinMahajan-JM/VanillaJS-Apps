const markWeight = 78;
const markHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

let markBMI, johnBMI;

const calculateBMI = (a, b) => {
    return a / b ** 2;
}

markBMI = calculateBMI(markWeight, markHeight);
johnBMI = calculateBMI(johnWeight, johnHeight);

console.log(markBMI)

const jonasBMI = {
    name: "jonas",
    age: 45,
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const hecterBMI = {
    name: "jonas",
    age: 40,
    height: 1.69,
    mass: 90,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

jonasBMI.calcBMI();
hecterBMI.calcBMI();
console.log(jonasBMI.bmi, hecterBMI.bmi);