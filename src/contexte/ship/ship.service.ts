import { Inject, Injectable } from '@nestjs/common';
import { SHIP_REPOSITORY } from './ship.repository.interface';
import type { IShipRepository } from './ship.repository.interface';
import { ShipEntity } from './ship.entity';

@Injectable()
export class ShipService {
  constructor(
    @Inject(SHIP_REPOSITORY) private readonly shipRepo: IShipRepository,
  ) {}

  async getShipByType(shipType: string): Promise<ShipEntity | null> {
    return this.shipRepo.findShipByType(shipType);
  }

  async getAllShips(): Promise<ShipEntity[]> {
    return this.shipRepo.findAllShips();
  }

  async createShip(ship: ShipEntity): Promise<ShipEntity> {
    return this.shipRepo.createShip(ship);
  }

  async updateShip(shipType: string, ship: ShipEntity): Promise<ShipEntity> {
    return this.shipRepo.updateShip(shipType, ship);
  }

  async deleteShip(shipType: string): Promise<boolean> {
    return this.shipRepo.deleteShip(shipType);
  }
}
