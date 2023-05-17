import React from "react";
import { Link } from "next/link";
import { useBlogs } from "../../hooks/useBlogs";
import Image from "next/image";
import NextImage from "../NextImage";

const OtherPosts = () => {
  
  const {blogs}  = useBlogs();

  return (
    <>
      {blogs?.sort((a, b) => b.id - a.id).slice(0,3)?.map((item, index) => (
        <>
          <Link key={index} href={`/blogs/${item?.slug}`} className="blogBox">
            <div className="leftSide">
              <div className="filter">
                <div className="category">{item?.category}</div>
                <div className="date">{item?.publishedAt}</div>
              </div>
              <div className="featureImage">
                <NextImage
                  src={`/assets/images/${item?.featureImage?.image}`}
                  alt={item?.featureImage?.alt}
                  width={500}
                  height={500}
                />
              </div>
              <h2>{item?.title}</h2>
              <p>{item?.description}</p>
              <div className="blogBadgesWrap">
                {/* {item.tags?.map((item, index) => (
                  <>
                    <div className="badge">{item?.tag}</div>
                  </>
                ))} */}
                <Link href={`/blogs/${item?.slug}`} className="badge">Explore</Link>
              </div>
            </div>
          </Link>
        </>
      ))}
    </>
  );
};

export default OtherPosts;
