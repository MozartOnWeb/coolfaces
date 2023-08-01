import { Typeface } from "@/typings";
import { groq } from "next-sanity";
import { sanityClient } from "./client";

/**
 * Get the total number of typefaces.
 *
 * @returns {Promise<number>} The total number of typefaces.
 */
export const getTotalTypefaces = async (): Promise<number> => {
  return sanityClient.fetch<number>(groq`
    count(*[_type == "typeface" && !(_id in path("drafts.**"))])
  `);
};

export const getFirstNineTypefaces = async (): Promise<Typeface[]> => {
  return sanityClient.fetch<Typeface[]>(groq`
    *[_type == "typeface" && !(_id in path("drafts.**"))] | order(_id) [0...9] {
            _id,
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

export const getNineNextTypefaces = async (
  page: number
): Promise<Typeface[]> => {
  const pageSize = 9; // Number of typefaces to fetch per page
  const start = (page - 1) * pageSize;
  const end = start + 9;

  return sanityClient.fetch<Typeface[]>(groq`
    *[_type == "typeface" && !(_id in path("drafts.**"))] | order(_id) [${start}...${end}] {
      _id,
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

//get category typefaces
export const getCategoryTypefaces = ({ category }: { category: string }) => {
  return sanityClient.fetch(
    groq`
        *[_type=="typeface" && references(*[_type=="category" && slug.current == "${category}"]._id)] {
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
    `,
    {
      category,
    }
  );
};
