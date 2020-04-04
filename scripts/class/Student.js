import User from './User.js'

export default class Student extends User {
    constructor(names, lastname, email, state, selectedCourses) {
        super(names, lastname, email, state)
        this.selectedCourses = selectedCourses
    }
}