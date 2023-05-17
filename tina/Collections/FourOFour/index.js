import { Images } from "../../Global/Images";
import { seo } from "../../Global/Seo";

export default {
    name: "fourofour",
    label: "Four O Four",
    path: "content/fourOfour",
    fields: [
        {
            name: "header",
            label: "Header",
            type: "reference",
            collections: ['header'],
        },
        {
            name: "foueOfourImage",
            label: "Four O Four Image",
            type: "object",
            fields:[...Images]
        },
        {
            name : "title",
            label: "Title",
            type: "string"
        },
       {
        name: "description",
        label: "Description",
        type: "rich-text"
       },
        {
            name: "footer",
            label: "Footer",
            type: "reference",
            collections:['footer']
        },
        {
            name: 'seo',
            label:'SEO',
            type: "object",
            fields: [...seo],
        }
    ],
    ui: {
        // This is an DEMO router. You can remove this to fit your site
        router: ({ document }) => `/404`,
    },
}