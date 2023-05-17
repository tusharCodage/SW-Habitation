import { Link } from "next/link";
import React, { useContext } from "react";
import { useBlogs } from "../../../hooks/useBlogs";
import Image from "next/image";
import NextImage from "../../NextImage";

const AuthorSocial = () => {
  const { currentBlog } = useBlogs();
  const { author } = currentBlog || {};
  return (
    <ul className="authorSocial">
      {author?.social?.map((item, index) => (
        <li key={index}>
          <Link href={item?.path}>
            <NextImage
              src={`/assets/images/${item?.icon}`}
              alt={item?.alt}
              width={500}
              height={500}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default AuthorSocial;
