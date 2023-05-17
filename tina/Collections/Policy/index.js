import { seo } from "../../Global/Seo";

export default {
    name: "policy",
    label: "Policy",
    path: "content/policy",
    fields: [
        {
            name: "header",
            label: "Header",
            type: "reference",
            collections: ['header'],
        },
        {
            name: "title",
            label: "Title",
            type: "string",
        },
        {
            name: "description",
            label: "Descripton",
            type: "rich-text",
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
        router: ({ document }) => `/privacy-policy`,
    },
}