import React, { useContext } from 'react'
import { useBlogs } from '../../hooks/useBlogs';

const Tag = () => {
  const { currentBlog } = useBlogs()
 const {tags} = currentBlog||{};

  return (
    <div className="tagWrap">
      {
        tags?.map((item,index) => (<>
             <div className="tagBox" key={index}>
                {item?.tag}
              </div>
        </>))
      }
    </div>
  )
}

export default Tag