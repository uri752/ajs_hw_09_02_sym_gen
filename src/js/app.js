/* // TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2])); */

/* const char = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10
  } */

export default class Team {
  constructor(members) {
    this.members = members;
  }

  * [Symbol.iterator]() {
    for (let i = 0; i < this.members.length; i += 1) {
      yield this.members[i];
    }
  }
}
