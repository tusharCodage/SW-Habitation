import React from "react";
import Layout from '../Layout'
import Footer from "../Footer";
import Header from "../Header";
import Image from "next/image";
import NextImage from "../NextImage";

const FourNotFour = () => {
  return (
    <>
      <section className="fnfPageSection sectionInnerSpace">
        <div className="container">
          <div className="fnfPageContent">
            <div className="errorImage">
              <NextImage src="/assets/images/404.svg" alt="404" width={500} height={500}/>
            </div>
            <h1>404-PAGE NOT FOUND</h1>
            <p>
              The Page you are looking might have been removed or name changed
              or is temporarily unavailable.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FourNotFour;
