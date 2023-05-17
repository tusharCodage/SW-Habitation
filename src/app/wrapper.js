import { BlogsProvider } from "./hooks/useBlogs"
import { LanguageProvider } from "./hooks/useCurrentLanguage"

export const Wrapper = (props) => {
    return (
        <LanguageProvider>
            <BlogsProvider>
                {props.children}
            </BlogsProvider>
        </LanguageProvider>
    )
}