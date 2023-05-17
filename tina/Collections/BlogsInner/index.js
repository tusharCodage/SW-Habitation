import { category } from "../../Global/Category";
import { Images } from "../../Global/Images";
import { seo } from "../../Global/Seo";
import { content } from "../../Sections/Content";
import { side_content } from "../../Sections/SideContent";


export default {
    name: "blogsInner",
    label: "Blogs Inner",
    path: "content/blogs",
    fields: [
        {
            name: "header",
            label: "Header",
            type: "reference",
            collections: ['header'],
        },
        {
            name: "blog_title",
            label: "Blog Title",
            type: "string",
        },
        {
            name: "blog_description",
            label: "Blog Description",
            type: "rich-text",
        },
        {
            name: "author",
            label: "Author",
            type: "reference",
            collections: ['author'],
            
        },
        {
            name: "feature_image",
            label: "Feature Image",
            type: "object",
            fields: [...Images]
        },
         {
            label: "Blog Publish Date",
            name: "publishedAt",
            type: "string",
            ui: {
              component: 'date',
              dateFormat: 'MMM DD,YYYY',
              parse: (value) => value && value.format('MMM DD,YYYY'),
              timeFormat: false,
            },
        },
        {
            name: "contant",
            label: "Contant",
            type: "object",
            fields:[...content],
            list:true
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
            name: "slug",
            label: "Slug",
            type: "string",

        },
        {
            name: "side_contant",
            label: "Side Contant",
            type: "object",
            fields:[...side_content],
           
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
        router: ({ document }) => `/blogs/${document._sys.filename}`,
    },
}