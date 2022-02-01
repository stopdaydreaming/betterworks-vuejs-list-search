export default class ListClass {
  name = "";
  subtitle = "";

  constructor(name, subtitle) {
    this.name = name;
    this.subtitle = subtitle;
  }
  getName() {
    return this.name;
  }
  getSubtitle() {
    return this.subtitle;
  }
}
