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
      type: "title",
      title: "Title",
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "background",
      type: "background",
      title: "Background",
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "icon",
      type: "icon",
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
      name: "external-link",
      type: "string",
      title: "External Link",
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
