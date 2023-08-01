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

/**
 * Retrieves the next page of typefaces.
 *
 * @param lastId The ID of the last typeface in the previous page.
 * @returns An array of typefaces.
 */
export const getAllTypefaces = async (
  lastId: string | null
): Promise<Typeface[]> => {
  if (lastId === null) {
    return sanityClient.fetch(groq`
    *[_type == "typeface"  && !(_id in path("drafts.**"))] | order(_id) [0...9] {
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
  }
  const result = await sanityClient.fetch<Typeface[]>(
    groq`*[_type == "typeface" && _id > $lastId] | order(_id) [0...9] {
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
    }`,
    { lastId }
  );

  if (result.length > 0) {
    lastId = result[result.length - 1]._id;
  } else {
    lastId = null; // Reached the end
  }
  return result;
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
