import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GymEquipmentService } from "./gymEquipment.service";
import { GymEquipmentControllerBase } from "./base/gymEquipment.controller.base";

@swagger.ApiTags("gymEquipments")
@common.Controller("gymEquipments")
export class GymEquipmentController extends GymEquipmentControllerBase {
  constructor(protected readonly service: GymEquipmentService) {
    super(service);
  }
}
