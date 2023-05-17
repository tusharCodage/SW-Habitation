import { seo } from "../../Global/Seo";

export default {
    name: "home",
    label: "Home",
    path: "content/home",
    fields: [
        {
            name: "header",
            label: "Header",
            type: "reference",
            collections: ['header'],
        },
        {
            name: "hero_section",
            label: "HeroSection",
            type: "reference",
            collections: ['hero_section'],
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
        router: ({ document }) => `/`,
    },
}