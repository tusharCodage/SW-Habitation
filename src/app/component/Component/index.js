import dynamic from "next/dynamic";
import React from "react";
// import Header from "../Header";
const AuthorGrid = dynamic(() => import("../Author/AuthorGrid"))
const Banner = dynamic(() => import("../Banner"));
const Blog = dynamic(() => import("../Blog"))
const FooterNav = dynamic(() => import("../Footer/FooterNav"))
const Logo = dynamic(() => import("../Logo"))
const Nav = dynamic(() => import("../Nav"))
const Search = dynamic(() => import("../Search"))
const Social = dynamic(() => import("../Social"))

const Component = ({block,...props}) => {



    const component = { 
        // 'HeaderLogo': Logo,
        'logo': Logo,
        'nav_item': Nav,
        'search_bar': Search,
        'social': Social,
        'footer_nav': FooterNav,
        'banner': Banner,
        'authorGrid': AuthorGrid,
        'blog': Blog,
    }

    if (Object.keys(component).includes(props?.__type)) {
        let Component = component[props?.__type]
        return (
            <Component {...props} variant={variant}  />
        )
    }
    else {
        return null
    }
    // const Component = component[props?._typename]
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  
    // return Component ? <Component props={props} {...props} /> : null;
}

export default Component;