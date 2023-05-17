import { LinkField } from "../LinkField";
import { LogoWithLink } from "../LogoWithLink";


export default {
    name: "footer",
    label: "Footer",
    path: "content/footer",
    fields: [
        {
            name: "logoWithLinks",
            label: "Logo With Links",
            type: "object",
            fields: [...LogoWithLink],
            list:true
        },
        {
            name: "label_links",
            label: "Lable Links",
            type: "object",
            fields: [ ...LinkField ],
            list: true,
        },
        {
            name: "news_letter",
            label: "NewsLatter",
            type: "reference",
            collections: ['news_letter'],
        },
    ],
    disableExitOnUnsavedChanges: true,
    ui: {
        // This is an DEMO router. You can remove this to fit your site
        router: ({ document }) => `/demo/blog/${document._sys.filename}`,
    },
}