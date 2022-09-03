export default class Perfomance {
  constructor({ kind, data }) {
    this.kind = Object.values(kind);
    this.performance = data.map((item, index) => ({
      value: item.value,
      kind: this.kind[index],
    }));
  }
}
