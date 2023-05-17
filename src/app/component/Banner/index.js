import React from "react";
import { CommonData } from "../../../pages/_app";
import { useContext } from "react";
import { useBlogs } from "../../hooks/useBlogs";
import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";

const Banner = ({block}) => {
 const {hero_section } = block || {}
 const {buttons, content } = hero_section || {}
 const { setCurrCategory} = useBlogs()

  return (
      <section className={`bannerSection sectionSpace`}>
        <div className="container">
          <div className="bannerContent">
            <h1 className="bannerTitle">{content?.title}</h1>
            {/* <p className="bannerSubTitle"> */}

            <TinaMarkdown  content={content?.content} />{" "}
            {/* </p> */}
            {/* <p className="bannerSubTitle">{labels?.subTitle}</p> */}
            <div className="badgesWrap">
              <ul>
                {buttons?.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item?.link}
                      onClick={() => setCurrCategory(String(item?.label))}
                      target={item?.target}
                    >
                      {item?.label}
                    </Link>
                    {/* {item?.label} */}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Banner;
