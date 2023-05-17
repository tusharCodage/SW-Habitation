import React, { useState } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { useCurrentLanguage} from '../../hooks/useCurrentLanguage';
import { ArticleJsonLd, NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

const Layout = ({ children,header,footer, category,headerDark ,getnewsletter, SeoTitle,SeoDescription ,jsonLd}) => {
  const router = useRouter()
  const url = ("https://swhabitation.com")
  const canonical = router.asPath

  let cur_page_href = `${url}${canonical}`

  const { currentLanguage, handleCurrentLanguage } = useCurrentLanguage()
  return (
    <>
      {/* <div> 
        <span onClick={() => handleCurrentLanguage("en")}> en </span> 
          | 
        <span onClick={() => handleCurrentLanguage("es")}> es </span> 
      </div> */}
      <NextSeo
      nofollow={process.env.NEXT_PUBLIC_ALLOW_INDEXING !=='true'}
      noindex={process.env.NEXT_PUBLIC_ALLOW_INDEXING !== 'true'} 
      title={SeoTitle}
      description={SeoDescription}
      canonical={cur_page_href}
      languageAlternates={[{
        hrefLang: 'en-us',
        href:`${cur_page_href}`
      }]}


      />
      <Header mainHeader={header} dark={headerDark} category={category}/>
      <ArticleJsonLd dataArray={...jsonLd}/>
        {children}
      <Footer getnewsletter={getnewsletter} footer={footer}/>
    </>
  )
}

export default Layout