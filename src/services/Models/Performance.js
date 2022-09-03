export default class Perfomance {
  constructor({ userId, kind, data }) {
    this.id = userId;
    this.kind = Object.values(kind);
    this.performance = data.map((item, index) => ({
      value: item.value,
      kind: this.kind[index],
    }));
  }
}
