import PhotoShootStep from "Components/PhotoShootStep/photoshoot-step";
import { useMediaQuery } from "react-responsive";
import { steps } from "Components/PhotoShootStep/photoshoot-step-data";

export function PhotoShootStepContainer() {
  const isMobile = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <PhotoShootStep isMobile={isMobile}>
      <PhotoShootStep.Left>
        <PhotoShootStep.Title>So, how does it work</PhotoShootStep.Title>
        <PhotoShootStep.SubTitle>
          Steps to your <span>dream</span> photoshoot!
        </PhotoShootStep.SubTitle>
        <PhotoShootStep.List>
          {steps.map((step) => (
            <PhotoShootStep.Item key={step.id}>
              {step.content}
            </PhotoShootStep.Item>
          ))}
        </PhotoShootStep.List>
      </PhotoShootStep.Left>

      <PhotoShootStep.Right isMobile={isMobile}>
        Hello there
      </PhotoShootStep.Right>
    </PhotoShootStep>
  );
}
