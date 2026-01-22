import { ShipEntity } from "./ship.entity"

export const SHIP_REPOSITORY = Symbol('SHIP_REPOSITORY')

export interface IShipRepository {
    findShipByType(shipType: string): Promise<ShipEntity | null>
    findAllShips(): Promise<ShipEntity[]>
    createShip(ship: ShipEntity): Promise<ShipEntity>
    updateShip(shipType: string, ship: ShipEntity): Promise<ShipEntity>
    deleteShip(shipType: string): Promise<boolean>
}
