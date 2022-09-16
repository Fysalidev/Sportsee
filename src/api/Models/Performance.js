/**
 * @class
 * @classdesc performance data formatter
 */

export default class Perfomance {
  /**
   * format fetched performance data
   * @param {Object}
   */

  constructor({ userId, kind, data }) {
    this.id = userId;
    this.kind = Object.values(kind).map((item) => this.convert(item));
    this.performance = data
      .map((item, index) => ({
        value: item.value,
        kind: this.kind[index],
      }))
      .reverse();
  }

  convert = (string) => {
    let traduction = string;

    switch (traduction) {
      case "cardio":
        traduction = "Cardio";
        break;
      case "energy":
        traduction = "Energie";
        break;
      case "endurance":
        traduction = "Endurance";
        break;
      case "strength":
        traduction = "Force";
        break;
      case "speed":
        traduction = "Vitesse";
        break;
      case "intensity":
        traduction = "Intensité";
        break;
      default:
    }
    return traduction;
  };
}
