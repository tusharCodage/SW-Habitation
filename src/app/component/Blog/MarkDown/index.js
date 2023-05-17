import * as React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default function MarkDown({ block }) {
  const [currId, setCurrId] = React.useState("");
  const { contant } = block || {};
  
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="prose">
          {contant?.map((i, index) => {
            return (
              <>
                <h4 id={`postHas_content_${index + 1}`}>{i?.title}</h4>
                <TinaMarkdown content={i?.content} />{" "}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
