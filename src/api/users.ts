import axios from "axios";


export const fetchUsers = async (): Promise<any> => {
  let url = 'https://tracker-api-opn6.onrender.com/users';
  const response = await axios.get(url);
  return response;
};