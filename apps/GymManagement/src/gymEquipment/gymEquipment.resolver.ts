import * as graphql from "@nestjs/graphql";
import { GymEquipmentResolverBase } from "./base/gymEquipment.resolver.base";
import { GymEquipment } from "./base/GymEquipment";
import { GymEquipmentService } from "./gymEquipment.service";

@graphql.Resolver(() => GymEquipment)
export class GymEquipmentResolver extends GymEquipmentResolverBase {
  constructor(protected readonly service: GymEquipmentService) {
    super(service);
  }
}
