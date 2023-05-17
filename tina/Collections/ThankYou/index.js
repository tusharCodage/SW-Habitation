import { Images } from "../../Global/Images";
import { seo } from "../../Global/Seo";

export default {
    name: "thank_you",
    label: "Thank You",
    path: "content/thank_you",
    fields: [
        {
            name: "header",
            label: "Header",
            type: "reference",
            collections: ['header'],
        },
        {
            name: "thankYouImage",
            label: "Thank You Image",
            type: "object",
            fields:[...Images]
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
        router: ({ document }) => `/thankyou`,
    },
}