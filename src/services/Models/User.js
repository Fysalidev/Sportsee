export default class User {
  constructor(data) {
    this.id = data.id;
    this.firstName = data.userInfos.firstName;
    this.keyData = data.keyData;
    this.todayScore = data.score || data.todayScore;
    this.score = this.todayScore * 100;
  }
}
