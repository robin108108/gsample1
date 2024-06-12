import * as graphql from "@nestjs/graphql";
import { GymResolverBase } from "./base/gym.resolver.base";
import { Gym } from "./base/Gym";
import { GymService } from "../gymService/base/GymService";
import { GymService } from "./gym.service";

@graphql.Resolver(() => Gym)
export class GymResolver extends GymResolverBase {
  constructor(protected readonly service: GymService) {
    super(service);
  }
}
