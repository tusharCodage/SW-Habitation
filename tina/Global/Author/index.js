export default {
    name: "author",
    label: "Author",
    path: "content/author",
    fields: [
        {
            name: "authorImage",
            label: "AuthorImage",
            type: "image"
        },
        {
            name: "company",
            label: "Company",
            type: "string"
        },
        {
            name: "authorPost",
            label: "Author Post",
            type: "string"
        },
    ],
    ui: {
        // This is an DEMO router. You can remove this to fit your site
        router: ({ document }) => `/demo/blog/${document._sys.filename}`,
    },
}