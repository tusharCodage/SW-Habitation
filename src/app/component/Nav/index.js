import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useBlogs } from "../../hooks/useBlogs";
import Image from "next/image";
import NextImage from "../NextImage";

const Nav = ({ nav, cat }) => {
const categoryTitle = cat?.map((i) => i.title)
const { header} = nav || {}
const {nav_items  } = header || {}
  const { blogs, currCategory, setCurrCategory}  = useBlogs();
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    document.body.classList.toggle("toggle-overflow");
  };

  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    // <></>
    <>
      <nav>
        <ul className={`${toggle ? "open" : "closed"}`  }>
          <div className="closeIcon" onClick={handleToggle}>
            <NextImage
              src="/assets/images/close.svg"
              alt="close-icon"
              width={500}
              height={500}
            />
          </div>
          {nav_items?.map((item, index) => (
            <li key={index} className={item?.subNav && "subnavWrap"}>
              {item?.link ?
               (<Link
                href={item?.link}
                target={item?.target}
                className={currentRoute === item?.link ? "active" : null}
                onClick={() => item?.link?.includes('blogs') && setCurrCategory('All Post')}
              >
                {item?.label}
              </Link> )
              : 
              (<a
                
                className={currentRoute === item?.link ? "active" : null}
                onClick={() => item?.link?.includes('blogs') && setCurrCategory('All Post')}
              >
                {item?.label}
              </a>) }
              {item?.label === "Category" && cat && (
                <>
                 <ul className="innerNav">
                    {cat
                    // ?.filter(subItem => blogs?.filter(i => i?.category?.filter(ct => ct?.category?.title == subItem?.title).length > 0).length > 0)
                    ?.map((i, index) => (
                      <li key={index}>
                        <Link href={`/blogs`} onClick={() => setCurrCategory(String(i?.title))} target={i?.target}>
                          {i?.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              </li>
          ))}
          
              
          
        </ul>
        <div className="toggleIcon" onClick={handleToggle}>
          <NextImage
            src="/assets/images/menu-bar.svg"
            alt="menu-bar"
            width={500}
            height={500}
          />
        </div>
      </nav>
    </>
  );
};

export default Nav;
