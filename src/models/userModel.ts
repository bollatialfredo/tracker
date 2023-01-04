export interface User {
  user_id: string,
  first_name: string,
  last_name: string,
  email: string,
  phone?: string,
  age?: number | undefined,
  username?: string,
  password?: string
}

class UserModel {
  normalize = (user: User) => {
    if(user.age) user.age = user.age;
    return user;
  };
}

export default UserModel;