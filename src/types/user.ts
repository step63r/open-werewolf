import { ROLE } from "./role";

export type User = {
  id: string,
  name: string,
  roomId?: string,
  role: ROLE,
  isAlive: boolean,
};
