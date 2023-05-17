import { seo } from "../../Global/Seo";

export default {
    name: "contact",
    label: "Contact",
    path: "content/contact",
    fields: [
        {
            name: "header",
            label: "Header",
            type: "reference",
            collections: ['header'],
        },
        {
            name: "section_title",
            label: "Section Title",
            type: "string",
           
        },
        {
            name: "main_title",
            label: "Main Title",
            type: "string",
        },
        {
            name: "description",
            label: "Description",
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
        router: ({ document }) => `/contact`,
    },
}