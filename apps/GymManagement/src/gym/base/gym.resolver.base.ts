/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Gym } from "./Gym";
import { GymService } from "../../gymService/base/GymService";
import { GymCountArgs } from "./GymCountArgs";
import { GymFindManyArgs } from "./GymFindManyArgs";
import { GymFindUniqueArgs } from "./GymFindUniqueArgs";
import { CreateGymArgs } from "./CreateGymArgs";
import { UpdateGymArgs } from "./UpdateGymArgs";
import { DeleteGymArgs } from "./DeleteGymArgs";
import { GymEquipmentFindManyArgs } from "../../gymEquipment/base/GymEquipmentFindManyArgs";
import { GymEquipment } from "../../gymEquipment/base/GymEquipment";
import { GymServiceFindManyArgs } from "../../gymService/base/GymServiceFindManyArgs";
import { GymService } from "../gym.service";
@graphql.Resolver(() => Gym)
export class GymResolverBase {
  constructor(protected readonly service: GymService) {}

  async _gymsMeta(
    @graphql.Args() args: GymCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Gym])
  async gyms(@graphql.Args() args: GymFindManyArgs): Promise<Gym[]> {
    return this.service.gyms(args);
  }

  @graphql.Query(() => Gym, { nullable: true })
  async gym(@graphql.Args() args: GymFindUniqueArgs): Promise<Gym | null> {
    const result = await this.service.gym(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Gym)
  async createGym(@graphql.Args() args: CreateGymArgs): Promise<Gym> {
    return await this.service.createGym({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Gym)
  async updateGym(@graphql.Args() args: UpdateGymArgs): Promise<Gym | null> {
    try {
      return await this.service.updateGym({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Gym)
  async deleteGym(@graphql.Args() args: DeleteGymArgs): Promise<Gym | null> {
    try {
      return await this.service.deleteGym(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [GymEquipment], { name: "gymEquipments" })
  async findGymEquipments(
    @graphql.Parent() parent: Gym,
    @graphql.Args() args: GymEquipmentFindManyArgs
  ): Promise<GymEquipment[]> {
    const results = await this.service.findGymEquipments(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [GymService], { name: "gymServices" })
  async findGymServices(
    @graphql.Parent() parent: Gym,
    @graphql.Args() args: GymServiceFindManyArgs
  ): Promise<GymService[]> {
    const results = await this.service.findGymServices(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}