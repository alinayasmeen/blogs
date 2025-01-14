import { defineField, defineType } from "sanity";

const author = defineType({
    name: "author",
    type: "document",
    fields: [
        defineField({
            name: "name",
            type: "string",
            title: "Name",
        }),
        defineField({
            name: "bio",
            type: "text",
            title: "Bio",
        }),
        defineField({
            name: "image",
            type: "image",
            title: "Image",
            options: {
                hotspot: true,
            },
        }),
    ],
});

export default author;