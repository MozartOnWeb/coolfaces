import { groq } from "next-sanity";
import { sanityClient } from "./client";

//get all typefaces
export const getAllTypefaces = async () => {
  return sanityClient.fetch(groq`
    *[_type == "typeface" && !(_id in path("drafts.**"))] {
            name,
              infos,
              "files": files.asset -> url,
              styles,
            "slug": slug.current,
            "background": background.asset -> url,
            "icon": icon.asset -> url,
              categories[] -> {
                name,
            },
              license[] -> {
                name,
            }
        }
    `);
};
