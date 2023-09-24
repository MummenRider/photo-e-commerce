import { Container, Frame, Inner, List, ListItem } from "./layout.styles";

export default function Layout({
  isBlockPadded = true,
  isInlinePadded = true,
  position,
  background,
  blockPadding,
  target,
  children,
  ...restProps
}) {
  return (
    <Container
      ref={target}
      background={background}
      isBlockPadded={isBlockPadded}
      isInlinePadded={isInlinePadded}
      position={position}
      {...restProps}
    >
      <Inner isInlinePadded={isInlinePadded}>{children}</Inner>
    </Container>
  );
}

Layout.Frame = function LayoutFrame({
  alignItems = "start",
  children,
  ...restProps
}) {
  return (
    <Frame alignItems={alignItems} {...restProps}>
      {children}
    </Frame>
  );
};

Layout.List = function LayoutList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Layout.ListItem = function LayoutListItem({
  selected,
  onClick,
  children,
  ...restProps
}) {
  return (
    <ListItem onClick={onClick} selected={selected} {...restProps}>
      {children}
    </ListItem>
  );
};
