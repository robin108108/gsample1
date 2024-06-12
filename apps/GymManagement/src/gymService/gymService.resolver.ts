import * as graphql from "@nestjs/graphql";
import { GymServiceResolverBase } from "./base/gymService.resolver.base";
import { GymService } from "./base/GymService";
import { GymServiceService } from "./gymService.service";

@graphql.Resolver(() => GymService)
export class GymServiceResolver extends GymServiceResolverBase {
  constructor(protected readonly service: GymServiceService) {
    super(service);
  }
}
