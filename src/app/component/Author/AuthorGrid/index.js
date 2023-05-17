import Link from "next/link";
import React, { useContext } from "react";
import { useBlogs } from "../../../hooks/useBlogs";
import { TinaMarkdown } from "tinacms/dist/rich-text";
export const components ={ p : ({ children })=> <p className="hidden">{children} </p>,
}
const AuthorGrid = ({props}) => {
  // const { blogs } = props?.data;

  return (
    <section className="authorSection">
      <div className="container">
        <div className="authorContent">
          <div className="titleWithBtn">
            <h2>Resources</h2> 
            <div className="viewMore">
              <Link href="/resources">View More</Link>
            </div>
          </div>
         <div className={`authorGrid ${props?.length < 2 && "fullWidth"}`}>
             {props
              ?.filter((item) =>
                item?.category?.find((i) => i?.category?.title === "Resources")
              )
              .sort((a, b) => b.id - a.id)
              .slice(0, 2)
              ?.map((item, index) => (
                <><Link href={`resources/${item?.slug}`} className="authorBox" key={index}>
                  <div className="rightSide">
                    <h4>{item?.blog_title}</h4>
                    <h6>{item?.author?.company}</h6>
                  </div>
                </Link>
                <TinaMarkdown content={item?.blog_description} components={components} />{" "}
                </>
                  ))} 
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorGrid;
