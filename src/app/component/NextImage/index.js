import Image from "next/image";
const contentfulImageLoader = ({ src, width }) => {
  return `${src}?w=${width}`
}
const NextImage = (props) => {
  const { src, width, height, layout, ...otherProps } = props;
  const srcSet = props.srcSet??`${src}?w=640&h=480&q=80 640w,
                   ${src}?w=750&h=563&q=80 750w,
                   ${src}?w=828&h=621&q=80 828w,
                   ${src}?w=1080&h=810&q=80 1080w,
                   ${src}?w=1200&h=900&q=80 1200w`;

  const sizes = props.sizes??`
                 (max-width: 480) 480px,
                 (max-width: 720) 720px,
                 (max-width: 1024) 1024px,
                 (max-width: 1300) 1300px,
                 (max-width: 1440) 1440px,
                 (max-width: 1920) 1920px,`;

  return (
    <Image
      loader={contentfulImageLoader}
      src={src}
      width={width}
      height={height}
      {...otherProps}
      quality={75}
      sizes={`(max-width: 640px) 100vw, (max-width: 768px) 90vw, 600px`}
      />
  );
};

export default NextImage;