import constate from 'constate'
import { useState } from 'react'

export const [BlogsProvider, useBlogs]= constate(()=>{
    const [blogs, setBlogs]= useState()
    const [currentBlog, setCurrentBlog]= useState()
    const [currentLanguage, setCurrentLanguage] = useState('en')
    const [currCategory, setCurrCategory] = useState('');
    const [searchValue, setSearchValue] = useState('')
    
    
    return{
        blogs : blogs,
        setBlogs,
        setCurrentBlog,
        currentBlog,
        currentLanguage,
        setCurrentLanguage,
        setCurrCategory,
        currCategory,
        setSearchValue,
        searchValue,
    

    }
})