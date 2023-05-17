export default {
    name: "news_letter",
    label: "NewsLetter",
    path: "content/newsLetter",
    fields: [
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'string'
        },
        {
            name:'emailAddressPlaceHolder',
            title:'Email Address PlaceHolder',
            type:'string'
        },
        {
            name:'sendButton',
            title:'Send Button',
            type:'string'
        },
    ],
    ui: {
        // This is an DEMO router. You can remove this to fit your site
        router: ({ document }) => `/demo/blog/${document._sys.filename}`,
    },
}