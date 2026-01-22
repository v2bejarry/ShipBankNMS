import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShipController } from './ship.controller';
import { ShipService } from './ship.service';
import { SHIP_REPOSITORY } from './ship.repository.interface';
import { ShipRepository } from './ship.repository';
import { ShipEntry } from './ship.types';
import { ShipEntity } from './ship.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([ShipEntry]),
    TypeOrmModule.forFeature([ShipEntity])
  ],
  controllers: [ShipController],
  providers: [
    ShipService,
    {
      provide: SHIP_REPOSITORY,
      useClass: ShipRepository,
    },
  ],
  exports: [],
})
export class ShipModule {}
