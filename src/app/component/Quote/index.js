import React,{useContext} from "react";
import { useBlogs } from "../../hooks/useBlogs";

const Quote = () => {
  const { currentBlog } = useBlogs()
  const  {quote}  = currentBlog || {};
  return (
    <>
    {
      quote && <div className="quoteWrap">
      {quote &&   <h2>
       "{quote?.title}"
      </h2>}
    
    </div>
    }
      
    </>
  );
};

export default Quote;
