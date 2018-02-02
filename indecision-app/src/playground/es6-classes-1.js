class Person {
    constructor(nameIn = 'Anonymous', ageIn=0) {
        this.name = nameIn;
        this.age = ageIn;
    }

    getGreeting() {
        // return 'Hello ' + this.name + '!';
        // Template string
        return `Hello! I am ${this.name}!`
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

// Create subclass
class Student extends Person {
    constructor(nameIn, ageIn, majorIn) {
        // Calls parent constructor function
        super(nameIn, ageIn);
        this.major = majorIn;
    }

    hasMajor() {
        return !!this.major
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }

        return description
    }
}

class Traveler extends Person {
    constructor(nameIn, ageIn, homeIn) {
        super(nameIn, ageIn);
        this.home = homeIn;
    }

    getGreeting() {
        let description = super.getDescription();

        if (this.home) {
            description += ` Their home location is ${this.home}`;
        }

        return description;
    }
}

const me = new Traveler('David Scroggins', 35, 'Chicago');
const sister = new Traveler('Sarah Scroggins', 32, 'Kansas City');
const anon = new Traveler();
console.log(me.getGreeting());
console.log(sister.getGreeting());
console.log(anon.getGreeting());

console.log(me);
console.log(sister);
console.log(anon);