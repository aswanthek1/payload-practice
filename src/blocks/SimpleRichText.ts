import { Block } from "payload/types";

export const SimpleRichText: Block = {
    slug: 'simpleRichText',
    labels: {
        singular: 'SimpleRichText',
        plural: 'SimpleRichTexts'
    },
    fields: [
        {
            name: 'body',
            label: 'Text',
            type: 'richText'
        }
    ]
}