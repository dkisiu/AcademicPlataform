export default class User {
    constructor(name, lastname, email, state) {
        this.name = name,
            this.lastname = lastname,
            this.email = email,
            this.state = state
    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name
    }

    getLastName() {
        return this.lastname
    }

    setlastName(lastname) {
        this.lastname = lastname
    }

    getEmail() {
        return this.email
    }

    setEmail(email) {
        this.email = email
    }

    getState() {
        return this.state
    }

    setState(state) {
        this.state = state
    }

}