import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NextImage from '../NextImage'
import clsx from "clsx";

 
const Social = ({ social, variant }) => {
  const { logoWithLinks} = social || {}

  return (
    <section
      // className="socialSection"
        className={clsx(
          'socialSection',
          variant ?? 'primary'
      )}
    >
      <div className="container">
          <div className="socialContent">
            <ul className='socialIcons'>
                {
                  logoWithLinks?.map((item,index) => (
                      <li key={index}>
                        <Link href={`${item?.link}` || `${item.external_link}`} target={item?.target} key={index}>
                          <NextImage src={`${item?.logo}`} alt={item?.alt} width={500} height={500} />
                        </Link>
                     </li>
                  ))
                }
            </ul>
          </div>
      </div>
    </section>
  );
};

export default Social;
