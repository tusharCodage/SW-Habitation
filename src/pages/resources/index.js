
import { useTina } from "tinacms/dist/react";
import client from "../../../tina/__generated__/client";
import Layout from "../../app/component/Layout";
import { useBlogs } from "../../app/hooks/useBlogs";
import ResourcesCard from "../../app/component/ResourcesCard";
import { useEffect, useMemo } from "react";
import debouce from "lodash.debounce";

const ResourcesPage = (props) => {
  const { searchValue, setSearchValue, setBlogs, setCurrCategory } = useBlogs();

  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
    response: props.response,
    categoryList: props.categoryList,
  });
  const post = data?.resources;
  const respo = props.response;
  const resourcesInner = respo.resources_innerConnection?.edges?.map(
    (i) => i.node
  );
  const {seo} = post || {}

  const {seo_description,seo_title} = seo || {}
  const categoryList = props.categoryList
  const allCategory = categoryList?.categoryConnection?.edges?.map((i) => i.node)
  const filterData = (item) => {
  
    let isVal = true;
    if (searchValue == "") {
      isVal = item?.category?.find((i) => i?.category.title === "Resources");
    } else if (searchValue !== "") {
      isVal =
        item?.blog_title
          ?.toLowerCase()
          .trim()
          .replace(/\s+/g, "")
          .split(/ +/)
          .join(" ")
          .indexOf(searchValue) !== -1;
    }
    return isVal;
  };
  function handleSearch(e) {
    // setCategory("All Post");
    setSearch(e.target.value.toLowerCase());
  }

  const debouncedResults = useMemo(() => {
    return debouce(handleSearch, 300);
  }, []);
  useEffect(() => {
    setBlogs(resourcesInner);
    setSearchValue("");
    return () => {
      debouncedResults.cancel();
    };
  }, []);
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
              <div className="container ">
                <div className="bannerContent">
                  <div className="leftSide">
                    <h1 className="categoryBannerTitle">
                      {post?.banner_title}
                    </h1>
                  </div>
                </div>
              </div>
            </section>
            <section className="blogListing">
              <div className="container">
                {resourcesInner
                  ?.filter(filterData)
                  ?.sort(
                    (b, a) =>
                      Date.parse(
                        new Date(a.publishedAt?.split("/").reverse().join("-"))
                      ) -
                      Date.parse(
                        new Date(b.publishedAt?.split("/").reverse().join("-"))
                      )
                  )
                  ?.map((item, index) => (
                    <ResourcesCard key={index} item={item} />
                  ))}
              </div>
            </section>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ResourcesPage;

export const getStaticProps = async ({ params }) => {
  let data = {};
  let query = {};
  let response = {};
  let categoryList = {};
  let variables = { relativePath: `resources.md` };
  try {
    const res = await client?.queries?.resources(variables);
    const md = await client?.queries?.resources_innerConnection(variables);
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
      categoryList:categoryList
      //myOtherProp: 'some-other-data',
    },
    revalidate: 10,
  };
};



