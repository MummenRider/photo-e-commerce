import {
  TextContainer,
  Small,
  Regular,
  Medium,
  Large,
  Button,
  ExtraLargeText,
  XSmall,
  SemiLarge,
} from "./text.styles";

export default function Text({ children, ...restProps }) {
  return <TextContainer {...restProps}>{children}</TextContainer>;
}

Text.Small = function TextSmall({ variants, children, ...restProps }) {
  return (
    <Small variants={variants} style={{ ...restProps }}>
      {children}
    </Small>
  );
};

Text.XSmall = function TextXSmall({ variants, children, ...restProps }) {
  return (
    <XSmall variants={variants} style={{ ...restProps }}>
      {children}
    </XSmall>
  );
};

Text.Regular = function TextRegular({ variants, children, ...restProps }) {
  return (
    <Regular variants={variants} style={{ ...restProps }}>
      {children}
    </Regular>
  );
};

Text.Medium = function TextMedium({ variants, children, ...restProps }) {
  return (
    <Medium variants={variants} style={{ ...restProps }}>
      {children}
    </Medium>
  );
};

Text.Large = function TextLarge({ variants, children, ...restProps }) {
  return (
    <Large variants={variants} style={{ ...restProps }}>
      {children}
    </Large>
  );
};

Text.SemiLarge = function SemiTextLarge({ variants, children, ...restProps }) {
  return (
    <SemiLarge variants={variants} style={{ ...restProps }}>
      {children}
    </SemiLarge>
  );
};

Text.ExtraLargeText = function TextExtraLargeText({
  variants,
  children,
  ...restProps
}) {
  return (
    <ExtraLargeText variants={variants} style={{ ...restProps }}>
      {children}
    </ExtraLargeText>
  );
};

Text.Button = function TextButton({ variants, link, children, ...restProps }) {
  return (
    <Button variants={variants} onClick={link} style={{ ...restProps }}>
      {children}
    </Button>
  );
};
