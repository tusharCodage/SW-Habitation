import { useEffect, useState } from "react";
import { useBlogs } from "../../../hooks/useBlogs";
import Link from "next/link";
import BlogCard from "../BlogCard";
import InfiniteScroll from "react-infinite-scroller";

export default function BlogList({ category, search }) {
  const { blogs, currCategory, searchValue, setSearchValue } = useBlogs();
  const [blogsPerPage, setMoreBlogsPerPage] = useState(4);

  const filterData = (item) => {
    let isVal = true;
    if (category !== "All Post") {
      isVal = item?.category?.filter( (i) =>i?.category?.title?.toString()?.toLowerCase() === category?.toString()?.toLowerCase()).length > 0;
      if (search !== "") {
        isVal =
          item?.category?.find((i) => i?.category.title === category) &&
          item?.blog_title?.toLowerCase().indexOf(search) !== -1;
      }
    } else if (search !== "") {
      isVal =
        item?.blog_title
          ?.toLowerCase()
          .trim()
          .replace(/\s+/g, "")
          .split(/ +/)
          .join(" ")
          .indexOf(search) !== -1;
    }
    return isVal;
  };
  const filtered_blogs = blogs
    ?.filter(filterData)
    // ?.slice(0, currBlogNo)
    ?.sort(
      (b, a) =>
        Date.parse(new Date(a.publishedAt?.split("/").reverse().join("-"))) -
        Date.parse(new Date(b.publishedAt?.split("/").reverse().join("-")))
    );
  return (
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
          ?.map((item, index) => <BlogCard key={index} item={item} />)
      ) : (
        <> No Blogs Found! </>
      )}
    </InfiniteScroll>
  );
}
