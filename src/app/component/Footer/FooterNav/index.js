import React from "react";
import Link from "next/link";
import Newsletter from "../../Newsletter";

const FooterNav = ({props}) => {
  let { news_letter } = props || {};
  const labelLink = props?.label_links?.map(i => i)

  return (
    
    <footer className="footerSection">
      <div className="container">
        <div className="footerContent">
          <Newsletter newsletter={news_letter} />
          <ul className="footerLinks desktop">
            {labelLink &&
              labelLink?.map((item, index) => (
                <li key={index}>
                  <Link href={item.link}  activeclassname="active">
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterNav;
