import {
  Container,
  Content,
  Description,
  ImageContainer,
  Inner,
  Item,
  SubTitle,
  Image,
  Title,
  ReadMoreLink,
  ReadMoreContainer,
  CardContainer,
} from "Components/Blogs/blogs.styles.js";

export default function Blog({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Blog.CardContainer = function BlogCardContainer({ children, ...restProps }) {
  return <CardContainer {...restProps}>{children}</CardContainer>;
};
