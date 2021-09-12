import { UserQueries } from "./queries";

const { createUser, deleteUser, findAllUsers, findUserByID, updateUser,loginUser } =
  UserQueries();

export default {
  User: {
    fullName: (user: any) => `${user.firstName} ${user.lastName}`,
  },
  Query: {
    findAllUsers,
    findUserByID,
    loginUser
  },
  Mutation: { createUser, deleteUser, updateUser },
};
