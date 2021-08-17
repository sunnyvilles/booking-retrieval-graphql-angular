import * as express from "express";

const { ApolloServer } = require("apollo-server-express");
import * as cors from "cors";

const typeDefs = require("./schema/typedefs");
const resolvers = require("./schema/resolvers");

const app = express();
app.use(cors());

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen({ port: 3001 }, () => {
  console.log("Node Server running on port : 3001");
});
