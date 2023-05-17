import { useTina } from "tinacms/dist/react";
import client from "../../tina/__generated__/client";
import Layout from "../app/component/Layout";
import Contact from "../app/component/Contact";
import { TinaMarkdown } from "tinacms/dist/rich-text";

const ContactPage = (props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
    categoryList:props.categoryList
  });

  const post = data?.contact;
  const {seo} = post || {}
  const {seo_description,seo_title} = seo || {}
  const categoryList = props.categoryList
  const allCategory = categoryList?.categoryConnection?.edges?.map((i) => i.node)

  return (
    <>
      <Layout
        // getnewsletter={getnewsletterdata}
        header={post}
        footer={post?.footer}
        category={allCategory}
        // canonical={canonical}
        // headerdark={data}
        SeoDescription={seo_description}
        SeoTitle={seo_title}
      >
        <section className="bannerSection sectionSpace">
          <div className="container">
            <div className="bannerContent">
              <h2 className="bannerPageTitle">{post?.section_title}</h2>
              <h1 className="bannerTitle">{post?.main_title}</h1>
            
              <TinaMarkdown  content={post?.description} />{" "}

      
            </div>
          </div>
        </section>
        {/* <ContactForm /> */}
        <Contact />
      </Layout>
    </>
  );
};

export default ContactPage;

export const getStaticProps = async ({ params }) => {
  let data = {};
  let query = {};
  let categoryList={};
  let variables = { relativePath: `contact-us.md` };
  try {
    const res = await client?.queries?.contact(variables);
    const category = await client?.queries?.categoryConnection(variables);
    query = res.query;
    data = res.data;
    variables = res.variables;
    categoryList= category.data
  } catch {
    // swallow errors related to document creation
  }
  return {
    props: {
      variables: variables,
      data: data,
      query: query,
      categoryList: categoryList,
      //myOtherProp: 'some-other-data',
    },
    revalidate: 10,
  };
};

// export const getStaticPaths = async () => {
//   const postsListData = await client?.queries?.contactConnection();

//   return {
//     paths: postsListData.data.contactConnection.edges.map((contact) => ({
//       params: { filename: contact.node._sys.filename },
//     })),
//     fallback: false,
//   };
// };



