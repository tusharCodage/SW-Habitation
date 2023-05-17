
import { useBlogs } from "../../hooks/useBlogs";
import NextImage from "../NextImage";
import AuthorSocial from "./AuthorSocial";
import Image from "next/image";
const Author = ({ block }) => {
  const {authorImage, company, authorPost} = block || {};
  return (
    <>
      <div className="authorGrid">
        <div className="authorBox">
          <div className="authorImage">
            {/* <span>AN</span> */}
            <NextImage
              src={`${authorImage}`}
              // alt={author?.authorAlt}
              width={10}
              height={10}
              // width={inherit}
              // height={inherit}
            />
          </div>
          <div className="authorDetails">
            <h4>{company}</h4>
            <h6>{authorPost}</h6>
          </div>
        </div>
        <AuthorSocial />
      </div>
    </>
  );
};

export default Author;
