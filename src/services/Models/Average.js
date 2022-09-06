export default class Average {
  constructor({ userId, sessions }) {
    this.week = ["L", "M", "M", "J", "V", "S", "D"];
    this.id = userId;
    this.sessions = sessions.map((session, index) => ({
      sessionLength: session.sessionLength,
      day: this.week[index],
    }));
  }
}



