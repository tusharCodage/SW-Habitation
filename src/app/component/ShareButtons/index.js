
import Image from 'next/image';
import { FacebookShareButton, InstapaperShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';
// import locales from '~/api/utils/locales';


const ShareButtons = ({
  title,
  url,
  twitterHandle,
  tags,
  section_title,
}) => {
  return (
    <div className="blogdetails-shareicon">
      <div className="shareicon-row">
        <ul>
          <li>
            <FacebookShareButton url={url}>
              <Image src="/assets/images/facebook.svg" alt="Facebook" height={40} width={40}/>
            </FacebookShareButton> 
          </li>
          <li>
            <TwitterShareButton
              url={url}
              title={title}
              via={twitterHandle}
              hashtags={tags}
            >
              <Image src="/assets/images/twitter.svg" alt="Twitter" height={40} width={40} />
            </TwitterShareButton>
          </li>
          <li>
            <LinkedinShareButton url={url}>
              <Image src="/assets/images/linkdin.svg" alt="Linkdin" height={40} width={40}/>
            </LinkedinShareButton>
          </li>
          <li>
            <InstapaperShareButton url={url}>
              <Image src="/assets/images/instagram.svg" alt="Instagram" height={40} width={40}/>
            </InstapaperShareButton>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShareButtons;