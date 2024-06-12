import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GymServiceService } from "./gymService.service";
import { GymServiceControllerBase } from "./base/gymService.controller.base";

@swagger.ApiTags("gymServices")
@common.Controller("gymServices")
export class GymServiceController extends GymServiceControllerBase {
  constructor(protected readonly service: GymServiceService) {
    super(service);
  }
}
