export default class Activity {
    constructor({userId, sessions}){
        this.id = userId;
        this.activity = sessions.map((session, index) => ({
            kilogram : session.kilogram,
            calories : session.calories,
            day : (index + 1).toString(),
        }))
    }
}