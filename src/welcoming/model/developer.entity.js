/**
 * Developer entity
 * @description
 * This class represents a developer entity.
 * It has a first name and a last name.
 */
export class Developer {
    firstName;
    lastName;

    /**
     * Constructor
     * @param firstName - The first name of the developer
     * @param lastName - The last name of the developer
     */
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    /**
     * Get the full name of the developer
     * @returns {string} The full name of the developer
     */
    get fullName() {
        return this.firstName == null || this.lastName == null ? "Unknown" : `${this.firstName} ${this.lastName}`.trim();
    }
}