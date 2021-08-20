import PhotoShootStep from "Components/PhotoShootStep/photoshoot-step";
import { useMediaQuery } from "react-responsive";

export function PhotoShootStepContainer() {
  const isMobile = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <PhotoShootStep isMobile={isMobile}>
      <PhotoShootStep.Left>Hellsdso</PhotoShootStep.Left>
      <PhotoShootStep.Right>Hi</PhotoShootStep.Right>
    </PhotoShootStep>
  );
}
