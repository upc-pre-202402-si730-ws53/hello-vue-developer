export class Developer {
    firstName;
    lastName;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return this.firstName == null || this.lastName == null ? "Unknown" : `${this.firstName} ${this.lastName}`.trim();
    }
}