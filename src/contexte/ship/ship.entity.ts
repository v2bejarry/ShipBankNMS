import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('ship')
export class ShipEntity {
  @PrimaryColumn({
    name: 'ship_type',
    type: 'varchar',
    length: 255,
  })
  shipType: string;

  @Column({
    name: 'ship_primary_color',
    type: 'varchar',
    length: 255,
  })
  shipPrimaryColor: string;

  @Column({
    name: 'ship_secondary_color',
    type: 'varchar',
    length: 255,
  })
  shipSecondaryColor: string;

  @Column({
    name: 'ship_planet_coordinate',
    type: 'varchar',
    length: 255,
  })
  shipPlanetCoordinate: string;
}
