import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GymService } from "./gym.service";
import { GymControllerBase } from "./base/gym.controller.base";

@swagger.ApiTags("gyms")
@common.Controller("gyms")
export class GymController extends GymControllerBase {
  constructor(protected readonly service: GymService) {
    super(service);
  }
}
