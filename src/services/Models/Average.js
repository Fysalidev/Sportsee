export default class Average {
  constructor({ userId, sessions }) {
    this.id = userId;
    this.sessions = sessions.map((session, index) => ({
      sessionLength: session.sessionLength,
      day: this.day[index],
    }));
  }

  day() {
    const weekDay = ["L", "M", "M", "J", "V", "S", "D"];
    return weekDay;
  }
}



