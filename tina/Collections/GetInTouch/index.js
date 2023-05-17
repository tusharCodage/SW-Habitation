import { Images } from "../../Global/Images";

export default {
    name: "getIntouch",
    label: "Get In Touch",
    path: "content/getInTouch",
    fields: [
     
   
        {
            name : "mainTitle",
            label: "Main Title",
            type: "string"
        },
       {
        name: "description",
        label: "Description",
        type: "rich-text"
       },
       {
        name: "image",
        label: "Image",
        type: "object",
        fields:[...Images]
    },
    ],
}