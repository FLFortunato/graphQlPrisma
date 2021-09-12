import { v4 as uuidv4 } from "uuid";
import { prisma } from "../../../server";
import bcrypt from "bcrypt";

export const UserQueries = () => {
  const createUser = async (_: any, { data }: any): Promise<any> => {
    try {
      const id = uuidv4();
      const password = await bcrypt.hash(
        data.password,
        Number(process.env.SALTBCRYPT)
      );

      const created = await prisma.users.create({
        data: { ...data, id, password },
      });

      return created;
    } catch (error) {
      return error;
    }
  };

  const loginUser = async (_: any, { data }): Promise<any> => {
    console.log(data);
  };

  const findUserByID = async (_: any, { id }: { id: string }): Promise<any> => {
    try {
      const user = await prisma.users.findUnique({ where: { id } });
      return user;
    } catch (error) {
      return error;
    }
  };

  const findAllUsers = async (
    _: any,
    undefined: any,
    { req, res }: any
  ): Promise<any> => {
    try {
      const users = await prisma.users.findMany();
      return users;
    } catch (error) {
      return error;
    }
  };

  const updateUser = async (_: any, { id, data }: any): Promise<any> => {
    try {
      const updated = await prisma.users.update({ where: { id }, data });
      return updated;
    } catch (error) {
      return error;
    }
  };

  const deleteUser = async (_: any, { id }: any): Promise<any> => {
    try {
      const deleted = await prisma.users.delete({ where: { id } });
      return deleted;
    } catch (error) {
      return error;
    }
  };

  return {
    findAllUsers,
    findUserByID,
    createUser,
    updateUser,
    deleteUser,
    loginUser
  };
};
