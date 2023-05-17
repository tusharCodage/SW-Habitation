import { content } from "../../Sections/Content";
import { Images } from "../Images";
import { LinkField } from "../LinkField";

export default {
    name: "hero_section",
    label: "Hero Section",
    path: "content/heroSection",

    fields: [
        {
            name: "content",
            label: "Content",
            type: "object",
            fields: [...content],
   
        },
        {
            name: "buttons",
            label: "Buttons",
            type: "object",
            fields: [
                ...LinkField
            ],
            list: true,
        },
       
    ],
    ui: {
        // This is an DEMO router. You can remove this to fit your site
        router: ({ document }) => `/demo/blog/${document._sys.filename}`,
    },
}