import { Image, Picture, Source } from "./image-block.styles";

export default function LoadImage({
  src,
  fallback,
  alt,
  type = "image/webp",
  ...restProps
}) {
  return (
    <Picture {...restProps}>
      <Source srcSet={fallback} type={type} />
      <Source srcSet={src} />
      <Image src={fallback} alt={alt} />
    </Picture>
  );
}
