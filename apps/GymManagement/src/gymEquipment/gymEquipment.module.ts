import { Module } from "@nestjs/common";
import { GymEquipmentModuleBase } from "./base/gymEquipment.module.base";
import { GymEquipmentService } from "./gymEquipment.service";
import { GymEquipmentController } from "./gymEquipment.controller";
import { GymEquipmentResolver } from "./gymEquipment.resolver";

@Module({
  imports: [GymEquipmentModuleBase],
  controllers: [GymEquipmentController],
  providers: [GymEquipmentService, GymEquipmentResolver],
  exports: [GymEquipmentService],
})
export class GymEquipmentModule {}
