import {IsEmail, IsString } from 'class-validator';

export class ShipEntry {
  @IsString()
  shipType!: string;

  @IsString()
  shipPrimaryColor!: string;

  @IsString()
  shipSecondaryColor!: string;

  @IsString()
  shipPlanetCoordinate!: string;
}