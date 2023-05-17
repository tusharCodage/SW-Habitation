import Link from "next/link";
import { useBlogs } from "../../hooks/useBlogs";
import Search from "../Search";
import { useEffect, useRef, useState } from "react";
import BlogCard from "./BlogCard";
import InfiniteScroll from "react-infinite-scroller";

const Blog = ({props}) => {

  const { setSearchValue, searchValue, setCurrCategory } = useBlogs();
  // const { blogs } = props?.data;
  const [blogsPerPage, setMoreBlogsPerPage] = useState(20);

  const searchInput = useRef();
  useEffect(() => {
    setSearchValue("");
  }, []);

  useEffect(() => {
    if (searchValue !== "") {
      searchInput.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [searchValue]);
  const filterData = (item) => {
    let isVal = true;
    if (searchValue == "") {
      isVal = item;
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
  const filtered_blogs = props
  ?.filter(filterData)
  ?.sort(
    (b, a) =>
      Date.parse(
        new Date(
          a.publishedAt?.split("/").reverse().join("-")
        )
      ) -
      Date.parse(
        new Date(
          b.publishedAt?.split("/").reverse().join("-")
        )
      )
  )
  return (
      <section className="blogSection">
        <div className="container">
          <div className="blogContent">
            <div className="titleWithBtn">
              <h2>All Posts</h2>
              <div className="viewMore">
                <Link href="/blogs">View More</Link>
              </div>
            </div>

            <div className="blogGrid" ref={searchInput}>
              <InfiniteScroll
                pageStart={1}
                initialLoad={true}
                loadMore={() =>
                  setTimeout(() => {
                    setMoreBlogsPerPage(blogsPerPage + 20);
                  }, 2000)
                }
                hasMore={blogsPerPage <= filtered_blogs?.length}
                loader={
                  <div className="btn themeBtn loadMore" key={0}>
                    Loading...
                  </div>
                }
              >
                {filtered_blogs?.length != 0 ? (
                  filtered_blogs
                    ?.slice(0, blogsPerPage)
                    ?.map((item, index) => <BlogCard item={item} key={index} />)
                ) : (
                  <> No Blogs Found! </>
                )}
              </InfiniteScroll>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Blog;
