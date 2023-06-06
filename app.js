/* There is only one `Governor` in the state; add static methods and properties you'd expect a `Governor` to have. */
class Governor {
    static name = "Ted";
    static state = "Texas";
    static tieColor = "red stripes";
    static teethWhitened = true;

    static greet() {
        console.log(`Hello, my name is ${this.name} and I'm proud to be governor of ${this.state}!!`);
    }

    static appearance() {
        console.log(`The governor of ${this.state} is wearing a ${this.tieColor} tie today.`);
    }
}

Governor.greet();
Governor.appearance();

/* Inheritance
For the `Person` class:
- Think of three properties all people share, and set them with the constructor.
- Think of three methods all people share, and create them.
- Create a `PostalWorker` class that inherits from `Person`, and add some methods specific to postal workers.
- Create a `Chef` class that inherits from `Person`, and add some methods specific to chefs.
- Create two `PostalWorker`s and two `Chef`s. Log them and test all of their methods. */

class Person{
    constructor (name, age, location, occupation) {
        this.name = name;
        this.age = age;
        this.location = location;
        this.occupation = occupation;
    }
    introduce() {
        console.log(`Hello, my name is ${this.name}!`);
    }
    about() {
        return `${this.name} is ${this.age} years old.`;
    }
    from() {
        return `${this.name} is from ${this.location}.`;
    }
}

const Mai = new Person("Mai", 900, "Dallas, Texas")
Mai.introduce();
console.log(Mai.about());
console.log(Mai.from());

class PostalWorker extends Person {
    constructor (name, age, location, drivesTruck, deliverDays) {
        super(name, age, location, "Postal Worker");
        this.drivesTruck = drivesTruck;
        this.deliverDays = deliverDays;
    }
    schedule() {
        return `${this.name} delivers mail on ${this.deliverDays}.`
    }
    transportation() {
        if (this.drivesTruck === true) {
            return `${this.name} delivers mail by truck.`
        }
        if (this.drivesTruck === false) {
            return `${this.name} delivers mail by foot.`
        }
    }
}

const Fred = new PostalWorker("Fred", 35, "La Jolla, CA", false, "Monday, Tuesday, Thursday, and Friday")
console.log(Fred);
console.log(Fred.schedule());
console.log(Fred.transportation());

const Alice = new PostalWorker("Alice", 40, "New Jersey", true, "Tuesday through Saturday")
console.log(Alice);
console.log(Alice.schedule());
console.log(Alice.transportation());

class Chef extends Person {
    constructor (name, age, location, foodType, specialDish, restaurantName) {
        super(name, age, location, "Chef");
        this.foodType = foodType;
        this.specialDish = specialDish;
        this.restaurantName = restaurantName;
    }
    specialty() {
        return `Chef ${this.name} specializes in ${this.foodType} cuisine at ${this.restaurantName}.`
    }
    restaurant() {
        return `Chef ${this.name}'s signature dish is ${this.specialDish}.`
    }
}

const Beatrice = new Chef("Beatrice", 27, "Richardson, TX", "Italian", "Casa Mia")
console.log(Beatrice);
console.log(Beatrice.specialty());
console.log(Beatrice.restaurant());

const Hue = new Chef("Hue", 68, "Saigon", "Vietnamese", "Pho Dac Biet", "House of Hue")
console.log(Hue);
console.log(Hue.specialty());
console.log(Hue.restaurant());

/* Additional exercise */

class BankAccount {
    constructor(ownerName, balance, acctNum) {
        this.ownerName = ownerName;
        this.balance = balance;
        this.acctNum = acctNum;
    }
    deposit(addMoney){
        return `You have deposited $${addMoney}. Your balance is now $${addMoney + this.balance}.`
    }
    withdraw(removeMoney){
        if (removeMoney > this.balance) {
            return `Insufficient funds.`
        }
        return `You have withdrawn $${removeMoney}. Your balance is now $${this.balance - removeMoney}.`;
    }
}

const BoA = new BankAccount("Malfoy Lam", 100, 12345678)
console.log(BoA);
console.log(BoA.deposit(200)); // You have deposited $200. Your balance is now $300.
console.log(BoA.withdraw(300)); // Insufficient funds.
console.log(BoA.withdraw(10)); // You have withdrawn $10. Your balance is now $90.

class CheckingAccount extends BankAccount {
    constructor(ownerName, balance, acctNum, overdraftEnabled) {
        super(ownerName, balance, acctNum);
        this.overdraftEnabled = overdraftEnabled;
    }
    withdraw(removeMoney){
        if (removeMoney > this.balance) {
            if (this.overdraftEnabled === true) {
                return `You have withdrawn $${removeMoney}, which exceeds your current balance of $${this.balance}. You have been charged an additional overdraft fee of $30.00. Your balance is now $${this.balance - removeMoney - 30}.`
            }
            if (this.overdraftEnabled === false) {
                return `Insufficient funds.`
            }
        }
        return `You have withdrawn $${removeMoney}. Your balance is now $${this.balance - removeMoney}.`;
    }
}

const BoACA = new CheckingAccount("Cheddar", 150000, 987654312, true)
console.log(BoACA);
console.log(BoACA.deposit(500));
console.log(BoACA.withdraw(150050));

class SavingsAccount extends BankAccount {
    withdraw() {
        return `Unable to withdraw funds from Savings Account #${this.acctNum}.`
    }
}

const BoASA = new SavingsAccount("Lexi", 200, 456789123)
console.log(BoASA);
console.log(BoASA.deposit(500));
console.log(BoASA.withdraw(150050));