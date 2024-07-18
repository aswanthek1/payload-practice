import { CollectionConfig } from "payload/types";

export const Media: CollectionConfig = {
    slug: 'media',
    labels: {
        singular: 'Media',
        plural: 'Medias'
    },
    upload: true,
    access: {
        read: () => true
    },
    fields: [
        {
            name: 'alt',
            label: 'Alt',
            type: 'text',
            required: true
        }
    ]
}