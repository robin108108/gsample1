import { Module } from "@nestjs/common";
import { GymModuleBase } from "./base/gym.module.base";
import { GymService } from "./gym.service";
import { GymController } from "./gym.controller";
import { GymResolver } from "./gym.resolver";

@Module({
  imports: [GymModuleBase],
  controllers: [GymController],
  providers: [GymService, GymResolver],
  exports: [GymService],
})
export class GymModule {}
