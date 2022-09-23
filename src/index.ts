import Character from './Character';
import Monster from './Monster';
import Battle, { PVP, PVE } from './Battle';
import Dragon from './Dragon';

export const player1 = new Character('Felipe');
export const player2 = new Character('Daniella');
export const player3 = new Character('Guilherme');
player1.levelUp();
player1.levelUp();
player1.levelUp();
export const monster1 = new Monster();
export const monster2 = new Dragon();
export const pvp = new PVP(player2, player3);
export const pve = new PVE(player1, [monster1, monster2]);
export const runBattles = (battles: Battle[]) => {
  battles.forEach((battle) => {
    battle.fight();
  });
};