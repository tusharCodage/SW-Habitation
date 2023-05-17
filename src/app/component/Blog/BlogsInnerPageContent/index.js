import React from "react";

export default function BlogsInnerPageContent({ blogs }) {
  return (
    <div className="rightSide">
      <div className="content">
        {/* {blogs.contant?.map((i) => {
          return (
            <div>
              <h3> {i.title}</h3>

              <p>
                {i?.content?.children.map((i) => {
                  return (
                    <div>
                      
                        {i.children.map((i) => {
                          return <p>{i.text}</p>;
                        })}
                
                    </div>
                  );
                })}{" "}
              </p>
            </div>
          );
        })} */}
        {blogs?.content?.map((item, index) => (
          <div key={index}>
            {item.titleWithDetailList &&
              item.titleWithDetailList?.length > 0 && (
                <React.Fragment key={index}>
                  {item.titleWithDetailList?.map((item, index) => (
                    <React.Fragment key={index}>
                      <div className="titleWithDetailList">
                        {item?.heading && (
                          <h2 id={`${item?.heading.split(" ").join("_")}`}>
                            {item?.heading}
                          </h2>
                        )}
                        {item?.h3 && (
                          <h3 id={`${item?.h3.split(" ").join("_")}`}>
                            {item?.h3}
                          </h3>
                        )}
                        {item?.h4 && (
                          <h4 id={`${item?.h4.split(" ").join("_")}`}>
                            {item?.h4}
                          </h4>
                        )}
                        {item?.h6 && (
                          <h6 id={`${item?.h6.split(" ").join("_")}`}>
                            {item?.h6}
                          </h6>
                        )}
                        {item?.paragraphs?.map((item, index) => (
                          <p
                            dangerouslySetInnerHTML={{
                              __html: `${item?.p}`,
                            }}
                            key={index}
                          ></p>
                        ))}
                        {item?.paragraphs2?.map((item, index) => (
                          <p
                            dangerouslySetInnerHTML={{
                              __html: `${item?.p}`,
                            }}
                            key={index}
                          ></p>
                        ))}
                        {item?.dlist?.length > 0 && (
                          <ul className="dlist">
                            {item?.dlist?.map((item, index) => (
                              <>
                                <li key={index}>
                                  {item?.item?.label && (
                                    <b>{item?.item?.label}</b>
                                  )}
                                  {item?.item?.h4 && <b>{item?.item?.h4}</b>}
                                  {item?.item?.para?.map((p, index) => (
                                    <p
                                      dangerouslySetInnerHTML={{
                                        __html: `${p?.p}`,
                                      }}
                                      key={index}
                                    ></p>
                                  ))}
                                  {item?.item?.list && (
                                    <ul className="innerList">
                                      {item?.item?.list?.map((li, index) => (
                                        <>
                                          <li
                                            dangerouslySetInnerHTML={{
                                              __html: `${li?.li}`,
                                            }}
                                            key={index}
                                          ></li>
                                        </>
                                      ))}
                                    </ul>
                                  )}
                                  {/* {
                              item?.item?.list2 && <ul className="innerList">
                                {
                                  item?.item?.list2?.map((li, index) => <>
                                    <li dangerouslySetInnerHTML={{ __html: `${li?.li}` }}></li>
                                  </>)
                                }
                              </ul>
                            } */}
                                  {item?.item?.para2?.map((p, index) => (
                                    <p
                                      dangerouslySetInnerHTML={{
                                        __html: `${p?.p}`,
                                      }}
                                      key={index}
                                    ></p>
                                  ))}
                                  {item?.item?.titleList?.map((item, index) => (
                                    <>
                                      <ul className="titleList" key={index}>
                                        <p>
                                          <b>{item?.title}</b>
                                        </p>
                                        {item?.list?.map((item, index) => (
                                          <>
                                            <li key={index}>{item?.li}</li>
                                          </>
                                        ))}
                                      </ul>
                                    </>
                                  ))}
                                </li>
                              </>
                            ))}
                          </ul>
                        )}
                        {/* new */}
                      </div>
                    </React.Fragment>
                  ))}
                </React.Fragment>
              )}
            {item?.h2 && (
              <h2 id={`${item?.h2.split(" ").join("_")}`}>{item?.h2}</h2>
            )}

            {item?.h3 && (
              <h3 id={`${item?.h3.split(" ").join("_")}`}>{item?.h3}</h3>
            )}

            {item?.img1 && (
              <div className="postImage">
                <img src={`/assets/images/${item?.img1}`} />{" "}
              </div>
            )}
            {item?.img2 && (
              <div className="postImage">
                <img src={`/assets/images/${item?.img2}`} />{" "}
              </div>
            )}

            {item?.h4 && (
              <h4 id={`${item?.h4.split(" ").join("_")}`}>{item?.h4}</h4>
            )}
            {item?.h6 && (
              <h6 id={`${item?.h6.split(" ").join("_")}`}>{item?.h6}</h6>
            )}

            {item?.p && (
              <p dangerouslySetInnerHTML={{ __html: `${item?.p}` }}></p>
            )}
            {item?.paragraphs?.map((item, index) => (
              <p
                dangerouslySetInnerHTML={{ __html: `${item?.p}` }}
                key={index}
              ></p>
            ))}
            {item?.list && (
              <ul className="postList">
                {item?.list?.map((item, index) => (
                  <React.Fragment key={index}>
                    <li
                      dangerouslySetInnerHTML={{
                        __html: `${item.li}`,
                      }}
                    ></li>
                  </React.Fragment>
                ))}
              </ul>
            )}
            {item?.sublist && (
              <ul className="subList">
                {item?.sublist?.map((item, index) => (
                  <React.Fragment key={index}>
                    <li
                      key={index}
                      dangerouslySetInnerHTML={{
                        __html: `${item.li}`,
                      }}
                    ></li>
                  </React.Fragment>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
