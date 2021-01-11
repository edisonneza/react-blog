export default class Configurations {
    constructor() {
      this.configUrl =
        "https://raw.githubusercontent.com/edisonneza/edisonneza.github.io/configs/publicConfigs/config.json";
    }
  
    getAll() {
      return fetch(this.configUrl)
        .then((resp) => resp.json())
        .then((data) => data)
        .catch((err) => err);
    }
  }
  