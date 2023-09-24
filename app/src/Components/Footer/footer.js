import {
  TitleContainer,
  Container,
  Title,
  Inner,
  SocialMediasContainer,
  SocialMedia,
  NamesContainer,
  Owner,
  Developer,
  Content,
  BackOnTopContainer,
} from "Components/Footer/footer.styles";

export default function Footer({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Footer.TitleContainer = function FooterTitleContainer({
  children,
  ...restProps
}) {
  return <TitleContainer {...restProps}>{children}</TitleContainer>;
};

Footer.Content = function FooterContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Footer.SocialMediasContainer = function FooterSocialMediasContainer({
  children,
  ...restProps
}) {
  return (
    <SocialMediasContainer {...restProps}>{children}</SocialMediasContainer>
  );
};

Footer.SocialMedia = function FooterSocialMedia({ children, ...restProps }) {
  return <SocialMedia {...restProps}>{children}</SocialMedia>;
};

Footer.NamesContainer = function FooterNamesContainer({
  children,
  ...restProps
}) {
  return <NamesContainer {...restProps}>{children}</NamesContainer>;
};

Footer.Owner = function FooterOwner({ children, ...restProps }) {
  return <Owner {...restProps}>{children}</Owner>;
};

Footer.Developer = function FooterDeveloper({ children, ...restProps }) {
  return <Developer {...restProps}>{children}</Developer>;
};

Footer.BackOnTopContainer = function FooterBackOnTopContainer({
  children,
  ...restProps
}) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <BackOnTopContainer onClick={scrollToTop} {...restProps}>
      {children}
    </BackOnTopContainer>
  );
};
