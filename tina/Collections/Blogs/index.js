import { category } from "../../Global/Category";
import { seo } from "../../Global/Seo";

export default {
    name: "blogs",
    label: "Blogs",
    path: "content/blog",
    fields: [
        {
            name: "header",
            label: "Header",
            type: "reference",
            collections: ['header'],
        },
        {
            name: 'banner_title',
            label: "Banner Title",
            type: "string"
        },
        {
            name: "category",
            label: "Category",
            type: "object",
            fields:[{
                name : "category",
                type: "reference",
                collections:['category']
            }],
            list:true
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
        router: ({ document }) => `/${document._sys.filename}`,
    },
}