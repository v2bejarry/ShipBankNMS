import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShipEntity } from './ship.entity';
import { IShipRepository } from './ship.repository.interface';

@Injectable()
export class ShipRepository implements IShipRepository {
  constructor(
    @InjectRepository(ShipEntity)
    private readonly shipRepository: Repository<ShipEntity>,
  ) {}

  async findShipByType(
    shipType: string,
  ): Promise<ShipEntity | null> {
    const entity = await this.shipRepository.findOne({
      where: { shipType },
    });

    return entity;
  }

  async findAllShips(): Promise<ShipEntity[]> {
    return this.shipRepository.find();
  }

  async createShip(ship: ShipEntity): Promise<ShipEntity> {
    const newShip = this.shipRepository.create(ship);
    return this.shipRepository.save(newShip);
  }

  async updateShip(shipType: string, ship: ShipEntity): Promise<ShipEntity> {
    await this.shipRepository.update({ shipType }, ship);
    const updatedShip = await this.findShipByType(shipType);
    if (!updatedShip) {
      throw new Error(`Ship with type ${shipType} not found`);
    }
    return updatedShip;
  }

  async deleteShip(shipType: string): Promise<boolean> {
    const result = await this.shipRepository.delete({ shipType });
    return (result.affected ?? 0) > 0;
  }
}
