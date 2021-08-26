import {
  Column,
  Container,
  Row,
  Description,
  Title,
  Inner,
  SocialMedias,
  SiteMap,
  TitleDescription,
  CopyRight,
} from "Components/Footer/footer.styles";

export default function Footer({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.SocialMedias = function FooterSocialMedias({ children, ...restProps }) {
  return <SocialMedias {...restProps}>{children}</SocialMedias>;
};

Footer.SiteMap = function FooterSiteMap({ children, ...restProps }) {
  return <SiteMap {...restProps}>{children}</SiteMap>;
};

Footer.Description = function FooterDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

Footer.TitleDescription = function FooterTitleDescription({
  children,
  ...restProps
}) {
  return <TitleDescription {...restProps}>{children}</TitleDescription>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Footer.CopyRight = function FooterCopyRight({ children, ...restProps }) {
  return <CopyRight {...restProps}>{children}</CopyRight>;
};
