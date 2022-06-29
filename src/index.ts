import { ApolloServer } from "apollo-server-express";
// @ts-ignore
import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.js";
import express from "express";

import { schema } from "./schema";

const port = process.env.PORT || 3000;

/**
 * Docs: https://www.apollographql.com/docs/apollo-server/data/file-uploads/
 */
async function startServer() {
  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
  });

  await server.start();

  const app = express();
  app.use(graphqlUploadExpress());
  server.applyMiddleware({ app });

  await new Promise<void>((r) => app.listen({ port }, r));

  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  );
}

startServer();
