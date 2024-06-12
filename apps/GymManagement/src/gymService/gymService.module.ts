import { Module } from "@nestjs/common";
import { GymServiceModuleBase } from "./base/gymService.module.base";
import { GymServiceService } from "./gymService.service";
import { GymServiceController } from "./gymService.controller";
import { GymServiceResolver } from "./gymService.resolver";

@Module({
  imports: [GymServiceModuleBase],
  controllers: [GymServiceController],
  providers: [GymServiceService, GymServiceResolver],
  exports: [GymServiceService],
})
export class GymServiceModule {}
