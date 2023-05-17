import { useTina } from "tinacms/dist/react";
import client from "../../../tina/__generated__/client";
import Layout from "../../app/component/Layout";
import BlogList from "../../app/component/Blog/BlogList";
import { useBlogs } from "../../app/hooks/useBlogs";
import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";

const BlogsPage = (props) => {
  const [defaultCategory, setdefaultCategory] = useState("All Post");
  const [search, setSearch] = useState("");
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
    response: props.response,
    categoryList: props.categoryList,

  });
  const respo = props.response;
  const blogInner = respo.blogsInnerConnection?.edges?.map((i) => i.node);

  const post = data?.blogs;
  const { header, category ,seo} = post || {};
  const categoryOption = category?.map((i) => i.title);
  const slug = useParams();
  
  const innCategory = category?.map((i) => i.category)

  const categoryList = props.categoryList
  const allCategory = categoryList?.categoryConnection?.edges?.map((i) => i.node)

  const {seo_description,seo_title} = seo || {}
  const {
    setBlogs,
    setCurrentBlog,
    currCategory,
    setCurrCategory,
    searchValue,
    setSearchValue,
  } = useBlogs();

  useEffect(() => {
    setBlogs(blogInner);
    setCurrentBlog(blogInner?.find((item) => item.filename === slug));
    setSearchValue("");
  }, [slug]);
  // const getcategoryList = header?.nav_items
  //   ?.filter((i) => i?.__typename === "HeaderNav_items")
  //   .map((i) => i);
  const blogs = blogInner?.map((i) => i.category);

// console.log( innCategory
//   ?.filter((aa) =>  blogs?.filter((i) => i.category?.filter((i) => i?.category.title == aa.title).length >0)));

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
        <section className="blogsSection">
          <div className="blogsContent">
            <section className="bannerSection sectionSpace blogsBanner">
              <div className="container">
                <div className="bannerContent">
                  <div className="leftSide">
                    <h1 className="categoryBannerTitle">
                      {currCategory !== "" ? currCategory : post?.banner_title}
                    </h1>
                  </div>
                  <div className="rightSide">
                    <select
                      name=""
                      id=""
                      onChange={(e) => setCurrCategory(e.target.value)}
                      value={currCategory}
                      className="searchBox"
                    >
                      <option>{defaultCategory} </option>

                      {innCategory
                        ?.filter((aa) =>  blogs?.filter((i) => i.category?.filter((i) => i?.category.title == aa.title)))
                        // ?.filter( (cl) => blogs?.filter((i) => i?.category?.filter((ct) => ct?.title == cl?.title).length > 0 ).length > 0)
                        // ?.filter((cl)=> blogInner.category?.filter((i) => i.title == cl.title).length > 0)
                          ?.map((item, index) => (
                            <option
                              className={`${
                                item?.title === category && "active"
                              } ${search.length > 0 && "disable"}`}
                              key={index}
                              value={item?.title}
                            >
                              {item?.title}
                            </option>
                          ))}
                    </select>
                  </div>
                </div>
              </div>
            </section>
            <section className="blogListing">
              <div className="container">
                <BlogList
                  category={currCategory == "" ? "All Post" : currCategory}
                  search={searchValue}
                />
              </div>
            </section>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default BlogsPage;

export const getStaticProps = async ({ params }) => {
  let data = {};
  let query = {};
  let response = {};
  let categoryList = {};
  let variables = { relativePath: `blogs.md` };
  try {
    const res = await client?.queries?.blogs(variables);
    const md = await client?.queries?.blogsInnerConnection(variables);
    const category = await client?.queries?.categoryConnection(variables);

    query = res.query;
    data = res.data;
    variables = res.variables;
    response = md.data;
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
      categoryList: categoryList,
      //myOtherProp: 'some-other-data',
    },
    revalidate: 10,
  };
};


// export const getStaticPaths = async () => {
//   const postsListData = await client?.queries?.blogsConnection();

//   return {
//     paths: postsListData.data.blogsConnection.edges.map((blogs) => ({
//       params: { filename: blogs.node._sys.filename },
//     })),
//     fallback: false,
//   };
// };