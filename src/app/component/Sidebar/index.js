import React, { useEffect, useRef, useState } from "react";

const Sidebar = ({ block }) => {
  const [currId, setCurrId] = useState("");

  useEffect(() => {
    document
      ?.getElementById(`${currId.toString()}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

    setCurrId("");
  }, [currId]);
  const ContantTitle = block?.side_contant?.contant_card_title;
  const share_text = block?.side_contant?.share_text;

  const title_array =
    // eslint-disable-next-line
    //@ts-ignore
    block?.contant
      ?.filter(
        (i) =>
          i.__typename == "BlogsInnerContant" ||
          i.__typename == "Resources_innerContant"
      )
      ?.map((i) => i.title) ?? [];

  return (
    <div className="sideListContent">
      <h5>{ContantTitle}</h5>
      <ul className="linkItems">
        {title_array?.map((item, index) => {
          return (
            item && (
              <li
                className="single-post__toc-item"
                key={index}
                onClick={() => setCurrId(`postHas_content_${index + 1}`)}
              >
                <a>{item}</a>
              </li>
            )
          );
        })}
      </ul>
      <div>
        <h6>{share_text}</h6>
      </div>
    </div>
  );
};

export default Sidebar;

// {block?.contant?.map((item, index) => (
//   <li
//     key={index}
//     onClick={() =>
//       setTitle(item?.title?.toString().split(" ").join("_"))
//     }
//   >
//     {item?.title}
//     {/* <Link href="" id={index}>
//         {item?.title}
//       </Link> */}
//   </li>
// ))}
