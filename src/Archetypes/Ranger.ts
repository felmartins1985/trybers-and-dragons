import Archetype from './Archetypes';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _instance = 0;
  constructor(name: string) {
    super(name);
    Ranger._instance += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return Ranger._instance;
  }
}