// THIS FILE HAS BEEN GENERATED WITH THE TINA CLI.
// This is a demo file once you have tina setup feel free to delete this file

import Head from "next/head";
import { useTina } from "tinacms/dist/react";
import client from "../../../tina/__generated__/client";
import Layout from "../../app/component/Layout";
import DateandRead from "../../app/component/Date&Read";
import DetailBanner from "../../app/component/Banner/DetailBanner";
import MarkDown from "../../app/component/Blog/MarkDown";
import Sidebar from "../../app/component/Sidebar";
import { useRouter } from "next/router";
import ShareButtons from "../../app/component/ShareButtons";

const ResourcesInnerPage = (props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
    categoryList: props.categoryList,
  });
  const post = data?.resources_inner;
  const { Data, slug } = data || {};
  const router = useRouter();
  const categoryList = props.categoryList
  const allCategory = categoryList?.categoryConnection?.edges?.map((i) => i.node)
  const url = typeof window !== 'undefined' ? window.location.href : ""
  const {seo}= post ||{ }
  const {seo_description,seo_title} = seo || {}
  const webUrl = "https://swhabitation.com";
  const canonical = router.asPath;
  let cur_page_href = `${webUrl}${canonical}`;
  const Json = {
    description: seo_description,
    title: seo_title,
    // author: post?.author?.authorPost,
    url: cur_page_href,
    datePublished: post?.publishedAt,
    author:{
        name: post?.author?.authorPost,
        url:  webUrl,
      },
    
    image: post?.feature_image?.link,
  };

  return (
    <>
      <Layout
        // getnewsletter={getnewsletterdata}
        header={post}
        footer={post?.footer}
        category={allCategory}
        headerDark={post.header}
        SeoDescription={seo_description}
        SeoTitle={seo_title}
        jsonLd={Json}
      >
        <DetailBanner block={post} />
        <section className="detailPageContentSection">
          <div className="container">
            <div className="leftSide"></div>
            <div className="detailpageContent">
              {/* <div
                className={`leftSide ${
                  scrollDirection === "down" ? "hide" : "sideSticky"
                }`}
              > */}
              <DateandRead block={post} />
              <Sidebar  block={post}/>
              <ShareButtons url={url}/>
            </div>
            <MarkDown block={post}/>
          </div>
          {/* </div> */}
        </section>
      </Layout>

      <Head>
        {/* Tailwind CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.7/tailwind.min.css"
          integrity="sha512-y6ZMKFUQrn+UUEVoqYe8ApScqbjuhjqzTuwUMEGMDuhS2niI8KA3vhH2LenreqJXQS+iIXVTRL2iaNfJbDNA1Q=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  let data = {};
  let query = {};
  let categoryList = {};
  let variables = { relativePath: `${params.slug}.md` };
  try {
    const res = await client?.queries?.resources_inner(variables);
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

export const getStaticPaths = async () => {
  const postsListData = await client?.queries?.resources_innerConnection();


  return {
    paths: postsListData.data.resources_innerConnection.edges?.map((resources) => ({
      params: { slug: resources.node._sys.filename },
    })),
    fallback: false,
  };
};

export default ResourcesInnerPage;





