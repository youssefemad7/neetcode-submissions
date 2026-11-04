class TimeMap {
  constructor() {
    this.keyStore = new Map();
  }

  set(key, value, timestamp) {
    if (!this.keyStore.has(key)) {
      this.keyStore.set(key, []);
    }

    this.keyStore.get(key).push({ value, timestamp });
  }

  get(key, timestamp) {
    if (!this.keyStore.has(key)) {
      return "";
    }

    const values = this.keyStore.get(key);

    let left = 0;
    let right = values.length - 1;
    let result = "";

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (values[mid].timestamp <= timestamp) {
        result = values[mid].value;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  }
}