import { groq } from "next-sanity";
import { sanityClient } from "./client";

//get all typefaces
export const getAllTypefaces = async () => {
  return sanityClient.fetch(groq`
    *[_type == "typeface" && !(_id in path("drafts.**"))] {
            name,
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

//get single typeface
export const getSingleTypeface = ({ typeface }: { typeface: string }) => {
  return sanityClient.fetch(
    groq`
    *[_type == "typeface" && slug.current == "${typeface}" && !(_id in path("drafts.**"))][0] {
            name,
            infos,
            styles,
            "files": files.asset -> url,
            "slug": slug.current,
            "background": background.asset -> url,
            "icon": icon.asset -> url,
            "title": title.asset -> url,
              categories[] -> {
                name,
            },
              license[] -> {
                name,
            }
        }
    `,
    {
      typeface,
    }
  );
};
