import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GymServiceServiceBase } from "./base/gymService.service.base";

@Injectable()
export class GymServiceService extends GymServiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
