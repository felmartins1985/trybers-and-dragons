import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  private _enemy: Fighter;
  constructor(player: Fighter, enemy: Fighter) {
    super(player);
    this._enemy = enemy;
  }

  fight(): number {
    while (this._player.lifePoints > 0 && this._enemy.lifePoints > 0) {
      this._player.attack(this._enemy);
      this._enemy.attack(this._player);
    }
    return this._player.lifePoints === -1 ? -1 : 1;
  }
}