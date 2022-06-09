import { extendType, arg, nonNull } from "nexus";

export const ASCIIImageQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("asciiImage", {
      type: "String",
      args: { image: arg({ type: nonNull("Upload") }) },
      async resolve(_, { image }) {
        const { createReadStream, filename, mimetype, encoding } = await image;
        return `${filename}, ${mimetype}, ${encoding}`;
      },
    });
  },
});
