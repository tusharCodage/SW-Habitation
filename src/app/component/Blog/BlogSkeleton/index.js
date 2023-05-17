import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const BlogSkeleton = () => {
  return (
    <>
      <SkeletonTheme >
        <div className="blogBox">
          <div className="leftSide">
            <div className="filter">
            <Skeleton width={50}/> &nbsp; &nbsp;
            <Skeleton width={50}/>
            </div>
            <h2><Skeleton /></h2>
            <p><Skeleton /></p>
            <p><Skeleton /></p>
            <p><Skeleton /></p>
            <div className="blogBadgesWrap"> 
                <Skeleton width={50}/>  &nbsp; &nbsp;
                <Skeleton width={50}/>  &nbsp; &nbsp;
                <Skeleton width={50}/>  &nbsp; &nbsp;
                <Skeleton width={50}/> 
            </div>
          </div>
          <div className="rightSide">
            <div className="featureImage">
                <Skeleton width="100%" height={200} />
            </div>
          </div>
        </div>
      </SkeletonTheme>
    </>
  );
};

export default BlogSkeleton;
