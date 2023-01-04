import axios from "axios";
import { USERS } from "./urls";
import UserModel, { User } from "../models/userModel"


export const fetchUsers = async (): Promise<any> => {
  let response = await axios.get(USERS);
  response = response.data.map((user: User) => new UserModel().normalize(user));
  return response;
};