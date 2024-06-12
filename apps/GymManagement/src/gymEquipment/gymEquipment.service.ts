import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GymEquipmentServiceBase } from "./base/gymEquipment.service.base";

@Injectable()
export class GymEquipmentService extends GymEquipmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
