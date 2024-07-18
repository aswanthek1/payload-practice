import { Block } from "payload/types";

export const PageTitle:Block = {
    slug: 'pageTitle',
    labels: {
        singular: 'PageTitle',
        plural: 'PageTitles'
    },
    fields: [
        {
            name: 'pageTitle',
            label: 'PageTitle',
            type: 'text'
        }
    ]
}