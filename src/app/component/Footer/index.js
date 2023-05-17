import { memo, useContext } from "react";
import {CommonData} from '../../../pages/_app'
import ScrollToTop from 'react-scroll-to-top'
import Component from "../Component";
import FooterNav from "./FooterNav";
import Banner from "../Banner";
import Social from "../Social";

const Footer = ({footer,getnewsletter}) => {
// const {footer} = useContext(CommonData);
// const { label_links,logoWithLinks,news_letter } = footer || {}
// const {newsletter} = getnewsletter || {}
  return (
    <div>
      {<>
        <Social social={footer}/>
        <FooterNav props={footer}/>
      </>
      }
      {/* {Array.isArray(footerItems) && footerItems.map((item, index) => <Component key={index} newsletter={newsletter} _type={item?._type} {...item}/>)} */}
      <ScrollToTop
                smooth
                color="white"
                width="50"
                height="50"
                viewBox="0 0 100 100"
                svgPath="M66.3176 47.9925C65.8455 48.4645 65.2902 48.7 64.6515 48.6989C64.0129 48.7 63.4575 48.4645 62.9855 47.9925L49.657 34.664L36.3285 47.9925C35.8564 48.4645 35.3011 48.7 34.6624 48.6989C34.0238 48.7 33.4684 48.4645 32.9964 47.9925C32.5243 47.5204 32.2883 46.9645 32.2883 46.3248C32.2883 45.6872 32.5243 45.1324 32.9964 44.6604L47.9909 29.6658C48.463 29.1938 49.0178 28.9578 49.6553 28.9578C50.2951 28.9578 50.851 29.1938 51.323 29.6658L66.3176 44.6604C66.7896 45.1324 67.0251 45.6878 67.024 46.3264C67.0251 46.9651 66.7896 47.5204 66.3176 47.9925ZM66.3176 64.6531C65.8455 65.1252 65.2902 65.3606 64.6515 65.3595C64.0129 65.3606 63.4575 65.1252 62.9855 64.6531L49.657 51.3246L36.3285 64.6531C35.8564 65.1252 35.3011 65.3606 34.6624 65.3595C34.0238 65.3606 33.4684 65.1252 32.9964 64.6531C32.5243 64.1811 32.2883 63.6251 32.2883 62.9854C32.2883 62.3478 32.5243 61.793 32.9964 61.321L47.9909 46.3264C48.463 45.8544 49.0183 45.6178 49.657 45.6167C50.2956 45.6178 50.851 45.8544 51.323 46.3264L66.3176 61.321C66.7896 61.793 67.0257 62.3478 67.0257 62.9854C67.0257 63.6251 66.7896 64.1811 66.3176 64.6531Z"
            />
    </div>
  );
};

export default memo(Footer);
