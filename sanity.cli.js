import { defineCliConfig } from "sanity/cli";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID; //57z6xy0l
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET; // "production"

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
});
