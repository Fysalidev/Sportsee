/**
 * @class
 * @classdesc activity data formatter
 */
export default class Activity {
    /**
     * format fetched activity data
     * @param {Object}
     */
    constructor({userId, sessions}){
        this.id = userId;
        this.activity = sessions.map((session, index) => ({
            kilogram : session.kilogram,
            calories : session.calories,
            day : (index + 1).toString(),
        }))
    }
}