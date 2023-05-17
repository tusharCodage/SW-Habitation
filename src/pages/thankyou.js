import { useTina } from "tinacms/dist/react";
import client from "../../tina/__generated__/client";
import Layout from "../app/component/Layout";
import NextImage from "../app/component/NextImage";

const ThankYouPAge = (props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
    categoryList: props.categoryList,
  });

  const post = data?.thank_you;
  const categoryList = props.categoryList
  const allCategory = categoryList?.categoryConnection?.edges?.map((i) => i.node)
const {thankYouImage,seo} = post || {}
const {seo_description,seo_title} = seo || {}
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
 <section className="thankyouSection">
        <div className="container">
          <div className="thankyouContent">
            <div className="thankyouImage">
                  <NextImage src={thankYouImage.image} alt={thankYouImage.alt} width={500} height={500}/>
            </div>
          </div>
        </div>
      </section>
      </Layout>
    </>
  );
};

export default ThankYouPAge;

export const getStaticProps = async ({ params }) => {
  let data = {};
  let query = {};
  let categoryList={};
  let variables = { relativePath: `thank-you.md` };
  try {
    const res = await client?.queries?.thank_you(variables);
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
//   const postsListData = await client?.queries?.thank_youConnection();

//   return {
//     paths: postsListData.data.thank_youConnection.edges.map((thank_you) => ({
//       params: { filename: thank_you.node._sys.filename },
//     })),
//     fallback: false,
//   };
// };


