import { useTina } from "tinacms/dist/react";
import client from "../../tina/__generated__/client";
import Layout from "../app/component/Layout";
import Banner from "../app/component/Banner";
// import Blog from "../../app/component/Blog";
import AuthorGrid from "../app/component/Author/AuthorGrid";
import Blog from "../app/component/Blog";

const HomePage = (props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
    response: props.response,
    blogResponse:props.blogResponse,
    categoryList:props.categoryList
  });

  const post = data?.home;
const {seo} = post || {}
const {seo_description,seo_title} = seo || {}

  const respo = props.response;
  const resourcesInner = respo?.resources_innerConnection?.edges?.map(
    (i) => i.node
  );
  const response = props.blogResponse;
  const blogInner = response?.blogsInnerConnection?.edges?.map((i) => i.node);

  const categoryList = props.categoryList
  const allCategory = categoryList?.categoryConnection?.edges?.map((i) => i.node)

  return (
    <>
      <Layout
        header={post}
        category={allCategory}
        // getnewsletter={getnewsletterdata}
        footer={post?.footer}
        SeoDescription={seo_description}
        SeoTitle={seo_title}
      >
        <Banner block={post}/>
        <AuthorGrid props={resourcesInner}/>
        <Blog props={blogInner}/>
 
      
      </Layout>
    </>
  );
};

export default HomePage;

export const getStaticProps = async ({ params }) => {
  let data = {};
  let query = {};
  let response = {};
  let blogResponse={};
  let categoryList={};
  let variables = { relativePath: `homePage.md` };
  try {
    const res = await client?.queries?.home(variables);
    const md = await client?.queries?.resources_innerConnection(variables);
    const blog = await client?.queries?.blogsInnerConnection(variables);
    const category = await client?.queries?.categoryConnection(variables);

    query = res.query;
    data = res.data;
    variables = res.variables;
    response = md.data;
    blogResponse = blog.data;
    categoryList= category.data
  } catch {
    // swallow errors related to document creation
  }
  return {
    props: {
      variables: variables,
      data: data,
      query: query,
      response: response,
      blogResponse: blogResponse,
      categoryList: categoryList,
      //myOtherProp: 'some-other-data',
    },
    revalidate: 10,
  };
};

// export const getStaticPaths = async () => {
//   const postsListData = await client?.queries?.homeConnection();

//   return {
//     paths: postsListData.data.homeConnection.edges.map((home) => ({
//       params: { filename: home.node._sys.filename },
//     })),
//     fallback: false,
//   };
// };

