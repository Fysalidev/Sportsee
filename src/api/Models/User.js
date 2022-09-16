/**
 * @class
 * @classdesc user data formatter
 */
export default class User {
  /**
   * format fetched user data
   * @param {Object}
   */

  constructor(data) {
    this.id = data.id;
    this.firstName = data.userInfos.firstName;
    this.keyData = data.keyData;
    this.todayScore = data.score || data.todayScore;
    this.score = this.todayScore * 100;
  }
}
