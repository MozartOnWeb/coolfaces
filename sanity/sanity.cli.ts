import { defineCliConfig } from "sanity/cli";

// ENVIRONMENT VARIABLES
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string;

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
});
