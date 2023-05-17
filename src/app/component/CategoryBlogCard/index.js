import Image from "next/image";
import { Link } from "next/link";
import NextImage from "../NextImage";

export default function CategoryBlogCard({ CategoryItem }) {
  return (
    <div>
      {CategoryItem?.map((item, index) => (
        <Link href={`/blogs/${item?.slug}`} className="blogBox" key={index}>
          <div className="leftSide">
            <div className="filter">
              <div className="category">{item?.category}</div>
              <div className="date">{item?.publishedAt}</div>
            </div>
            <h2>{item?.title}</h2>
            <p>{item?.description}</p>
            <div className="blogBadgesWrap">
              {item?.tags?.map((item, index) => (
                <div key={index} className="badge">
                  {item?.tag}
                </div>
              ))}
            </div>
          </div>
          <div className="rightSide">
            <div className="featureImage">
              <NextImage
                src={`/assets/images/${item?.featureImage?.image}`}
                alt={item?.featureImage?.alt}
                width={500}
                height={500}
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
