import ReactDOMServer from 'react-dom/server';
import BlogsInnerPageContent from '../Blog/BlogsInnerPageContent';
import MarkDown from '../Blog/MarkDown';

const readingTime = require('reading-time');
const DateandRead = ({block}) => {
  const {publishedAt}  = block || {};
  const html = ReactDOMServer.renderToString(<MarkDown block={block}/>);
  const stats = readingTime(html || '');


  return (
    <>

    <div className="dateReadWrap">
        {block?.publishedAt && <div className="date">
            {publishedAt}
        </div>}
        {<div className="read">
        {Math.ceil(stats.words / 100)} mins to read.
       
        </div>}
    </div>
    </>
  )
}

export default DateandRead