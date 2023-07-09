import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas/index";
import { sanityTheme } from "./theme";
import StudioNavbar from "@/components/studio/StudioNavbar";
import StudioLogo from "@/components/studio/StudioLogo";

// ENVIRONMENT VARIABLES
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string;

export default defineConfig({
  basePath: "/studio",
  name: "Mandjou_Dama",
  title: "Mandjou Dama",

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      navbar: StudioNavbar,
      logo: StudioLogo,
    },
  },
  theme: sanityTheme,
});
