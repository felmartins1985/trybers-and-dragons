import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

export default class PVE extends Battle {
  private _enemy: SimpleFighter[];
  constructor(player1: Fighter, enemy: SimpleFighter[]) {
    super(player1);
    this._enemy = enemy;
  }

  fight(): number {
    this._enemy.forEach((enemy) => {
      while (this._player.lifePoints > 0 && enemy.lifePoints > 0) {
        this._player.attack(enemy);
        enemy.attack(this._player);
      }
    });
    return super.fight();
  }
}