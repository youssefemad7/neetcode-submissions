class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
    let time = [];
  let cars = position.map((p, i) => [p, speed[i]]);
  cars.sort((a, b) => b[0] - a[0]);
  for (let i = 0; i < cars.length; i++) {
    let pos = cars[i][0];
    let spd = cars[i][1];
    let newtime = (target - pos) / spd;

    if (time.length === 0 || newtime > time[time.length - 1]) {
      time.push(newtime);
    }
  }
  return time.length
}
}
