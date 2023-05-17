
import { useTina } from "tinacms/dist/react";
import client from "../../tina/__generated__/client";
import Layout from "../app/component/Layout";
import NextImage from "../app/component/NextImage";
import { TinaMarkdown } from "tinacms/dist/rich-text";

const FourOFourPage = (props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
    categoryList: props.categoryList,
  });

  const post = data?.fourofour;

const {foueOfourImage,seo} = post || {}

const {seo_description,seo_title} = seo || {}
const categoryList = props.categoryList
const allCategory = categoryList?.categoryConnection?.edges?.map((i) => i.node)
  return (
    <>
      <Layout
        header={post}
        // getnewsletter={getnewsletterdata}
        footer={post?.footer}
         category={allCategory}
        SeoDescription={seo_description}
        SeoTitle={seo_title}
      >
   <section className="fnfPageSection sectionInnerSpace">
          <div className="container">
            <div className="fnfPageContent">
              <div className="errorImage">
                <NextImage src={foueOfourImage?.image} alt={foueOfourImage?.alt} width={500} height={500}/>
              </div>
              <h1>{post.title}</h1>
              <TinaMarkdown  content={post?.description} />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default FourOFourPage;

export const getStaticProps = async ({ params }) => {
  let data = {};
  let query = {};
  let categoryList = {};
  let variables = { relativePath: `FourOFour.md` };
  try {
    const res = await client?.queries?.fourofour(variables);
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
      categoryList:categoryList
      //myOtherProp: 'some-other-data',
    },
    revalidate: 10,
  };
};

// export const getStaticPaths = async () => {
//   const postsListData = await client?.queries?.fourofourConnection();

//   return {
//     paths: postsListData.data.fourofourConnection.edges.map((fourOfour) => ({
//       params: { filename: fourOfour.node._sys.filename },
//     })),
//     fallback: false,
//   };
// };





