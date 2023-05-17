import { Link } from "next/link";
import React from "react";
import { useBlogs } from "../../hooks/useBlogs";

const TitleWithButton = () => {
  const { currentBlog } = useBlogs()
  const { titleWithButton } = currentBlog||{};

  return (
    <>
      {titleWithButton && (
        <div className="titleWithButtonWrap">
          <h4>{titleWithButton?.title}</h4>
          <Link href={`/blogs/${titleWithButton?.link}`} className="btn withArrow">
            Read Blog Togather
          </Link>
        </div>
      )}
    </>
  );
};

export default TitleWithButton;
