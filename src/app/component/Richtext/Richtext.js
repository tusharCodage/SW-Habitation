import React, { useContext } from "react";
import { useBlogs } from "../../hooks/useBlogs";

const Richtext = () => {
  const { currentBlog } = useBlogs()
  const {
    paragraphArray,
    titleDesc,
    titleDescWithList,
    list,
    titleWithDetailList,
  } = currentBlog|| {};

  return (
    <div className="richTextContent">

      {titleDesc &&  <div className="titleDesc">
        {titleDesc && (
          <h2 id={`#${titleDesc?.heading.split(" ").join("_")}`}>
            {titleDesc?.heading}
          </h2>
        )}
        {titleDesc?.paragraphs?.map((item, index) => (
          <>
            <p key={index}>{item?.p}</p>
          </>
        ))}
      </div>}
     
      {titleWithDetailList && titleWithDetailList?.length > 0 ? (
        <>
          {titleWithDetailList?.map((item, index) => (
            <>
              <div key={index} className="titleWithDetailList">
                {item?.heading && (
                  <h2 id={`${item?.heading.split(" ").join("_")}`}>
                    {item?.heading}
                  </h2>
                )}
                <ul className="dlist">
                  {item?.dlist?.map((item, index) => (
                    <>
                      <li key={index}>
                        <b>{item?.item?.label}</b>
                        {item?.item?.para?.map((p, index) => <div key={index}> {p?.p} </div>)}
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            </>
          ))}
        </>
      ) : (
        ""
      )}
      {paragraphArray && paragraphArray?.length > 0 ? (
        <>
          {paragraphArray?.map((item, index) => (
            <>
              <p key={index} dangerouslySetInnerHTML={{ __html: `${item?.p}` }}></p>
            </>
          ))}
        </>
      ) : null}

      {titleDescWithList && (
        <div className="titleDescWithList">
          {titleDescWithList && (
            <h2 id={`${titleDescWithList?.heading.split(" ").join("_")}`}>
              {titleDescWithList?.heading}
            </h2>
          )}
          {titleDescWithList?.paragraphs?.map((item, index) => (
            <>
              <p key={index}>{item?.p}</p>
            </>
          ))}
          {titleDescWithList && (
            <ul className="ulist">
              {titleDescWithList?.ulist?.map((item, index) => (
                <>
                  <li key={index}>{item?.item}</li>
                </>
              ))}
            </ul>
          )}
        </div>
      )}
      
      {list && (
        <ul>
          {list && list?.length > 0 ? (
            <>
              {list?.map((item, index) => (
                <>
                  <li key={index}> {item?.item}</li>
                </>
              ))}
            </>
          ) : null}
        </ul>
      )}
    </div>
  );
};

export default Richtext;
