 Define a class representing a Person
class Person {
    // Properties
    private name: string;
    private age
    private profesion: string;
 
 
 // Constructor
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Method to greet
    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    // Getter for name
    getName(): string {
        return this.name;
    }

    // Setter for name
    setName(name: string): void {
        this.name = name;
    }

    // Getter for age
    getAge(): number {
        return this.age;
    }

    // Setter for age
    setAge(age: number): void {
        this.age = age;
    }
}

// Create an instance of Person
const person1 = new Person("John", 30);

// Access properties and methods of the instance
person1.greet(); // Output: Hello, my name is John and I am 30 years old.
console.log(person1.getName()); // Output: John
console.log(person1.getAge()); // Output: 30

// Modify properties using setters
person1.setName("Alice");
person1.setAge(25);
person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.// uno
