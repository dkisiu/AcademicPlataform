import User from './User.js'

export default class Teacher extends User {
    constructor(name, lastName, email, state, givenCourse, score) {
        super(name, lastName, email, state)
        this.givenCourse = givenCourse
        this.score = score
    }
}