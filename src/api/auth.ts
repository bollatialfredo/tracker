import axios from "axios";
import { LoginPayload } from "../models/authModel";
import { LOGIN } from "./urls";

export const login = async (payload: LoginPayload): Promise<any> => {
  const response = await axios.post(LOGIN, payload);
  return response;
};