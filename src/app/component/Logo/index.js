import React from "react";
import Link from "next/link";
import Image from "next/image";
import NextImage from "../NextImage";

const Logo = ({ logo }) => {


  return (
      <div className="logo">
        <Link href={logo?.link}>
           {/* <span>{logo.alt}</span> */}
 
            <NextImage
              src={`${logo?.logo}`}
              alt={logo.alt}
              width={500}
              height={500}
            />
         
        </Link>
      </div>
  );
};

export default Logo;
