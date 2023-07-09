import { Rule, SchemaTypeDefinition } from "sanity";

//typefaces categories schema
export const License: SchemaTypeDefinition = {
  name: "license",
  type: "document",
  title: "License",
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
  ],
};
