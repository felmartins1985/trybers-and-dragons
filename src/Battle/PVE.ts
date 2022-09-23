import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';

export default class PVE extends Battle {
  private _enemy: SimpleFighter[];
  constructor(player1: Fighter, enemy = [new Monster()]) {
    super(player1);
    this._enemy = enemy;
  }

  fight(): number {
    const player1LifePoints = this._player.lifePoints;
    const monsterLifePoints = this._enemy
      .reduce((acc, monster) => acc + monster.lifePoints, 0);
    while (player1LifePoints > 0 && monsterLifePoints > 0) {
      this._enemy.forEach((en) => {
        en.attack(this._player);
      });
      this._enemy.forEach((en) => {
        this._player.attack(en);
      });
    }
    return player1LifePoints > 0 ? 1 : -1;
  }
}