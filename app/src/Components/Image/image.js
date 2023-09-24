import { Img, Picture, Source } from "./image.styles";

export default function Image({ srcSet, src, alt, ...restProps }) {
  return (
    <>
      <Picture>
        {/* For webp */}
        <Source srcSet={srcSet} />
        {/* For jpg */}
        <Img src={src} alt={alt} style={{ ...restProps }} />
      </Picture>
    </>
  );
}
