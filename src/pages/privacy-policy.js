import { useTina } from "tinacms/dist/react";
import client from "../../tina/__generated__/client";
import Layout from "../app/component/Layout";
import { TinaMarkdown } from "tinacms/dist/rich-text";

const PolicyPage = (props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
    categoryList: props.categoryList,
  });

  const post = data?.policy;
  const categoryList = props.categoryList
  const allCategory = categoryList?.categoryConnection?.edges?.map((i) => i.node)
  const {seo} = post || {}
  const {seo_description,seo_title} = seo || {}
  return (
    <>
      <Layout
        // getnewsletter={getnewsletterdata}
        header={post}
        footer={post?.footer}
        category={allCategory}
        // headerdark={data}
        SeoDescription={seo_description}
        SeoTitle={seo_title}
      >
       <section className="termsSection">
        <div className="container">
          <div className="termsContent">
            <section className="bannerSection sectionSpace">
              <div className="container">
                <div className="bannerContent">
                  <h1 className="bannerTitle">{post?.title}</h1>
                </div>
              </div>
            </section>
            <section className="termsDesc">
              <ul className="list">
                  <TinaMarkdown  content={post?.description} />
              </ul>
            </section>
          </div>
        </div>
      </section>
      </Layout>
    </>
  );
};

export default PolicyPage;

export const getStaticProps = async ({ params }) => {
  let data = {};
  let query = {};
  let categoryList= {}
  let variables = { relativePath: `Policy.md` };
  try {
    const res = await client?.queries?.policy(variables);
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
      categoryList : categoryList
      //myOtherProp: 'some-other-data',
    },
    revalidate: 10,
  };
};

// export const getStaticPaths = async () => {
//   const postsListData = await client?.queries?.policyConnection();

//   return {
//     paths: postsListData.data.policyConnection.edges.map((policy) => ({
//       params: { filename: policy.node._sys.filename },
//     })),
//     fallback: false,
//   };
// };


