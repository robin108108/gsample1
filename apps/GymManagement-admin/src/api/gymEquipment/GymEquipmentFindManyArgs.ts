import { GymEquipmentWhereInput } from "./GymEquipmentWhereInput";
import { GymEquipmentOrderByInput } from "./GymEquipmentOrderByInput";

export type GymEquipmentFindManyArgs = {
  where?: GymEquipmentWhereInput;
  orderBy?: Array<GymEquipmentOrderByInput>;
  skip?: number;
  take?: number;
};
