import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GymServiceBase } from "./base/gym.service.base";

@Injectable()
export class GymService extends GymServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
