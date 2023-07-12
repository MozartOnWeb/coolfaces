import { createClient, ClientConfig } from "@sanity/client";

// ENVIRONMENT VARIABLES
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

export const sanityClient = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion,
});
