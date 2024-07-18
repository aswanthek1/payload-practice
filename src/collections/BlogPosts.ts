import { CollectionConfig } from "payload/types";

export const BlogPosts: CollectionConfig = {
    slug: 'blogPosts',
    labels: {
        singular: 'BlogPost',
        plural: 'BlogPost'
    },
    access: {
        read: () => true
    },
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            label: 'Slug',
            type: 'text',
            required: true,  
        },
        {
            name: 'body',
            label: 'Body',
            type: 'richText',
            required: true,
        },
    ]
}