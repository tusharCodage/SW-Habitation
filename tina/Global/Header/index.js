
import { LinkField } from "../LinkField";
import { LogoWithLink } from "../LogoWithLink";

export default {
    name: "header",
    label: "Header",
    path: "content/header",

    fields: [
        {
            name: "logo",
            label: "Logo",
            type: "object",
            fields: [...LogoWithLink],
     
   
        },
        {
            name: "nav_items",
            label: "Nav Items",
            type: "object",
            fields: [
                ...LinkField
            ],
            list: true,
        },
        {
            name: "darkHeader",
            label: "Dark Header",
            type: "boolean",
            
     
   
        },
    ],
    
}