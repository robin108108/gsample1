import { Gym } from "../gym/Gym";

export type GymService = {
  createdAt: Date;
  gym?: Gym | null;
  id: string;
  serviceDescription: string | null;
  updatedAt: Date;
};
