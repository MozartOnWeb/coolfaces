import { Rule, SchemaTypeDefinition } from "sanity";

//medications schema
export const Typeface: SchemaTypeDefinition = {
  name: "typeface",
  type: "document",
  title: "Typeface",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "name",
        maxLength: 50,
      },
    },
    {
      name: "title",
      type: "image",
      title: "Title",
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "background",
      type: "image",
      title: "Background",
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "icon",
      type: "image",
      title: "Icon",
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "styles",
      type: "string",
      title: "Styles",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "infos",
      type: "string",
      title: "Infos",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "external_link",
      type: "string",
      title: "External Link",
    },
    {
      name: "files",
      type: "file",
      title: "Files",
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
      // validation: (Rule: Rule) => Rule.unique(),
    },
    {
      name: "licenses",
      title: "Licenses",
      type: "array",
      of: [{ type: "reference", to: { type: "license" } }],
      // validation: (Rule: Rule) => Rule.unique(),
    },
  ],
};
