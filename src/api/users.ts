import axios from "axios";
import { USERS } from "./urls";


export const fetchUsers = async (): Promise<any> => {
  const response = await axios.get(USERS);
  return response;
};