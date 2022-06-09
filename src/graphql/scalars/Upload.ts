import { asNexusMethod } from "nexus";
// @ts-ignore
import GraphQLUpload from "graphql-upload/GraphQLUpload.js";

export const GQLUpload = asNexusMethod(GraphQLUpload, "upload");
