import Image from "next/image";
import Author from "../../Author";
import NextImage from "../../NextImage";

const DetailBanner = ({block}) => {
  const {blog_title, feature_image ,author}  = block || {};
  const {alt, image  } = feature_image || {}

  return (
    <>
      <section className={`detailBannerSection sectionSpace`}>
        <div className="container">
          <div className="detailBannerContent">
            <div className="leftSide">
              <h1 className="detailBannerTitle">
                {blog_title}
              </h1>
             {author && <Author block={author}/>}
            </div>
            <div className="rightSide">
              <div className="featureImage">
               {feature_image && <NextImage
                  src={image ?? ''}
                  alt={alt ?? ''}
                  width={500}
                  height={500}
                />}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailBanner;
