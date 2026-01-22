import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Delete,
  Param,
} from '@nestjs/common';
import { ShipEntity } from './ship.entity';
import { ShipService } from './ship.service';

@Controller('ships')
export class ShipController {
  constructor(private readonly shipService: ShipService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  createShip(@Body() body: ShipEntity) {
    return this.shipService.createShip(body);
  }

  @Delete(':shipType')
  async deleteShip(@Param('shipType') shipType: string) {
    const deleted = await this.shipService.deleteShip(shipType);
    return {
      message: deleted ? 'Vaisseau supprimé' : 'Vaisseau non trouvé',
      success: deleted
    };
  }
}
