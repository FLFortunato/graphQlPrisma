import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server";
import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/typeDefs";

export const prisma = new PrismaClient();

const server = new ApolloServer({
  resolvers,
  typeDefs,
  context: ({ req, res }: any) => ({ req, res }),
});

server.listen({ port: process.env.PORT }).then(({ port }) => {
  console.log("Server running on port " + port);
});
