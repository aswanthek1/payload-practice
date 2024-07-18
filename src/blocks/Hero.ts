import { Block } from "payload/types";

export const Hero: Block = {
    slug: 'hero',
    labels: {
        singular: 'Block',
        plural: 'Blocks'
    },
    fields: [
        {
            name: 'heading',
            label: 'Heading',
            type: 'text'
        },
        {
            name: 'text',
            label: 'Text',
            type: 'textarea'
        },
        {
            name: 'backgroundImage',
            label: 'BackgroundImage',
            type: 'upload',
            relationTo: 'media'
        }
    ]
}