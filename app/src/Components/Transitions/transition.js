import { useEffect } from "react";
import { Container, FirstMount } from "./transition.styles";

export function PageTransition({ children, ...restProps }) {
  const exitVariant = {
    exit: {
      opacity: 0,
      transition: {
        duration: 0.25,
      },
    },
  };
  return (
    <Container variants={exitVariant} exit="exit" {...restProps}>
      {children}
    </Container>
  );
}

export function TransitionFirstMount({ children, ...restProps }) {
  const firstMount = {
    initial: {
      clipPath: "inset(0% 0% 0% 0%)",
    },
    animate: {
      clipPath: "inset(0% 0% 100% 0%)",
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <FirstMount
      variants={firstMount}
      initial="initial"
      animate="animate"
      {...restProps}
    >
      {children}
    </FirstMount>
  );
}
