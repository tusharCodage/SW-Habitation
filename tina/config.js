import { defineConfig } from "tinacms";
import { collections } from "./Collections";
import { globals } from "./Global";
import { sections } from "./Sections";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "f171f9a3-e459-48ff-86ca-b5c9f26b8a48", // Get this from tina.io
  token: "da5c0fbae9b51f4578c2074674080a3dc8bdcba1", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [...collections, ...globals, ...sections],
  },
});
