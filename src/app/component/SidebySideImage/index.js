import React, { useContext } from 'react'
import { useBlogs } from '../../hooks/useBlogs';
import Image from 'next/image';
import NextImage from '../NextImage';

const SidebySideImage = ({sbs}) => {
  const { currentBlog } = useBlogs()
  const {imageGrid} =  currentBlog||{};

  return (
    <>
    {
      imageGrid &&  <div className={`sideBySideImageGrid col-${imageGrid?.length}`}>
      {
        imageGrid?.map((item,index) => (
            <div className="sideImageBox" key={index}>
              <NextImage src={`/assets/images/${item?.img}`} alt={item?.alt} width={500} height={500} />
            </div>
        ))
      }
    </div>
    }
       
    </>
  )
}

export default SidebySideImage