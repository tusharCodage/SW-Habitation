import Link from "next/link";
import { useBlogs } from "../../hooks/useBlogs";
import Image from "next/image";
import NextImage from "../NextImage";
import { TinaMarkdown } from "tinacms/dist/rich-text";


export default function ResourcesCard({ item }) {
  const resCategory = item?.category?.map((i) => i.category)
  const {setCurrCategory } = useBlogs();
  return (
    <>
      <div className="blogBox">
        <div className="leftSide">
          <div className="filter">
            <div>
              <ul className="categoryWrap">
                {resCategory?.map((i,index) => (
                  <li className="category" key={index}>
                    <Link
                      href={`/blogs`}
                      onClick={() => setCurrCategory(String(i?.title))}
                      target={item?.target}
                    >
                      {i?.title}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* <ul className="categoryWrap">
                {item?.category.map((i, index) => (
                  <li key={index} className="category">{i?.category}</li>
                ))}
              </ul> */}
              {/* {item?.category} */}
            </div>
            <div className="date">{item?.publishedAt}</div>
          </div>
          <Link href={`resources/${item?.slug}`}>
            <h2>{item?.blog_title}</h2>
          </Link>
          <TinaMarkdown content={item?.blog_description} />
          <div className="blogBadgesWrap">
            <Link href={`resources/${item?.slug}`} className="badge">
              Explore
            </Link>
          </div>
        </div>
        <div className="rightSide">
          <div className="featureImage">
            <NextImage
              src={item?.feature_image?.image ?? ''}
              alt={item?.feature_image?.alt ?? ''}
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  );
}
