
import { defineType, defineField } from "sanity";

const blogs = defineType({
   name: 'blogs',
    title: 'Blogs',
    type: 'document',
    fields:  [
       {
            name: 'title',
            title: 'Title',
            type: 'string' ,
            validation: (Rule) => Rule.required().min(5).max(80),
             },
        
        defineField( {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
            },

        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
                {
                    type: 'block',
                },
            ],
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule) => Rule.max(200),
        }),
        defineField({
            name: 'postImage',
            title: 'Post Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
        name: 'author',
        title: 'Author',
        type:'reference',
        to: [
            {
                type: 'author',
            },
        ],
        })
       
    ],

});
export default blogs;